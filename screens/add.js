import React from 'react';
import { Heading, Center, Box, FormControl, Card, Stack, Input, HStack, Button } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

const Create = () => {
  const navigation = useNavigation();
  const [Uang, setUang] = React.useState('');
  const [Note, setNote] = React.useState('');
  const [Date, setDate] = React.useState('');
  const [Cash, setCash] = React.useState('');

  return (
    <>
      <SafeAreaView flex={1} backgroundColor={"#075985"}>
        <Center flex={2}>
          <HStack>
            <Ionicons name='create-outline' size={35} color={"white"} />
            <Heading color={'white'} size={'xl'}>New Finance</Heading>
          </HStack>
        </Center>
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
