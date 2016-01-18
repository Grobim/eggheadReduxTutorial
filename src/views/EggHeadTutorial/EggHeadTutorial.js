import React from 'react';
import expect from 'expect';
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

    expect(
      counter(0, { type : 'INCREMENT' })
    ).toEqual(1);

    expect(
      counter(1, { type : 'INCREMENT' })
    ).toEqual(2);

    expect(
      counter(2, { type : 'DECREMENT' })
    ).toEqual(1);

    expect(
      counter(1, { type : 'DECREMENT' })
    ).toEqual(0);

    expect(
      counter(1, { type : 'SOMETHING_ELSE' })
    ).toEqual(1);

    expect(
      counter(undefined, {})
    ).toEqual(0);
  };

  render () {
    return (
      <div className='container text-center'>
        <h1>This is the <a href='https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree' target='_blank'>tutorial</a></h1>
        <p>Check out the console for assertions</p>
        <p>The root of the tests are in views/EggHeadTutorial/EggHeadTutorial.js</p>
        <hr />
        <Link to='/'>Back To Home View</Link>
      </div>
    );
  };

}
