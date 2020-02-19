import React from 'react';
import ReactDom from 'react-dom';



class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            link: "",
            tab: [],
        }


    }


    entre = (e) => {
        this.setState({ link: e.target.value })
    }
    add = (e) => {
        this.setState({ tab: this.state.tab.concat({text:this.state.link,complete:false}) })
    }
    complete =(e)=>{
    this.setState({tab:this.state.tab.map(el => el.text===e ?{...el,complete:!el.complete}:el)})
    }
    delete =(e)=> {
        this.setState({tab:this.state.tab.filter(el =>e !=el.text)})
    }
    render() {
        return (
            <div>
                <div className='cantainer'>
                <h1 className= 'title'>to-Do App!</h1>
                <p className='title'>Add new to-do</p>
                <input type='text' name='link' onChange={this.entre} />
                <button onClick ={this.add}>Add</button>
                </div>
                <h1>Let's get some work done!</h1>
                {this.state.tab.map(el => <div>
                   
                <button onClick={()=>this.complete(el.text)}>{el.complete ? "undo":"complete"}</button>
                   <h1 className={ el.complete ? 'active':""} > {el.text}</h1>
                    <button onClick={() =>this.delete(el.text)}>Delete</button>

                </div>)}
            </div>
        )
    }
}
export default Todo;
