import React,{useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value,subtitle}) => {
    const [counter, setCounter]=useState(value)
    const handlerAdd= ()=>{
        setCounter(counter+1)
        //setCounter((ct)=>ct+1)
    }
    const handlerRest= ()=>{
        setCounter(counter-1)
    }
    const handlerReset= ()=>{
        setCounter(value)
    }
    return (
        <div>
            <h1>Counter app</h1>
            <h2>{subtitle}</h2>
            <h2>Conatador: {counter}</h2>
            <button onClick ={handlerAdd}>Suma 1</button>
            <button onClick ={handlerReset}>reset </button>
            <button onClick ={handlerRest}>resta 1</button>

        </div>
    )
}



CounterApp.propTypes={
    value : PropTypes.number.isRequired,
    subtitle: PropTypes.string
}

CounterApp.defaultProps = {
    subtitle:'hola defecto'
}
export default CounterApp
