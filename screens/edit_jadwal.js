import {Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Box, Heading, HStack, Center, Card,FormControl, Input, Stack, Button, ScrollView, Modal } from 'native-base'
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeBaseProvider } from "native-base";
import Gap from '../components/Gap';
import { useNavigation } from '@react-navigation/native';


const Edit_jadwal = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);


  return (
    <NativeBaseProvider>
      <SafeAreaView flex={1}>
        <Box p={3} mt={3} flex={1}>
          <HStack ml={2} justifyContent={'flex-start'}>
            <TouchableOpacity onPress={() => navigation.navigate('Jadwal')} >
              <Ionicons name='arrow-back-outline' size={40} color={"#176B87"} />
            </TouchableOpacity>
            <Heading ml={20} mt={1} color={'#176B87'}>
              Edit Jadwal
            </Heading>
          </HStack>
          <Gap height={40} />
          <Box flex={1}>
            <Center>
              <Card justifyContent={'center'} textAlign={'center'} backgroundColor={'white'} borderTopRadius={20} borderBottomRadius={20}>
                <Box alignItems={'center'}>
                  <FormControl>
                    <FormControl.Label>
                      <Stack>
                        <Heading color={'#176B87'} size={'sm'}>
                          Category
                        </Heading>
                        <Gap height={10} />
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                          <HStack>
                            <Center>
                              <Button backgroundColor={'primary.600'} mr={5} borderRadius={10} w={20}>
                                <Text >
                                  Sport
                                </Text>
                              </Button>
                            </Center>
                              <Button backgroundColor={'white'} mr={5} borderRadius={10} borderWidth={1} borderColor={'#176B87'} w={20}>
                                <Text color={'#176B87'}>
                                  Food
                                </Text>
                              </Button>
                              <Button backgroundColor={'white'} mr={5} borderRadius={10} borderWidth={1} borderColor={'#176B87'} w={20}>
                                <Text color={'#176B87'}>
                                  Work
                                </Text>
                              </Button>
                              <Button backgroundColor={'white'} mr={5} borderRadius={10} borderWidth={1} borderColor={'#176B87'} w={20}>
                                <Text color={'#176B87'}>
                                  Music
                                </Text>
                              </Button>
                              <Button backgroundColor={'white'} mr={5} borderRadius={10} borderWidth={1} borderColor={'#176B87'} w={20}>
                                <Text color={'#176B87'}>
                                  Other
                                </Text>
                              </Button>   
                          </HStack>
                        </ScrollView>
                        <FormControl.HelperText>
                          Select category
                        </FormControl.HelperText>
                        <Gap height={10} />
                        <Heading color={'#176B87'} size={'sm'}>
                          Time
                        </Heading>
                        <Gap height={10} />
                        <Input w={'xs'} placeholder='06:00 - 07:00' avoidKeyboard />
                        <FormControl.HelperText>
                          Select Time
                        </FormControl.HelperText>
                        <Gap height={10} />
                        <Heading color={'#176B87'} size={'sm'}>
                          Activity
                        </Heading>
                        <Gap height={10} />
                        <Input w={'xs'} placeholder='Exercise and Gym' />
                        <FormControl.HelperText>
                          Insert New Activity
                        </FormControl.HelperText>
                        <Gap height={10} />
                        <Heading color={'#176B87'} size={'sm'}>
                          Description
                        </Heading>
                        <Input w={'xs'} placeholder='Exercise and Gym' />
                        <FormControl.HelperText>
                          New Description Activity
                        </FormControl.HelperText>
                        <Gap height={20} />
                      </Stack>
                    </FormControl.Label>
                  </FormControl>
                  <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} avoidKeyboard bottom="4" size="lg" >
                    <Modal.Content>
                      <Modal.CloseButton />
                      <Modal.Header>Edit Success</Modal.Header>
                      <Modal.Body backgroundColor={'green.100'}>
                        <Center>
                          <FormControl.Label>CONGRATS YOUR EDIT IS SAVED!!</FormControl.Label>
                        </Center>
                      </Modal.Body>
                    </Modal.Content>
                  </Modal>
                </Box>
                <Button onPress={() => { setModalVisible(!modalVisible); }} backgroundColor={'#176B87'} borderWidth={1} >
                  <Text textAlign={'center'} > Save </Text>
                </Button>
              </Card>
            </Center>
          </Box>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default Edit_jadwal