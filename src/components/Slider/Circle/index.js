import React from 'react';
import { CircleSlider } from 'react-circle-slider';
import colors from 'styles/variables';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // Should the slider be disabled
    const { disabled } = this.props;
    // Min and max value range
    const min = this.props.min || 0;
    const max = this.props.max || 100;
    // Full slider size including knob to produce requested radius
    const size = (this.props.radius * 2) + 24;
    // Current value of slider
    const value = this.props.value || 0;
    this.state = {
      disabled,
      min,
      max,
      size,
      value,
    };
  }
  render() {
    return (
      <CircleSlider
        disabled={this.state.disabled}
        min={this.state.min}
        max={this.state.max}
        value={this.state.value}
        size={this.state.size}
        circleWidth={5}
        progressWidth={5}
        knobRadius={10}
        circleColor={`${colors.stone}50`}
        progressColor={colors.azure}
        knobColor={colors.azure}
        shadow={false}
        onChange={(value) => {
          // Update the value of the slider in the local state
          this.setState({ value });
          // Pass the value to parent onChange event
          this.props.onChange(value);
        }}
      />
    );
  }
}
