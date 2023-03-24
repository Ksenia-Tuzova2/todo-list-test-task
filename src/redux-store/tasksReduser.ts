import { v1 } from "uuid"

export type TasksType = {
  task: string,
  id: string,
  description: string,
  checked: boolean,
}




export type StateType = {
  [key: string]: TasksListsType
}





type ActionTypes = ReturnType<typeof >

export const removeTaskActionCreator = (toDoId: string, taskId: string): RemoveActionType => {
  return {
    type: 'REMOVE-TASK' as const,
    toDoId: toDoId,
    taskId: taskId
  }
}

export const addTaskActionCreator = (newTitle: string, toDoId: string): addTaskActionType => {
  return {
    type: 'ADD-TASK' as const,
    newTitle: newTitle,
    toDoId: toDoId,
  }
}

export const changeFilterActionCreator = (newFilter: boolean, toDoId: string, taskId: string): changeFilterActionType => {
  return {
    type: 'CHANGE-FILTER' as const,
    toDoId: toDoId,
    taskId: taskId,
    newFilter: newFilter
  }
}

export const changeTaskTitleActionCreator = (newName: string, toDoId: string, taskId: string): changeTaskTitleActionType => {
  return {
    type: 'CHANGE-TASK-TITLE' as const,
    toDoId: toDoId,
    taskId: taskId,
    newName: newName,
  }
}

// export const addNewListActionCreator = (newTitle: string): addNewListActionType => {
//   return {
//     type: 'ADD-TODO-LIST' as const,
//     newTitle: newTitle,
//     id: v1(),
// }
// }

export const deleteListActionCreator = (toDoId: string): deleteListActionType => {
  return {
    type: 'DELETE-LIST' as const,
    toDoId: toDoId,
  }
}

//но так как редюсер должен быть иммутабельной функцией - не изменять то, что приходит, а делать копию и изменять ее, то мы должны создать копию
//важно писать после скобок с аргументами двоеточие и тип того, что должен вернуть редьюсер - ведь это иммутабельная функция, а значит, что мы должны вернуть ту же структуру, что получили
export const tasksReducer = (state: TasksListsType, action: ActionTypes): TasksListsType => {
  switch (action.type) {
    case ('REMOVE-TASK'):
      let stateCopy = { ...state }
      let tasks = stateCopy[action.toDoId]
      let filtreTasks = tasks.filter((t) => t.id !== action.taskId)
      stateCopy[action.toDoId] = filtreTasks
      return { ...stateCopy }

    case ('ADD-TASK'):
      let newTask = {
        task: action.newTitle,
        id: v1(),
        description: 'something',
        checked: false,
      }
      return { ...state, [action.toDoId]: [newTask, ...state[action.toDoId]] }
    case ('CHANGE-FILTER'):
      let newValue = !action.newFilter

      return {
        ...state, [action.toDoId]: state[action.toDoId].map(task => {
          return task.id === action.taskId ? { ...task, checked: newValue } : task
        })
      }
    case ('CHANGE-TASK-TITLE'):
      return {
        ...state, [action.toDoId]: state[action.toDoId].map(task => {
          return task.id === action.taskId ? { ...task, task: action.newName } : task
        })
      }
    case ('ADD-TODO-LIST'):
      const copyState = { ...state }
      copyState[action.id] = []
      return copyState

    case ('DELETE-LIST'):
      let copyState2 = { ...state }
      delete copyState2[action.toDoId]
      return copyState2
    default:
      throw new Error('I dont understand the action type')
  }
}