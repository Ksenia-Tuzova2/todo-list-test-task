import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { FilterType } from "../../App";
import { ToDoList } from "./ToDoList";

type ToDoType={
    id: string,
    title: string,
    addedDate: string,
    order: number
}

export class toDoListContainerApi extends React.Component{

    componentDidMount(): void {
        axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists').then((Response:any)=>{
            this.props.setToDo(Response)
        })
    }

    render(){
        return(<ToDoList title={""} tasks={[]} deleteTask={function (toDoListId: string, id: string): void {
            throw new Error("Function not implemented.");
        } } changeFilter={function (toDoListId: string, value: FilterType): void {
            throw new Error("Function not implemented.");
        } } addTask={function (toDoListId: string, newText: string): void {
            throw new Error("Function not implemented.");
        } } changeCheckBox={function (toDoListId: string, id: string, checked: boolean): void {
            throw new Error("Function not implemented.");
        } } filter={""} id={""} deleteToDoList={function (id: string): void {
            throw new Error("Function not implemented.");
        } }/>)
    }
}