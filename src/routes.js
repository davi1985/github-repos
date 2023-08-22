import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/Octicons';

import { createStackNavigator } from '@react-navigation/stack';
import { HeaderRight } from './components/Header';
import { AboutScreen, Organizations } from './pages/AboutScreen';
import { Repositories } from './pages/Repositories';
import { Welcome } from './pages/Welcome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from './styles';

export const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const UserTabs = () => {
  const navigation = useNavigation();

  const signOut = async () => {
    AsyncStorage.clear();

    navigation.navigate('Welcome');
  };

  return (
    <Tab.Navigator
      initialRouteName="User"
      screenOptions={{
        headerRight: () => <HeaderRight onSignOut={signOut} />,
        tabBarStyle: {
          backgroundColor: colors.secondary,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.white,
      }}
    >
      <Tab.Screen
        name="Repositories"
        component={Repositories}
        options={{
          headerTitle: 'Repositories',
          tabBarIcon: ({ color }) => (
            <Icon name="list-unordered" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerTitle: 'About',
          title: 'About',
          tabBarIcon: ({ color }) => (
            <Icon name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const Routes = (userLogged = false) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userLogged && (
          <Stack.Screen
            name="User"
            component={UserTabs}
            options={{
              headerShown: false,
            }}
          />
        )}

        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
