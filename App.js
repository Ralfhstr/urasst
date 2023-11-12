import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/home";
import Wallet from "./screens/wallet";
import Create from "./screens/add";
import Setting from "./screens/setting";
import Calendar from "./screens/calendar";
import Category from "./screens/category";
<<<<<<< HEAD
import Budget from "./screens/budget";
=======
import Detail from "./screens/detailfinance";
import Edit from "./screens/editfinance";

>>>>>>> ff104b511013ee0917b1ccb55e7e7ddb9a36ff0e

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName, iconName1;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              iconName1 = "home";
              iconSize = 25;
              break;
            case "Wallet":
              iconName = "wallet-outline";
              iconName1 = "wallet";
              iconSize = 25;
              break;
            case "Create":
              iconName = "add-circle-outline";
              iconName1 = "add-circle";
              iconSize = 50;
              break;
            case "Calendar":
              iconName = "calendar-outline";
              iconName1 = "calendar";
              iconSize = 25;
              break;
            case "Setting":
              iconName = "person-outline";
              iconName1 = "person";
              iconSize = 25;
              break;
          }
          return (
            <Ionicons
              name={focused ? iconName1 : iconName}
              size={iconSize}
              color={'#0e7490'}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          position: "absolute",
          height: 70,
          borderTopWidth: 0,
          marginBottom: 20,
          marginHorizontal: 20,
          borderRadius: 20,
          backgroundColor: 'white',
        },
        tabBarLabel: () => null
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Wallet" component={Wallet} options={noHead} />
      <Tab.Screen name="Create" component={Create} options={noHead} />
      <Tab.Screen name="Calendar" component={Calendar} options={noHead} />
      <Tab.Screen name="Setting" component={Setting} options={noHead} />
      <Tab.Screen name="Detail" component={Detail} options={noHead} />
      <Tab.Screen name="Edit" component={Edit} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Tabs} options={noHead} />
          <Stack.Screen name="Wallet" component={Tabs} options={noHead} />
          <Stack.Screen name="Create" component={Tabs} options={noHead} />
          <Stack.Screen name="Calendar" component={Tabs} options={noHead} />
          <Stack.Screen name="Setting" component={Tabs} options={noHead} />
          <Stack.Screen name="Category" component={Category} options={noHead} />
          <Stack.Screen name="Budget" component={Budget} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;