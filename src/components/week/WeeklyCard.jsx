import PropTypes from "prop-types";
import styles from "../../styles/weekly.module.css";
import ActionDayButton from "./ActionDayButton";
import SingleDay from "./SingleDay";

const WeeklyCard = (props) => {
  const { habit } = props;

  return (
    <div className={styles.weeklyCard}>
      <div className={styles.habitTitle}>
        <div className={styles.habitName}>{habit.name}</div>
      </div>
      <div className={styles.weeklyDate}>
        {habit.weekdays.map((item, index) => (
          <div className={styles.singleDay} key={index}>
            <SingleDay day={item} />
            <ActionDayButton habit={habit} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

WeeklyCard.propTypes = {
  habit: PropTypes.shape({
    name: PropTypes.string.isRequired,
    weekdays: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string.isRequired,
        // Add more PropTypes if 'weekdays' have additional properties
      })
    ).isRequired,
  }).isRequired,
};

export default WeeklyCard;
