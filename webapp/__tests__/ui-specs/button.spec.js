import React, { useState } from "react";
import ReactDOM from "react-dom";

let container;

beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
})

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

const Button = (props) => {
    const [data, setData] = useState("")
    if (props) {
        return <button onClick={}>{props.name || 'no name specified'}</button>
    }
    return <div className='container'>missing props</div>
}

describe('Button component', () => {
    
})