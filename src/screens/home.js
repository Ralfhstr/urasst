import React, { useState, useEffect } from 'react';
import { Box, Center, Stack, Heading, Text, HStack, VStack, Progress, Checkbox, ScrollView, NativeBaseProvider, Button, Modal, StatusBar, } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  
  const handleCheckboxPress = () => {
    setShowModal(true);
  };

  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <SafeAreaView flex={1}>
        <Box flex={1}>
          <Heading mt={6} ml={8} color={'primary.700'}><Ionicons name="analytics-sharp" size={24} color="#0e7490" />  Analytics</Heading>
          <Center>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Budget")}>
              <Box p={4} mt={5} w={80} h={130} rounded="2xl" overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'} shadow={1}>
                <Stack space={3}>
                  <HStack justifyContent={"space-between"}>
                    <Heading size="lg" color={"primary.700"}>
                      Money
                    </Heading>
                    <Heading ml={-1} fontSize="2xl" color={"primary.700"}>$8,500</Heading>
                  </HStack>
                  <Progress value={80} />
                  <HStack justifyContent={"space-between"}>
                    <Text fontSize={"sm"} color={'#be123c'}>
                      spent $6,800
                    </Text>
                    <Text fontSize={"sm"} color={'#15803d'}>
                      left $1,700
                    </Text>
                  </HStack>
                </Stack>
              </Box>
            </TouchableOpacity>
          </Center>
          <Heading mt={6} ml={8} color={'primary.700'}><Ionicons name="create-outline" size={24} color="#0e7490" /> My Schedule</Heading>
          <Center>
            <Box p={4} mt={5} w={80} h={340} rounded="2xl" overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'} shadow={1}>
              <Stack space={2}>
                <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"primary.700"} justifyContent={'space-between'}>
                  <Text flex={1} color={'white'} fontSize={'sm'} mr={-10}> 6:00 - 6:30</Text>
                  <VStack flex={1}>
                    <HStack>
                      <Ionicons name="nutrition" color={"white"}></Ionicons>
                      <Heading color={'white'} fontSize={'sm'}> Breakfast</Heading>
                    </HStack>
                    <Text color={'white'} fontSize={'xs'}>Fruits and Water</Text>
                  </VStack>
                  <Checkbox flex={1} borderColor={"primary.700"} colorScheme="green" aria-label="Deskripsi aksesibilitas untuk Checkbox ini" onPress={handleCheckboxPress}></Checkbox>
                </HStack>
                <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} justifyContent={'space-between'} shadow={1}>
                  <Text color={"#0e7490"} flex={1} mr={-10}> 6:30 - 7:30 </Text>
                  <VStack flex={1}>
                    <HStack>
                      <Ionicons name="barbell-outline" color={"#0e7490"}></Ionicons>
                      <Heading color={"primary.700"} fontSize={'sm'}> Fitness</Heading>
                    </HStack>
                    <Text color={"primary.700"} fontSize={'xs'}>Exercise and Gym</Text>
                  </VStack>
                  <Checkbox flex={1} borderColor={"primary.700"} colorScheme="green" aria-label="Deskripsi aksesibilitas untuk Checkbox ini" onPress={handleCheckboxPress}></Checkbox>
                </HStack>
                <HStack p={4} rounded={"2xl"} backgroundColor={"white"} justifyContent={'space-between'} shadow={1}>
                  <Text color={"primary.700"} flex={1} mr={-10}> 10:00 - 10:30 </Text>
                  <VStack flex={1}>
                    <HStack>
                      <Ionicons name="fast-food-outline" color={"#0e7490"}></Ionicons>
                      <Heading color={"primary.700"} fontSize={'sm'}> Lunch</Heading>
                    </HStack>
                    <Text color={"primary.700"} fontSize={'xs'}>Meal and break</Text>
                  </VStack>
                  <Checkbox flex={1} borderColor={"primary.700"} colorScheme="green" aria-label="Deskripsi aksesibilitas untuk Checkbox ini" onPress={handleCheckboxPress}></Checkbox>
                </HStack>
                <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("Jadwal")}>
                  <HStack mt={5} rounded={"2xl"} justifyContent={'center'}>
                    <Ionicons name="caret-down-outline" size={24} color="#0e7490" />
                  </HStack>
                </TouchableOpacity>
              </Stack>
            </Box>
          </Center>
        </Box>
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
      </SafeAreaView >
    </NativeBaseProvider >
  );
};

export default Home;