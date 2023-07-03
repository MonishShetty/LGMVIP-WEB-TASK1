import React, { useState } from 'react'
import './todocontainer.css'


export default function Todocontainer() {
    const [todos, settodos] = useState([])

    const deleteitem = (p) => {

        console.log("Item to be deleted ", p)
        let arr = todos.slice()
        let x = arr.indexOf(p)
        arr.splice(x, 1)
        settodos(arr)
        console.log(todos, " todos after deleting")

    }

    const remap = () => {
        let x = document.getElementById('ip').value.trimStart();
        x = x.trimStart()
        let arr = todos.slice()
        console.log(todos, "todos")
        if (!arr.includes(x))
            arr.push(x)
        console.log(arr, "arr")



        let y = arr.indexOf('')
        arr.splice(y, y)
        settodos(arr)
        console.log(todos, " todos after adding")
        document.getElementById('ip').value = ""

    }
    return (
        <div>
            <div className='container'>
                <div className='heading'>Hello!!! <br />
                    Your's To-Do List is here</div>

                <div className='input'>
                    <input placeholder='Title...' id='ip' className='iphere' required></input> 
                    <button id='btn' onClick={(e) => remap(e)} >Add</button>
                </div>
                <div className='mapped'>

                    {todos.map(item => {
                        if (item !== '') {
                            return <div className='displaylist'>
                                <table class="table table-striped">

                                    <tbody>
                                        <tr>
                                            <td className='listname' key={item}>{item}</td>
                                            <td className='listbutton'><i class="glyphicon glyphicon-remove listbutton" onClick={() => deleteitem(item)}></i></td>
                                        </tr>

                                    </tbody>
                                </table>



                            </div>
                        }
                    })}




                </div>
            </div>
        </div>
    )
}
