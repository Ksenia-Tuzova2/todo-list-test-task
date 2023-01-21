import { connect } from "react-redux";
import { RootState } from "../../store/redux-store";
import { addTodoActionCreator, changeTitleActionCreator, removeActionCreator } from "../../store/toDoListReduser";
import { toDoListContainerApi } from "./toDoListContainerApi";


let mapStateToProps=(store:RootState)=>{
    return{

    }
}
export const ToDoListContainer=connect(mapStateToProps,{
    removeToDo:removeActionCreator,
    addToDo: addTodoActionCreator,
    changeTitleToDo:changeTitleActionCreator,
})(toDoListContainerApi)