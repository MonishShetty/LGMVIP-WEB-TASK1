import React, { useState } from 'react'

export default function Todocontainer() {
    const [todos, settodos] = useState([])

    // const deleteitem=(item)=>{
       
        
    // }

    const remap=() =>{
        let x = document.getElementById('ip').value.trimStart();
        x=x.trimStart()
        let arr =todos.slice()
        console.log(todos,"todos")
        arr.push(x)
        console.log(arr,"arr")

        
        arr.forEach(item => {
            if (!todos.includes(item)) {
                todos.push(item)
            }
        })
        let y=todos.indexOf('')
        todos.splice(y,y)
        settodos(todos)
        console.log(todos," todos after adding")


    }
    return (
        <div>
            <div className='container'>
                <div className='heading'>Hello!!! <br />
                    Your's To-Do List is here</div>

                <div className='input'>
                    <input id='ip' className='iphere' required></input> <button onClick={(e) => remap(e)} >Add</button>
                </div>
                <div className='mapped'>
                   {todos.map(item =>{ if(item!=='') { return<div> <h1 key={item} >{item}</h1>
                    <button onClick={({item})=>deleteitem({item})}>X</button>
                     </div>}})}




                </div>
            </div>
        </div>
    )
}
