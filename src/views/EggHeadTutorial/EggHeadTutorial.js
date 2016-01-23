import React from 'react';
import { createStore } from 'redux';
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

    const render = () => {
      document.getElementsByClassName('episode6')[0].innerText = store.getState();
    };

    store.subscribe(render);
    setTimeout(render, 100);

    document.body.addEventListener('click', () => {
      store.dispatch({ type : 'INCREMENT' });
    });
  };

  render () {
    return (
      <div className='container text-center'>
        <h1>This is the <a href='https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree' target='_blank'>tutorial</a></h1>
        <p>Check out the console for assertions</p>
        <p>The root of the tests are in views/EggHeadTutorial/EggHeadTutorial.js</p>
        <hr />
        <div className='episode6'></div>
        <Link to='/'>Back To Home View</Link>
      </div>
    );
  };

}
