import { View, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { Center, Heading, Image, HStack, Text, Box, VStack, Button, Card, Flex, Checkbox, StatusBar } from 'native-base'
import Ionicons from "@expo/vector-icons/Ionicons";
import Gap from '../components/Gap';

const Jadwal = ({ navigation }) => {

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#455443", flex:1 }} >
      <StatusBar barStyle="light" />
        <ScrollView>
          <Box p={3} mt={3} flex={1}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
              <Ionicons name='arrow-back-outline' size={40} color={"white"} />
            </TouchableOpacity>
            <HStack backgroundColor={"yellow"} justifyContent={'center'} >
              <Center>
                <Heading size="lg" color={"white"}>
                  14 Sept
                </Heading>
              </Center>
            </HStack>
            <Gap height={20} />
            <VStack>
              <HStack justifyContent={'space-between'}>
                <Heading color={"white"}>
                  Today
                </Heading>
                <Button>
                  Add New
                </Button>
              </HStack>
              <Text color={"white"}>
                6 Task
              </Text>
            </VStack>
            <Gap height={50} />
            <Card backgroundColor={'white'} borderTopRadius={30} borderBottomRadius={30}>
              <Heading>
                My Tasks
              </Heading>
              <Gap height={20} />
              <VStack>
                <TouchableOpacity onPress={() => navigation.navigate('Detail_jadwal')}>
                  <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={"lime.200"} height={20} width={"100%"} borderRadius={10}>
                    <Text> 6:00 - 7:30 </Text>
                    <VStack>
                      <Heading size='sm' > Fitness</Heading>
                      <Text>Exercise and Gym</Text>
                    </VStack>
                    <Checkbox colorScheme="green" aria-label="Deskripsi aksesibilitas untuk Checkbox ini"></Checkbox>
                  </HStack>
                </TouchableOpacity>
                <Gap height={15} />
                <TouchableOpacity onPress={() => navigation.navigate('Detail_jadwal')}>
                  <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={"lime.200"} height={20} width={"100%"} borderRadius={10}>
                    <Text> 6:00 - 7:30 </Text>
                    <VStack>
                      <Heading size='sm' > Fitness</Heading>
                      <Text>Exercise and Gym</Text>
                    </VStack>
                    <Checkbox colorScheme="green" aria-label="Deskripsi aksesibilitas untuk Checkbox ini"></Checkbox>
                  </HStack>
                </TouchableOpacity>
                <Gap height={15} />
                <TouchableOpacity onPress={() => navigation.navigate('Detail_jadwal')}>
                  <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={"lime.200"} height={20} width={"100%"} borderRadius={10}>
                    <Text> 6:00 - 7:30 </Text>
                    <VStack>
                      <Heading size='sm' > Fitness</Heading>
                      <Text>Exercise and Gym</Text>
                    </VStack>
                    <Checkbox colorScheme="green" aria-label="Deskripsi aksesibilitas untuk Checkbox ini"></Checkbox>
                  </HStack>
                </TouchableOpacity>
                <Gap height={15} />
                <TouchableOpacity onPress={() => navigation.navigate('Detail_jadwal')}>
                  <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={"lime.200"} height={20} width={"100%"} borderRadius={10}>
                    <Text> 6:00 - 7:30 </Text>
                    <VStack>
                      <Heading size='sm' > Fitness</Heading>
                      <Text>Exercise and Gym</Text>
                    </VStack>
                    <Checkbox colorScheme="green" aria-label="Deskripsi aksesibilitas untuk Checkbox ini"></Checkbox>
                  </HStack>
                </TouchableOpacity>
                <Gap height={15} />
                <TouchableOpacity onPress={() => navigation.navigate('Detail_jadwal')}>
                  <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={"lime.200"} height={20} width={"100%"} borderRadius={10}>
                    <Text> 6:00 - 7:30 </Text>
                    <VStack>
                      <Heading size='sm' > Fitness</Heading>
                      <Text>Exercise and Gym</Text>
                    </VStack>
                    <Checkbox colorScheme="green" aria-label="Deskripsi aksesibilitas untuk Checkbox ini"></Checkbox>
                  </HStack>
                </TouchableOpacity>
                <Gap height={15} />
                <TouchableOpacity onPress={() => navigation.navigate('Detail_jadwal')}>
                  <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={"lime.200"} height={20} width={"100%"} borderRadius={10}>
                    <Text> 6:00 - 7:30 </Text>
                    <VStack>
                      <Heading size='sm' > Fitness</Heading>
                      <Text>Exercise and Gym</Text>
                    </VStack>
                    <Checkbox colorScheme="green" aria-label="Deskripsi aksesibilitas untuk Checkbox ini"></Checkbox>
                  </HStack>
                </TouchableOpacity>
              </VStack>
            </Card>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Jadwal