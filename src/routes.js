import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { Welcome } from './pages/Welcome';
import { Repositories } from './pages/Repositories';

export const Routes = createAppContainer(
  createSwitchNavigator({
    Welcome,
    Repositories,
  })
);
