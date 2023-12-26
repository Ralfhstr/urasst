import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./src/screens/home";
import Wallet from "./src/screens/wallet";
import Profile from "./src/screens/profile";
import Calendar from "./src/screens/calendar";
import Jadwal from "./src/screens/jadwal";
import Category from "./src/screens/category";
import Budget from "./src/screens/budget";
import Create from "./src/screens/create";
import Detail from "./src/screens/detailfinance";
import Edit from "./src/screens/editfinance";
import Edit_Profile from "./src/screens/edit_profile";
import Awal from "./src/screens/awal";
import Login from "./src/screens/login";
import Register from "./src/screens/register";
import Edit_jadwal from "./src/screens/edit_jadwal";
import Create_jadwal from "./src/screens/create_jadwal";
import About from "./src/screens/about";
import Detail_savings from "./src/screens/detail_savings";
import Create_savings from "./src/screens/create_savings";
import Edit_savings from "./src/screens/edit_savings";

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
            case "Calendar":
              iconName = "calendar-outline";
              iconName1 = "calendar";
              iconSize = 25;
              break;
            case "Profile":
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
      <Tab.Screen name="Calendar" component={Calendar} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Awal" component={Awal} options={noHead} />
          <Stack.Screen name="Login" component={Login} options={noHead} />
          <Stack.Screen name="Register" component={Register} options={noHead} />
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="Jadwal" component={Jadwal} options={noHead} />
          <Stack.Screen name="Category" component={Category} options={noHead} />
          <Stack.Screen name="Budget" component={Budget} options={noHead} />
          <Stack.Screen name="Detail" component={Detail} options={noHead} />
          <Stack.Screen name="Edit" component={Edit} options={noHead} />
          <Stack.Screen name="Create" component={Create} options={noHead} />
          <Stack.Screen name="Edit_Profile" component={Edit_Profile} options={noHead} />
          <Stack.Screen name="Edit_jadwal" component={Edit_jadwal} options={noHead} />
          <Stack.Screen name="Detail_savings" component={Detail_savings} options={noHead} />
          <Stack.Screen name="Create_savings" component={Create_savings} options={noHead} />
          <Stack.Screen name="Edit_savings" component={Edit_savings} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;