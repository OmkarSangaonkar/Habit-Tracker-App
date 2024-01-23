// HabitCard.jsx
// import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../../action";
import styles from "../../styles/home.module.css";
import ActionButton from "./ActionButton";

const HabitCard = (props) => {
  const { habit } = props;
  var target = 5;
  var progress = 0;
  const dispatch = useDispatch();

  const handleDeleteHabit = () => {
    dispatch(deleteHabit(habit.id));
  };

  return (
    <div className={styles.habitCardContainer}>
      <div className={styles.habitCard}>
        <div className={styles.habitCardTitle}>
          <div className={styles.habitActionName}>
            <span>
              <ActionButton habit={habit} />
            </span>
            <span className={styles.cardName}>{`:   ${habit.name}`}</span>
          </div>
          <div>
            <i
              className="fa-solid fa-trash"
              onClick={handleDeleteHabit}
              role="button"
              tabIndex={0}
            ></i>
          </div>
        </div>
        <div className={styles.weeklyProgress}>
          <span>Target : {target} days / week</span>
          <span>
            Progress :{progress} / {target}
          </span>
        </div>
      </div>
    </div>
  );
};

HabitCard.propTypes = {
  habit: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // ... add other habit properties as needed
  }).isRequired,
};

export default HabitCard;
