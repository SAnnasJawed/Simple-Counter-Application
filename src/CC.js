import React , {Component} from 'react'
import './Counter.css'
class CC extends React.Component {

    constructor(){
        super();

        this.state={

            number:0
        }
    }

    add=()=>{
        this.setState({number:this.state.number+1})
    }

    sub=()=>{
        this.setState({number:this.state.number-1})
    }

    render(){
        return <div>
            <h1>{this.state.number}</h1>

            <button className='btn' onClick={this.add}><h1>+</h1></button>
            <button className='btn' onClick={this.sub}><h1>-</h1></button>

        </div>
    }
}

export default CC;