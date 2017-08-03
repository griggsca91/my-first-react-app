import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this
            .handleChange
            .bind(this);
        this.state = {
            temperature: ''
        };
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter termperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange}/>

                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>

        );
    }
}

class Calculator extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="c"/>
                <TemperatureInput scale="f"/>
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator/>, document.getElementById('root'));