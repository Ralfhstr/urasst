import { View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { Center, Heading, Image, HStack, Text, Box, VStack, Button, Card, Flex, Checkbox, StatusBar } from 'native-base'
import Ionicons from "@expo/vector-icons/Ionicons";
import Gap from '../components/Gap';
import { useNavigation } from '@react-navigation/native';

const Jadwal = () => {
  const navigation = useNavigation();

  const [tasks, setTasks] = useState([
    { time: "06:00 - 07:30", title: 'Sport', desc: 'Exercise and Gym', isCompleted: true },
    { time: "06:00 - 07:30", title: 'Sport', desc: 'Exercise and Gym', isCompleted: false },
    { time: "06:00 - 07:30", title: 'Sport', desc: 'Exercise and Gym', isCompleted: false },
    { time: "06:00 - 07:30", title: 'Sport', desc: 'Exercise and Gym', isCompleted: false },
    { time: "06:00 - 07:30", title: 'Sport', desc: 'Exercise and Gym', isCompleted: false },
    { time: "06:00 - 07:30", title: 'Sport', desc: 'Exercise and Gym', isCompleted: false },
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
        <Box flex={1}>
          <HStack ml={7} mt={5}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={40} color={'white'} />
            </TouchableOpacity>
            <Center>
              <Heading size="lg" color={'white'} ml={12} mt={1}>
                14 September
              </Heading>
            </Center>
          </HStack>
          <Gap height={10} />
          <Box flex={1} p={7}>
            <VStack>
              <HStack justifyContent={'space-between'}>
                <Heading color={'white'}>Today</Heading>
                <Button backgroundColor={'muted.50'}>
                  <Text> Add New </Text>
                </Button>
              </HStack>
              <Text color={'white'}>6 Task</Text>
            </VStack>
          </Box>
          <Gap height={10} />
          <Box flex={1} >
            <Card backgroundColor={'white'} borderTopRadius={30} borderBottomRadius={30} >
              <Heading>Schedule</Heading>
              <Gap height={20} />
              {tasks.map((task, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate('Detail_jadwal')}>
                  <HStack
                    p={7}
                    justifyContent={'space-between'}
                    space={4}
                    backgroundColor={'#DDF2FD'}
                    height={20}
                    width={'100%'}
                    borderRadius={10}>
                    <Checkbox
                      isChecked={task.isCompleted}
                      onChange={() => handleStatusChange(index)}
                      colorScheme="green"
                      aria-label="Deskripsi aksesibilitas untuk Checkbox ini"
                    />
                    <Text>{task.time}</Text>
                    <VStack>
                      <HStack>
                        <Heading size={'xs'} pr={3}>{task.title}</Heading>
                        <Ionicons name="barbell-outline" color={"black"} size={20} />
                      </HStack>
                      <Text strikeThrough={task.isCompleted}>
                        {task.desc}
                      </Text>
                    </VStack>
                    <TouchableOpacity onPress={() => navigation.navigate('Edit_jadwal')}>
                      <Ionicons name="create-outline" size={23} color={'black'} />
                    </TouchableOpacity>
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