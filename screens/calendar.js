import React, { useState } from 'react';
import { Heading, Text, Box, HStack, VStack, Button, NativeBaseProvider, Center } from 'native-base';
import { Calendar } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const CalendarScreen = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [tasks, setTasks] = useState({
        '2023-11-10': [{ id: 1, task: 'Study' }],
        '2023-11-15': [{ id: 2, task: 'Home Work' }, { id: 3, task: 'Study' }],
    });

    const renderTasks = () => {
        if (tasks[selectedDate]) {
            return tasks[selectedDate].map((task) => (
                <Text key={task.id}>{task.task}</Text>
                
            ));
        } else {
            return <Text>No tasks for this date</Text>;
        }
    };

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    return (
        <NativeBaseProvider>
            <SafeAreaView>
                <Box backgroundColor={'primary.700'}>
                    <Heading mt={6} ml={6} justifyContent={'center'} color={'white'}><Ionicons name="calendar-outline" size={24} color="white" /> Calendar</Heading>
                    <VStack p={4} mt={5} borderTopRadius={20} backgroundColor={'white'} >
                        <Calendar onDayPress={onDayPress} markedDates={{ [selectedDate]: { selected: true } }} />
                        <Box mt={4}>
                            <Heading ml={5} fontSize="lg">Tasks</Heading>
                            <VStack ml={5} space={2} mt={2}>
                                {renderTasks()}
                            </VStack>
                        </Box>
                    </VStack>
                </Box>
            </SafeAreaView>
        </NativeBaseProvider>
    );
};

export default CalendarScreen;
