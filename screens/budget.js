import React, { useState } from 'react';
import { Box, Center, Stack, Heading, Text, HStack, Progress, FormControl, NativeBaseProvider, Button, Modal, Input } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const Budget = () => {

    const navigation = useNavigation();
    const [isCreateCategoryModalOpen, setCreateCategoryModalOpen] = useState(false);
    const [showCreateCategorySuccessModal, setShowCreateCategorySuccessModal] = useState(false);
    const handleCreateCategory = () => {
        setCreateCategoryModalOpen(false);
        setShowCreateCategorySuccessModal(true);
    };

    return (
        <NativeBaseProvider>
            <SafeAreaView flex={1}>
                <Box flex={1}>
                    <HStack mt={6} ml={5}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back-circle-outline" size={40} color="#0e7490" />
                        </TouchableOpacity>
                        <Heading ml={12} mt={1} color={'primary.700'}>Monthly Budget</Heading>
                    </HStack>
                    <Center>
                        <Box p={4} mt={5} w={80} h={210} rounded="2xl" overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'} shadow={1}>
                            <Stack space={3}>
                                <HStack justifyContent={"center"}>
                                    <Ionicons name="cash-outline" size={40} color={"#0e7490"} />
                                    <Heading size="lg" color={"primary.700"} ml={2} mt={1}>
                                        Total Budget
                                    </Heading>
                                </HStack>
                                <HStack justifyContent={'center'}>
                                    <Heading size={'2xl'} color={"#155e75"}>$8,500</Heading>
                                </HStack>
                                <Progress value={80} />
                                <HStack justifyContent={"space-between"}>
                                    <Text fontSize={"sm"} color={'#be123c'}>
                                        spent $6,800 / 80%
                                    </Text>
                                    <Text fontSize={"sm"} color={'#15803d'}>
                                        left $1,700 / 20 %
                                    </Text>
                                </HStack>
                            </Stack>
                        </Box>
                    </Center>
                    <HStack mt={6} ml={6} mr={6} justifyContent={'space-between'}>
                        <Heading color={'primary.700'}>Category</Heading>
                        <TouchableOpacity onPress={() => setCreateCategoryModalOpen(true)}>
                            <Ionicons name="add-circle-outline" size={30} color="#0e7490" />
                        </TouchableOpacity>
                    </HStack>
                    <Center p={5}>
                        <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
                            <Ionicons name="fast-food-outline" color={"#0e7490"} size={40} />
                            <Heading flex={1} color={'#0e7490'} fontSize={'lg'} mt={3} ml={2}> Food</Heading>
                            <Box mt={-1} p={3} backgroundColor={'white'} rounded={'2xl'} justifyContent={'center'} alignItems={'center'} shadow={2}>
                                <Heading color={'#0e7490'}>$1,000</Heading>
                            </Box>
                        </HStack>
                        <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
                            <Ionicons name="airplane-outline" color={"#0e7490"} size={40} />
                            <Heading flex={1} color={'#0e7490'} fontSize={'lg'} mt={3} ml={2}> Transport</Heading>
                            <Box mt={-1} p={3} backgroundColor={'white'} rounded={'2xl'} justifyContent={'center'} alignItems={'center'} shadow={2}>
                                <Heading color={'#0e7490'}>$2,000</Heading>
                            </Box>
                        </HStack>
                        <HStack p={4} mb={4} rounded={"2xl"} backgroundColor={"white"} shadow={1}>
                            <Ionicons name="game-controller-outline" color={"#0e7490"} size={40} />
                            <Heading flex={1} color={'#0e7490'} fontSize={'lg'} mt={3} ml={2}> Electronics</Heading>
                            <Box mt={-1} p={3} backgroundColor={'white'} rounded={'2xl'} justifyContent={'center'} alignItems={'center'} shadow={2}>
                                <Heading color={'#0e7490'}>$3,000</Heading>
                            </Box>
                        </HStack>
                    </Center>
                </Box>
                <Modal isOpen={isCreateCategoryModalOpen} onClose={() => setCreateCategoryModalOpen(false)} size="lg">
                    <Modal.Content>
                        <Modal.CloseButton />
                        <Modal.Header>Create Category</Modal.Header>
                        <Modal.Body>
                            <FormControl>
                                <FormControl.Label>Category Name</FormControl.Label>
                                <Input />
                            </FormControl>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button flex="1" onPress={handleCreateCategory}>
                                Submit
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
                <Modal isOpen={showCreateCategorySuccessModal} onClose={() => setShowCreateCategorySuccessModal(false)}>
                    <Modal.Content maxWidth="350" maxH="212">
                        <Modal.CloseButton />
                        <Modal.Header>Create Category</Modal.Header>
                        <Modal.Body>
                            Category has been created successfully.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button onPress={() => setShowCreateCategorySuccessModal(false)}>
                                    Close
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </SafeAreaView>
        </NativeBaseProvider>
    );
};

export default Budget;