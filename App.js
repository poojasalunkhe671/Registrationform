import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import Greet from './Components/Greet';
import { Component } from 'react';



export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isRegisterd:false,
       name:null,
       email:null,
       password:null,
       showPass:null,
    };
  }
  registrationHandler=(event)=>{
    // alert("hi")
   const name= (event.target.name.value)
    const email=(event.target.email.value)
    const password=(event.target.password.value)
    this.setState({name,email,password,isRegisterd:true});
event.preventDefault();
  };
  showPasswordHandler=()=>{
    this.setState({showPass:!this.state.showPass})
  }
  
  render() {
    return (
      <div>
        {this.state.isRegisterd?
        <Greet name={this.state.name} email={this.state.email}/>:<Register submit={this.registrationHandler}showPass={this.state.showPass} click={this.showPasswordHandler}/>}

      </div>
    )
  }
}



export default App;
