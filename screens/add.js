import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Center, Heading, Text, HStack, VStack, ScrollView, NativeBaseProvider, } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const Add = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const dates = [
    { id: 1, day: "Mon", date: "14" },
    { id: 2, day: "Tue", date: "15" },
    { id: 3, day: "Wed", date: "16" },
    { id: 4, day: "Thu", date: "17" },
    { id: 5, day: "Fri", date: "18" },
  ];

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView flex={1}>
        <Box flex={1}>
          <Heading mt={6} ml={6} justifyContent={'center'} color={'primary.700'}><Ionicons name="document-text-outline" size={24} color="primary.700" /> Create Task</Heading>
          <Center>
            <ScrollView horizontal>
              <HStack justifyContent="center" alignItems="center" mt={10} ml={5} mb={1}>
                {dates.map(({ day, date }) => (
                  <TouchableOpacity activeOpacity={1}
                    key={date}
                    onPress={() => handleDateClick(date)}
                  >
                    <Box w={20} h={20} mr={2} rounded="2xl" overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={selectedDate === date ? 'primary.700' : 'white'} shadow={1} justifyContent={'center'} alignItems={'center'} minHeight={20}>
                      <VStack>
                        <Heading size="md" color={selectedDate === date ? 'white' : 'primary.700'}>
                          {date}
                        </Heading>
                        <Text fontSize="md" color={selectedDate === date ? 'white' : 'primary.700'}>{day}</Text>
                      </VStack>
                    </Box>
                  </TouchableOpacity>
                ))}
              </HStack>
            </ScrollView>
          </Center>
          <Heading mt={5} ml={6} color={'primary.700'}><Ionicons name="create-outline" size={24} color="primary.700" /> Activity</Heading>
          <Center p={5}>
            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"primary.700"}>
              <Ionicons name="fast-food-outline" color={"white"} size={40} />
              <VStack flex={1} ml={5}>
                <Heading color={'white'} fontSize={'lg'}> Food</Heading>
                <Text ml={1} color={'white'} fontSize={'sm'}>12 Task</Text>
              </VStack>
              <Ionicons name="chevron-forward-outline" color={"white"} size={40} />
            </HStack>
            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"primary.700"}>
              <Ionicons name="barbell-outline" color={"white"} size={40} />
              <VStack flex={1} ml={5}>
                <Heading color={'white'} fontSize={'lg'}> Sport</Heading>
                <Text ml={1} color={'white'} fontSize={'sm'}>5 Task</Text>
              </VStack>
              <Ionicons name="chevron-forward-outline" color={"white"} size={40} />
            </HStack>
            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"primary.700"}>
              <Ionicons name="clipboard-outline" color={"white"} size={40} />
              <VStack flex={1} ml={5}>
                <Heading color={'white'} fontSize={'lg'}> Work</Heading>
                <Text ml={1} color={'white'} fontSize={'sm'}>14 Task</Text>
              </VStack>
              <Ionicons name="chevron-forward-outline" color={"white"} size={40} />
            </HStack>
            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"primary.700"}>
              <Ionicons name="musical-notes-outline" color={"white"} size={40} />
              <VStack flex={1} ml={5}>
                <Heading color={'white'} fontSize={'lg'}> Music</Heading>
                <Text ml={1} color={'white'} fontSize={'sm'}>4 Task</Text>
              </VStack>
              <Ionicons name="chevron-forward-outline" color={"white"} size={40} />
            </HStack>
          </Center>
        </Box>
      </SafeAreaView >
    </NativeBaseProvider >
  );
};

export default Add;