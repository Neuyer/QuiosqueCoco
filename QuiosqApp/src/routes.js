import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Notas from './pages/Notas';
import NotaEdit from './pages/NotaEdit';
import SignIn from './pages/SignIn';
import NovaNota from './pages/NovaNota';

const Routes = createAppContainer(createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login QuiosqApp',
            headerStyle: {
                backgroundColor: '#000',
            },
            cardStyle: {
                backgroundColor: "#000",
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
    NovaNota : {
        screen: NovaNota,
        navigationOptions: {
            title: 'Nova Nota',
            headerStyle: {
                backgroundColor: '#000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
    NotaEdit : {
        screen: NotaEdit,
        navigationOptions: {
          title: 'Editar Nota',
          headerStyle:{
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