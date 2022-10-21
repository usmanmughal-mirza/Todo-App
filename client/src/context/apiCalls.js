import {START__LOADING,END__LOADING,CREATE__TODO,UPDATE__TODO,GET__TODOS,DELETE__TODO,
ERROR} from "./constants";
import {getTodosSuccess,startLoading,endLoading,createTodoSuccess,updateTodoSuccess,deleteTodoSuccess,errorTodosSuccess} from "./actions";
import axios from "axios";

const url="http://localhost:8000/api";

// FETCH TODOS  ALL / COMPLETED / UNCOMPLETED -----------------

export const getTodos =async(dispatch,todostate) =>{
dispatch(startLoading());
// console.log(statustodos);
try {
    const res=await axios.get(`${url}/todos?todostate=${todostate}`);

    dispatch(getTodosSuccess(res?.data));
    console.log(res?.data);

    dispatch(endLoading());
} catch (error) {
    console.log(error);
    dispatch(errorTodosSuccess(error))
}
}

// CREATE TODO --------------------------------------------------

export const createTodo =async(dispatch,todo) =>{
dispatch(startLoading());

try {
    const res=await axios.post(`${url}/todo`,todo);
   
    dispatch(createTodoSuccess(res?.data));
   
    dispatch(endLoading());

} catch (error) {
    console.log(error);
    dispatch(errorTodosSuccess(error))
}
}

// UPDATE TODO -----------------------------------------
export const updateTodo =async(dispatch,todo,id) =>{
dispatch(startLoading());

try {
    const res=await axios.put(`${url}/todo/${id}`,todo);
   
    dispatch(updateTodoSuccess(res?.data));

    dispatch(endLoading());
} catch (error) {
    console.log(error);
    dispatch(errorTodosSuccess(error))
}
}


// DELETE TODO -------------------------------------------

export const deleteTodo =async(dispatch,id) =>{
dispatch(startLoading());

try {
    await axios.delete(`${url}/todo/${id}`);
    dispatch(deleteTodoSuccess(id));

    dispatch(endLoading());
} catch (error) {
    console.log(error);
    dispatch(errorTodosSuccess(error))
}
}


