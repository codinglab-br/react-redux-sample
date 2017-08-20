import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as exampleActions from '../actions/example/'
import logo from '../assets/stylesheets/logo.svg'

class Example extends Component {
  constructor(props) {
    super(props)

    this.state = {
      exampleItems: []
    }
  }

  componentWillReceiveProps(nextProps) {
    const { exampleItems } = nextProps
    this.setState({ exampleItems })
  }

  componentWillMount() {
    const { exampleItems } = this.props
    this.setState({ exampleItems })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Example
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    exampleItems: state.example
  }
}

const mapDispatchToProps = dispatch => {
  return {
    action: bindActionCreators(exampleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example)
