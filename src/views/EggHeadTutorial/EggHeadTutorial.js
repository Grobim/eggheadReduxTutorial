import React from 'react';
import { Link } from 'react-router';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

export default class EggHeadTutorial extends React.Component {

  constructor (props) {
    super(props);

    this.test();

    console.log('Tests passed !');
  }

  test = () => {
    const addCounter = (list) => {
      return [...list, 0];
    };

    const removeCounter = (list, index) => {
      return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
      ];
    };

    const incrementCounter = (list, index) => {
      return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
      ];
    };

    const testAddCounter = () => {
      const listBefore = [];
      const listAfter = [0];

      deepFreeze(listBefore);

      expect(
        addCounter(listBefore)
      ).toEqual(listAfter);
      console.log('Test passed testAddCounter');
    };

    const testRemoveCounter = () => {
      const listBefore = [0, 10, 20];
      const listAfter = [0, 20];

      deepFreeze(listBefore);

      expect(
        removeCounter(listBefore, 1)
      ).toEqual(listAfter);
      console.log('Test passed testRemoveCounter');
    };

    const testIncrementCounter = () => {
      const listBefore = [0, 10, 20];
      const listAfter = [0, 11, 20];

      deepFreeze(listBefore);

      expect(
        incrementCounter(listBefore, 1)
      ).toEqual(listAfter);
      console.log('Test passed testIncrementCounter');
    };

    testAddCounter();
    testRemoveCounter();
    testIncrementCounter();
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
