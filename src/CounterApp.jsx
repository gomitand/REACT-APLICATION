
import {useState} from 'react';

import Proptypes from 'prop-types';

export const CounterApp = ({value}) => {

const [  counter,setCounter] = useState(value);


  const handleAdd =() => {
    //console.log(event)

    // setCounter( (c) => c + 1)
    setCounter(counter +1);
  }


  const menosuno =() => { setCounter( (m) => m - 1)}

  const rest =() => { setCounter( (r) => r = value)}


  return (
    <>
    <div>CounterApp</div>
    <h2> { counter } </h2>

    <button onClick={  handleAdd }>+1</button>
    <button onClick={ menosuno }>-1</button>
    <button onClick={  rest }>Reset</button>




    </>
  );

  }
CounterApp.prototypes={
    value: Proptypes.number.isRequired
}
