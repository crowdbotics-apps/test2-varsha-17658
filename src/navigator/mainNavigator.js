import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList56774Navigator from '../features/ArticleList56774/navigator';
import ArticleList56773Navigator from '../features/ArticleList56773/navigator';
import ArticleList56772Navigator from '../features/ArticleList56772/navigator';
import UserProfile56761Navigator from '../features/UserProfile56761/navigator';
import Tutorial56760Navigator from '../features/Tutorial56760/navigator';
import NotificationList56732Navigator from '../features/NotificationList56732/navigator';
import Settings56731Navigator from '../features/Settings56731/navigator';
import Settings56723Navigator from '../features/Settings56723/navigator';
import UserProfile56721Navigator from '../features/UserProfile56721/navigator';
import ArticleList56683Navigator from '../features/ArticleList56683/navigator';
import ArticleList56682Navigator from '../features/ArticleList56682/navigator';
import ArticleList56681Navigator from '../features/ArticleList56681/navigator';
import ArticleList56664Navigator from '../features/ArticleList56664/navigator';
import ArticleList56663Navigator from '../features/ArticleList56663/navigator';
import ArticleList56662Navigator from '../features/ArticleList56662/navigator';
import ArticleList56565Navigator from '../features/ArticleList56565/navigator';
import ArticleList56564Navigator from '../features/ArticleList56564/navigator';
import ArticleList56563Navigator from '../features/ArticleList56563/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList56774: { screen: ArticleList56774Navigator },
ArticleList56773: { screen: ArticleList56773Navigator },
ArticleList56772: { screen: ArticleList56772Navigator },
UserProfile56761: { screen: UserProfile56761Navigator },
Tutorial56760: { screen: Tutorial56760Navigator },
NotificationList56732: { screen: NotificationList56732Navigator },
Settings56731: { screen: Settings56731Navigator },
Settings56723: { screen: Settings56723Navigator },
UserProfile56721: { screen: UserProfile56721Navigator },
ArticleList56683: { screen: ArticleList56683Navigator },
ArticleList56682: { screen: ArticleList56682Navigator },
ArticleList56681: { screen: ArticleList56681Navigator },
ArticleList56664: { screen: ArticleList56664Navigator },
ArticleList56663: { screen: ArticleList56663Navigator },
ArticleList56662: { screen: ArticleList56662Navigator },
ArticleList56565: { screen: ArticleList56565Navigator },
ArticleList56564: { screen: ArticleList56564Navigator },
ArticleList56563: { screen: ArticleList56563Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
