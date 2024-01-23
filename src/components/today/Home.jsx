// Home.jsx
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/home.module.css";
import { addHabit } from "../../action";
import HabitCard from "./HabitCard";

const Home = () => {
  const [inputData, setInputData] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message

  const habits = useSelector((state) => state.habitsReducer);
  const dispatch = useDispatch();

  const handleAddHabit = () => {
    if (inputData.trim() !== "") {
      dispatch(addHabit(inputData));
      setInputData("");
      setErrorMessage(""); // Clear error message
    } else {
      // Display error message
      setErrorMessage("Please enter a valid habit");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.todaysDate}>{}</div>
      <div className={styles.addHabit}>
        <input
          type="text"
          placeholder="Add Habit..."
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />
        <i className="fa-solid fa-plus" onClick={handleAddHabit}></i>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
      <div className={styles.listHabit}>
        {habits.list.map((habit) => (
          <HabitCard habit={habit} key={habit.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
