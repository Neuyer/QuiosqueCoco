import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login'

const Routes = createAppContainer(createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login QuiosqApp',
            headerStyle: {
                backgroundColor: '#000000',    
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
              },
        },    
    },
}))

export default Routes;