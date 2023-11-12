import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Center, Heading, Text, HStack, VStack, ScrollView, NativeBaseProvider, } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const Add = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [tasks, setTasks] = useState({
    '2023-11-10': [{ id: 1, task: 'Study' }],
    '2023-11-15': [{ id: 2, task: 'Home Work' }, { id: 3, task: 'Study' }],
  });

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Box>
          <Center>
            <Heading mt={6} justifyContent={'center'} color={'primary.700'}><Ionicons name="document-text-outline" size={24} color="primary.700" /> Create Task</Heading>
            <VStack mt={5} borderTopRadius={20} backgroundColor={'white'} >
              <Calendar onDayPress={onDayPress} markedDates={{ [selectedDate]: { selected: true } }} />
            </VStack>
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
          </Center>
        </Box>
      </SafeAreaView >
    </NativeBaseProvider >
  );
};

export default Add;