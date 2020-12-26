import React from "react" 
import { withRouter } from "react-router";

class Delai extends React.Component {
  state = {
    data : 2,
    value_login : "",
    value_password: "",
  }

  onChangeLogin = (e) => {
    const target = e.currentTarget.value
    this.setState ({value_login:target})
  }

  onChangePassword = (e) => {
    const target = e.currentTarget.value
    this.setState ({value_password:target})
  }

  auth = async () => {
    const response = await fetch("https://my-json-server.typicode.com/papa-rimskiy/shop/auth")
    const json = await response.json()
    return json.token
  }

  login = async () => {
    const token = await this.auth()
    localStorage.setItem("token", token)
    this.props.history.push("/")
  }
    
  render() {
    return (
      <div className="delai">
        <h2>Login</h2>
        <p><input className ="delai_login" placeholder="login"
        value ={this.state.value} onChange = {(e) => this.onChangeLogin(e)}/></p>
        <input className ="delai_password" type="password" placeholder="password" 
        value={this.state.password} onChange = {(e) => this.onChangePassword(e)}/>
        <button className="button_password" onClick={this.login}>login</button>
      </div>
    )
  }
} 

export default withRouter(Delai)