import React, { useState, useEffect } from 'react';
import { Heading, Text, Box, HStack, VStack, NativeBaseProvider } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { getSchedule } from "../actions/AuthAction";


const CalendarScreen = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [userSchedules, setUserSchedules] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const schedules = await getSchedule();
            console.log('Schedules:', schedules);

            const schedulesByDate = {};
            schedules.forEach((schedule) => {
                const date = schedule.sdate;
                if (!schedulesByDate[date]) {
                    schedulesByDate[date] = [];
                }
                schedulesByDate[date].push(schedule);
            });

            setUserSchedules(schedulesByDate);
        };

        const unsubscribe = navigation.addListener("focus", fetchData);

        return () => {
            unsubscribe();
        };
    }, [navigation]);


    const renderTasks = () => {
        if (userSchedules[selectedDate]) {
            return userSchedules[selectedDate].map((schedule, index) => (
                <HStack key={`${selectedDate}-${index}`}>
                    <Text bold color={'#0e7490'}>{schedule.stime}</Text>
                    <Text ml={3} bold color={'#155e75'}>{schedule.activity}</Text>
                </HStack>
            ));
        } else {
            return <Text bold color={'#0e7490'}>No schedule for this date</Text>;
        }
    };

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
        console.log('Selected Date:', day.dateString);
    };

    const navigation = useNavigation();

    return (
        <SafeAreaView >
            <Heading mt={6} ml={8} justifyContent={'center'} color={'primary.700'}><Ionicons name="calendar-outline" size={24} color="#0e7490" />  Calendar</Heading>
            <VStack p={4} m={5} rounded={'xl'} shadow={2} backgroundColor={'white'} >
                <Calendar onDayPress={onDayPress} markedDates={{ [selectedDate]: { selected: true } }} />
            </VStack>
            <HStack mr={8} justifyContent={'space-between'}>
                <Heading ml={8} justifyContent={'center'} color={'primary.700'}><Ionicons name="file-tray-full-outline" size={24} color="#0e7490" />  Schedule</Heading>
                <TouchableOpacity onPress={() => navigation.navigate('CSchedule')}>
                    <Ionicons name="add-circle-outline" size={30} color="#0e7490" />
                </TouchableOpacity>
            </HStack>
            <VStack p={4} m={5} rounded={"xl"} shadow={2} backgroundColor={"white"} space={2}>
                {renderTasks()}
            </VStack>
        </SafeAreaView>
    );
};

export default CalendarScreen;