import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Heading, Text, HStack, ScrollView, NativeBaseProvider, FormControl, Stack, Button, Input, Modal, VStack, Alert } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { editSchedule, getSCategory } from "../actions/AuthAction";
import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Edit_jadwal = () => {
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
  const route = useRoute();

  const scheduleData = route.params?.scheduleData || {};

  const [initialActivity, setInitialActivity] = useState("");
  const [initialSDescription, setInitialSDescription] = useState("");
  const [initialSelectedBox, setInitialSelectedBox] = useState("");
  const [editedSelectedDate, setEditedSelectedDate] = useState(new Date());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);
  const [startTime, setStartTime] = useState(scheduleData.stime || "");
  const [endTime, setEndTime] = useState(scheduleData.etime || "");



  const showStartTimePickerHandler = () => {
    setShowStartTimePicker(true);
  };

  const hideStartTimePickerHandler = () => {
    setShowStartTimePicker(false);
  };

  const showEndTimePickerHandler = () => {
    setShowEndTimePicker(true);
  };

  const hideEndTimePickerHandler = () => {
    setShowEndTimePicker(false);
  };

  const handleTimeChange = (time, setTime, hidePicker, isStartTime) => {
    hidePicker();
    const formattedTime = time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

    console.log("Nilai formattedTime:", formattedTime);
    setTime(formattedTime);

    if (isStartTime) {
      setShowStartTimePicker(false);
    } else {
      setShowEndTimePicker(false);
    }
  };

  const [initialSTime, setInitialSTime] = useState("");
  const [initialETime, setInitialETime] = useState("");

  useEffect(() => {
    console.log("scheduleData:", scheduleData);
    const fetchData = async () => {
      const scategorys = await getSCategory();
      console.log("scategorys:", scategorys);
      setSCategory(scategorys);

      // Set initial values for editing
      setInitialActivity(scheduleData.activity || "");
      setInitialSDescription(scheduleData.sdescription || "");
      setSelectedBox(scheduleData.selectedSCategory || "");
      setEditedSelectedDate(new Date(scheduleData.sdate) || new Date());
      setInitialSTime(scheduleData.stime || "");
      setInitialETime(scheduleData.etime || "");
    };

    fetchData();
  }, [scheduleData.activity, scheduleData.sdescription, scheduleData.selectedSCategory, scheduleData.sdate, scheduleData.stime, scheduleData.etime]);

  const formatSelectedDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const hideDatepicker = () => {
    setShowDatePicker(false);
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    hideDatepicker();
    setEditedSelectedDate(currentDate);
  };

  const [showTimePicker, setShowTimePicker] = useState(false);

  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  const hideTimepicker = () => {
    setShowTimePicker(false);
  };

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const toggleSuccessModal = () => {
    setShowSuccessModal(!showSuccessModal);
  };


  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxPress = (boxName) => {
    console.log('Selected Category:', boxName);
    setSelectedBox(boxName);
    setEditedSelectedDate(new Date());
  };

  const isBoxSelected = (boxName) => {
    return selectedBox === boxName;
  };

  const onEditSchedule = async () => {
    if (activity || sdescription || selectedBox !== scheduleData.selectedSCategory || editedSelectedDate || stime || etime) {
      const data = {
        activity: activity || scheduleData.activity,
        sdescription: sdescription || scheduleData.sdescription,
        selectedSCategory: selectedBox || scheduleData.selectedSCategory,
        sdate: editedSelectedDate ? formatSelectedDate(editedSelectedDate) : scheduleData.sdate,
        stime: startTime || scheduleData.stime,
        etime: endTime || scheduleData.etime,
      };

      try {
        const editedSchedule = await editSchedule(scheduleData.scheduleId, data);
        toggleSuccessModal();
        setTimeout(() => {
          navigation.replace("Tabs");
        }, 2000);
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
          <Heading color={'primary.700'}>Edit Schedule</Heading>
        </Box>
      </HStack>
      <ScrollView>
        <Stack p={4} m={5} rounded={'xl'} backgroundColor={'white'} shadow={2} space={3} mb={'50%'}>
          <FormControl>
            <FormControl.Label
              _text={{
                bold: true,
                fontSize: "xl",
                color: "#0e7490"
              }}>
              Activity
            </FormControl.Label>
            <Input onChangeText={(activity) => setActivity(activity)} value={activity || initialActivity} placeholder="" />
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
            <Input onChangeText={(sdescription) => setSDescription(sdescription)} value={sdescription || initialSDescription} placeholder="" />
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
                  <TouchableOpacity
                    activeOpacity={1}
                    key={item.sCategoryId}
                    onPress={() => handleBoxPress(item.cname)}
                  >
                    <VStack m={2} alignItems={'center'}>
                      <Box
                        w={65}
                        h={65}
                        mb={2}
                        rounded={'lg'}
                        borderColor="white"
                        borderWidth="1"
                        backgroundColor={
                          isBoxSelected(item.cname) ? '#0e7490' : 'white'
                        }
                        shadow={5}
                        justifyContent={'center'}
                        alignItems={'center'}
                      >
                        <Ionicons
                          name={iconName}
                          size={40}
                          color={
                            isBoxSelected(item.cname) ? 'white' : '#0e7490'
                          }
                        />
                      </Box>
                      <Text color={'#0e7490'} fontSize={14}>
                        {item.cname}
                      </Text>
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
            <Input display={'none'} fontSize={'xl'} color={'#0e7490'} value={selectedBox || initialSelectedBox} />
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
              value={formatSelectedDate(editedSelectedDate)}
              InputLeftElement={
                <TouchableOpacity onPress={showDatepicker} style={{ marginLeft: 10 }}>
                  <Ionicons name="calendar-outline" size={30} color={'#0e7490'} />
                </TouchableOpacity>
              }
            />
            {showDatePicker && (
              <DateTimePicker
                value={editedSelectedDate}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  handleDateChange(event, selectedDate);
                  setEditedSelectedDate(selectedDate);
                }}
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
              Time Start
            </FormControl.Label>
            <Input
              value={startTime}
              placeholder="07:00"
              InputLeftElement={
                <TouchableOpacity onPress={showStartTimePickerHandler} style={{ marginLeft: 10 }}>
                  <Ionicons name="alarm-outline" size={30} color={'#0e7490'} />
                </TouchableOpacity>
              }
              onChangeText={(time) => setStartTime(time)}
            />
            <DateTimePickerModal
              isVisible={showStartTimePicker}
              mode="time"
              onConfirm={(time) => handleTimeChange(time, setStartTime, hideStartTimePickerHandler, true)}
              onCancel={hideStartTimePickerHandler}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label
              _text={{
                bold: true,
                fontSize: "xl",
                color: "#0e7490"
              }}>
              Time End
            </FormControl.Label>
            <Input
              value={endTime}
              placeholder="07:00"
              InputLeftElement={
                <TouchableOpacity onPress={showEndTimePickerHandler} style={{ marginLeft: 10 }}>
                  <Ionicons name="alarm-outline" size={30} color={'#0e7490'} />
                </TouchableOpacity>
              }
              onChangeText={(time) => setEndTime(time)}
            />
            <DateTimePickerModal
              isVisible={showEndTimePicker}
              mode="time"
              onConfirm={(time) => handleTimeChange(time, setEndTime, hideEndTimePickerHandler, false)}
              onCancel={hideEndTimePickerHandler}
            />
          </FormControl>
          <Button mt={2} backgroundColor={'primary.700'} onPress={onEditSchedule}>
            <Text textAlign={'center'} color={'white'}>
              Save
            </Text>
          </Button>
        </Stack>
      </ScrollView>
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

export default Edit_jadwal;