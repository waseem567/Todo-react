import { useState } from "react";
import "./Todo.css";
const Todo = (props) => {
    const [strike, setStrike] = useState(false);
    const onClickHandler = () => {
        props.onDone(props.index);
        setStrike(true);
    };
    return <div onClick={onClickHandler} className={`bg-todo ${strike && "line-through"} px-3 py-5 shadow-xl cursor-pointer my-3`}>
        <h1 className={`${strike && "line-through"} font-bold`}>{props.todo.heading}</h1>
        <p className="">{props.todo.details}</p>
    </div>
};

export default Todo;