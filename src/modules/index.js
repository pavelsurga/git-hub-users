import { ProfileModule } from './ProfileModule/Profile';
import { UsersModule } from './UsersModule/Users';

import { reducer as UsersReducer } from './UsersModule/features';
import { reducer as ProfileReducer } from './ProfileModule/features';

const modules  = [
  UsersModule,
  ProfileModule
];



const reducers = {
  users: UsersReducer,
  profile: ProfileReducer,
};

export {modules, reducers };