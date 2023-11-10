import { View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { Center, Heading, Image, HStack, Text, Box, VStack, Button, Card, Flex, Checkbox, StatusBar } from 'native-base'
import Ionicons from "@expo/vector-icons/Ionicons";
import Gap from '../components/Gap';
import { useNavigation } from '@react-navigation/native';

const Jadwal = () => {
  const navigation = useNavigation();

  const [tasks, setTasks] = useState([
    { time: "06:00 - 07:30", title: 'Fitness', desc: 'Exercise and Gym', isCompleted: true },
    { time: "06:00 - 07:30", title: 'Fitness', desc: 'Exercise and Gym', isCompleted: false },
    { time: "06:00 - 07:30", title: 'Fitness', desc: 'Exercise and Gym', isCompleted: false },
    { time: "06:00 - 07:30", title: 'Fitness', desc: 'Exercise and Gym', isCompleted: false },
    { time: "06:00 - 07:30", title: 'Fitness', desc: 'Exercise and Gym', isCompleted: false },
    { time: "06:00 - 07:30", title: 'Fitness', desc: 'Exercise and Gym', isCompleted: false },
  ]);

  const handleStatusChange = (index) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[index].isCompleted = !newTasks[index].isCompleted;
      return newTasks;
    });
  };

  return (
    <SafeAreaView backgroundColor={'#176B87'} flex={1}>
      <StatusBar barStyle="light" />
      <ScrollView>
        <Box p={3} mt={3} flex={1}>
          <TouchableOpacity onPress={() => navigation.navigate('Home', {})}>
            <Ionicons name="arrow-back-outline" size={40} color={'white'} />
          </TouchableOpacity>
          <HStack justifyContent={'center'}>
            <Center>
              <Heading size="lg" color={'white'}>
                14 September
              </Heading>
            </Center>
          </HStack>
          <Gap height={20} />
          <VStack>
            <HStack justifyContent={'space-between'}>
              <Heading color={'white'}>Today</Heading>
              <Button backgroundColor={'muted.50'}>
                <Text> Add New </Text>
              </Button>
            </HStack>
            <Text color={'white'}>6 Task</Text>
          </VStack>
          <Gap height={50} />
          <Box flex={1}>
            <Card backgroundColor={'white'} borderTopRadius={30} borderBottomRadius={30}>
              <Heading>My Tasks</Heading>
              <Gap height={20} />
              {tasks.map((task, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate('Detail_jadwal')}>
                  <HStack
                    p={7}
                    justifyContent={'space-between'}
                    space={3}
                    backgroundColor={'#DDF2FD'}
                    height={20}
                    width={'100%'}
                    borderRadius={10}>
                    <Text>{task.time}</Text>
                    <VStack>
                      <Heading size={'xs'}>{task.title}</Heading>
                      <Text strikeThrough={task.isCompleted}>
                        {task.desc}
                      </Text>
                    </VStack>
                    <Checkbox
                      isChecked={task.isCompleted}
                      onChange={() => handleStatusChange(index)}
                      colorScheme="green"
                      aria-label="Deskripsi aksesibilitas untuk Checkbox ini"
                    />
                  </HStack>
                  <Gap height={10} />
                </TouchableOpacity>
              ))}
            </Card>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Jadwal;