import React from 'react';


export default class App2 extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: props.name
    }
  }

  handleClick = () => {
    console.log('hey you clicked me')
    this.setState({name:'Changed the value'})
  }

  render(){
    return(
      <div>
        Hello {this.props.name}
        <div>
          <button onClick={()=>this.props.change()}>click me</button>
        </div>
      </div>
    )
  }
}
