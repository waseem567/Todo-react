import { useState } from "react";
import Todo from "./Todo";

const List = (props) => {
    const [done, setDone] = useState([]);

    // on click todo
    function onTodoClickHandler(index) {
        props.onDoneTodo(index);
        setDone((prev) => props.todos.filter(t => t.done === true));
    };
    return <div className="bg-card rounded-md p-5">
        <div className="flex justify-start items-center gap-5 py-5 border-b border-gray-800">
            <p className="flex justify-center items-center">All <span className="flex justify-center items-center px-1 bg-blue-700 text-white rounded min-h-[25px] min-w-[25px] ml-3">{props.todos.length - done.length}</span></p>
            <p className="flex justify-center items-center">Done <span className="flex justify-center items-center px-1 bg-blue-700 text-white rounded min-h-[25px] min-w-[25px] ml-3">{done.length}</span></p>
        </div>
        {props.todos.map((todo, i) => {
            return <div>
                <Todo todo={todo} index={i} key={i} onDone={onTodoClickHandler} /></div>
        })}

    </div>
};

export default List;