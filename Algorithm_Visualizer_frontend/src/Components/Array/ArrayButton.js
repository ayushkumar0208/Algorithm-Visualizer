import React, { Component } from 'react'
import DropDownArray from './DropDownArray'

export default class ArrayButton extends Component {
    state = {
        DropDownArray:false
      }
    
      handleDropDownArray(){
        console.log(this.state.DropDownArray)
        this.setState({DropDownArray:!this.state.DropDownArray});
      }
  render() {
    return (
      <div className='ArrayButton'>
        <button onClick={()=>this.handleDropDownArray()}>Array</button>
        <DropDownArray/>
      </div>
    )
  }
}
