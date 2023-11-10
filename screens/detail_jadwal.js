import { SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Heading, Center, Box, Text, HStack, Divider, Card, VStack, Button } from 'native-base'
import Ionicons from "@expo/vector-icons/Ionicons";
import Gap from '../components/Gap';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const Detail_jadwal = () => {
  const navigation = useNavigation();

    return (
      <SafeAreaView flex={1} backgroundColor={"#176B87"}>
        <Box p={3} mt={3} flex={1}>
          <HStack space={2}>
            <TouchableOpacity onPress={() => navigation.navigate('Jadwal')} >
              <Ionicons name='arrow-back-outline' size={40} color={"white"} />
            </TouchableOpacity>
            <Center>
              <Heading color={'white'} >
                Detail Jadwal
              </Heading>
            </Center>
          </HStack>
          <Divider />
          <Gap height={20} />
          <Box flex={1} >
            <Card textAlign={'center'} backgroundColor={'white'} borderTopRadius={20} borderBottomRadius={20}>
              <VStack >
                <VStack>
                  <Heading>
                    Fitness
                  </Heading>
                  <Divider />
                </VStack>
                <Gap height={20} />
                <HStack space={2} >
                  <Center>
                    <Ionicons name='time-outline' size={25} color={"black"} />
                  </Center>
                  <Text>
                    : 06:00 - 07:30
                  </Text>
                </HStack>
                <HStack space={2}>
                  <Center>
                    <Ionicons name='today-outline' size={25} color={"black"} />
                  </Center>
                  <Text>
                    : Exercise and Gym
                  </Text>
                </HStack>
                <Gap height={20} />
                <Button onPress={() => navigation.navigate('Edit_jadwal')} backgroundColor={'muted.200'}>
                  <Text textAlign={'center'}> Edit Jadwal </Text>
                </Button>
              </VStack>
            </Card>
          </Box>
        </Box>
      </SafeAreaView>
    )
  }



export default Detail_jadwal