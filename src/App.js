import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    objects: [
    { firstname: "Juan", lastname: 'dela Cruz', age: 21 },
    { firstname: "Mark", lastname: 'Paul', age: 22 },
    { firstname: "Paul", lastname: 'Mark', age: 23 },
    
    ]
    }
    }
    render() {
    return (
    <div className = "center">
      <h1>BONUS NUMBER 1</h1>
      <hr></hr>
      <br></br>
      <br></br>
    {this.state.objects.map(function(user,id){
    return (<li key={id}>{user.firstname +" "+ user.lastname+" | "+user.age }</li>)
    })}
    <br></br>
    <br></br>
    </div>

    )
    
    }
}

export default App;
