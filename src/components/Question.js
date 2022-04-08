import classes from "../styles/question.module.css";
import Checkbox from "./Checkbox";

export default function Question() {
  return (
    <div className={classes.question}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>

      <div className={classes.answers}>
        <Checkbox classname={classes.answer} text="A New Hope 1" />
      </div>
    </div>
  );
}
