import React, { Component, PropTypes } from 'react';


function createWarning(funcName){
  return () => console.warn(funcName + 'is not defined');
}
const defaultProps = {
  onPlus: createWarning('onPlus'),
  onSubtract: createWarning('onSubtract'),
  onRandomizeColor: createWarning('onRandomizeColor')
};
class Control extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
              <button OnClick={this.props.onPlus}>+</button>
              <button OnClick={this.props.onSubtract}>-</button>
              <button OnClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}

Control.defaultProps = defaultProps;
export default Control;
