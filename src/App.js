import React from 'react';
import logo from './logo.svg';
import List from './components/List'
import Child from './components/App2'

class App extends React.Component {
constructor(props){
  super(props)
  this.state = {
    name:'masai'
  }
}

changeName = () => {
  console.log('change name to albert')
  this.setState({
    name:'albert'
  })
}


  render(){
  return (
    <div>
      {/* <List name='albert'/>
      <List />
      <List /> */}
      {/* <App1 details={obj}/> */}
      <Child name = {this.state.name} change={()=>this.changeName()}/>
    </div>
  );
}
}

export default App;
