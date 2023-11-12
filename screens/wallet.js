import { Heading, Center, Text, Box, HStack, } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Detail from "./detailfinance";
import { TouchableOpacity, ScrollView } from "react-native";
import Gap from "../components/Gap";
import Ionicons from "@expo/vector-icons/Ionicons";

const Wallet = () => {
  const navigation = useNavigation();
  
  const incomeData = [
    { id: "1", title: "Pemasukan 1", amount: "200000" },
    { id: "2", title: "Pemasukan 2", amount: "150000" },
  ];

  const expenseData = [
    { id: "1", title: "Pengeluaran 1", amount: "100000" },
    { id: "2", title: "Pengeluaran 2", amount: "50000" },
  ];

  const totalIncome = incomeData.reduce(
    (total, item) => total + parseFloat(item.amount),
    0
  );

  const totalExpense = expenseData.reduce(
    (total, item) => total + parseFloat(item.amount),
    0
  );

  const totalBalance = totalIncome - totalExpense;

  
  return (
        <SafeAreaView flex={1} backgroundColor={"#427D9D"}>
        <ScrollView>
        <Center flex={1} >
  
          <Box p={10}>
            <Box flexDirection="row">
            <TouchableOpacity acitveOpacity={0.5} onPress={() => navigation.navigate('Home')}>
            <Ionicons name="person-circle-outline" color="#fff" size={50} />
            </TouchableOpacity>
                <Box>
                    <Text fontSize={20}  color="#fff" >Hello mr. White</Text>
                    <Text fontSize={20} fontWeight="bold" color="#fff" >Wellcome</Text>
                </Box>
            </Box>
              
            <Box p={30} bg="#fff" alignItems="center" rounded={25} width={375}>
                <Box alignItems="center">
                    <Text fontSize={20} fontWeight="bold" color="#333" >
                        Total Balance
                    </Text>
                    <Text fontSize={50} fontWeight="bold" color="#333" >
                    {`Rp ${totalBalance}`}
                    </Text>
                </Box>
                <Gap height={20}/>
                <HStack space={2} justifyContent={'space-between'} alignItems="center">
                    <Box flexDirection="row">
                    <Ionicons name="arrow-up-circle-outline" color="#54B435" size={40} />
                        <Box>
                            <Text fontSize={15}  color="#54B435" >Pemasukan</Text>
                            <Text fontSize={18} fontWeight="bold" color="#54B435" >
                            {`Rp ${totalIncome}`}
                            </Text>
                        </Box>
                    <Gap width={60}/>
                    <Ionicons name="arrow-down-circle-outline" size={40} color="#ef4444"/>
                        <Box>
                            <Text fontSize={15}  color="#ef4444" >Pengeluaran</Text>
                            <Text fontSize={18} fontWeight="bold" color="#ef4444" >
                            {`Rp ${totalExpense}`}
                            </Text>
                        </Box>
                    
                    </Box>
                </HStack>
            </Box>

          </Box>
        </Center>


        <Box flexDirection="row" paddingLeft={10}>
        <Text fontSize={20} fontWeight="bold" color="#fff" >Riwayat Transaksi</Text>
        <Ionicons name="receipt-outline" size={20} color="#fff" paddingLeft={5}/>
        </Box>
        <Center flex={1} bg="#427D9D" >

        <Box>
        <TouchableOpacity acitveOpacity={0.5} onPress={() => navigation.navigate('Detail')}>
          <Box p={30} bg="#fff" alignItems="center" rounded={25} flexDirection="row">
          <Ionicons name="cellular-outline" size={30} color="#333" paddingLeft={5}/>
          <Gap width={10}/>
            <Text fontSize={20}>
              Kuota
            </Text>
            <Gap width={170}/>
            <Text fontSize={20}>
              40.000
            </Text>
          </Box>
        </TouchableOpacity>

        <Gap height={20}/>
        <TouchableOpacity acitveOpacity={0.5} onPress={() => navigation.navigate('Detail')}>
          <Box p={30} bg="#fff" alignItems="center" rounded={25} flexDirection="row">
          <Ionicons name="pizza-outline" size={30} color="#333" paddingLeft={5}/>
          <Gap width={10}/>
            <Text fontSize={20}>
              Makan & Minum
            </Text>
            <Gap width={90}/>
            <Text fontSize={20}>
              30.000
            </Text>
          </Box>
        </TouchableOpacity>

        <Gap height={20}/>
        <TouchableOpacity acitveOpacity={0.5} onPress={() => navigation.navigate('Detail')}>
          <Box p={30} bg="#fff" alignItems="center" rounded={25} flexDirection="row">
          <Ionicons name="game-controller-outline" size={30} color="#333" paddingLeft={5}/>
          <Gap width={10}/>
            <Text fontSize={20}>
              Top-Up game
            </Text>
            <Gap width={100}/>
            <Text fontSize={20}>
              150.000
            </Text>
          </Box>
        </TouchableOpacity>

        <Gap height={20}/>
        <TouchableOpacity acitveOpacity={0.5} onPress={() => navigation.navigate('Detail')}>
          <Box p={30} bg="#fff" alignItems="center" rounded={25} flexDirection="row">
          <Ionicons name="cart-outline" size={30} color="#333" paddingLeft={5}/>
          <Gap width={10}/>
            <Text fontSize={20}>
              Belanja
            </Text>
            <Gap width={145}/>
            <Text fontSize={20}>
              500.000
            </Text>
          </Box>
        </TouchableOpacity>

        <Gap height={20}/>
        <TouchableOpacity acitveOpacity={0.5} onPress={() => navigation.navigate('Detail')}>
          <Box p={30} bg="#fff" alignItems="center" rounded={25} flexDirection="row">
          <Ionicons name="cellular-outline" size={30} color="#333" paddingLeft={5}/>
          <Gap width={10}/>
            <Text fontSize={20}>
              Kuota
            </Text>
            <Gap width={170}/>
            <Text fontSize={20}>
              40.000
            </Text>
          </Box>
        </TouchableOpacity>

        <Gap height={20}/>
        <TouchableOpacity acitveOpacity={0.5} onPress={() => navigation.navigate('Detail')}>
          <Box p={30} bg="#fff" alignItems="center" rounded={25} flexDirection="row">
          <Ionicons name="cellular-outline" size={30} color="#333" paddingLeft={5}/>
          <Gap width={10}/>
            <Text fontSize={20}>
              Kuota
            </Text>
            <Gap width={170}/>
            <Text fontSize={20}>
              40.000
            </Text>
          </Box>
        </TouchableOpacity>
        
        <Gap height={20}/>
        <TouchableOpacity acitveOpacity={0.5} onPress={() => navigation.navigate('Detail')}>
          <Box p={30} bg="#fff" alignItems="center" rounded={25} flexDirection="row">
          <Ionicons name="cellular-outline" size={30} color="#333" paddingLeft={5}/>
          <Gap width={10}/>
            <Text fontSize={20}>
              Kuota
            </Text>
            <Gap width={170}/>
            <Text fontSize={20}>
              40.000
            </Text>
          </Box>
        </TouchableOpacity>
        </Box>

        </Center>
        </ScrollView>
        </SafeAreaView>
  );
};

export default Wallet