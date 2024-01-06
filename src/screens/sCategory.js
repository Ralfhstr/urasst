import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Center, Heading, Text, HStack, ScrollView, VStack, Modal, FormControl, Input, Button, Alert, FlatList } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { addSCategory, getSCategory } from "../actions/AuthAction";

const SCategory = () => {
  const [scategory, setSCategory] = useState([]);
  const [cname, setCName] = useState("");
  const [isCreateCategoryModalOpen, setCreateCategoryModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const toggleSuccessModal = () => {
    setShowSuccessModal(!showSuccessModal);
  };

  const onAddSCategory = async () => {
    if (cname) {
      const data = {
        cname: cname
      };

      console.log(data);
      try {
        const user = await addSCategory(data);
        toggleSuccessModal();
        setTimeout(() => {
          navigation.replace("SCategory");
        }, 2000);
        navigation.replace("SCategory");
      } catch (error) {
        console.log("Error", error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log("Error", "Empty Data");
      toggleAlert("Empty Data");
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const scategorys = await getSCategory();
      console.log('scategorys:', scategorys);
      setSCategory(scategorys);
    };

    const unsubscribe = navigation.addListener("focus", fetchData);

    return () => {
      unsubscribe();
    };
  });


  const navigation = useNavigation();

  const renderitem = ({ item }) => {
    let iconName = "shapes-outline";

    if (item.cname === "Food") {
      iconName = "restaurant-outline";
    } else if (item.cname === "Transport") {
      iconName = "car-sport-outline";
    } else if (item.cname === "Game") {
      iconName = "game-controller-outline";
    }
    return (
      <Center>
        <HStack mt={4} p={4} w={'85%'} rounded={"2xl"} backgroundColor={"white"} justifyContent={'space-between'} alignItems={'center'} shadow={1} space={2}>
          <HStack alignItems={'center'} space={5}>
            <Ionicons name={iconName} color={"#0e7490"} size={40} />
            <Text color={'#0e7490'} fontSize={25} fontWeight={'bold'}>{item.cname}</Text>
          </HStack>
          <TouchableOpacity onPress={() => navigation.navigate('Edit_jadwal')}>
            <Ionicons name="create-outline" size={25} color={'#176B87'} />
          </TouchableOpacity>
        </HStack>
      </Center>
    );
  };

  return (
    <SafeAreaView>
      <HStack p={4} justifyContent={'space-around'} alignItems="center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={40} color="#0e7490" />
        </TouchableOpacity>
        <Box alignItems="center">
          <Heading color={'primary.700'} >Schedule Category</Heading>
        </Box>
        <TouchableOpacity onPress={() => setCreateCategoryModalOpen(true)}>
          <Ionicons name="add-circle-outline" size={35} color="#0e7490" />
        </TouchableOpacity>
      </HStack>
      <FlatList
        data={scategory}
        renderItem={renderitem}
        keyExtractor={(item) => item.sCategoryId}
      />
      <Modal isOpen={isCreateCategoryModalOpen} onClose={() => setCreateCategoryModalOpen(false)} size="lg">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Create Category</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Category Name</FormControl.Label>
              <Input onChangeText={(cname) => setCName(cname)} placeholder="Enter Category Name" />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button flex="1" onPress={() => { onAddSCategory(); }}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      {showAlert && (
        <Modal isOpen={showAlert} onClose={toggleAlert}>
          <Alert mx="$4" action="error" variant="solid">
            <AlertText fontWeight="$bold">Error!</AlertText>
            <AlertText>{alertMessage}</AlertText>
          </Alert>
        </Modal>
      )}
      {showSuccessModal && (
        <Modal isOpen={showSuccessModal} onClose={() => toggleSuccessModal()}>
          <Alert
            mx={4}
            action="success"
            variant="solid"
            bg="white"
            borderRadius={10}
            p={4}
          >
            <VStack alignItems="center">
              <Ionicons name="checkmark-circle" size={60} color="green" />
              <Text color="gray.700" mt={3} textAlign={"center"}>
                Registration Successful!
              </Text>
            </VStack>
          </Alert>
        </Modal>
      )}
    </SafeAreaView >
  );
};

export default SCategory;