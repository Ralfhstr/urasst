import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Box, Heading, HStack, Center, Card, Divider } from 'native-base'
import Ionicons from "@expo/vector-icons/Ionicons";
import Gap from '../components/Gap';
import { useNavigation } from '@react-navigation/native';

const Edit_jadwal = () => {
  const navigation = useNavigation ();
  return (
    <SafeAreaView flex={1} backgroundColor={'#176B87'}>
      <Box>
        <TouchableOpacity onPress={() => navigation.navigate('Detail_jadwal')} >
          <Ionicons name='arrow-back-outline' size={40} color={"white"} />
        </TouchableOpacity>
        <Gap height={20} />
        <Card backgroundColor={'#DDF2FD'}>
          <Center>
            <Heading color={'black'}>
              Edit Jadwal
            </Heading>
          </Center>
          <Divider backgroundColor={'#176B87'}/>
        </Card>
      </Box>
    </SafeAreaView>
  )
}

export default Edit_jadwal