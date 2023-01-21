import { Delete } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import {  Checkbox } from '@mui/material';
import { ChangeEvent } from 'react';


export type ToDoListType = {
    idTask:string
    checked:boolean,
    task:string,
    onChangeHandler:(e: ChangeEvent<HTMLInputElement>)=>void,
    onDeleteHandler:(idItem: string)=>void,
}


export function TaskItem({
    idTask,
    checked,
    task,
    onChangeHandler,
    onDeleteHandler
 }: ToDoListType) {



    return (
        <li className={checked ? 'checked' : ''}>
            <Checkbox
                checked={checked}
                onChange={onChangeHandler}
            />
            <span>{task}</span>
            <IconButton aria-label="delete" onClick={() => onDeleteHandler(idTask)}>
                <Delete />
            </IconButton>
        </li>)
}


