import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class EggHeadTutorial extends React.Component {

  constructor (props) {
    super(props);

    this.test();

    console.log('Tests passed !');
  }

  test = () => {
    const counter = (state = 0, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return state + 1;
        case 'DECREMENT':
          return state - 1;
        default:
          return state;
      }
    };

    const store = createStore(counter);

    const Counter = ({
      value,
      onIncrement,
      onDecrement
    }) => (
      <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );

    const render = () => {
      ReactDOM.render(
        <Counter
          value={store.getState()}
          onIncrement={() =>
            store.dispatch({
              type : 'INCREMENT'
            })
          }
          onDecrement={() =>
            store.dispatch({
              type : 'DECREMENT'
            })
          } />,
        document.getElementsByClassName('tutorial')[0]
      );
    };

    store.subscribe(render);
    setTimeout(render, 500);
  };

  render () {
    return (
      <div className='container text-center'>
        <h1>This is the <a href='https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree' target='_blank'>tutorial</a></h1>
        <p>Check out the console for assertions</p>
        <p>The root of the tests are in views/EggHeadTutorial/EggHeadTutorial.js</p>
        <hr />
        <div className='tutorial'></div>
        <Link to='/'>Back To Home View</Link>
      </div>
    );
  };

}
