import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView } from 'react-native';
import { Box, Center, Heading, Text, HStack, VStack, Button, Modal, FormControl, Input, Card, Divider, Progress} from 'native-base';
import { NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import Gap from '../components/Gap';

const Detail_savings = () => {

  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <SafeAreaView flex={1}>
        <Box flex={1} mt={3}>
          <HStack ml={5}>
            <TouchableOpacity onPress={() => navigation.navigate('Home', {})} >
              <Ionicons name="arrow-back-outline" size={40} color={'#176B87'} />
            </TouchableOpacity>
            <Heading ml={12} mt={1} color={'#176B87'}>Detail Savings</Heading>
          </HStack>
          <Card mt={3} ml={3} mr={3} backgroundColor={'white'} borderWidth={1} borderColor={'white'} borderRadius={10}>
            <HStack justifyContent={'space-between'}>
              <Heading color={'#176B87'}>
                Trip Japan
              </Heading>
              <TouchableOpacity onPress={() => navigation.navigate('Edit_savings')}>
              <Ionicons name="create-outline" size={23} color={'#176B87'} />
              </TouchableOpacity>
            </HStack>
            <Gap height={10} />
            <Divider />
            <Gap height={30} />
            <HStack justifyContent={'space-between'}>
              <Text>Balance</Text>
              <Text>60%</Text>
            </HStack>
            <Progress value={60} />
            <HStack justifyContent={'flex-end'}>
              <Text color={'red.600'}> 30 Days left </Text>
            </HStack>
            <Gap height={50}/>
            <Heading size={'xs'} color={'#176B87'}>
              Description
            </Heading>
            <Text > 
            Week 1: $200 ; Week 2: $100; Week 3: $300
            </Text>
          </Card>
        </Box>
      </SafeAreaView>
    </NativeBaseProvider >
  )
}

export default Detail_savings