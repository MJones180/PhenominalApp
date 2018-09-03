import React from 'react';
import styles from './index.css';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // Bind `this` to all class functions, makes them callable
    this.interval = this.interval.bind(this);
    this.updateAnimation = this.updateAnimation.bind(this);
    // Initial State
    this.state = {
      // Default element width is 350px
      totalWidth: props.width || 350,
      left: 0,
      width: 0,
    };
  }
  componentDidMount() {
    this.interval();
  }
  componentWillUnmount() {
    // Use intervalID to end the interval
    clearInterval(this.state.intervalID);
  }
  interval() {
    // Update the animation every millisecond
    const intervalID = setInterval(this.updateAnimation, 1);
    // Store intervalID so it can be removed later
    this.setState({ intervalID });
  }
  updateAnimation() {
    // The width of the actual loading animation
    // Accounts for 15px of padding on each side
    const loaderWidth = this.state.totalWidth - 30;
    // The max width of the moving bar
    const maxBarWidth = loaderWidth * 0.33;
    // Moving bar info
    const { left } = this.state;
    const { width } = this.state;
    // Update the animation
    if (left > loaderWidth) {
      this.setState({
        left: 0,
        width: 0,
      });
    } else if ((left + width) > loaderWidth) {
      this.setState(({ left, width }) => ({
        left: left + 1,
        width: width - 1,
      }));
    } else if (width < maxBarWidth) {
      this.setState(({ width }) => ({
        width: width + 1,
      }));
    } else {
      this.setState(({ left }) => ({
        left: left + 1,
      }));
    }
  }
  render() {
    return (
      <div
        className={styles.container}
        style={{
          width: `${this.state.totalWidth}px`,
        }}
      >
        <div className={styles.background} />
        <div
          className={styles.bar}
          style={{
            width: `${this.state.width}px`,
            left: `${this.state.left}px`,
          }}
        />
        <div className={styles.text}>
          Loading
        </div>
      </div>
    );
  }
}
