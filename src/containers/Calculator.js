import React, { useState } from 'react'
import '../assets/css/App.css'

const Calculator = _ => {

    const [result, setPlus] = useState(0);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
        return (
            <div>
                <div>
                    <input 
                        placeholder="nunber1" 
                        name="number1"
                        type="number" 
                        value={number1} 
                        onChange={ e => setNumber1( e.target.value )} />
                </div>

                <div>
                    <input 
                        placeholder="nunber2" 
                        type="number"
                        name="number2" 
                        value={number2} 
                        onChange={ e => setNumber2( e.target.value )} />
                </div>
                <p>
                    {result}
                </p>

                <button onClick={ _ => {setPlus( parseInt(number1) + parseInt(number2))}}>+</button>
            </div>
        )
}

export default Calculator