import { Link } from "react-router-dom";
import classes from "../styles/progressbar.module.css";
import Button from "./Button";

export default function ProgressBar() {
  return (
    <div class={classes.progressBar}>
      <div class={classes.backButton}>
        <span class="material-icons-outlined"> arrow_back </span>
      </div>
      <div class={classes.rangeArea}>
        <div class={classes.tooltip}>24% Cimplete!</div>
        <div class={classes.rangeBody}>
          <div class={classes.progress}></div>
          <div class={classes.progress} style={{ width: `20%` }}></div>
        </div>
      </div>
      <Link to="/result">
        <Button className={classes.next}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </Link>
    </div>
  );
}
