import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Heading, Text, Center, Box, Image, FormControl, Input, Stack, Card, Modal, Button, VStack, Avatar } from "native-base";
import Gap from '../components/Gap';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Edit_Profile = () => {
  const [Username, setUsername] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Bday, setBday] = React.useState('');
  const [Title, setTitle] = React.useState('');
  const navigation = useNavigation();
  const [modalMuncul, setModalMuncul] = React.useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F9F7F7" }}>
      <Box flex={1} backgroundColor={"#F9F7F7"}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
          <Box mt={10} mr={10}>
            <Ionicons name="arrow-back-outline" size={32} color={"primary.700"} />
          </Box>
        </TouchableOpacity>
        <Center>
          <Heading color={'primary.700'} size={'xl'}>Edit Profile</Heading>
          <Gap height={15} />
          {/* <Image size={150} borderRadius={100} source={require("../assets/kuromi.jpg")} /> */}
          <VStack>
            <Avatar alignSelf="center" size="2xl" source={require("../assets/kuromi.jpg")}></Avatar>
          </VStack>
          <Gap height={20} />
          <Card backgroundColor={'white'} borderTopRadius={20} borderBottomRadius={20} borderColor={'#075985'} w={'100%'} h={'80%'}>
            <Stack mt="4" space={4} p={4}>
              <FormControl>
                <FormControl.Label _text={{ bold: true, fontSize: "md" }}>
                  Username
                </FormControl.Label>
                <Input placeholder="mrX" onChangeText={(value) => setUsername(value)} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ bold: true, fontSize: "md" }}>
                  Email
                </FormControl.Label>
                <Input placeholder="misterx12@gmail.com" onChangeText={(value) => setEmail(value)} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ bold: true, fontSize: "md" }}>
                  Date of Birth
                </FormControl.Label>
                <Input placeholder="26 Januari 2023" onChangeText={(value) => setBday(value)} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ bold: true, fontSize: "md" }}>
                  Title
                </FormControl.Label>
                <Input placeholder="Student" onChangeText={(value) => setTitle(value)} />
              </FormControl>
              <Button onPress={() => setModalMuncul(!modalMuncul)} backgroundColor={"#075985"} mt={4}>
                Save Changes
              </Button>
            </Stack>
            <Modal isOpen={modalMuncul} onClose={() => setModalMuncul(false)} size="lg">
              <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Edit Success</Modal.Header>
                <Modal.Body backgroundColor={"#e0f2fe"}>
                  <Center>
                    <FormControl.Label fontColor={'white'}>Profile edit already Changes</FormControl.Label>
                  </Center>
                  <Button onPress={() => navigation.navigate('Home')} backgroundColor={"primary.700"} mt={5}>
                    Go To Settings
                  </Button>
                </Modal.Body>
              </Modal.Content>
            </Modal>
            {/*  */}
          </Card>
        </Center>
      </Box>
    </SafeAreaView>
  );
};

export default Edit_Profile;
