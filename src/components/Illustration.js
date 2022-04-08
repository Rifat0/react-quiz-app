import singupLogo from "../assets/images/signup.svg";
import classes from "../styles/illustration.module.css";

export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={singupLogo} alt="Signup" />
    </div>
  );
}
