import React, { Component } from 'react';
import { connect } from 'react-redux';
import Clock from '../components/Clock';

class ClockPage extends Component {
    componentDidMount() {
        this.timer = setInterval(
            this.props.onDida,
            1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return <Clock time={this.props.time}/>;
    }
}
//从store（状态树）中获取参数传递到props（属性）中
const mapStateToProps =
    state => ({time: state.time});
//创建action事件赋予给props中
const mapDispatchToProps =
    dispatch => {
        const onDida = () =>
            dispatch({
                type: 'DIDA',
                payload: new Date(),
            });
        const newProps = {
            onDida: onDida,
        };
        return newProps;
    };            

export default
    connect(
        mapStateToProps,
        mapDispatchToProps)
    (ClockPage);