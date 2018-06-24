import React, {Component} from 'react';
import './index.css';

class SelectInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: this.props.values[0],
    };

    // Bind custom methods
    this.handleChange = this.handleChange.bind(this);
  }

  // Custom methods
  handleChange = function(event) {
    const selectInput = event.target;

    this.setState({
      currentValue: {
        name: selectInput[selectInput.selectedIndex].text,
        value: selectInput.value,
      }
    });

    this.props.onChange(event);
  }

  // Lifecycle methods
  render() {
    const {currentValue} = this.state;
    const {label, name, values} = this.props;

    return (
      <label className="SelectInput">
        <span className="SelectInputLabelText">{label}</span>
        <span className="SelectInputField">
          <span className="SelectInputText">{currentValue.name}</span>
          <select
            className="SelectInputSelect"
            name={name}
            onChange={this.handleChange}
          >
            {
              values.map((item, index) =>
                <option key={item.value} value={item.value}>{item.name}</option>
              )
            }
          </select>
        </span>
      </label>
    );
  }
}

SelectInput.defaultProps = {
  label: 'Select',
  name: 'select',
  values: {
    name: 'Select',
    value: '',
  },
};

export default SelectInput;
