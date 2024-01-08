import React from 'react';
import { View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { Box, Center, HStack, VStack, Text, Button, Avatar, Card, Heading } from 'native-base';
import Gap from '../components/Gap';
import { Ionicons } from '@expo/vector-icons';
import FIREBASE from '../config/FIREBASE';



const Profile = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await FIREBASE.auth().signOut();
      console.log('Logout berhasil');
      // Navigasi ke halaman login setelah logout berhasil
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error during logout', error);
    }
  };

  return (
    <>
      <SafeAreaView backgroundColor={"#F9F7F7"}>
        {/* <Center> */}
        <Box mt={10} >
          {/* <HStack justifyItems="end"></HStack> */}
          <HStack justifyContent={'flex-end'} mr={2}>
            <Button size="sm" bg={"danger.600"} w={'20%'} alignItems="flex-end" onPress={() => handleLogout()}>Logout</Button>
          </HStack>
          <VStack>
            <Avatar alignSelf="center" size="2xl" source={require("../assets/kuromi.jpg")}></Avatar>
          </VStack>
          <VStack>
            <Center>
              <Heading size="xl" color="#0e7490">Kuromi</Heading>
              <Text fontSize="xl" color="#0e7490">Sanrio Entertainment</Text>
            </Center>
          </VStack>
        </Box>
        {/* </Center> */}
        <Gap height={18} />

        <ScrollView>
          <Card backgroundColor={'white'} shadow={2} borderTopRadius={20} borderBottomRadius={20} h={1000}>
            <Gap height={10} />
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Edit_Profile')}>
              <VStack>
                <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={'white'} shadow={5} height={20} width={"100%"} borderRadius={10}>
                  <Ionicons name='person' size={25} color="#0e7490" />
                  <VStack>
                    <Heading size='sm' color="#0e7490" > Edit Profile</Heading>
                  </VStack>
                  <Ionicons name='chevron-forward-outline' size={25} color="#0e7490" />
                </HStack>
              </VStack>
            </TouchableOpacity>
            <Gap height={10} />
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Detail_savings')}>
              <VStack>
                <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={'white'} shadow={5} height={20} width={"100%"} borderRadius={10}>
                  <Ionicons name='wallet' size={25} color="#0e7490" />
                  <VStack>
                    <Heading size='sm' color="#0e7490"> My Finance</Heading>
                  </VStack>
                  <Ionicons name='chevron-forward-outline' size={25} color="#0e7490" />
                </HStack>
              </VStack>
            </TouchableOpacity>
            <Gap height={10} />
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Create_savings')}>
              <VStack>
                <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={'white'} shadow={5} height={20} width={"100%"} borderRadius={10}>
                  <Ionicons name='today' size={25} color="#0e7490" />
                  <VStack>
                    <Heading size='sm' color="#0e7490" > My Schedule</Heading>
                  </VStack>
                  <Ionicons name='chevron-forward-outline' size={25} color="#0e7490" />
                </HStack>
              </VStack>
            </TouchableOpacity>
            <Gap height={10} />
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Home')}>
              <VStack>
                <HStack p={7} justifyContent={'space-between'} space={3} backgroundColor={'white'} shadow={5} height={20} width={"100%"} borderRadius={10}>
                  <Ionicons name='alert-circle' size={25} color="#0e7490" />
                  <VStack>
                    <Heading size='sm' color="#0e7490" > About</Heading>
                  </VStack>
                  <Ionicons name='chevron-forward-outline' size={25} color="#0e7490" />
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

export default Profile;