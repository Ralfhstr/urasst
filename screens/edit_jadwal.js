import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Box, Heading, HStack, Center, Card, Divider, FormControl, Input, Stack, TextArea, Button, ScrollView } from 'native-base'
import Ionicons from "@expo/vector-icons/Ionicons";
import Gap from '../components/Gap';
import { useNavigation } from '@react-navigation/native';


const Edit_jadwal = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView flex={1} backgroundColor={'#176B87'}>
      <Box p={3} mt={3} flex={1}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail_jadwal')}>
          <Ionicons name='arrow-back-outline' size={40} color={"white"} />
        </TouchableOpacity>
        <Center>
          <Heading color={'white'}>
            Edit Jadwal
          </Heading>
        </Center>
        <Divider backgroundColor={'white'} />
        <Gap height={20} />
          <Card justifyContent={'center'} textAlign={'center'} backgroundColor={'white'} borderTopRadius={20} borderBottomRadius={20}>
            <Box alignItems={'center'}>
              <FormControl>
                <FormControl.Label>
                  <Stack>
                    <Heading size={'sm'}>
                      Category
                    </Heading>
                    <Gap height={10} />
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                      <HStack>
                        <Card backgroundColor={'primary.600'} mr={5} borderRadius={10} w={40} flex={1}>
                          <Center>
                            <Text>
                              Fitness
                            </Text>
                          </Center>
                        </Card>
                        <Card backgroundColor={'#DDF2FD'} mr={5} borderRadius={10} w={40} flex={1}>
                          <Center>
                            <Text>
                              Collage
                            </Text>
                          </Center>
                        </Card>
                        <Card backgroundColor={'#DDF2FD'} mr={5} borderRadius={10} w={40}>
                          <Center>
                            <Text>
                              Dinner
                            </Text>
                          </Center>
                        </Card>
                        <Card backgroundColor={'#DDF2FD'} mr={5} borderRadius={10} w={40}>
                          <Center>
                            <Text>
                              Shopping
                            </Text>
                          </Center>
                        </Card>
                        <Card backgroundColor={'#DDF2FD'} mr={5} borderRadius={10} w={40}>
                          <Center>
                            <Text>
                              Other
                            </Text>
                          </Center>
                        </Card>
                      </HStack>
                    </ScrollView>
                    <FormControl.HelperText>
                      Select category
                    </FormControl.HelperText>
                    <Gap height={10}/>
                    <Heading size={'sm'}>
                      Time
                    </Heading>
                    <Gap height={10} />
                    <TextArea w={'xs'} placeholder='06:00 - 07:00'/>
                    <FormControl.HelperText>
                      Select Time
                    </FormControl.HelperText>
                    <Gap height={10}/>
                    <Heading size={'sm'}>
                      Activity
                    </Heading>
                    <Gap height={10} />
                    <TextArea w={'xs'} placeholder='Exercise and Gym'/>
                    <FormControl.HelperText>
                      Insert New Activity
                    </FormControl.HelperText>
                    <Gap height={20} />
                    <Button onPress={() => navigation.navigate('Edit_jadwal')} backgroundColor={'info.400'}>
                      <Text textAlign={'center'} color={'white'}> Save </Text>
                    </Button>
                  </Stack>
                </FormControl.Label>
              </FormControl>
            </Box>
          </Card>
      </Box>
    </SafeAreaView>
  )
}

export default Edit_jadwal