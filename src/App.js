// import React, { Component } from 'react'
// // import logo from './logo.svg'
// import './App.css'
// // import DangerButton from './components/DangerButton.js'
// // import logo from './images/logo_header.png'
// function Welcome (props) {
//   return <h1>Hello, {props.name}</h1>
// }

// function increment (state, props) {
//   return {num: state.num + 1}
// }

// // const style={
// //   color:'pink'
// // }
// class App extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       msg: '111',
//       num: 0,
//       id: 110,
//       idShow: true,
//       mapList: [
//         '张三', '李四'
//       ]
//     }
//     // this.clickFun = this.clickFun.bind(this)
//     // this.handleChange = this.handleChange.bind(this)
//   }
//   total = 10
//   incrementMultiple () {
//     this.setState(increment)
//     this.setState(increment)
//     this.setState(increment)
//     // this.setState()
//     console.log('incrementMultiple--', this.state)
//   }

//   componentDidMount () {
//     let _this = this
//     _this.incrementMultiple()
//     // _this.setState(increment)
//     // console.log('1-->>', _this.state.num)
//     // _this.setState(increment)
//     // console.log('2-->>', _this.state.num)
//     // _this.setState(increment)
//     // console.log('3-->>', _this.state.num)
//     // setTimeout(function () {
//     //   // console.log('before--1--', _this.state.num)
//     //   _this.setState({
//     //     num: _this.state.num + 1
//     //   })
//     //   console.log('setTimeout--3-->>', _this.state.num)
//     // }, 0)
//     // setTimeout(function () {
//     //   // console.log('before--2--', _this.state.num)
//     //   _this.setState({
//     //     num: _this.state.num + 1
//     //   })
//     //   console.log('setTimeout--4-->>', _this.state.num)
//     // }, 0)
//     console.log('componentDidMount--', _this.state.num)
//   }
//   componentWillUnmount () {
//     console.log('componentWillUnmount--')
//   }
//   // 箭头函数
//   // clickFun (that) {
//   //   console.log('this--', that)
//   //   that.setState({
//   //     msg: 'clickFun'
//   //   })
//   // }

//   // bind方法
//   clickFun () {
//     console.log('this--', this)
//     this.setState({
//       msg: 'clickFun--bind'
//     })
//   }
//   // 传递参数方法
//   paramsFun (id) {
//     console.log('paramsFun--id--', id)
//   }

//   handleChange (e) {
//     console.log('handleChange--', e, 'value--', e.target.value)
//     // this.total = e.target.value
//     this.setState({
//       num: e.target.value
//     })
//   }
//   handleChange1 (e) {
//     this.setState({
//       num: ++e.target.value
//     })
//     console.log('handleChange1--', e.target.value,'num--', this.state.num)
//   }
//   render () {
//     console.log('render--', this.state.num)
//     let html
//     if (this.state.idShow) {
//       html = <div>
//         <p onClick={(e)=>this.paramsFun(this.state.id, e)} style={{color: 'skyblue', fontSize: '20px', padding: '10px 0'}}>箭头函数--传递参数方法</p>
//         <p>idShow:{this.state.idShow ? 'true' : 'false'}</p>
//       </div>
//     } else {
//       html = <p>idShow:{this.state.idShow ? 'true' : 'false'}</p>
//     }
//     return (
//       <div>
//         <Welcome name="Sara" />
//         {/* <p onClick={this.clickFun} style={{color:'pink'}}>{this.state.msg}</p> */}
//         <p onClick={()=>this.clickFun()} style={{color:'pink'}}>{this.state.msg}</p>
//         {/* <p onClick={this.paramsFun.bind(this,this.state.id)}>bind--传递参数方法</p> */}
//         {html}
//         {/* <p onClick={(e)=>this.paramsFun(this.state.id, e)} style={{color: 'skyblue', fontSize: '20px', padding: '10px 0'}}>箭头函数--传递参数方法</p> */}
//         {/* react--{this.state.num} */}

//         {
//           this.state.idShow ? <p>state--true</p> : <p>state--false</p>
//         }

//         <ul>
//           {
//             this.state.mapList.map((items, index) => {
//               return (<li key={index}>{items}</li>)
//             })
//           }
//         </ul>
//         <div style={{padding: '20px'}}>
//           {this.total} <input style={{padding: '5px', border: '1px solid #eee'}} value={this.state.num} type="text" onChange={(e)=> this.handleChange(e)}/>
//           {/* <select  style={{padding: '5px',color: '#333', border: '1px solid #eee'}} >
//             <option value="22">22</option>
//             <option value="33">33</option>
//           </select> */}
//           {/*  onChange={(e)=> this.handleChange(e)} */}
//           {/*  onChange={ this.handleChange } */}
//           <p>----------------------</p>
//           <input style={{padding: '5px', border: '1px solid #eee'}} value={this.state.num} type="text" onChange={(e)=> this.handleChange1(e)}/>
//         </div>
//       </div>
//     )
//   }
// }

// export default App

import React from 'react';
import 'antd/dist/antd.css';
// import { Modal, message, Button } from 'antd'
import { Link } from 'react-router-dom';
// import { Route, Switch,Redirect,Link  } from 'react-router-dom'

// import About from './components/About.js'
// import Home from './components/Home.js'
// import Contact from './components/Contact.js'

import Myrouter from './router';
class App extends React.Component {
  state = { visible: false };
  id = 100;
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  info() {
    // message.info('This is a normal message')
  }

  clickFun() {
    console.log('clickFun--');
  }
  render() {
    return (
      <div>
        <h1 onClick={this.clickFun}>Hello, {this.props.name}</h1>
        {/* <Button type="primary" onClick={this.info}>Display normal message</Button>
      <Button onClick={this.showModal}>打开弹框</Button> */}
        {/* <Modal
        title="Basic Modal"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
        <div style={{ padding: '20px', fontSize: '20px', color: '#000' }}>
          <Link
            style={{ display: 'block', width: '120px', marginBottom: '5px' }}
            to="/"
          >
            home
          </Link>
          <Link
            style={{ display: 'block', width: '120px', marginBottom: '5px' }}
            to={{ pathname: '/about/' + this.id }}
          >
            about
          </Link>
          <Link
            style={{ display: 'block', width: '120px', marginBottom: '5px' }}
            to="/contact"
          >
            contact
          </Link>
        </div>
        <Myrouter />
        {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch> */}
      </div>
    );
  }
}

export default App;
