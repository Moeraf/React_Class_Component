import React, { Component } from 'react';

export default class StudentsEducation extends Component {
    f1 = ()=>{
        return (
            <ul>
                <li>MONGODB</li>
                <li>SQL DATABASE</li>
                <li>REACT</li>
                <li>.NET CORE</li>
                <li>GIT</li>
            </ul>
        )
    }
    render() {
        return (
            <>
                {this.f1()}
            </>
        );
    }
}


export class GetStudentsByMap extends Component {
    state = {
        names: [
            "moemen",
            "mouhamad",
            "ahmed",
            "yahya",
            "maamoun"
        ]
    }

    f1 = ()=>{
        let content = this.state.names.map((n) =>{return <li>{n}</li>})
        return (
            <ul>
                {content}
            </ul>
        )
    }
    render() {
        return (
            <>
            <h1 style={{"color": "green"}}>Use map function</h1>
                {this.f1()}
            </>
        );
    }
}


export class UseSpreadOperator extends Component {
    state = {
        names: [
            "moemen",
            "mazen",
            "marwa",
            "yahya"
        ]
}

    f1 = ()=>{
        let content  = this.state.names.map((n)=>{return <li>{n}</li>})
        return (
            <ul>
                {content}
            </ul>
        )
    }

    AddStudents = (neww)=> {
        let newNames= [...this.state.names];
        newNames.push(neww);
        this.setState({names:newNames })
    }

    render() {
        return (
            <>
            <h1 style={{"color": "green"}}>Use spread operator and add in the state</h1>
                {this.f1()}
                <button onClick={()=>{this.AddStudents("mmm")}}>Add Students</button>
            </>
        );
    }
}


export class RemoveFromState extends Component {
    state = {
        names: [
            "moemen",
            "mazen",
            "marwa",
            "yahya"
        ],
        settings:{
            mode: "night",
            version : 2.5
        }
}

    RemoveStudents = (n)=> {
        let NewName = [...this.state.names];
        let _index = this.state.names.indexOf(n);
        NewName.splice(_index, 1 );
        this.setState({names: NewName})
    }

    f1 = ()=>{
        let content  = this.state.names.map((n)=>{return <li>{n} <span style={{'color':'red'}} onClick={()=>{this.RemoveStudents(n)}}>X</span></li>})
        return (
            <ul>
                {content}
            </ul>
        )
    }

    render() {
        return (
            <>
            <h1 style={{"color": "green"}}>RemoveFromState</h1>
                {this.f1()}
            </>
        );
    }
}


export class ChangeInfoInState extends Component {
    state = {
        settings : {
            mode:"day",
            version:"3.0",
        }
    }

    changeMode = ()=>{
        let NewSettings = {...this.state.settings};
        NewSettings.mode = "night";
        this.setState({settings : NewSettings})
    }
    changeVersion = ()=> {
        let NewSettings = {...this.state.settings};
        NewSettings.version = "5.0";
        this.setState({settings : NewSettings})
    }
    render() {
        return (
            <>
                <h1 style={{"color": "green"}}>Change info in the state </h1>
                <h3>{"version: " + this.state.settings.version}</h3>
                <button onClick={()=>this.changeVersion()}>Change version </button>
                <h3>{"mode: " + this.state.settings.mode}</h3>
                <button onClick={()=>this.changeMode()}>Change Mode to Night</button><br/>
            </>
        );
    }
}


export class AddNamesInput extends Component {
    state = {
        Handle: "",
        names: [
            "moemen",
            "mazen",
            "marawe",
            "joe"
        ]
    }

    f1 = ()=>{
        let content = this.state.names.map((e)=>{return <li key={e}>{e}</li>})
        return <ul>{content}</ul>
    }

    HandleName = (evt)=>{
        this.setState({Handle: evt.target.value})
    }

    AddStudents = ()=> {
        let NewNames = [...this.state.names]; // named deep cloning
        NewNames.push(this.state.Handle);
        this.setState({names: NewNames,handle: ""})
    }

    render() {
        return (
            <>
                <h1 style={{"color": "green"}}>Add name tho the state by inputname</h1>
                {this.f1()}
                <input type='text' placeholder='enter the new name' onChange={(evt)=>{this.HandleName(evt)}} value={this.state.handle}></input>
                <button onClick={()=>{this.AddStudents()}}>Add Students</button>
            </>
        );
    }
}




