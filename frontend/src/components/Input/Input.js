import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInput } from '../../redux/actions'; 
import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      form: props.form,
      name: props.name,
      type: props.type,
      label: props.label,
      placeholder: props.placeholder,
      value: '',
      status: {
        isFocused: false,
        isFilled: false,
      }
    };
  }

  componentWillReceiveProps(props) {
    const {
      form,
      name,
    } = this.state;
    const value = props.formData[form][name] || '';

    this.setState({
      value,
      status: {
        ...this.state.status,
        isFilled: value !== '',
      },
    });
  }

  handleInput = (event) => {
    event.preventDefault();
    const {
      form,
      name,
    } = this.state;
    const { value } = event.target;
    
    this.props.setInput(form, name, value);
  }

  handleFocus = (event) => {
    event.preventDefault();
    this.setState({
      status: {
        ...this.state.status,
        isFocused: true,
      },
    });
  }

  handleBlur = (event) => {
    event.preventDefault();
    this.setState({
      status: {
        ...this.state.status,
        isFocused: false,
      },
    });
  }

  focusInput = (event) => {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div
        className="Input"
        data-focused={this.state.status.isFocused}
        data-filled={this.state.status.isFilled}
      >
        <div className="Input__placeholder">
          <div className="text">{ this.state.label }</div>
        </div>
        <div className="Input__input" onClick={this.focusInput}>
          {
            (() => {
              switch(this.state.type) {
                case 'textarea':
                  return (
                    <textarea
                      type={this.state.type}
                      ref={this.inputRef}
                      name={this.state.name}
                      placeholder={this.state.placeholder}
                      value={this.state.value}
                      onChange={this.handleInput}
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}
                    />
                  );
                
                default:
                  return (
                    <input
                      type={this.state.type}
                      ref={this.inputRef}
                      name={this.state.name}
                      placeholder={this.state.placeholder}
                      value={this.state.value}
                      onChange={this.handleInput}
                      onFocus={this.handleFocus}
                      onBlur={this.handleBlur}
                    />
                  );
              }
            })()
          }
        </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    formData: state.formData,
  };
};

const mapDispatchToProps = {
  setInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
