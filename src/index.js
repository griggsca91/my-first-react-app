import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const numbers = [1, 2, 3, 4, 5];

class NumberList extends React.Component {

    constructor(props) {
        super(props)
        this.listItems = props.numbers.map((number) => 
            <li key={number.toString()}>{number}</li>
        )
    } 

    render() {
        return (
            <ul>{this.listItems}</ul>
        )
    }
}


ReactDOM.render(
    <NumberList numbers={numbers}/>,
    document.getElementById('root')
);