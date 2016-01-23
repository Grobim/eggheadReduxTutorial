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
    const todos = (state = [], action) => {
      switch (action.type) {
        case 'ADD_TODO':
          return [
            ...state,
            {
              id        : action.id,
              text      : action.text,
              completed : false
            }
          ];
        case 'TOGGLE_TODO':
          return state.map(todo => {
            if (todo.id === action.id) {
              return {
                ...todo,
                completed : !todo.completed
              };
            } else {
              return todo;
            }
          });
        default:
          return state;
      }
    };

    const testAddTodo = () => {
      const stateBefore = [];
      const action = {
        type : 'ADD_TODO',
        id   : 0,
        text : 'Learn Redux'
      };
      const stateAfter = [
        {
          id        : 0,
          text      : 'Learn Redux',
          completed : false
        }
      ];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todos(stateBefore, action)
      ).toEqual(stateAfter);
      console.log('Test passed : testAddTodo');
    };

    const testToggleTodo = () => {
      const stateBefore = [
        {
          id        : 0,
          text      : 'Learn Redux',
          completed : false
        },
        {
          id        : 1,
          text      : 'Go shopping',
          completed : false
        }
      ];
      const action = {
        type : 'TOGGLE_TODO',
        id   : 1
      };
      const stateAfter = [
        {
          id        : 0,
          text      : 'Learn Redux',
          completed : false
        },
        {
          id        : 1,
          text      : 'Go shopping',
          completed : true
        }
      ];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(
        todos(stateBefore, action)
      ).toEqual(stateAfter);
      console.log('Test passed : testToggleTodo');
    };

    testAddTodo();
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
