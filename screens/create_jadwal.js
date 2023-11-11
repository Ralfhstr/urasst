import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Center, Heading, Text, HStack, VStack, ScrollView, NativeBaseProvider, Button, Modal, FormControl, Input, Divider, } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const Create_jadwal = () => {
    // const [selectedDate, setSelectedDate] = useState(null);

    // const dates = [
    //     { id: 1, day: "Mon", date: "14" },
    //     { id: 2, day: "Tue", date: "15" },
    //     { id: 3, day: "Wed", date: "16" },
    //     { id: 4, day: "Thu", date: "17" },
    //     { id: 5, day: "Fri", date: "18" },
    // ];

    // const handleDateClick = (date) => {
    //     setSelectedDate(date);
    // };

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <NativeBaseProvider>
            <SafeAreaView flex={1} backgroundColor={'#176B87'}>
                <Box flex={1}>
                    <HStack ml={5}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home', {})} >
                            <Ionicons name="arrow-back-outline" size={40} color={'white'} />
                        </TouchableOpacity>
                        <Heading ml={12} mt={1} color={'white'}>Task Category</Heading>
                    </HStack>
                    {/* <Center>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <HStack justifyContent="center" alignItems="center" mt={10} ml={5} mb={1}>
                                {dates.map(({ day, date }) => (
                                    <TouchableOpacity activeOpacity={1}
                                        key={date}
                                        onPress={() => handleDateClick(date)}
                                    >
                                        <Box w={20} h={20} mr={2} rounded="2xl" overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={selectedDate === date ? 'info.200' : 'white'} shadow={1} justifyContent={'center'} alignItems={'center'} minHeight={20}>
                                            <VStack>
                                                <Heading size="md" color={selectedDate === date ? 'black' : 'black'}>
                                                    {date}
                                                </Heading>
                                                <Text fontSize="md" color={selectedDate === date ? 'black' : 'black'}>{day}</Text>
                                            </VStack>
                                        </Box>
                                    </TouchableOpacity>
                                ))}
                            </HStack>
                        </ScrollView>
                    </Center> */}
                    <Box flex={1} mt={5}>
                        <HStack>
                            <Heading mt={5} ml={7} color={'white'}>
                                <Ionicons name="reader-outline" size={24} color="white" />
                                <Text>
                                    Activity
                                </Text>
                            </Heading>
                        </HStack>
                        <Center p={5}>
                            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
                                <Ionicons name="barbell-outline" color={"black"} size={40} />
                                <VStack flex={1} ml={5}>
                                    <Heading color={'black'} fontSize={'lg'}> Sport</Heading>
                                    <Text ml={1} color={'black'} fontSize={'sm'}>6 Task</Text>
                                </VStack>
                                <TouchableOpacity onPress={() => navigation.navigate('Jadwal')}>
                                    <Ionicons name="chevron-forward-outline" color={"black"} size={40} />
                                </TouchableOpacity>
                            </HStack>
                            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
                                <Ionicons name="fast-food-outline" color={"black"} size={40} />
                                <VStack flex={1} ml={5}>
                                    <Heading color={'black'} fontSize={'lg'}> Food</Heading>
                                    <Text ml={1} color={'black'} fontSize={'sm'}>12 Task</Text>
                                </VStack>
                                <Ionicons name="chevron-forward-outline" color={"black"} size={40} />
                            </HStack>
                            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
                                <Ionicons name="clipboard-outline" color={"black"} size={40} />
                                <VStack flex={1} ml={5}>
                                    <Heading color={'black'} fontSize={'lg'}> Work</Heading>
                                    <Text ml={1} color={'black'} fontSize={'sm'}>14 Task</Text>
                                </VStack>
                                <Ionicons name="chevron-forward-outline" color={"black"} size={40} />
                            </HStack>
                            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
                                <Ionicons name="musical-notes-outline" color={"black"} size={40} />
                                <VStack flex={1} ml={5}>
                                    <Heading color={'black'} fontSize={'lg'}> Music</Heading>
                                    <Text ml={1} color={'black'} fontSize={'sm'}>4 Task</Text>
                                </VStack>
                                <Ionicons name="chevron-forward-outline" color={"black"} size={40} />
                            </HStack>
                            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
                                <Ionicons name="ellipsis-horizontal-circle-outline" color={"black"} size={40} />
                                <VStack flex={1} ml={5}>
                                    <Heading color={'black'} fontSize={'lg'}> Other</Heading>
                                    <Text ml={1} color={'black'} fontSize={'sm'}>10 Task</Text>
                                </VStack>
                                <Ionicons name="chevron-forward-outline" color={"black"} size={40} />
                            </HStack>
                        </Center>
                        <HStack>
                            <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard bottom="4" size="lg" >
                                <Modal.Content>
                                    <Modal.CloseButton />
                                    <Modal.Header>New Category</Modal.Header>
                                    <Modal.Body>
                                        <FormControl mt="1">
                                            <FormControl.Label>Input New Category</FormControl.Label>
                                            <Input />
                                        </FormControl>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button flex="1" onPress={() => {
                                            setModalVisible(false);
                                        }}>
                                            Save
                                        </Button>
                                    </Modal.Footer>
                                </Modal.Content>
                            </Modal>
                            <HStack flex={1} justifyContent={'flex-end'} pr={5} >
                                <Button w="100" onPress={() => {
                                    setModalVisible(!modalVisible);
                                }} backgroundColor={'info.400'}>
                                    <Center>
                                        <Heading size={'xs'} color={'white'} >
                                            <Ionicons name='add-outline' size={20} color={"white"} />
                                            New Category
                                        </Heading>
                                    </Center>
                                </Button>
                            </HStack>
                        </HStack>
                    </Box>
                </Box>
            </SafeAreaView>
        </NativeBaseProvider >
    );
};

export default Create_jadwal;