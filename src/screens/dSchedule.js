import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ScrollView, Alert } from 'react-native'
import { Heading, HStack, Text, Box, VStack, Button, Card, FlatList, Checkbox, } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { getSchedule } from "../actions/AuthAction";
import { deleteSchedule } from '../actions/AuthAction';


const DSchedule = () => {
  const [userSchedules, setUserSchedules] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const schedules = await getSchedule();
      // console.log('Notes:', notes);
      setUserSchedules(schedules);
    };

    const unsubscribe = navigation.addListener("focus", fetchData);

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const handleDeleteSchedule = async (scheduleId) => {
    try {
      const scheduleToDelete = userSchedules.find((schedule) => schedule.scheduleId === scheduleId);

      Alert.alert(
        'Konfirmasi Penghapusan',
        'Apakah kamu yakin untuk menghapus jadwal ini?',
        [
          {
            text: 'Tidak',
            style: 'cancel',
          },
          {
            text: 'Yakin',
            onPress: async () => {
              await deleteSchedule(scheduleId, userSchedules, setUserSchedules);
            },
          },
        ]
      );
    } catch (error) {
      console.error('Error deleting schedule:', error);
      Alert.alert('Error', 'Gagal menghapus jadwal. Silakan coba lagi.');
    }
  };

  const handleEditSchedule = (scheduleData) => {
    navigation.navigate('Edit_jadwal', { scheduleData });
  };

  const renderitem = ({ item }) => {
    let iconName = "shapes-outline";

    if (item.selectedSCategory === "Food") {
      iconName = "restaurant-outline";
    } else if (item.selectedSCategory === "Sport") {
      iconName = "basketball-outline";
    } else if (item.selectedSCategory === "Study") {
      iconName = "library-outline";
    } else if (item.selectedSCategory === "Work") {
      iconName = "code-working-outline";
    }

    return (
      <TouchableOpacity onPress={() => navigation.navigate('Detail_jadwal')}>
        <HStack
          mb={3}
          p={5}
          justifyContent={'space-between'}
          borderColor={'#176B87'}
          borderWidth={1}
          height={20}
          width={'100%'}
          borderRadius={10}>
          <HStack w={'45%'} justifyContent="flex-start" alignItems={'center'} space={3}>
            <Checkbox
              colorScheme="green"
              aria-label="Deskripsi aksesibilitas untuk Checkbox ini"
            />
            <Text color={'#176B87'} textAlign={'left'} alignItems={'flex-start'}>{item.stime} - {item.etime}</Text>
          </HStack>
          <HStack w={'55%'} justifyContent="space-between" alignItems={'center'}>
            <VStack>
              <HStack>
                <Ionicons name={iconName} color={"#176B87"} size={20} />
                <Heading mt={0.5} ml={1} color={'#176B87'} size={'xs'} >{item.activity}</Heading>
              </HStack>
              <Text color={'#176B87'}>
                {item.sdescription}
              </Text>
            </VStack>
            <HStack space={5}>
              <TouchableOpacity onPress={() => handleEditSchedule(item)} w={'25%'} >
                <Ionicons name="create-outline" size={20} color={'#176B87'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteSchedule(item.scheduleId)}>
                <Ionicons name="trash-outline" size={20} color={'red'} />
              </TouchableOpacity>
            </HStack>
          </HStack>
        </HStack>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <HStack ml={5} mt={5} justifyContent="flex-start" alignItems="center">
        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
          <Ionicons name="arrow-back-outline" size={40} color={'#176B87'} />
        </TouchableOpacity>
        <Box alignItems="center" flex={1} mr={10}>
          <Heading size="lg" color={'#176B87'}>
            Detail Schedule
          </Heading>
        </Box>
      </HStack>
      <VStack p={5}>
        <HStack justifyContent={'space-between'} >
          <Heading color={'#176B87'}>Today</Heading>
          <Button backgroundColor={'white'}>
            <Text color={'#176B87'}> Add New </Text>
          </Button>
        </HStack>
        <Text color={'#176B87'}>6 Task</Text>
      </VStack>
      <Card backgroundColor={'white'} borderTopRadius={30} borderBottomRadius={30} h={'78%'}>
        <FlatList
          data={userSchedules}
          renderItem={renderitem}
          keyExtractor={(item) => item.scheduleId}
        />
      </Card>
    </SafeAreaView>
  );
};

export default DSchedule;