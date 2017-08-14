import { create } from 'apisauce';

const api = create({
    baseURL: 'http://192.168.90.16:31400',
});

api.get('/todos')
    .then(response =>
        console.log(response.data));

api.get('/todos/1')
    .then(response =>
        console.log(response.data));

api.delete('/todos/2')
    .then(() => console.log('删除成功'));

api.post('/todos', { title: '阅读《深入浅出React和Redux》第三章'});

api.put('/todos/114', {
    id: 114,
    title: '阅读《深入浅出React和Redux》第四章',
    done: true,
    like: true,
});