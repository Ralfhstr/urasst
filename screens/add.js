import React from 'react';
import { Heading, Center, Box, FormControl, Card, Stack, Input, HStack, Button } from "native-base";
import Gap from '../components/Gap';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, TouchableOpacity } from "react-native";

const Create = () => {
  const navigation = useNavigation();
  const [Uang, setUang] = React.useState('');
  const [Note, setNote] = React.useState('');
  const [Date, setDate] = React.useState('');
  const [Cash, setCash] = React.useState('');

  return (
    <>
      <SafeAreaView flex={1} backgroundColor={"#F9F7F7"}>
        {/* <Center flex={2}>
          <HStack>
          <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
          <Box mr={15}>
            <Ionicons name="arrow-back-outline" size={35} color="#0e7490"/>
          </Box>
          </TouchableOpacity>
            <Ionicons name='create-outline' size={35} color="#0e7490" />
            <Heading color="#0e7490" size={'xl'}>New Finance</Heading>
          </HStack>
        </Center> */}
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
          <Box mt={10} mr={10}>
            <Ionicons name="arrow-back-outline" size={32} color="#0e7490" />
          </Box>
        </TouchableOpacity>
        <Center>
          <HStack>
            {/* <Ionicons name='create-outline' size={35} color="#0e7490" /> */}
            <Heading color="#0e7490" size={'xl'}>New Transaction</Heading>
          </HStack>
        </Center>
        <Gap height={18} />
        <Box>
          <Card backgroundColor={'white'} borderTopRadius={20} borderBottomRadius={20} borderColor={'blue.500'} w={'100%'} h={'80%'}>
            <Stack mt="4">
              <FormControl>
                <FormControl.Label _text={{ bold: true, fontSize: "md" }}>
                  Rupiah
                </FormControl.Label>
                <Input placeholder="Rp" onChangeText={(value) => setUang({ ...Uang, name: value })} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ bold: true, fontSize: "md" }}>
                  Notes
                </FormControl.Label>
                <Input placeholder="Tulis Keterangan" onChangeText={(value) => setNote({ ...Note, name: value })} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ bold: true, fontSize: "md" }}>
                  Date
                </FormControl.Label>
                <Input placeholder="DD/MM/YYYY" onChangeText={(value) => setDate({ ...Date, name: value })} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ bold: true, fontSize: "md" }}>
                  By
                </FormControl.Label>
                <Input placeholder="Cash or Debit" onChangeText={(value) => setCash({ ...Cash, name: value })} />
              </FormControl>
            </Stack>
            <Button onPress={() => navigation.navigate('Home')} backgroundColor={"#075985"} mt={5}>Add New</Button>
          </Card>
        </Box>
      </SafeAreaView>
    </>
  );
};

export default Create;
