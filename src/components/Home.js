/*eslint no-useless-constructor: "error"*/
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import { Input, Button } from 'antd';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
  }

  componentDidMount() {
    // console.log('componentDidMount--', this.props)
  }

  addItem = () => {
    this.props.addTodo(this.state.inputVal);
    this.setState({ inputVal: '' });
  };

  upLoad(val) {
    this.setState({
      inputVal: val
    });
  }

  render() {
    return (
      <div style={{ padding: '20px', color: 'skyblue', fontSize: '20px' }}>
        Home组件
        <div>
          <p>
            <Input
              onChange={e => this.upLoad(e.target.value)}
              value={this.state.inputVal}
              style={{ width: '300px', marginRight: '10px' }}
            />
            <Button type="primary" onClick={() => this.addItem()}>
              添加
            </Button>
          </p>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(Home);
