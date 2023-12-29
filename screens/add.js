import React, { useState } from 'react';
import { Box, Center, Stack, Heading, Text, HStack, VStack, Progress, Checkbox, NativeBaseProvider, Button, Modal, Spacer, Input, ScrollView, } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import Gap from '../components/Gap';

const Create = () => {
  const navigation = useNavigation();
  const [Uang, setUang] = React.useState('');
  const [Note, setNote] = React.useState('');
  const [Date, setDate] = React.useState('');
  const [Cash, setCash] = React.useState('');

  return (
    <NativeBaseProvider>
      <ScrollView>
        <SafeAreaView flex={1}>
          <Box flex={1}>
            <Heading mt={6} ml={6} color={'#0e7490'}>
              <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Wallet')}>
                <Ionicons name="arrow-back-sharp" size={24} color="#0e7490" />
              </TouchableOpacity>
              Add Transactions</Heading>
            <Center>
              <Gap height={20} />
              <Stack>

                <HStack w={'72%'} >
                  <HStack p={4} rounded={50} backgroundColor={"white"} justifyContent={'space-between'} w={'44%'} shadow={1}>
                    <Text color={'#0e7490'} fontSize={20} > Outcome </Text>
                  </HStack>
                  <HStack p={4} ml={10} rounded={50} backgroundColor={"white"} justifyContent={'space-between'} w={'44%'} shadow={1} >
                    <Text color={'#0e7490'} fontSize={20}> Income</Text>
                  </HStack>
                </HStack>

              </Stack>

              <Box p={4} mt={5} w={80} h={600} rounded="2xl" overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'} shadow={1}>
                <VStack>
                  <Text color={'#0e7490'} fontSize={20} mb={2}>Amount</Text>
                  <Center>
                    <Input variant="underlined" placeholder="$0" width={40} textAlign="center" fontSize={'2xl'}/>
                  </Center>
                  <Text color={'#0e7490'} fontSize={20} mb={2}>Categories</Text>
                  <HStack>
                    <VStack>
                      <Center>
                        <Box w={20} mb={2} h={20} rounded={100} overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'} shadow={1}>
                          <Center>
                            <Ionicons name="basket-outline" size={60} color="#0e7490" />
                          </Center>
                        </Box>
                        <Text color={'#0e7490'} fontSize={18}>Grocery</Text>
                      </Center>
                    </VStack>
                    <VStack>
                      <Center>
                        <Box w={20} mb={2} ml={5} h={20} rounded={100} overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'} shadow={1}>
                          <Center>
                            <Ionicons name="pizza-outline" size={60} color="#0e7490" />
                          </Center>
                        </Box>
                        <Text ml={5} color={'#0e7490'} fontSize={18} mb={2}>Food</Text>
                      </Center>
                    </VStack>
                    <VStack>
                      <Center>
                        <Box w={20} mb={2} ml={5} h={20} rounded={100} overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'} shadow={1}>
                          <Center>
                            <Ionicons name="heart-outline" size={60} color="#0e7490" />
                          </Center>
                        </Box>
                        <Text color={'#0e7490'} fontSize={18} ml={5} mb={2}>Health</Text>
                      </Center>
                    </VStack>
                  </HStack>

                  <HStack>
                    <VStack>
                      <Center>
                        <Box w={20} mb={2} h={20} rounded={100} overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'} shadow={1}>
                          <Center>
                            <Ionicons name="airplane-outline" size={60} color="#0e7490" />
                          </Center>
                        </Box>
                        <Text color={'#0e7490'} fontSize={18}>Travel</Text>
                      </Center>
                    </VStack>
                    <VStack>
                      <Center>
                        <Box w={20} mb={2} ml={5} h={20} rounded={100} overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'} shadow={1}>
                          <Center>
                            <Ionicons name="basket" size={60} color="#0e7490" />
                          </Center>
                        </Box>
                        <Text color={'#0e7490'} fontSize={18} ml={5} mb={2}>Grocery</Text>
                      </Center>
                    </VStack>
                    <VStack>
                      <Center>
                        <Box w={20} mb={2} ml={5} h={20} rounded={100} overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'} shadow={1}>
                          <Center>
                            <Ionicons name="add-outline" size={60} color="#0e7490" />
                          </Center>
                        </Box>
                        <Text ml={5} color={'#0e7490'} fontSize={18} mb={2}>Others</Text>
                      </Center>
                    </VStack>
                  </HStack>

                  <VStack mt={5}>
                    <Text color={'#0e7490'} fontSize={20}>Date</Text>
                    <Input variant="unstyled" placeholder="10-20-2020" fontSize={18} ml={-3} />
                  </VStack>
                  <VStack mt={5}>
                    <Text color={'#0e7490'} fontSize={20}>Comment</Text>
                    <Input fontSize={18} textAlign="center" />
                  </VStack>
                  <Box></Box>
                  <Center>
                    <Button.Group>
                      <Button p={4} mb={4} rounded={"2xl"} backgroundColor={'#0e7490'} justifyContent={'space-between'} shadow={1} onPress={() => navigation.navigate('Wallet')}>
                        Add
                      </Button>
                    </Button.Group>
                  </Center>
                </VStack>
              </Box>

            </Center>
          </Box>
        </SafeAreaView>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Create;
