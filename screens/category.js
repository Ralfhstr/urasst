import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Center, Heading, Text, HStack, VStack, ScrollView, NativeBaseProvider, } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const Category = () => {
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

  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <SafeAreaView flex={1}>
        <Box flex={1}>
            <HStack mt={6} ml={5}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle-outline" size={40} color="#0e7490"/>
              </TouchableOpacity>
              <Heading ml={12} mt={1} color={'primary.700'}>Task Category</Heading>
            </HStack>
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
            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
              <Ionicons name="fast-food-outline" color={"#0e7490"} size={40} />
              <VStack flex={1} ml={5}>
                <Heading color={'#0e7490'} fontSize={'lg'}> Food</Heading>
                <Text ml={1} color={'#0e7490'} fontSize={'sm'}>12 Task</Text>
              </VStack>
              <Ionicons name="chevron-forward-outline" color={"#0e7490"} size={40} />
            </HStack>
            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
              <Ionicons name="barbell-outline" color={"#0e7490"} size={40} />
              <VStack flex={1} ml={5}>
                <Heading color={'#0e7490'} fontSize={'lg'}> Sport</Heading>
                <Text ml={1} color={'#0e7490'} fontSize={'sm'}>5 Task</Text>
              </VStack>
              <Ionicons name="chevron-forward-outline" color={"#0e7490"} size={40} />
            </HStack>
            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
              <Ionicons name="clipboard-outline" color={"#0e7490"} size={40} />
              <VStack flex={1} ml={5}>
                <Heading color={'#0e7490'} fontSize={'lg'}> Work</Heading>
                <Text ml={1} color={'#0e7490'} fontSize={'sm'}>14 Task</Text>
              </VStack>
              <Ionicons name="chevron-forward-outline" color={"#0e7490"} size={40} />
            </HStack>
            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
              <Ionicons name="musical-notes-outline" color={"#0e7490"} size={40} />
              <VStack flex={1} ml={5}>
                <Heading color={'#0e7490'} fontSize={'lg'}> Music</Heading>
                <Text ml={1} color={'#0e7490'} fontSize={'sm'}>4 Task</Text>
              </VStack>
              <Ionicons name="chevron-forward-outline" color={"#0e7490"} size={40} />
            </HStack>
          </Center>
        </Box>
      </SafeAreaView >
    </NativeBaseProvider >
  );
};

export default Category;