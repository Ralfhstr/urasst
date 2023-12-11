import React from 'react';
import { View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { Box, Center, HStack, VStack, Text, Image, Card, Heading, Avatar, Button } from 'native-base';
import Gap from '../components/Gap';
import { Ionicons } from '@expo/vector-icons';


const Setting = ({ navigation }) => {
  return (
    <>
      <SafeAreaView backgroundColor={"#F9F7F7"}>
        {/* <Center> */}
          <Box mt={10} >
          <HStack><Button size="sm" bg={"danger.600"} >Logout</Button></HStack>
            <VStack>
              <Avatar alignSelf="center" size="2xl" source={require("../assets/kuromi.jpg")}></Avatar>
            </VStack>
            <VStack>
              <Center>
                <Heading size="xl" color={"primary.700"}>Kuromi</Heading>
                <Text fontSize="xl" color={"primary.700"}>Sanrio Entertainment</Text>
              </Center>
            </VStack>
          </Box>
        {/* </Center> */}
        <Gap height={18} />

        <ScrollView>
          <Card backgroundColor={'white'} shadow={2} borderTopRadius={20} borderBottomRadius={20}>
            <Gap height={10} />
            <TouchableOpacity onPress={() => navigation.navigate('Edit_Profile')}>
              <VStack>
                <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={'white'} shadow={5} height={20} width={"100%"} borderRadius={10}>
                  <Ionicons name='person' size={25} color={"primary.700"} />
                  <VStack>
                    <Heading size='sm' color={"primary.700"} > Edit Profile</Heading>
                  </VStack>
                  <Ionicons name='chevron-forward-outline' size={25} color={"primary.700"} />
                </HStack>
              </VStack>
            </TouchableOpacity>
            <Gap height={10} />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <VStack>
                <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={'white'} shadow={5} height={20} width={"100%"} borderRadius={10}>
                  <Ionicons name='wallet' size={25} color={"primary.700"} />
                  <VStack>
                    <Heading size='sm' color={"primary.700"}> My Finance</Heading>
                  </VStack>
                  <Ionicons name='chevron-forward-outline' size={25} color={"primary.700"} />
                </HStack>
              </VStack>
            </TouchableOpacity>
            <Gap height={10} />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <VStack>
                <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={'white'} shadow={5} height={20} width={"100%"} borderRadius={10}>
                  <Ionicons name='today' size={25} color={"primary.700"} />
                  <VStack>
                    <Heading size='sm' color={"primary.700"} > My Schedule</Heading>
                  </VStack>
                  <Ionicons name='chevron-forward-outline' size={25} color={"primary.700"} />
                </HStack>
              </VStack>
            </TouchableOpacity>
            <Gap height={10} />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <VStack>
                <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={'white'} shadow={5} height={20} width={"100%"} borderRadius={10}>
                  <Ionicons name='alert-circle' size={25} color={"primary.700"} />
                  <VStack>
                    <Heading size='sm' color={"primary.700"} > About</Heading>
                  </VStack>
                  <Ionicons name='chevron-forward-outline' size={25} color={"primary.700"} />
                </HStack>
              </VStack>
            </TouchableOpacity>
            <Gap height={20} />
          </Card>
        </ScrollView>
      </SafeAreaView>
    </>

  );

};

export default Setting;
