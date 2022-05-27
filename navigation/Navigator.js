import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import Contacts from '../views/Contacts'
import Home from '../views/Home'

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: { backgroundColor: 'black' },
                headerTintColor: 'white',
            }}
        >
            <Stack.Screen name="Contacts" component={Contacts}></Stack.Screen>
            <Stack.Screen
                name="Home"
                component={Home}
                options={(props) => ({
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                title="adicionar"
                                iconName="md-add"
                                onPress={() => {
                                    props.navigation.navigate('Contacts')
                                }}
                            />
                        </HeaderButtons>
                    ),
                })}
            ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)

export default container
