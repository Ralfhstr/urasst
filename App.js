import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import Edit_jadwal from "./screens/edit_jadwal";
import Jadwal from "./screens/jadwal";
import Home from "./screens/home";
import Wallet from "./screens/wallet";
import Setting from "./screens/setting";
import Calendar from "./screens/calendar";
import Create_jadwal from "./screens/create_jadwal";


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
            case "Create_jadwal":
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
          }
          return (
            <Ionicons
              name={iconName}
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
      <Tab.Screen name="Create_jadwal" component={Create_jadwal} options={noHead}/>
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
          <Stack.Screen 
          name="Tabs"
          component={Tabs}
          options={noHead}
          />
          <Stack.Screen 
          name="Jadwal"
          component={Jadwal}
          options={noHead}
          />
          <Stack.Screen 
          name="Edit_jadwal"
          component={Edit_jadwal}
          options={noHead}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;