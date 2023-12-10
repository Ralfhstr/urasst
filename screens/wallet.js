import React, { useState } from 'react';
import { Box, Center, Stack, Heading, Text, HStack, VStack, Progress, Checkbox, ScrollView, NativeBaseProvider, Button, Modal, Divider, FlatList} from 'native-base';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import Gap from '../components/Gap';

const Wallet = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCheckboxPress = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const transactions = [
    { id: '1', icon: 'restaurant-outline', label: 'Breakfast', description: 'nasi jagung', amount: '-$30', date: '14 sept' },
    { id: '2', icon: 'cash-outline', label: 'Transfer', description: 'tarik tunai', amount: '-$10', date: '20 Oct'},
    // Add more transactions if needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.5} onPress={handleCheckboxPress}>
      <Center>
        <Box
          p={4}
          mb={4}
          w="80%"
          rounded={'2xl'}
          backgroundColor={'white'}
          shadow={1}
          justifyContent={'space-between'}
          flexDirection={'row'}
        >
          <Ionicons name={item.icon} size={20} color="#0e7490" />
          <VStack flex={1}>
            <HStack>
              <Heading color={'#0e7490'} fontSize={'sm'}>
                {item.label}
              </Heading>
            </HStack>
            <Text color={'#0e7490'} fontSize={'xs'}>
              {item.description}
            </Text>
          </VStack>
          <VStack>
            <HStack>
              <Heading fontSize={'sm'} color={'#FF0000'}>
                {item.amount}
              </Heading>
            </HStack>
            <Text color={'#0e7490'} fontSize={'xs'}>
              {item.date}
            </Text>
          </VStack>
        </Box>
      </Center>
    </TouchableOpacity>
  );

  const navigation = useNavigation();

  return (
    <NativeBaseProvider>
      <SafeAreaView flex={1}>
        <Box flex={1}>
          <Heading mt={6} ml={6} color={'#0e7490'}><Ionicons name="wallet-sharp" size={24} color="#0e7490" />  Balance </Heading>
          <Center>
            <Box p={4} mt={5} w={80} h={130} rounded="2xl" overflow="hidden" borderColor="white" borderWidth="1" backgroundColor={'white'} shadow={1}>
              <Stack space={3}>
                <HStack justifyContent={"space-between"}>
                  <Heading size="lg" color={"#0e7490"}>
                    Money
                  </Heading>
                  <Heading ml={-1} fontSize="2xl" color={"#0e7490"}>$8,500</Heading>
                </HStack>
                <Progress value={80}/>
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
          {/* <ScrollView> */}
          <Heading mt={100} mb={5} ml={6} color={'#0e7490'}><Ionicons name="pricetags-outline" size={24} color="#0e7490" /> Transactions</Heading>
          <FlatList
              data={transactions}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            />
        </Box>
        
        <Modal isOpen={showModal} onClose={handleCloseModal} slideIn="bottom">
          <Modal.Content 
          maxWidth='100%'
          height={350}
          justifyContent="flex-end"
          flex={1}
          position="absolute"
          bottom={0}
          // borderTopRadius={10}
          roundedTop={20}
          backgroundColor="white"
          
          >
            <Modal.Body>
            <Stack>
              
                <HStack p={4} mb={4} rounded={"2xl"}  justifyContent={'space-between'} >
                  <Heading color={'#0e7490'} fontSize={20}>
                  Detail Transaction
                  </Heading>
                  <TouchableOpacity acitveOpacity={0.5} onPress={() => navigation.navigate('Edit')}>
                    <Box h={28} w={50}  rounded={10} backgroundColor={'#0e7490'} shadow={1}>
                      <Text color={"white"} fontSize={18} >
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
              <HStack p={4} mb={4} w={"80%"} rounded={"2xl"} backgroundColor={"white"} justifyContent={'space-between'} shadow={1} >
                <Ionicons flex={0.2}   name="restaurant-outline" size={25} color="#0e7490" />
                  <VStack flex={1}>
                    <HStack>
                      <Heading color={'#0e7490'} fontSize={25}> Breakfast</Heading>
                    </HStack>
                    <Text color={'#0e7490'} fontSize={20}>nasi jagung</Text>
                    <HStack>
                      <Heading fontSize={25} color={'#FF0000'}> -$30</Heading>
                    </HStack>
                    <Divider my="2" _light={{
                          bg: "muted.800"
                        }} _dark={{
                          bg: "muted.50"                          
                        }} />
                    <HStack>
                    <Text color={'#0e7490'} fontSize={20}>14 sept</Text>
                    </HStack>
                  </VStack>
              </HStack>
            </Stack>
            </Center>
            <Center>
              <Button.Group>
              <Button p={4} mb={4} rounded={"2xl"} backgroundColor={'#FF0000'} justifyContent={'space-between'} shadow={1} onPress={handleCloseModal}>
                Delete Transaction
              </Button>
              </Button.Group>
            </Center>
          

            </Modal.Body>
            
          </Modal.Content>
        </Modal>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Wallet;