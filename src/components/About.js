import React from 'react'

class About extends React.Component {
  render () {
    // console.log('match--params--', this)
    return (
      <div style={{ padding: '20px', color: 'purple', fontSize: '20px' }}>
        About组件:{this.props.match.params.id}
      </div>
    )
  }
}

export default About
