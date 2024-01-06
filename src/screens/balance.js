import React, { useState, useEffect } from 'react';
import { Box, Center, Stack, Heading, Text, HStack, VStack, Progress, Image, Button, Modal, Divider, FlatList } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { getFinance } from "../actions/AuthAction";

const Balance = () => {
  const [userFinance, setUserFinance] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const finance = await getFinance();
      console.log('Finance:', finance);
      setUserFinance(finance);
    };

    const unsubscribe = navigation.addListener("focus", fetchData);

    return () => {
      unsubscribe();
    };
  });

  const handleCheckboxPress = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const renderItem = ({ item }) => {
    let iconName = "shapes-outline";
    let iconAmount = "remove-outline";
    let amountColor = "#FF0000";

    if (item.selectedFCategory === "Food") {
      iconName = "restaurant-outline";
    } else if (item.selectedFCategory === "Transport") {
      iconName = "car-sport-outline";
    } else if (item.selectedFCategory === "Game") {
      iconName = "game-controller-outline";
    } else if (item.selectedFCategory === "Bank") {
      iconName = "card-outline";
    }

    if (item.ftype === "Income") {
      amountColor = "#008000"; 
      iconAmount = "add-outline"; 
    }

    return (
      <TouchableOpacity activeOpacity={0.5} onPress={handleCheckboxPress}>
        <Center>
          <Box
            p={4}
            mb={4}
            w="90%"
            rounded={'2xl'}
            backgroundColor={'white'}
            shadow={1}
            justifyContent={'space-between'}
            flexDirection={'row'}
            alignItems={'center'}
          >
            <HStack alignItems={'center'}>
              <Ionicons name={iconName} size={40} color="#0e7490" />
              <VStack ml={2}>
                <Text color={'#0e7490'} fontSize={'lg'}>
                  {item.fdate}
                </Text>
                <Heading color={'#0e7490'} fontSize={'xl'}>
                  {item.fdescription}
                </Heading>
              </VStack>
            </HStack>
            <HStack alignItems={'center'}>
            <Ionicons name={iconAmount} size={15} color={amountColor} />
              <Heading fontSize={'xl'} color={amountColor}>
                ${item.amount}
              </Heading>
            </HStack>
          </Box>
        </Center>
      </TouchableOpacity>
    );
  };

  const renderEmptyComponent = () => {
    return (
      <Center>
        <VStack p={4} w={'90%'} h={320} rounded="2xl" overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'} alignItems={'center'} shadow={1}>
          <Image source={require("../assets/history.jpg")} alt="No Schedule" size="2xl" />
          <Heading mt={-3} color={'blue.400'}>Hedon Time!</Heading>
        </VStack>
      </Center>
    );
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <HStack mt={6} ml={8}>
        <Ionicons name="wallet" size={24} color="#0e7490" />
        <Heading ml={3} color={'#0e7490'}>Balance</Heading>
      </HStack>
      <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("Budget")}>
        <Center>
          <Box p={4} mt={5} w={'90%'} h={130} rounded="2xl" overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'} shadow={1}>
            <Stack space={3}>
              <HStack justifyContent={"space-between"}>
                <Heading size="lg" color={"primary.700"}>
                  Money
                </Heading>
                <Heading ml={-1} fontSize="2xl" color={"primary.700"}>$8,500</Heading>
              </HStack>
              <Progress value={80} />
              <HStack justifyContent={"space-between"}>
                <Text fontSize={"sm"} color={'#be123c'}>
                  spent $6,800
                </Text>
                <Text fontSize={"sm"} color={'#15803d'}>
                  left $1,700
                </Text>
              </HStack>
            </Stack>
          </Box>
        </Center>
      </TouchableOpacity>
      <HStack m={7} justifyContent={'space-between'}>
        <Heading justifyContent={'center'} color={'primary.700'}><Ionicons name="pricetags-outline" size={24} color="#0e7490" />   History</Heading>
        <TouchableOpacity onPress={() => navigation.navigate('Cfinance')}>
          <Ionicons name="add-circle-outline" size={30} color="#0e7490" />
        </TouchableOpacity>
      </HStack>
      <FlatList
        data={userFinance}
        renderItem={renderItem}
        keyExtractor={(item) => item.financeId}
        ListEmptyComponent={renderEmptyComponent}
      />

      <Modal isOpen={showModal} onClose={handleCloseModal} slideIn="bottom">
        <Modal.Content
          maxWidth='100%'
          width={'95%'}
          height={'56%'}
          justifyContent="flex-end"
          position="absolute"
          bottom={0}
          roundedTop={20}
          backgroundColor="white"
        >
          <Modal.Body>
            <Stack>
              <HStack p={4} mb={4} rounded={"2xl"} justifyContent={'space-between'} >
                <Heading color={'#0e7490'} fontSize={20}>
                  Detail Transaction
                </Heading>
                <TouchableOpacity acitveOpacity={0.5} onPress={() => navigation.navigate('Edit')}>
                  <Box w={'130%'} h={9} rounded={10} backgroundColor={'#0e7490'} shadow={1} alignItems={'center'} justifyContent={'center'}>
                    <Text color={"white"} fontSize={18} justifyContent={'center'}>
                      <Ionicons name="create-outline" size={20} color={"white"} />
                      edit
                    </Text>
                  </Box>
                </TouchableOpacity>
              </HStack>
            </Stack>
            <Center>
              {/* <Box alignItems="center" p={4} mt={5} w={"90%"} h={130} rounded="2xl" overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'}  > */}
              <Stack>
                <HStack p={4} mb={4} w={"95%"} rounded={"2xl"} backgroundColor={"white"} shadow={1} >
                  <Ionicons name="restaurant-outline" size={25} color="#0e7490" />
                  <VStack flex={1} ml={3}>
                    <HStack>
                      <Heading color={'#0e7490'} fontSize={25}>Breakfast</Heading>
                    </HStack>
                    <Text ml={1.5} color={'#0e7490'} fontSize={20}>nasi jagung</Text>
                    <HStack>
                      <Heading fontSize={25} color={'#FF0000'}> -$30</Heading>
                    </HStack>
                    <Divider justifyContent={'flex-end'} my="2" _light={{
                      bg: "muted.800"
                    }} _dark={{
                      bg: "muted.50"
                    }} />
                    <HStack justifyContent={'space-between'}>
                      <Ionicons name="calendar-outline" size={25} color="#0e7490" />
                      <Text ml={1.5} color={'#0e7490'} fontSize={15}>14 sept</Text>
                    </HStack>
                  </VStack>
                </HStack>
              </Stack>
            </Center>
            <Center flex={1}>
              <Button p={4} mb={4} w={'95%'} justifyItems={'center'} alignItems={'center'} rounded={"2xl"} backgroundColor={'#FF0000'} borderColor={'black'} borderWidth={'1'} shadow={1} onPress={handleCloseModal}>
                <Text color={'white'} fontSize={18} bold>
                  Delete Transaction
                </Text>
              </Button>
            </Center>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </SafeAreaView>
  );
};

export default Balance;