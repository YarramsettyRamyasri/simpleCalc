import React ,{useState}from 'react'
import './Style.css'
// import { useState } from 'react';
function Calci() {
    const[result,setResult]=useState(" ");
    const handleButton=(e) =>{
        setResult(result.concat(e.target.name));
    }
    const Clear=()=>{
        setResult(" ");
    }
    const backspace=()=>{
        setResult(result.slice(0,-1));
    }
    const evaluate =()=>{
        try{
        setResult(eval(result).toString());
        }catch(err){
            setResult("error");
        }
    }
  return (
    
    <div className="Main">
        <div className="Container">
        <form >
            <input type="text" value={result}></input>
        </form>
        </div>
        <div className="keypad">
        <button onClick={Clear} id="Clear">Clear</button>
            <button onClick={backspace}id="f">C</button>
            
            <button onClick={handleButton} name='/'>/</button>
            <button onClick={handleButton} name='7'>7</button>
            <button onClick={handleButton} name='8'>8</button>
            <button onClick={handleButton} name='9'>9</button>
            <button onClick={handleButton} name='*'>x</button>
            <button onClick={handleButton} name='4'>4</button>
            <button onClick={handleButton} name='5'>5</button>
            <button onClick={handleButton} name='6'>6</button>
            <button onClick={handleButton} name='-'>-</button>
            <button onClick={handleButton} name='1'>1</button>
            <button onClick={handleButton} name='2'>2</button>
            <button onClick={handleButton} name='3'>3</button>
            <button onClick={handleButton} name='+'>+</button>
            <button onClick={handleButton} name='0'>0</button>
            <button onClick={handleButton} name='.'>.</button>
            <button onClick={evaluate} id='result'>=</button>
            
        </div>

    </div>
    
  )
}

export default Calci