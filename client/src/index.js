import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
    constructor(props){
        super(props)
        //initial state set up
        this.state = {count:32}
    }
    componentDidMount(){
        //updating state
        this.setState({count:42}, () => {
            console.log(this.state.count)
            this.setState({count:52})
        })
    }
    render(){
        return <div>Message:{this.state.message}</div>
    }
}
ReactDOM.render(
    <Counter />,
    document.getElementById("root")
)
