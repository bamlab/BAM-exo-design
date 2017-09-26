import { StackNavigator } from 'react-navigation';

import * as Pages from 'exo_design_react_native/src/pages';

export default StackNavigator({
  home: {
    screen: Pages.Home,
  },
  infos: {
    screen: Pages.Infos,
  },
}, {
  initialRouteName: 'home',
});
