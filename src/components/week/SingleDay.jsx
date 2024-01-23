import PropTypes from "prop-types";
import styles from "../../styles/weekly.module.css";

const SingleDay = (props) => {
  const { day } = props;
  console.log(day);

  return (
    <div className={styles.singleDate}>
      <span>{day.day}</span>{" "}
      <span>{/* Additional content or logic related to SingleDay */}</span>{" "}
    </div>
  );
};

SingleDay.propTypes = {
  day: PropTypes.shape({
    day: PropTypes.string.isRequired,
    // Add more PropTypes as needed based on the actual shape of 'day'
  }).isRequired,
};

export default SingleDay;
