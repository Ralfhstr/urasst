import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Heading, Text, HStack, ScrollView, NativeBaseProvider, FormControl, Stack, Button, Input, Modal, VStack, Alert } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { addSchedule, getSCategory } from "../actions/AuthAction";
import DateTimePicker from "@react-native-community/datetimepicker";

const CSchedule = () => {
  const [scategory, setSCategory] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [activity, setActivity] = useState("");
  const [sdescription, setSDescription] = useState("");
  const [stime, setSTime] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigation = useNavigation();

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const hideDatepicker = () => {
    setShowDatePicker(false);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    hideDatepicker();
    setSelectedDate(currentDate);
    console.log(selectedDate);
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionPress = (option) => {
    console.log('Selected Category:', option);
    setSelectedOption(option);
  };

  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxPress = (boxName) => {
    console.log('Selected Category:', boxName);
    setSelectedBox(boxName);
  };

  const isBoxSelected = (boxName) => {
    return selectedBox === boxName;
  };

  useEffect(() => {
    const fetchData = async () => {
      const scategorys = await getSCategory();
      console.log('scategorys:', scategorys);
      setSCategory(scategorys);
    };

    const unsubscribe = navigation.addListener("focus", fetchData);

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const toggleSuccessModal = () => {
    setShowSuccessModal(!showSuccessModal);
  };

  const formatSelectedDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const onAddSchedule = async () => {
    if (activity && sdescription && selectedBox && selectedDate && stime) {
      const data = {
        activity: activity,
        sdescription: sdescription,
        selectedSCategory: selectedBox,
        sdate: formatSelectedDate(selectedDate),
        stime: stime,
      };

      console.log(data);
      try {
        const user = await addSchedule(data);
        toggleSuccessModal();
        setTimeout(() => {
          navigation.replace("Tabs");
        }, 2000);
        navigation.replace("Tabs");
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log("Error", "Data tidak lengkap");
      toggleAlert("Data tidak lengkap");
    }
  };

  return (
    <SafeAreaView>
      <HStack ml={5} mt={5} justifyContent="flex-start" alignItems="center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={40} color="#0e7490" />
        </TouchableOpacity>
        <Box alignItems="center" flex={1} mr={10}>
          <Heading color={'primary.700'}>New Schedule</Heading>
        </Box>
      </HStack>
      <Stack p={4} m={5} rounded={'xl'} backgroundColor={'white'} shadow={2} space={3}>
        <FormControl>
          <FormControl.Label
            _text={{
              bold: true,
              fontSize: "xl",
              color: "#0e7490"
            }}>
            Activity
          </FormControl.Label>
          <Input onChangeText={(activity) => setActivity(activity)} placeholder="Sport" />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{
              bold: true,
              fontSize: "xl",
              color: "#0e7490"
            }}>
            Description
          </FormControl.Label>
          <Input onChangeText={(sdescription) => setSDescription(sdescription)} placeholder="Exercise and Gym" />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{
              bold: true,
              fontSize: "xl",
              color: "#0e7490"
            }}>
            Category
          </FormControl.Label>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {scategory.map((item) => {
              let iconName = "shapes-outline";

              if (item.cname === "Food") {
                iconName = "restaurant-outline";
              } else if (item.cname === "Sport") {
                iconName = "basketball-outline";
              } else if (item.cname === "Game") {
                iconName = "game-controller-outline";
              } else if (item.cname === "Work") {
                iconName = "code-working-outline";
              }
              return (
                <TouchableOpacity activeOpacity={1} key={item.sCategoryId} onPress={() => handleBoxPress(item.cname)}>
                  <VStack m={2} alignItems={'center'}>
                    <Box
                      w={65}
                      h={65}
                      mb={2}
                      rounded={'lg'}
                      borderColor="white"
                      borderWidth="1"
                      backgroundColor={isBoxSelected(item.cname) ? '#0e7490' : 'white'}
                      shadow={5}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <Ionicons name={iconName} size={40} color={isBoxSelected(item.cname) ? 'white' : '#0e7490'} />
                    </Box>
                    <Text color={'#0e7490'} fontSize={14}>{item.cname}</Text>
                  </VStack>
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity onPress={() => navigation.navigate('SCategory')}>
              <VStack m={2} alignItems={'center'}>
                <Box
                  w={65}
                  h={65}
                  mb={2}
                  rounded={'lg'}
                  borderColor="white"
                  borderWidth="1"
                  backgroundColor={'white'}
                  shadow={5}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Ionicons name={'add-outline'} size={40} color={'#0e7490'} />
                </Box>
                <Text color={'#0e7490'} fontSize={14}>Add</Text>
              </VStack>
            </TouchableOpacity>
          </ScrollView>
          <Input display={'none'} fontSize={'xl'} color={'#0e7490'} value={selectedBox} />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{
              bold: true,
              fontSize: "xl",
              color: "#0e7490"
            }}>
            Date
          </FormControl.Label>
          <Input
            w={'100%'}
            borderWidth={1}
            borderRadius="md"
            textAlign={'left'}
            color={'#0e7490'}
            fontSize={'xl'}
            value={formatSelectedDate(selectedDate)}
            InputLeftElement={
              <TouchableOpacity onPress={showDatepicker} style={{ marginLeft: 10 }}>
                <Ionicons name="calendar-outline" size={30} color={'#0e7490'} />
              </TouchableOpacity>
            }
          />
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{
              bold: true,
              fontSize: "xl",
              color: "#0e7490"
            }}>
            Time
          </FormControl.Label>
          <Input onChangeText={(stime) => setSTime(stime)} placeholder="06:00 - 07:00" />
        </FormControl>
        <Button mt={2} backgroundColor={'primary.700'} onPress={() => { onAddSchedule(); }}>
          <Text textAlign={'center'} color={'white'}>
            Save
          </Text>
        </Button>
      </Stack>
      {showAlert && (
        <Modal isOpen={showAlert} onClose={() => toggleAlert()}>
          <Alert
            mx={4}
            action="error"
            variant="solid"
            bg="white"
            borderRadius={10}
            p={4}
          >
            <VStack alignItems="center">
              <Ionicons name="alert-circle" size={60} color="red" />
              <Text color="gray.700" mt={3} textAlign={"center"}>
                {alertMessage}
              </Text>
            </VStack>
          </Alert>
        </Modal>
      )}

      {showSuccessModal && (
        <Modal isOpen={showSuccessModal} onClose={() => toggleSuccessModal()}>
          <Alert
            mx={4}
            action="success"
            variant="solid"
            bg="white"
            borderRadius={10}
            p={4}
          >
            <VStack alignItems="center">
              <Ionicons name="checkmark-circle" size={60} color="green" />
              <Text color="gray.700" mt={3} textAlign={"center"}>
                Added Successful!
              </Text>
            </VStack>
          </Alert>
        </Modal>
      )}
    </SafeAreaView >
  );
};

export default CSchedule;