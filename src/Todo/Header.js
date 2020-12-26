import React from "react"
import Info from ".//Info"
class Header extends React.Component {
  state = {
    name: "",
    surname: "",
    photo: ""
  }

  componentDidMount(){
    this.auth()
  }
  
  auth = async () => {
    const response = await fetch("https://my-json-server.typicode.com/papa-rimskiy/shop/user")
    const json = await response.json()
    this.setState ({
      name: json.name,
      surname: json.surname,
      photo: json.photo
    })}

    login = async () => {
      this.props.history.push("/Info")
    }
    
  render () {
    return (
      <div className="Header">
        <div className="header-profile">
          <div className="Header_name_surname " onClick={this.login} > {this.state.name} {this.state.surname}</div>
          <div>
            <img className="photo_user"src={this.state.photo}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
