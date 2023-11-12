import React, { useState } from 'react';
import { Heading, Text, Box, HStack, VStack, NativeBaseProvider } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const CalendarScreen = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [tasks] = useState({
        '2023-11-10': [{ id: 1, time: '6:30 - 7:30', task: 'Study' }],
        '2023-11-15': [{ id: 2, time: '18:30 - 19:30', task: 'Home Work' }, { id: 3, time: '20:00 - 20:30', task: 'Study' }],
    });

    const renderTasks = () => {
        if (tasks[selectedDate]) {
            return tasks[selectedDate].map((task, index) => (
                <HStack key={`${selectedDate}-${index}`}>
                    <Text bold color={'#0e7490'}>{task.time}</Text>
                    <Text ml={3} bold color={'#155e75'}>{task.task}</Text>
                </HStack>
            ));
        } else {
            return <Text bold color={'#0e7490'}>No tasks for this date</Text>;
        }
    };

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    const navigation = useNavigation();

    return (
        <NativeBaseProvider>
            <SafeAreaView >
                <Box>
                    <Heading mt={6} ml={8} mb={-5} justifyContent={'center'} color={'primary.700'}><Ionicons name="calendar-outline" size={24} color="#0e7490" />  Calendar</Heading>
                    <VStack p={4} m={8} rounded={'xl'} shadow={2} backgroundColor={'white'} >
                        <Calendar onDayPress={onDayPress} markedDates={{ [selectedDate]: { selected: true } }} />
                    </VStack>
                    <HStack mr={8} mb={-5} justifyContent={'space-between'}>
                        <Heading ml={8} justifyContent={'center'} color={'primary.700'}><Ionicons name="file-tray-full-outline" size={24} color="#0e7490" />  Schedule</Heading>
                        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                            <Ionicons name="add-circle-outline" size={30} color="#0e7490" />
                        </TouchableOpacity>
                    </HStack>
                    <VStack p={4} m={8} rounded={"xl"} shadow={2} backgroundColor={"white"} space={2}>
                        {renderTasks()}
                    </VStack>
                </Box>
            </SafeAreaView>
        </NativeBaseProvider>
    );
};

export default CalendarScreen;
