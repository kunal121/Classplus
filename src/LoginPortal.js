import React, { Component } from 'react'
import { Route} from 'react-router-dom'
class LoginPortal extends Component{
  render(){
    return(
  <div className="row">
     <div className="col s12 m6 offset-m3 card login-modal">
      <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate"/>
            <label for="email">Email</label>
          </div>
      </div>
      <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate"/>
            <label for="password">Password</label>
          </div>
      </div>
      <div className="btn">Signin</div>
      <div className="btn">latefm</div>
   </div>
 </div>
    )
  }
}
export default LoginPortal
