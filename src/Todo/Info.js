import React from "react" 
import Header from "./Header"

class Info extends React.Component {
  state = {
    name: "",
    surname: "",
    photo: "",
    sex: "",
    age: "",
    email: ""
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
      photo: json.photo,
      sex: jsin.sex,
      age: json.age,
      email: json.email
    })}

  render () {

    return (
      <div className="Item">
        <Header />
        <h1>hi</h1>
      </div>
    )
  }
}

export default Info