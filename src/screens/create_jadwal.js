import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView } from 'react-native';
import { Box, Center, Heading, Text, HStack, VStack, Button, Modal, FormControl, Input, } from 'native-base';
import { NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const Create_jadwal = () => {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <NativeBaseProvider>
            <SafeAreaView flex={1}>
                <Box flex={1} mt={3}>
                    <HStack ml={5}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home', {})} >
                            <Ionicons name="arrow-back-outline" size={40} color={'#176B87'} />
                        </TouchableOpacity>
                        <Heading ml={12} mt={1} color={'#176B87'}>Task Category</Heading>
                    </HStack>
                    <Box flex={1} mt={5}>
                        <HStack>
                            <Heading mt={5} ml={7} color={'#176B87'}>
                                <Ionicons name="reader-outline" size={24} color="#176B87" />
                                <Text>
                                    Schedule
                                </Text>
                            </Heading>
                        </HStack>
                        <Center p={5}>
                            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
                                <Ionicons name="barbell-outline" color={"#176B87"} size={40} />
                                <VStack flex={1} ml={5}>
                                    <Heading color={'#176B87'} fontSize={'lg'}> Sport</Heading>
                                    <Text ml={1} color={'#176B87'} fontSize={'sm'}>6 Task</Text>
                                </VStack>
                                <Ionicons name="chevron-forward-outline" color={"#176B87"} size={40} />
                            </HStack>
                            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
                                <Ionicons name="fast-food-outline" color={"#176B87"} size={40} />
                                <VStack flex={1} ml={5}>
                                    <Heading color={'#176B87'} fontSize={'lg'}> Food</Heading>
                                    <Text ml={1} color={'#176B87'} fontSize={'sm'}>12 Task</Text>
                                </VStack>
                                <Ionicons name="chevron-forward-outline" color={"#176B87"} size={40} />
                            </HStack>
                            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
                                <Ionicons name="clipboard-outline" color={"#176B87"} size={40} />
                                <VStack flex={1} ml={5}>
                                    <Heading color={'#176B87'} fontSize={'lg'}> Work</Heading>
                                    <Text ml={1} color={'#176B87'} fontSize={'sm'}>14 Task</Text>
                                </VStack>
                                <Ionicons name="chevron-forward-outline" color={"#176B87"} size={40} />
                            </HStack>
                            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
                                <Ionicons name="musical-notes-outline" color={"#176B87"} size={40} />
                                <VStack flex={1} ml={5}>
                                    <Heading color={'#176B87'} fontSize={'lg'}> Music</Heading>
                                    <Text ml={1} color={'#176B87'} fontSize={'sm'}>4 Task</Text>
                                </VStack>
                                <Ionicons name="chevron-forward-outline" color={"#176B87"} size={40} />
                            </HStack>
                            <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
                                <Ionicons name="ellipsis-horizontal-circle-outline" color={"#176B87"} size={40} />
                                <VStack flex={1} ml={5}>
                                    <Heading color={'#176B87'} fontSize={'lg'}> Other</Heading>
                                    <Text ml={1} color={'#176B87'} fontSize={'sm'}>10 Task</Text>
                                </VStack>
                                <Ionicons name="chevron-forward-outline" color={"#176B87"} size={40} />
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
                                }} backgroundColor={'#176B87'}>
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