import React, { Component } from 'react';
import styles from './MyButton.module.css';
// import '@components/MyButton.scss'
import './MyButton.scss';

class Button extends Component {
  callFuther(msg) {
    console.log('callFuther--', msg);
  }
  render() {
    return (
      <div style={{ color: this.props.color }}>
        <h3 className="button"> {this.props.name} </h3>
        <p>
          哈哈哈哈哈哈哈
          <span
            onClick={this.callFuther.bind(this, 'button')}
            className={styles.button}
          >
            2222
          </span>
        </p>
      </div>
    );
  }
}

export default Button;
