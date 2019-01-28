/*eslint no-useless-constructor: "error"*/
import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import { Input, Button } from 'antd'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputVal: ''
    }
    // applyAddItem = () => {
    //   this.props.addItem()
    // }
  }

  componentDidMount () {
    // console.log('componentDidMount--', this.props)
  }

  addItem = () => {
    if (this.props.todos.length) {
      let items = this.props.todos
      for (let i = 0; i < items.length; i++) {
        if (items[i].text === this.state.inputVal) {
          return
        }
      }
      this.props.dispatch(addTodo(this.state.inputVal, false, -1))
      this.setState({ inputVal: '' })
    } else {
      this.props.dispatch(addTodo(this.state.inputVal, false, -1))
      this.setState({ inputVal: '' })
    }
  };

  upLoad (val) {
    this.setState({
      inputVal: val
    })
  }

  render () {
    // console.log('home--render--', this.props)
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
    )
  }
}

const mapStateToProps = state => {
  // 去重多余项
  let result = []
  let obj = {}
  for (let i =0; i<state.todos.length; i++) {
    if (!obj[state.todos[i].id]) {
      result.push(state.todos[i])
      obj[state.todos[i].id] = true
    }
  }
  return {
    todos: result
  }
}

// export default connect(
//   null,
//   { addTodo }
// )(Home)

export default withRouter(connect(mapStateToProps)(Home))
