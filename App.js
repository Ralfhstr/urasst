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
import Detail from "./screens/detailfinance";
import Edit from "./screens/editfinance";


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
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="Detail" component={Detail} options={noHead} />
          <Stack.Screen name="Edit" component={Edit} options={noHead} />
          <Stack.Screen name="Wallet" component={Wallet} options={noHead} />

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;