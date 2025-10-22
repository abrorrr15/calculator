import { useReducer, useState } from 'react';
import './calculator.css';
const initialState = {
  input: '',
};

function reducer(state, action) {

  try {
    switch (action.type) {
      case 'ADD_INPUT':
        return {
          ...state,
          input: state.input + action.payload,
        };
      case 'CALCULATE_RESULT':
        return {
          input: eval(state.input),
        };
      case 'CLEAR':
        return initialState;
      case 'CLEAR_E':
        return {
          input: state.input.slice(0, -1),
        };
      default:
        return state;
    }
  }catch(e){
    console.error(e);
    return initialState;
  };
    // const action = action.toString();
    // const state = state.toString();
    // console.log(state, action);
  };

  export default function Calculator() {
    // const [current, dispatch] = useState('');
    // const [previous, setPrevious] = useState();
    // const [operation, setOperation] = useState('');

    const [state, dispatch] = useReducer(reducer, initialState);

    function handleInput(value) {
      dispatch({ type: 'ADD_INPUT', payload: value });
    }
    function handleResult() {
      dispatch({ type: 'CALCULATE_RESULT' });
    }
    function clear() {
      dispatch({ type: 'CLEAR' });
    }
    function clearE() {
      dispatch({ type: 'CLEAR_E' });
    }

    return (
      <div className="container">
        <div>
          <textarea
            type="text"
            placeholder='0'
            rows='1'
            disabled
            className="output"
            value={state.input}
          />
        </div>
        <div className='buttons'>
          <button onClick={() => handleInput('%')}>%</button>
          <button onClick={() => handleInput('/')}>/</button>
          <button onClick={() => clearE()}>CE</button>
          <button onClick={() => clear()}>AC</button>
        </div>
        <div className='buttons'>
          <button className='num' onClick={() => handleInput('7')}>7</button>
          <button className='num' onClick={() => handleInput('8')}>8</button>
          <button className='num' onClick={() => handleInput('9')}>9</button>
          <button onClick={() => handleInput('*')}>x</button>
        </div>
        <div className='buttons'>
          <button className='num' onClick={() => handleInput('4')}>4</button>
          <button className='num' onClick={() => handleInput('5')}>5</button>
          <button className='num' onClick={() => handleInput('6')}>6</button>
          <button onClick={() => handleInput('+')}>+</button>
        </div>
        <div className='buttons'>
          <button className='num' onClick={() => handleInput('1')}>1</button>
          <button className='num' onClick={() => handleInput('2')}>2</button>
          <button className='num' onClick={() => handleInput('3')}>3</button>
          <button onClick={() => handleInput('-')}>-</button>
        </div>
        <div className='buttonA'>
          <button className='dot' onClick={() => handleInput('.')}>.</button>
          <button
            className='equal' onClick={handleResult}>=
          </button>
        </div>
      </div>
    )
  }