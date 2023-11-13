import React from 'react';
import { View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { Box, Center, HStack, VStack, Text, Image, Card, Heading } from 'native-base';
import Gap from '../components/Gap';
import { Ionicons } from '@expo/vector-icons';


const Setting = ({ navigation }) => {
  return (
    <>
      <SafeAreaView backgroundColor={"#075985"}>
        <Center>
          <Box mt={10} >
          <HStack>
            <Image size={150} borderRadius={100} source={require("../assets/kuromi.jpg")}/>
            
          </HStack>
          <VStack>
          <Heading size="xl" mb="4" color={"white"}>Kuromi</Heading>
          <Text fontSize="xl" color={"white"}>Sanrio Entertainment</Text>
          </VStack>
          </Box>
        </Center>

        <ScrollView>
        <Card backgroundColor={'white'} borderTopRadius={30} borderBottomRadius={30}>
          <Gap height={10} />
          <TouchableOpacity onPress={() => navigation.navigate('Edit_Profile')}>
            <VStack>
              <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={"#e0f2fe"} height={20} width={"100%"} borderRadius={10}>
                <Ionicons name='person' size={25} color={"#0c4a6e"} />
                <VStack>
                  <Heading size='sm' > Edit Profile</Heading>
                </VStack>
                <Ionicons name='chevron-forward-outline' size={25} color={"#0c4a6e"} />
              </HStack>
            </VStack>
          </TouchableOpacity>
          <Gap height={10} />
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <VStack>
              <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={"#e0f2fe"} height={20} width={"100%"} borderRadius={10}>
                <Ionicons name='wallet' size={25} color={"#0c4a6e"} />
                <VStack>
                  <Heading size='sm' > My Finance</Heading>
                </VStack>
                <Ionicons name='chevron-forward-outline' size={25} color={"#0c4a6e"} />
              </HStack>
            </VStack>
          </TouchableOpacity>
          <Gap height={10} />
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <VStack>
              <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={"#e0f2fe"} height={20} width={"100%"} borderRadius={10}>
                <Ionicons name='today' size={25} color={"#0c4a6e"} />
                <VStack>
                  <Heading size='sm' > My Schedule</Heading>
                </VStack>
                <Ionicons name='chevron-forward-outline' size={25} color={"#0c4a6e"} />
              </HStack>
            </VStack>
          </TouchableOpacity>
          <Gap height={10} />
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <VStack>
              <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={"#e0f2fe"} height={20} width={"100%"} borderRadius={10}>
                <Ionicons name='settings' size={25} color={"#0c4a6e"} />
                <VStack>
                  <Heading size='sm' > Settings</Heading>
                </VStack>
                <Ionicons name='chevron-forward-outline' size={25} color={"#0c4a6e"} />
              </HStack>
            </VStack>
          </TouchableOpacity>
          <Gap height={10} />
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <VStack>
              <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={"#e0f2fe"} height={20} width={"100%"} borderRadius={10}>
                <Ionicons name='help-circle' size={25} color={"#0c4a6e"} />
                <VStack>
                  <Heading size='sm' >Help</Heading>
                </VStack>
                <Ionicons name='chevron-forward-outline' size={25} color={"#0c4a6e"} />
              </HStack>
            </VStack>
          </TouchableOpacity>
        </Card>
        </ScrollView>
      </SafeAreaView>
    </>
    
  );

};

export default Setting;
