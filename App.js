import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
// import Ionicons from "@expo/vector-icons/Ionicons";
import { Ionicons } from '@expo/vector-icons';
import Detail_jadwal from "./screens/detail_jadwal";
import Edit_jadwal from "./screens/edit_jadwal";
import Jadwal from "./screens/jadwal";
import Home from "./screens/home";
import Wallet from "./screens/wallet";
import Create from "./screens/add";
import Setting from "./screens/setting";
import Calendar from "./screens/calendar";
import Create_jadwal from "./screens/create_jadwal";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              iconSize = 25;
              break;
            case "Wallet":
              iconName = "wallet-outline";
              iconSize = 25;
              break;
            case "Create":
              iconName = "add-circle-outline";
              iconSize = 50;
              break;
            case "Calendar":
              iconName = "calendar-outline";
              iconSize = 25;
              break;
            case "Setting":
              iconName = "person-outline";
              iconSize = 25;
              break;
            case "Create_jadwal":
              iconName = "create-outline";
              iconSize = 25;
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={iconSize}
              color={"#0e7490"}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          position: "absolute",
          height: 75,
          paddingBottom: 10,
          borderTopWidth: 0,
          marginBottom: 20,
          marginHorizontal: 20,
          borderRadius: 20
        },
        tabBarLabel: () => null
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Wallet" component={Wallet} options={noHead} />
      <Tab.Screen name="Create" component={Create} options={noHead} />
      <Tab.Screen name="Calendar" component={Calendar} options={noHead} />
      <Tab.Screen name="Setting" component={Setting} options={noHead} />
      <Tab.Screen name="Create_jadwal" component={Create_jadwal} options={noHead}/>
      <Tab.Screen name="Jadwal" component={Jadwal} options={noHead} />
      <Tab.Screen name="Edit_jadwal" component={Edit_jadwal} options={noHead}/>
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Tabs"
          component={Tabs}
          options={noHead}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;