import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as ROUTES from '../components/routes'
const SignUp = () => {
  return (
    <div>
      <h1>SignUp</h1>
    </div>
  )
}

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}
class SignUpForm extends Component {
  constructor (props) {
    super(props)
    this.state = { ...INITIAL_STATE }
  }
  onSubmit = event => {}
  onChange = event => {}
  render () {
    return <form onSubmit={this.onSubmit} />
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
)
export { SignUpForm, SignUpLink }
export default SignUp
