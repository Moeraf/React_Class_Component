import React, { Component } from 'react';

export default class FirstComponents extends Component {
    render() {
        return (
            <>
                hello from my first file of creating a components
            </>
        );
    }
}



export class SecondComponents extends Component {
    name = "second"
    render() {
        return (
            <>
                 hello from my {this.name} components  {/*this named injection */}
            </>
        );
    }
}


export class ThirdComponents extends Component {
    students = {id:12, name: "third"}
    render() {
        return (
            <>
                hello from my {this.students.name} components
            </>
        );
    }
}

export class SolveCalledAutomatically extends Component {
    f1 = ()=>{alert("hellooo")}
    render() {
        return (
            <>
                <h1>hello, this part is for solve the problem of called the fucntion automatically</h1>
                <button onClick={()=>{this.f1()}}>Click Me</button>
            </>
        );
    }
}


export class CalledFunction extends Component {
    name = "moemen"
    f1 = function () {
        console.log("thanks for clicking");
    }
    render() {
        return (
            <>
                <h1>hello {this.name}, this part is for the function injection</h1>
                <button onClick={this.f1}>Click here</button>
            </>
        );
    }
}

export class ImportanceForArrowFunction extends Component {
    name = "moemen"
    f1 =  () =>{   // the keyword function will cause for die "this" role for that reason we use arrow function here
        console.log(this.name);
    }
    render() {
        return (
            <>
                <h1>hello {this.name}, this part is for importance for arrow function in "this"</h1>
                <button onClick={this.f1}>Click here</button>
            </>
        );
    }
}

export class UsingSetState extends Component {
    state={name: "marwa"};
    f1 = ()=>{
        this.setState({name: "moemen "}, ()=>{alert(this.state.name)})
    }
    render() {
        return (
            <>
                <h1>Hello {this.state.name} , this part is for know how to use state and setstate and the importance of those</h1>
                <button onClick={this.f1}>ChangeName</button>
            </>
        );
    }
}


export class CalledOwnConstructor extends Component {
    constructor(){
        super();
        console.log("i am constructor");
    }
    render() {
        return (
            <>
            <h1 style={{"color": "green"}}>how to called constructor</h1>
            <h3>helo constructor</h3>
            </>
        );
    }
}


export class EffectUsingSetState extends Component {
    // constructor(){
    //     super();
    //     setInterval(()=>{
    //         this.setState({name: this.state.name + "x"})
    //     }, 2000)
    // }
    state={name: "marwa"};
    f1 = ()=>{
        this.setState({name: "moemen "}, ()=>{alert(this.state.name)})
    }
    render() {
        // console.log("effect for calling setsatet every 2000s in the constructor");
        return (
            <>
            <h1 style={{"color": "green"}}>effect using setstate on keyword this</h1>
                <h1>Hello {this.state.name} , this part is for know how to use state ans setstate and the importance of those</h1>
                <button onClick={this.f1}>ChangeName</button>
            </>
        );
    }
}


export class ReturnFunctionInRender extends Component {
    f1 = ()=>{
        return <li>moemen</li>
    }
    render() {
        return (
            <>
            <h1 style={{"color": "green"}}>Return function in render</h1>
                <ul>
                    {/* {this.f1} this method not running because f1 should have ()*/} {this.f1()}
                    <li>marwa</li>
                    <li>mazen</li>
                    <li>saddam</li>
                    <li>safa</li>
                </ul>
            </>
        );
    }
}












