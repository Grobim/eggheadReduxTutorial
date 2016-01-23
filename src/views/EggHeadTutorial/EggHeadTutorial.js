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
    const toggleTodo = (todo) => {
      return {
        ...todo,
        completed : !todo.completed
      };
    };

    const testToggleTodo = () => {
      const todoBefore = {
        id        : 0,
        test      : 'Learn Redux',
        completed : false
      };
      const todoAfter = {
        id        : 0,
        test      : 'Learn Redux',
        completed : true
      };

      deepFreeze(todoBefore);

      expect(
        toggleTodo(todoBefore)
      ).toEqual(todoAfter);

      console.log('Test passed : testToggleTodo');
    };

    testToggleTodo();
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
