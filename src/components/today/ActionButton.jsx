// ActionButton.jsx
// import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addHabitStatus } from "../../action";
import styles from "../../styles/home.module.css";

const ActionButton = (props) => {
  const { habit } = props;
  const dispatch = useDispatch();

  const handleNoStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "",
    };
    dispatch(addHabitStatus(obj));
  };

  const handleDoneStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "done",
    };
    dispatch(addHabitStatus(obj));
  };

  const handleNotDoneStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "notdone",
    };
    dispatch(addHabitStatus(obj));
  };

  return (
    <div className={styles.habitCardAction}>
      {habit.doneStatus === "" && (
        <span
          className={styles.habitCardCheckIcon}
          role="button"
          tabIndex={0}
          onClick={handleDoneStatus}
        >
          <i className="fa-regular fa-square"></i>
        </span>
      )}

      {habit.doneStatus === "done" && (
        <span
          className={styles.habitCardCheckIcon}
          role="button"
          tabIndex={0}
          onClick={handleNotDoneStatus}
        >
          <i className="fa-solid fa-square-check"></i>
        </span>
      )}

      {habit.doneStatus === "notdone" && (
        <span
          className={styles.habitCardCrossIcon}
          role="button"
          tabIndex={0}
          onClick={handleNoStatus}
        >
          <i className="fa-solid fa-square-xmark"></i>
        </span>
      )}
    </div>
  );
};

ActionButton.propTypes = {
  habit: PropTypes.shape({
    id: PropTypes.string.isRequired,
    doneStatus: PropTypes.string.isRequired,
    // ... add other habit properties as needed
  }).isRequired,
};

export default ActionButton;
