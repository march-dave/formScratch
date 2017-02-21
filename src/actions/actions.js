export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}

export function setDiff(value) {
    return {
        type: SET_DIFF,
        diff: value
    };
}

// // export const ADD_TODO = 'ADD_TODO'

// // let nextTodoId = 0;

// // export function addTodo(text) {
// //    return {
// //       type: ADD_TODO,
// //       id: nextTodoId++,
// //       text
// //    };
// // }
