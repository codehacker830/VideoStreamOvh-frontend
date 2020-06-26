import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Auth from './Auth';
import Common from './Common';
import Video from './Video';
import Lolomo from './Lolomo';

export default (history) => combineReducers({
  router: connectRouter(history),
  auth: Auth,
  commonData: Common,
  video: Video,
  lolomo: Lolomo,
});
