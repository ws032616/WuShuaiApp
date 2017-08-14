import { takeLatest } from 'redux-saga';
import ApiSauce from 'apisauce';
import { fetchLeaves, todoFetchLeavesSaga,refreshLeaves,onEndReachLeaves,showLeaveSage,
  showedTodoSaga,todofetchSaga,gongChuFetchSaga,gongChuTodosFetchSaga,gongChuOnEndReachedSaga} from './LeavesSagas';

import { FETCH_LEAVES, TODO_FETCH_LEAVES,LEAVES_REFRESH,LEAVES_ONENDREACH,SHOWLEAVE,
  SHOW_TODO,TODO_ONEND_REACH,FETCH_GONGCHUS,FETCH_TODOS_GONGCHU,GONGCHU_ONEND_REACHED} from '../Redux/LeavesRedux';

const api = ApiSauce.create({
 /* baseURL: 'http://192.168.90.80:8080',*/
   baseURL: 'http://192.168.90.107:9090', 
});
//添加监听当发生动作是调用takelatest
export default function * rootSaga () {
  yield [
    //请假
    takeLatest(FETCH_LEAVES, fetchLeaves, api),
    takeLatest(TODO_FETCH_LEAVES, todoFetchLeavesSaga, api),
    takeLatest(LEAVES_REFRESH,refreshLeaves,api),
    takeLatest(LEAVES_ONENDREACH,onEndReachLeaves,api),
    takeLatest(SHOWLEAVE,showLeaveSage,api),
    takeLatest(SHOW_TODO,showedTodoSaga,api),
    takeLatest(TODO_ONEND_REACH,todofetchSaga,api),
    //公出
    takeLatest(FETCH_GONGCHUS,gongChuFetchSaga,api),
    takeLatest(FETCH_TODOS_GONGCHU,gongChuTodosFetchSaga,api),
    takeLatest(GONGCHU_ONEND_REACHED,gongChuOnEndReachedSaga,api),
  ];
}
