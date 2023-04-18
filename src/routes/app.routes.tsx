import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import DietRecord from '../screens/DietRecord';
import Statistics from '../screens/Statistics';
import RightScreen from '../screens/RightScreen';
import WrongScreen from '../screens/WrongScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (

        <Navigator screenOptions={{headerShown: false}}>

            <Screen
                name='home'
                component={Home}
            />

            <Screen
                name='dietrecord'
                component={DietRecord}
            />

            <Screen
                name='rightscreen'
                component={RightScreen}
            />
            <Screen
                name='statistics'
                component={Statistics}
            />
            <Screen
                name='wrongScreen'
                component={WrongScreen}
            />




        </Navigator>
    )
}