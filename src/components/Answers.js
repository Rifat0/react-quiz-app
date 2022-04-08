import classes from "../styles/answer.module.css";
import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <>
      <Checkbox classname={classes.answer} text="Demo answer 1" />
      <Checkbox classname={classes.answer} text="Demo answer 2" />
    </>
  );
}
