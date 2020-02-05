import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Notas from './pages/Notas';
import SignIn from './pages/SignIn';

const Routes = createAppContainer(createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login QuiosqApp',
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
    Notas : {
        screen: Notas,
        navigationOptions: {
            title: 'Notas',
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
    SignIn : {
          screen: SignIn,
          navigationOptions: {
            title: 'SignIn',
            headerStyle:{
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
}))

export default Routes;