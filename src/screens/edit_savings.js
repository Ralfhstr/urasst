import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Box, Heading, HStack, Center, Card, FormControl, Input, Stack, Button, ScrollView, Modal } from 'native-base'
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeBaseProvider } from "native-base";
import Gap from '../components/Gap';
import { useNavigation } from '@react-navigation/native';


const Edit_savings = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);


  return (
    <NativeBaseProvider>
      <SafeAreaView flex={1}>
        <Box p={3} mt={3} flex={1}>
          <HStack ml={2} justifyContent={'flex-start'}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail_savings')} >
              <Ionicons name='arrow-back-outline' size={40} color={"#176B87"} />
            </TouchableOpacity>
            <Box w={'78%'} alignItems={'center'}>
            <Heading mt={1} color={'#176B87'}>
              Edit Savings
            </Heading>
            </Box>
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
                          Title
                        </Heading>
                        <Gap height={10} />
                        <Input w={'xs'} placeholder='Japan Trip' avoidKeyboard />
                        <FormControl.HelperText>
                          Select category
                        </FormControl.HelperText>
                        <Gap height={10} />
                        <Heading color={'#176B87'} size={'sm'}>
                          Time
                        </Heading>
                        <Gap height={10} />
                        <Input w={'xs'} placeholder='07/09/23 - 07/10/23' avoidKeyboard />
                        <FormControl.HelperText>
                          Select Time
                        </FormControl.HelperText>
                        <Gap height={10} />
                        <Heading color={'#176B87'} size={'sm'}>
                          Budget
                        </Heading>
                        <Gap height={10} />
                        <Input w={'xs'} placeholder='$1,000' />
                        <FormControl.HelperText>
                          Set Your Budget
                        </FormControl.HelperText>
                        <Gap height={10} />
                        <Heading color={'#176B87'} size={'sm'}>
                          Savings
                        </Heading>
                        <Gap height={10} />
                        <Input w={'xs'} placeholder='$600' />
                        <FormControl.HelperText>
                          Insert Your Money for Savings
                        </FormControl.HelperText>
                        <Gap height={10} />
                        <Heading color={'#176B87'} size={'sm'}>
                          Description
                        </Heading>
                        <Input w={'xs'} placeholder='Week 1: $200 ; Week 2: $100; Week 3: $300' />
                        <FormControl.HelperText>
                          Insert Description
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

export default Edit_savings
