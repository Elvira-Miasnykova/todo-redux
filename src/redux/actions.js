//import { nanoid } from "nanoid";
import { createAction, nanoid} from "@reduxjs/toolkit";

// export const addTask = text => {
//   return {
//     type: "tasks/addTask",
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };

export const addTask = createAction("tasks/addTask", text => {
  return {
   
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
});

// export const deleteTask = taskId => {
//   return {
//     type: "tasks/deleteTask",
//     payload: taskId,
//   };
// };

export const deleteTask = createAction("tasks/deleteTask", taskId => {
  return {
   
    payload: taskId,
  };
});


// export const toggleCompleted = taskId => {
//   return {
//     type: "tasks/toggleCompleted",
//     payload: taskId,
//   };
// };

export const toggleCompleted = createAction("tasks/toggleCompleted",
  taskId => {
  return {
    
    payload: taskId,
  };
});

// export const setStatusFilter = value => {
//   return {
//     type: "filters/setStatusFilter",
//     payload: value,
//   };
// };

export const setStatusFilter = createAction("filters/setStatusFilter",
  value => {
    return {
      payload: value,
    };
  }
);