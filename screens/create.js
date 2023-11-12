import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Heading, Text, HStack, ScrollView, NativeBaseProvider, FormControl, Stack, Button, Input, Modal, VStack, } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

const Create = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  const handleCategoryPress = (index) => {
    setSelectedCategory(index);
  };

  const handleSaveButtonPress = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Box>
          <HStack mt={6} ml={5}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle-outline" size={40} color="#0e7490" />
            </TouchableOpacity>
            <Heading ml={12} mt={1} color={'primary.700'}>
              New Schedule
            </Heading>
          </HStack>
          <Box p={4} m={8} rounded={'xl'} backgroundColor={'white'} shadow={2}>
            <FormControl>
              <FormControl.Label>
                <Stack space={3}>
                  <Heading size={'md'} color="#0e7490">Category</Heading>
                  <ScrollView horizontal={true}>
                    <HStack mt={2} mb={2}>
                      {[0, 1, 2, 3].map((index) => (
                        <TouchableOpacity key={index} activeOpacity={1} onPress={() => handleCategoryPress(index)}>
                          <Box backgroundColor={selectedCategory === index ? 'primary.700' : 'white'}
                            mr={3}
                            pl={4}
                            pr={4}
                            h={9}
                            rounded={'2xl'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            shadow={2}
                          >
                            <Text bold fontSize={'xs'} color={selectedCategory === index ? 'white' : 'primary.700'}>
                              {['Sport', 'Food', 'Work', 'Music'][index]}
                            </Text>
                          </Box>
                        </TouchableOpacity>
                      ))}
                      <Box p={3} rounded={'2xl'} justifyContent={'center'} alignItems={'center'} shadow={2} backgroundColor={'white'}>
                        <Ionicons color={'#0e7490'} name="add-outline" />
                      </Box>
                    </HStack>
                  </ScrollView>
                  <Heading size={'md'} color="#0e7490">Time</Heading>
                  <Input placeholder="06:00 - 07:00" />
                  <Heading size={'md'} color="#0e7490">Activity</Heading>
                  <Input placeholder="Sport" />
                  <Heading size={'md'} color="#0e7490">Description</Heading>
                  <Input placeholder="Exercise and Gym" />
                  <Button mt={2} backgroundColor={'primary.700'} onPress={handleSaveButtonPress}>
                    <Text textAlign={'center'} color={'white'}>
                      Save
                    </Text>
                  </Button>
                </Stack>
              </FormControl.Label>
            </FormControl>
          </Box>
        </Box>
        <Modal isOpen={showModal} onClose={closeModal}>
          <Modal.Content maxWidth="350" maxH="212">
            <Modal.CloseButton />
            <Modal.Header>New Schedule Success</Modal.Header>
            <Modal.Body>
              Your new schedule has been successfully saved.
            </Modal.Body>
            <Modal.Footer>
              <Button onPress={() => navigation.navigate("Calendar")}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Create;
