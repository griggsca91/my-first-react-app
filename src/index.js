import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (
            <div>
                <h1>Hello, world1</h1>
                <h2>It is {this.state
                        .date
                        .toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (<div>
            <Clock />
            <Clock />
            <Clock />
            </div>)
    }
}


function tick() {
    ReactDOM.render(
        <App />, document.getElementById('root'));
}

setInterval(tick, 1000);
