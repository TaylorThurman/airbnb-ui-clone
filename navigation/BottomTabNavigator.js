import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explore from "../screens/Explore";
import Saved from "../screens/Saved";
import Trips from "../screens/Trips";
import Inbox from "../screens/Inbox";
import TabBarIcon from "../components/TabBarIcon";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Explore';

export default function BottomTabNavigator({navigation, route}) {
    // Set the header title on the parent stack navigator depending on the
    // currently active tab. Learn more in the documentation:
    // https://reactnavigation.org/docs/en/screen-options-resolution.html
    // navigation.setOptions({headerTitle: getHeaderTitle(route)});
    navigation.setOptions(
        {
            headerShown: false,
        });


    return (
        <BottomTab.Navigator
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'grey',
                style: {
                    backgroundColor: 'white',
                    borderTopWidth: 0,
                    shadowOffset: {width:5,height:3},
                    shadowColor: 'black',
                    shadowOpacity: 0.5,
                    elevation: 5
                }
            }}
            initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                name="Explore"
                component={Explore}
                options={{
                  title: 'EXPLORE',
                  tabBarIcon: ({ color }) => <TabBarIcon color={color} name="ios-search" />,
                }}
            />
            <BottomTab.Screen
                name="Saved"
                component={Saved}
                options={{
                  title: 'SAVED',
                  tabBarIcon: ({ color }) => <TabBarIcon color={color} name="ios-heart" />,
                }}
            />
            <BottomTab.Screen
                name="Trips"
                component={Trips}
                options={{
                    title: 'TRIPS',
                    tabBarIcon: ({ color }) => <TabBarIcon color={color} name="ios-airplane" />,
                }}
            />
            <BottomTab.Screen
                name="Inbox"
                component={Inbox}
                options={{
                    title: 'INBOX',
                    tabBarIcon: ({ color }) => <TabBarIcon color={color} name="ios-chatboxes" />,
                }}
            />
        </BottomTab.Navigator>
    );
}

function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Explore':
            return 'How to get started';
        case 'Links':
            return 'Links to learn more';
    }
}
