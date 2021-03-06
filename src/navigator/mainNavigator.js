import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen71212705Navigator from '../features/BlankScreen71212705/navigator';
import UserProfile212695Navigator from '../features/UserProfile212695/navigator';
import Tutorial212694Navigator from '../features/Tutorial212694/navigator';
import NotificationList212666Navigator from '../features/NotificationList212666/navigator';
import Settings212665Navigator from '../features/Settings212665/navigator';
import Settings212657Navigator from '../features/Settings212657/navigator';
import UserProfile212655Navigator from '../features/UserProfile212655/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
BlankScreen71212705: { screen: BlankScreen71212705Navigator },
UserProfile212695: { screen: UserProfile212695Navigator },
Tutorial212694: { screen: Tutorial212694Navigator },
NotificationList212666: { screen: NotificationList212666Navigator },
Settings212665: { screen: Settings212665Navigator },
Settings212657: { screen: Settings212657Navigator },
UserProfile212655: { screen: UserProfile212655Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
