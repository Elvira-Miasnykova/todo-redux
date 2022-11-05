//import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { statusFilters } from "./constans";
import { addTask, deleteTask, toggleCompleted, setStatusFilter } from "./actions";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];
  

export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {
    //return [...state, action.payload];
    //immer
    state.push(action.payload);
  },
  [deleteTask]: (state, action) => {
   // return state.filter(task => task.id !== action.payload);
    //immer
    const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
  },
  [toggleCompleted]: (state, action) => {
    // return state.map(task => {
    //   if (task.id !== action.payload) {
    //     return task;
    //   }
    //   return {
    //     ...task,
    //     completed: !task.completed,
    //   };
    // });
    
    //immer
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
  },
});

const filtersInitialState = {
  status: statusFilters.all,
}
export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    // return {
    //   ...state,
    //   status: action.payload,
    // };

    //immer
    state.status = action.payload;
  },
});
  

//--------------------REDAX--------------------------

// Используем initialState как значение состояния по умолчанию
// export const tasksReducer = (state = tasksInitialState, action) => {
//   // Редюсер различает экшены по значению свойства type
//   switch (action.type) {
//     // В зависимости от типа экшена будет выполняться разная логика
//     case addTask.type:
//       // Нужно вернуть новый объект состояния
//       return [...state, action.payload];
                      
//     case deleteTask.type:
//       return state.filter(task => task.id !== action.payload);
          
//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return {
//           ...task,
//           completed: !task.completed,
//         };
//       });
                     
//     default:
//       // Каждый редюсер получает все экшены отправленные в стор.
//       // Если редюсер не должен обрабатывать какой-то тип экшена,
//       // необходимо вернуть существующее состояние без изменений.
//       return state;
//   }
// };

// const filtersInitialState = {
//       status: statusFilters.all,
  
// };


// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = (state = {}, action) => {
//   // Возвращаем объект состояния
//   return {
//     // Обоим редюсерам передаем только часть состояния за которую они отвечают
//     tasks: tasksReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });
