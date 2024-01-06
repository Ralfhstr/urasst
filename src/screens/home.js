import React, { useState, useEffect } from 'react';
import { Box, Center, Stack, Heading, Text, HStack, VStack, Progress, Checkbox, Button, Modal, FlatList, Image, Card } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { getSchedule } from "../actions/AuthAction";

const Home = () => {
  const [userSchedules, setUserSchedules] = useState([]);
  const [visibleSchedules, setVisibleSchedules] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const schedules = await getSchedule();
      // console.log('Notes:', notes);
      setUserSchedules(schedules);
      setVisibleSchedules(schedules.slice(0, 3));
    };

    const unsubscribe = navigation.addListener("focus", fetchData);

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const handleCheckboxPress = () => {
    setShowModal(true);
  };

  const renderitem = ({ item, index }) => {
    let iconName = "shapes-outline";
    let backgroundColor = index === 0 ? "#0e7490": "#ecfeff";
    let color = index === 0 ? "white" : "#0e7490";

    if (item.selectedSCategory === "Food") {
      iconName = "restaurant-outline";
    } else if (item.selectedSCategory === "Sport") {
      iconName = "basketball-outline";
    } else if (item.selectedSCategory === "Study") {
      iconName = "library-outline";
    } else if (item.selectedSCategory === "Work") {
      iconName = "code-working-outline";
    }

    return (
      <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={backgroundColor} borderColor={'black'} justifyContent={'space-between'}>
        <Text flex={1} color={color} fontSize={'md'} mr={-10}>{item.stime}</Text>
        <VStack flex={1}>
          <HStack>
            <Ionicons name={iconName} color={color} size={20}></Ionicons>
            <Heading ml={1} color={color} fontSize={'md'}>{item.activity}</Heading>
          </HStack>
          <Text color={color} fontSize={'md'}>{item.sdescription}</Text>
        </VStack>
        <Checkbox flex={1} borderColor={"primary.700"} colorScheme="green" aria-label="Checkbox" onPress={handleCheckboxPress}></Checkbox>
      </HStack>
    );
  };

  const renderEmptyComponent = () => {
    return (
      <Center>
        <Image source={require("../assets/emptySchedule.jpg")} alt="No Schedule" size="2xl" />
        <Heading mt={-3} color={'blue.300'}>Me Time!</Heading>
      </Center>
    );
  };

  return (
    <Stack>
      <HStack pt={12} w={'100%'} h={230} justifyContent={'center'} borderBottomRadius={30} backgroundColor={'primary.700'} shadow={1}>
        <VStack alignItems={'center'}>
          <Heading mb={6} color={'white'}>Hello, User!</Heading>
          <Text fontSize={17} color={"white"}>Total Balance</Text>
          <Heading fontSize={50} color={"white"}>$8,500</Heading>
        </VStack>
      </HStack>
      <Center>
        <HStack p={4} mt={-10} w={'95%'} justifyContent={'space-between'} alignItems={'flex-end'}>
          <HStack w={'48%'} h={70} rounded="2xl" backgroundColor={'tertiary.200'} justifyContent={'center'} alignItems={'center'} space={3}>
            <Box w={8} h={8} rounded={'lg'} backgroundColor={'tertiary.300'} alignItems={'center'}>
              <Ionicons name="add-outline" size={30} color="#10b981" />
            </Box>
            <VStack>
              <Text fontSize={'sm'} color={'#10b981'}>Income</Text>
              <Heading fontSize={'lg'} color={'#10b981'}>$2,700</Heading>
            </VStack>
          </HStack>
          <HStack w={'48%'} h={70} rounded="2xl" backgroundColor={'danger.200'} justifyContent={'center'} alignItems={'center'} space={3}>
            <Box w={8} h={8} rounded={'lg'} backgroundColor={'danger.300'} alignItems={'center'}>
              <Ionicons name="remove-outline" size={30} color="#f43f5e" />
            </Box>
            <VStack>
              <Text color={'#f43f5e'}>Expense</Text>
              <Heading fontSize={'lg'} color={'#f43f5e'}>$6,800</Heading>
            </VStack>
          </HStack>
        </HStack>
      </Center>
      <HStack mt={3} ml={8}>
        <Ionicons name="create-outline" size={24} color="#0e7490" />
        <Heading ml={3} color={'primary.700'}>My Schedule</Heading>
      </HStack>
      <Center>
        <Box p={4} mt={7} w={'90%'} h={350} rounded="2xl" overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'} shadow={1}>
          <FlatList
            data={visibleSchedules}
            renderItem={renderitem}
            keyExtractor={(item) => item.scheduleId}
            ListEmptyComponent={renderEmptyComponent}
          />
          <Center>
            {userSchedules.length > 3 && (
              <TouchableOpacity onPress={() => navigation.navigate('DSchedule')}>
                <Ionicons name="caret-down-outline" size={24} color="#0e7490" />
              </TouchableOpacity>
            )}
          </Center>
        </Box>
      </Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="350" maxH="212">
          <Modal.CloseButton />
          <Modal.Header>Confirmation</Modal.Header>
          <Modal.Body>
            Are you sure you want to proceed with this action?
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => { setShowModal(false); }}>
                Cancel
              </Button>
              <Button onPress={() => { setShowModal(false); }}>
                Confirm
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Stack>
  );
};

export default Home;