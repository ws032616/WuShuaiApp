//初始化列表
export const FETCH_LEAVES = 'FETCH_LEAVES';
export const FETCHED_LEAVES = 'FETCHED_LEAVES';
//初始化待办列表
export const TODO_FETCH_LEAVES ="TODO_FETCH_LEAVES";
export const TODOED_FETCH_LEAVES ="TODOED_FETCH_LEAVES";
//下拉刷新
export const LEAVES_REFRESH = 'LEAVES_REFRESH';
export const LEAVES_REFRESHED ='LEAVES_REFRESHED';
//列表加载更多
export const LEAVES_ONENDREACH ='LEAVES_ONENDREACH';
export const LEAVES_ONENDREACHED ='LEAVES_ONENDREACHED';
//待办加载更多
export const TODO_ONEND_REACH = 'TODO_ONEND_REACH';
export const TODOED_ONEND_REACH = 'TODOED_ONEND_REACH'; 
//详细页面
export const SHOWLEAVE = 'SHOWLEAVE';
export const SHOWEDLEAVE = 'SHOWEDLEAVE';
//待办详情
export const SHOW_TODO="SHOW_TODO";
export const SHOWED_TODO="SHOWED_TODO";

//初始化公出列表
export const FETCH_GONGCHUS = 'FETCH_GONGCHUS';
export const FETCHED_GONGCHUS = 'FETCHED_GONGCHUS';
//初始化公出待办列表
export const FETCH_TODOS_GONGCHU = 'FETCH_TODOS_GONGCHU';
export const FETCHED_TODOS_GONGCHU = 'FETCHED_TODOS_GONGCHU';
//公出加载更多
export const GONGCHU_ONEND_REACHED = 'GONGCHU_ONEND_REACHED';
export const GONGCHUED_ONEND_REACHED = 'GONGCHUED_ONEND_REACHED';
//公出详细页面
export const SHOWGONGCHU = 'SHOWGONGCHU';

//初始化加载列表
export function fetchLeaves() {
    return {
        type: FETCH_LEAVES,
    };
}
//列表获取结束
export function fetchedLeaves(Leaves) {
    return {
        type: FETCHED_LEAVES,
        payload: Leaves,
    };
}
//初始化加载待办列表
export function todofetchLeaves(){
    return {
        type: TODO_FETCH_LEAVES,
    };
}
//待办列表加载完毕
export function todoedFetchLeaves(TodoLeaves){
    return {
        type:TODOED_FETCH_LEAVES,
        payload: TodoLeaves,
    };
}


//下拉刷新
export function _onRefresh(refreshing){
    return{
        type: LEAVES_REFRESH,
        payload: refreshing,
    };
}
//下拉刷新之后
export function refreshedLeaves(Leaves){
    return{
        type:LEAVES_REFRESHED,
        payload:Leaves,
    };
}
//滑动到底部加载更多
export function _onEndreached(page){
    return{
        type:LEAVES_ONENDREACH,
        payload: page,
    };
}
//加载完成后操作
export function onEndRechedLeaves(Leaves){
    return{
        type:LEAVES_ONENDREACHED,
        payload: Leaves,
    };
}
//下拉加载更多待办
export function todoOnEndReach(page){
    return{
        type:TODO_ONEND_REACH,
        payload:page,
    };
}
//加载更多待办结束
export function todoedOnEndReach(TodoLeaves){
    return{
        type:TODOED_ONEND_REACH,
        payload:TodoLeaves,
    };
}
//详情页面
export function showLeave(LeaveId){
    return {
        type: SHOWLEAVE,
        payload: LeaveId,
    };
}
//查询详情页面之后
export function showedLeave(Leave){
    return {
        type: SHOWEDLEAVE,
         payload: Leave,
    };
}
//加载待办详情
export function showTodo(TodoId){
    return {
            type: SHOW_TODO,
            payload: TodoId,
        };
}
//待办详情加载结束
export function showedTodo(Todo){
    return {
        type: SHOWED_TODO,
         payload: Todo,
    };
}

//公出
//初始化加载列表
export function fetchGongChus() {
    return {
        type: FETCH_GONGCHUS,
    };
}
//列表获取结束
export function fetchedGongChus(Gongchus) {
    return {
        type: FETCHED_GONGCHUS,
        payload: Gongchus,
    };
}

//初始化加载待办
export function fetchTodosGongChu() {
    return {
        type: FETCH_TODOS_GONGCHU,
    };
}
//待办获取结束
export function fetchedTodosGongChu(GCTodos) {
    return {
        type: FETCHED_TODOS_GONGCHU,
        payload: GCTodos,
    };
}
//公出列表加载更多
export function gongChuOnEndreached(page){
    return{
        type:GONGCHU_ONEND_REACHED,
        payload: page,
    };
}
//加载完成后操作
export function gongChuEdOnEndreached(GCTodos){
    return{
        type:GONGCHUED_ONEND_REACHED,
        payload: GCTodos,
    };
}
//公出详情
export function gongChuShow(id){
    return{
        type:SHOWGONGCHU,
        payload:id,
    };
}
//根据id从列表里获取数据
/* function getGCDataById(Datas,id){
    const item = [];
    const index = Datas.findIndex(Data => Data.id === id);
    if(index >= 0){
        item =  Datas[index];
    };
    return item;
} */

/* function remoteLeave(Leaves, id) {
    const index = Leaves.findIndex(Leave => Leave.id === id);
    if (index >= 0) {
        return [...Leaves.slice(0, index), ...Leaves.slice(index + 1)];
    }
    return Leaves;
}

function updateLeave(Leaves, Leave) {
    const index = Leaves.findIndex(_Leave => _Leave.id === Leave.id);
    if (index >= 0) {
        return [...Leaves.slice(0, index), Leave, ...Leaves.slice(index + 1)];
    }
    return Leaves;
} */


export function Leaves(state= { Datas: [], Todos:[], Data:{},Todo:{}, filter: 'all', refreshing: false, loading: false }, action) {
    switch(action.type) {
        //列表加载结束
        case FETCHED_LEAVES:
            return {
                ...state,
                Datas: action.payload.content,
            };
        //待办加载完成后
        case TODOED_FETCH_LEAVES:
            return{
                ...state,
                Todos: action.payload.content,
            };
        //下拉刷新
        case LEAVES_REFRESHED:
            return{
                ...state,
                Datas: action.payload.content,
            };
        //加载更多
        case LEAVES_ONENDREACHED:
            return{
                ...state,
                Datas: state.Datas.concat(action.payload.content),
            };
        //待办加载更多
        case TODOED_ONEND_REACH:{
            return{
                ...state,
               Todos: state.Todos.concat(action.payload.content),
            }
        };
        //请假详情
        case SHOWEDLEAVE:
            return{
                ...state,
                Data: action.payload,
            };
        //待办详情
        case SHOWED_TODO:
            return{
                ...state,
                Todo: action.payload,
            };

        //公出列表            
        case FETCHED_GONGCHUS:{
            return{
                ...state,
                Datas: action.payload.content,
            }
        };
        //刷新公出待办
        case FETCHED_TODOS_GONGCHU:{
            return{
                ...state,
                Todos: action.payload.content,
            }
        };
        //公出加载更多
        case GONGCHUED_ONEND_REACHED:{
            return{
                ...state,
               Todos: state.Todos.concat(action.payload.content),
            }
        };
        //公出只读页面
        case SHOWGONGCHU:{
            return{
                ...state,
                Data: state.Datas[1],
            }
        };
        default:
            return state;
    }
}
