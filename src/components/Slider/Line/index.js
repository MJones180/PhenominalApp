import React from 'react';
import _ from 'lodash';
import InputRange from 'react-input-range';
import styles from './index.css';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // Should the slider be disabled
    const { disabled } = this.props;
    // Min and max value range
    const min = this.props.min || 0;
    const max = this.props.max || 10;
    // Current value of slider
    const value = this.props.value || _.round(max / 2);
    this.state = {
      disabled,
      min,
      max,
      value,
    };
  }
  render() {
    return (
      <InputRange
        disabled={this.state.disabled}
        minValue={this.state.min}
        maxValue={this.state.max}
        value={this.state.value}
        onChange={(value) => {
          // Update the value of the slider in the local state
          this.setState({ value });
          // Pass the value to parent onChange event
          this.props.onChange(value);
        }}
        classNames={{
          inputRange: styles.container,
          track: styles.track,
          activeTrack: styles.activeTrack,
          sliderContainer: styles.sliderContainer,
          slider: styles.slider,
          labelContainer: styles.labels,
          minLabel: styles.labelMin,
          maxLabel: styles.labelMax,
          valueLabel: styles.labelSlider,
          disabledInputRange: styles.disabled,
        }}
      />
    );
  }
}
