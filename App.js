import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import Edit_jadwal from "./screens/edit_jadwal";
import Home from "./screens/home";
import Wallet from "./screens/wallet";
import Setting from "./screens/setting";
import Calendar from "./screens/calendar";
import About from "./screens/about";
import Detail_savings from "./screens/detail_savings";
import Create_savings from "./screens/create_savings";
import CalendarScreen from "./src/screens/calender";
import Profile from "./src/screens/profile";
import DSchedule from "./src/screens/dSchedule";
import CSchedule from "./src/screens/CSchedule";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused}) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              Name = "home"
              iconSize = 25;
              break;
            case "Wallet":
              iconName = "wallet-outline";
              Name = 'wallet'
              iconSize = 25;
              break;
            case "Create_jadwal":
              iconName = "add-circle-outline";
              Name = "add-circle"
              iconSize = 50;
              break;
            case "Calendar":
              iconName = "calendar-outline";
              Name = "calendar"
              iconSize = 25;
              break;
            case "Setting":
              iconName = "person-outline";
              Name = "person"
              iconSize = 25;
              break;
          }
          return (
            <Ionicons
              name={focused ? Name : iconName}
              size={iconSize}
              color={"#0e7490"}
            />
          );
        },
        tabBarIconStyle: { marginTop: 10 },
        tabBarStyle: {
          position: "absolute",
          height: 75,
          paddingBottom: 10,
          marginBottom: 20,
          marginHorizontal: 20,
          borderRadius: 20
        },
        tabBarLabel: () => null
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Wallet" component={Wallet} options={noHead} />
      <Tab.Screen name="Calender" component={CalendarScreen} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
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
          <Stack.Screen 
          name="dSchedule"
          component={DSchedule}
          options={noHead}
          />
          <Stack.Screen 
          name="Edit_jadwal"
          component={Edit_jadwal}
          options={noHead}
          />
          <Stack.Screen 
          name="About"
          component={About}
          options={noHead}
          />
          <Stack.Screen 
          name="Detail_savings"
          component={Detail_savings}
          options={noHead}
          />
          <Stack.Screen 
          name="Create_savings"
          component={Create_savings}
          options={noHead}
          />
          <Stack.Screen 
          name="Edit_savings"
          component={Edit_savings}
          options={noHead}
          />
          <Stack.Screen 
          name="CSchedule"
          component={CSchedule}
          options={noHead}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;