import { race, call, put } from 'redux-saga/effects';
import { fetchedLeaves, todoedFetchLeaves,refreshedLeaves ,onEndRechedLeaves,showedLeave,showedTodo
    ,fetchedGongChus,fetchedTodosGongChu} from '../Redux/LeavesRedux';

//下拉刷新之后
export function* refreshLeaves(api, action) {
    try {
        /* const { data } = yield call(api.get, '/spring/fwgl/qx/csList'); */
        const { data } = yield call(api.get, '/spring/ydbgkqgl/leave/list');
        yield put(refreshedLeaves(data));
    } catch (e) {
        console.log(e.message);
        console.log(e);
    }
}
//加载更多
export function* onEndReachLeaves(api, action) {
    try {
        const { data } = yield call(api.get, '/spring/ydbgkqgl/leave/list');
        yield put(onEndRechedLeaves(data));
    } catch (e) {
        console.log(e.message);
        console.log(e);
    }
}
//详细页面
export function* showLeaveSage(api,action){
    try{
        const { data } = yield call(api.get,`/spring/ydbgkqgl/leave/${action.payload}`);
        yield put(showedLeave(data));
    }catch(e){
        console.log(e.message);
        console.log(e);
    }
}
//加载列表
export function* fetchLeaves(api, action) {
     try {
       /*  const { data } =
            yield call(api.get, '/spring/fwgl/qx/csList'); */
        const { data } = yield call(api.get, '/spring/ydbgkqgl/leave/list');
        yield put(fetchedLeaves(data));
    } catch (e) {
        console.log(e.message);
        console.log(e);
    }
}
//加载待办
export function* todoFetchLeavesSaga(api, action){
    try {
        const { data } = yield call(api.get, '/spring/ydbgkqgl/leave/todos/110928171642710');
        yield put(todoedFetchLeaves(data));
    } catch (e) {
        console.log(e.message);
        console.log(e);
    }
}
//待办详情
export function* showedTodoSaga(api,action){
    try{
        const { data } = yield call(api.get, `/spring/ydbgkqgl/leave/todos/one/${action.payload}`);
        yield put(showedTodo(data));
    }catch(e){
        console.log(e.message);
        console.log(e);
    }
}
//待办加载更多
export function* todofetchSaga(api,action){
     try {
        const { data } = yield call(api.get, '/spring/ydbgkqgl/leave/todos/110928171642710');
        yield put(todoedOnEndReach(data));
    } catch (e) {
        console.log(e.message);
        console.log(e);
    }
}

//公出获取列表
export function* gongChuFetchSaga(api,action){
     try {
        const { data } = yield call(api.get, '/spring/ydbgkqgl/gongchu/page');
        yield put(fetchedGongChus(data));
    } catch (e) {
        console.log(e.message);
        console.log(e);
    }
}
//公出待办
export function* gongChuTodosFetchSaga(api,action){
    try {
        const { data } = yield call(api.get, '/spring/ydbgkqgl/gongchu/page');
        yield put(fetchedTodosGongChu(data));
    } catch (e) {
        console.log(e.message);
        console.log(e);
    }
}
//公出加载更多
export function* gongChuOnEndReachedSaga(api,action){
    try {
        const { data } = yield call(api.get, '/spring/ydbgkqgl/gongchu/page');
        yield put(gongChuEdOnEndreached(data));
    } catch (e) {
        console.log(e.message);
        console.log(e);
    }
}