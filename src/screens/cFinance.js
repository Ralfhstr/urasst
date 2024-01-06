import React, { useState, useEffect } from 'react';
import { Box, Center, Stack, Heading, Text, HStack, VStack, FormControl, Alert, Button, Modal, Input, ScrollView } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addFinance, getFCategory } from "../actions/AuthAction";


const Cfinance = () => {
    const [fcategory, setFCategory] = useState([]);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [amount, setAmount] = useState("");
    const [fdescription, setFDescription] = useState("");

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const navigation = useNavigation();

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    const hideDatepicker = () => {
        setShowDatePicker(false);
    };

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        hideDatepicker();
        setSelectedDate(currentDate);
        console.log(selectedDate);
    };

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionPress = (option) => {
        console.log('Selected Category:', option);
        setSelectedOption(option);
    };

    const [selectedBox, setSelectedBox] = useState(null);

    const handleBoxPress = (boxName) => {
        console.log('Selected Category:', boxName);
        setSelectedBox(boxName);
    };

    const isBoxSelected = (boxName) => {
        return selectedBox === boxName;
    };

    useEffect(() => {
        const fetchData = async () => {
            const fcategorys = await getFCategory();
            console.log('fcategorys:', fcategorys);
            setFCategory(fcategorys);
        };

        const unsubscribe = navigation.addListener("focus", fetchData);

        return () => {
            unsubscribe();
        };
    }, [navigation]);

    const toggleAlert = (message) => {
        setShowAlert(!showAlert);
        setAlertMessage(message);
    };

    const toggleSuccessModal = () => {
        setShowSuccessModal(!showSuccessModal);
    };

    const formatSelectedDate = (date) => {
        return new Intl.DateTimeFormat('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }).format(date);
    };

    const onAddFinance = async () => {
        if (selectedOption && amount && selectedBox && selectedDate && fdescription) {
            const data = {
                ftype: selectedOption,
                amount: amount,
                selectedFCategory: selectedBox,
                fdate: formatSelectedDate(selectedDate),
                fdescription: fdescription,
            };

            console.log(data);
            try {
                const user = await addFinance(data);
                console.log("addFinance success:", user);
                toggleSuccessModal();
                setTimeout(() => {
                    navigation.replace("Tabs");
                }, 2000);
                navigation.replace("Tabs");
            } catch (error) {
                console.log("Error from addFinance:", error.message);
                toggleAlert(error.message);
            }
        } else {
            console.log("Error", "Data tidak lengkap");
            console.log(amount)
            toggleAlert("Data tidak lengkap");
        }
    };

    return (
        <SafeAreaView>
            <HStack ml={5} mt={5} justifyContent="flex-start" alignItems="center">
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-outline" size={40} color={'#0e7490'} />
                </TouchableOpacity>
                <Box alignItems="center" flex={1} mr={10}>
                    <Heading color={'primary.700'}>Create Finance</Heading>
                </Box>
            </HStack>
            <FormControl>
                <HStack p={5} w={'100%'} justifyContent={'center'} alignItems={'center'} space={2}>
                    <Button
                        onPress={() => handleOptionPress('Outcome')}
                        bg={selectedOption === 'Outcome' ? '#0e7490' : 'white'}
                        rounded={50}
                        p={4}
                        justifyContent={'center'}
                        alignItems={'center'}
                        w={'50%'}
                        flex={1}
                    >
                        <Text fontSize={20} color={selectedOption === 'Outcome' ? 'white' : '#0e7490'}>Outcome</Text>
                    </Button>
                    <Button
                        onPress={() => handleOptionPress('Income')}
                        bg={selectedOption === 'Income' ? '#0e7490' : 'white'}
                        rounded={50}
                        p={4}
                        ml={2}
                        justifyContent={'center'}
                        alignItems={'center'}
                        w={'50%'}
                        flex={1}
                    >
                        <Text fontSize={20} color={selectedOption === 'Income' ? 'white' : '#0e7490'}>Income</Text>
                    </Button>
                </HStack>
                <Input display={'none'} fontSize={'xl'} color={'#0e7490'} value={selectedOption} />
            </FormControl>
            <Center>
                <Stack p={4} w={'90%'} h={560} rounded="2xl" backgroundColor={'white'} shadow={1} space={2}>
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                fontSize: 20,
                                color: "#0e7490",
                            }}>
                            Amount
                        </FormControl.Label>
                        <Center>
                            <Input
                                variant="underlined"
                                color={'#0e7490'} fontSize={'2xl'}
                                width={'80%'} fontWeight={'bold'}
                                keyboardType="numeric"
                                placeholder="0"
                                onChangeText={(amount) => setAmount(amount)}
                                InputLeftElement={<Text fontSize="2xl" color={'#0e7490'}>$</Text>}
                            />
                        </Center>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                fontSize: 20,
                                color: "#0e7490",
                            }}>
                            Categories
                        </FormControl.Label>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {fcategory.map((item) => {
                                let iconName = "shapes-outline";

                                if (item.cname === "Food") {
                                    iconName = "restaurant-outline";
                                } else if (item.cname === "Transport") {
                                    iconName = "car-sport-outline";
                                } else if (item.cname === "Game") {
                                    iconName = "game-controller-outline";
                                } else if (item.cname === "Bank") {
                                    iconName = "card-outline";
                                }
                                return (
                                    <TouchableOpacity activeOpacity={1} key={item.fCategoryId} onPress={() => handleBoxPress(item.cname)}>
                                        <VStack m={2} alignItems={'center'}>
                                            <Box
                                                w={65}
                                                h={65}
                                                mb={2}
                                                rounded={'lg'}
                                                borderColor="white"
                                                borderWidth="1"
                                                backgroundColor={isBoxSelected(item.cname) ? '#0e7490' : 'white'}
                                                shadow={5}
                                                justifyContent={'center'}
                                                alignItems={'center'}
                                            >
                                                <Ionicons name={iconName} size={40} color={isBoxSelected(item.cname) ? 'white' : '#0e7490'} />
                                            </Box>
                                            <Text color={'#0e7490'} fontSize={14}>{item.cname}</Text>
                                        </VStack>
                                    </TouchableOpacity>
                                );
                            })}
                            <TouchableOpacity onPress={() => navigation.navigate('FCategory')}>
                                <VStack m={2} alignItems={'center'}>
                                    <Box
                                        w={65}
                                        h={65}
                                        mb={2}
                                        rounded={'lg'}
                                        borderColor="white"
                                        borderWidth="1"
                                        backgroundColor={'white'}
                                        shadow={5}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                    >
                                        <Ionicons name={'add-outline'} size={40} color={'#0e7490'} />
                                    </Box>
                                    <Text color={'#0e7490'} fontSize={14}>Add</Text>
                                </VStack>
                            </TouchableOpacity>
                        </ScrollView>
                        <Input display={'none'} fontSize={'xl'} color={'#0e7490'} value={selectedBox} />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                fontSize: 20,
                                color: "#0e7490",
                            }}>
                            Date
                        </FormControl.Label>
                        <Input
                            w={'100%'}
                            borderWidth={1}
                            borderRadius="md"
                            textAlign={'left'}
                            color={'#0e7490'}
                            fontSize={'xl'}
                            value={formatSelectedDate(selectedDate)}
                            InputLeftElement={
                                <TouchableOpacity onPress={showDatepicker} style={{ marginLeft: 10 }}>
                                    <Ionicons name="calendar-outline" size={30} color={'#0e7490'} />
                                </TouchableOpacity>
                            }
                        />
                        {showDatePicker && (
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}
                    </FormControl>
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                fontSize: 20,
                                color: "#0e7490",
                            }}>
                            Description
                        </FormControl.Label>
                        <Input fontSize={'xl'} color={'#0e7490'} onChangeText={(fdescription) => setFDescription(fdescription)} />
                    </FormControl>
                    <Center>
                        <Button w={'80%'} p={4} mb={4} rounded={"2xl"} backgroundColor={'#0e7490'} textAlign={'center'} onPress={() => { onAddFinance(); }} mt={'8%'}>
                            <Text fontSize={15} color={'white'} bold> Add </Text>
                        </Button>
                    </Center>
                </Stack>
            </Center>
            {showAlert && (
                <Modal isOpen={showAlert} onClose={() => toggleAlert()}>
                    <Alert
                        mx={4}
                        action="error"
                        variant="solid"
                        bg="white"
                        borderRadius={10}
                        p={4}
                    >
                        <VStack alignItems="center">
                            <Ionicons name="alert-circle" size={60} color="red" />
                            <Text color="gray.700" mt={3} textAlign={"center"}>
                                {alertMessage}
                            </Text>
                        </VStack>
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
                                Added Successful!
                            </Text>
                        </VStack>
                    </Alert>
                </Modal>
            )}
        </SafeAreaView >
    );
};

export default Cfinance;