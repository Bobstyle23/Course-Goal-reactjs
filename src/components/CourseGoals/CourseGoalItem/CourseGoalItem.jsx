import React from "react";

import "./CourseGoalItem.css";

function CourseGoalItem(props) {
  // const [deleteText, setDeleteText] = useState('');
  function deleteHandler() {
    props.onDelete(props.id);
  }
  return (
    <div>
      <li className="goal-item" onClick={deleteHandler}>
        {props.children}
      </li>
    </div>
  );
}

export default CourseGoalItem;
