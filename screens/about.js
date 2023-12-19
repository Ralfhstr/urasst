import { TouchableOpacity, SafeAreaView } from 'react-native';
import { Box, Center, Heading, Text, HStack, VStack, Button, Modal, FormControl, Input, Card, Divider, } from 'native-base';
import { NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import Gap from '../components/Gap';
import React from 'react'

const About = () => {
    return (
        <NativeBaseProvider>
            <SafeAreaView flex={1}>
                <HStack ml={2} justifyContent={'flex-start'}>
                    <TouchableOpacity onPress={() => navigation.navigate('Jadwal')} >
                        <Ionicons name='arrow-back-outline' size={40} color={"#176B87"} />
                    </TouchableOpacity>
                    <Center>
                        <Heading ml={20} mt={2} color={'#176B87'}>
                            About
                        </Heading>
                    </Center>
                </HStack>
                <Box mt={3} ml={5} mr={5} backgroundColor={'white'} borderWidth={1} borderColor={'white'} borderRadius={10}>
                    <VStack mt={2} ml={2}>
                        <Heading >
                            App Description
                        </Heading>
                        <Text>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Text>
                        <Gap height={10} />
                        <Divider />
                        <Gap height={10} />
                        <Heading>
                            App Info
                        </Heading>
                        <HStack mt={2} justifyContent={'space-between'}>
                            <Heading size={'xs'}>
                                Version
                            </Heading>
                            <Heading size={'xs'}>
                                v0.0.1
                            </Heading>
                        </HStack>
                        <HStack mt={1} justifyContent={'space-between'}>
                            <Heading size={'xs'}>
                                Update on
                            </Heading>
                            <Heading size={'xs'}>
                                14 December 2023
                            </Heading>
                        </HStack>
                        <HStack mt={1} justifyContent={'space-between'}>
                            <Heading size={'xs'}>
                                Created by
                            </Heading>
                            <Heading size={'xs'}>
                                Kelompok 3
                            </Heading>
                        </HStack>
                        <Gap height={10} />
                        <Divider />
                    </VStack>
                </Box>
            </SafeAreaView>
        </NativeBaseProvider>
    )
}

export default About