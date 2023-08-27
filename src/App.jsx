import styles from "./App.module.css";
import PropTypes from "prop-types";
import Picture from "./Picture";
import IconList from "./IconList";
import { useState } from "react";

export default function App() {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <div className={styles.App}>
      {isValidEmail ? (
        <ThankYou email={email} setIsValidEmail={setIsValidEmail} />
      ) : (
        <Container
          isValidEmail={isValidEmail}
          setIsValidEmail={setIsValidEmail}
          email={email}
          setEmail={setEmail}
        />
      )}
    </div>
  );
}

function Container({ setIsValidEmail, setEmail, email }) {
  Container.propTypes = {
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
    setIsValidEmail: PropTypes.func.isRequired,
  };
  return (
    <div className={styles.Container}>
      <LeftComponent
        setIsValidEmail={setIsValidEmail}
        email={email}
        setEmail={setEmail}
      />
      <Picture />
    </div>
  );
}
function LeftComponent({ setIsValidEmail, setEmail, email }) {
  LeftComponent.propTypes = {
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
    setIsValidEmail: PropTypes.func.isRequired,
  };

  return (
    <div className={styles.LeftComponent}>
      <CTA />
      <EmailBox setEmail={setEmail} />
      <SubmitButton email={email} setIsValidEmail={setIsValidEmail} />
    </div>
  );
}

function CTA() {
  return (
    <p className={styles.CTA}>
      <span className={styles.CTATitle}>Stay updated!</span> <br />
      Join 60,000+ product managers receiving monthly updates on: <br />
      <br />
      <span>
        <IconList />
      </span>{" "}
      <span>Product discovery and building what matters</span> <br />
      <span>
        <IconList />
      </span>{" "}
      <span>Measuring to ensure updates are a success</span> <br />
      <span>
        <IconList />
      </span>{" "}
      And much more!
    </p>
  );
}
function EmailBox({ setEmail }) {
  EmailBox.propTypes = {
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className={styles.EmailBoxContainer}>
      your email here: <br /> <br />
      <input
        className={styles.EmailBox}
        type="email"
        onChange={handleEmailChange}
      ></input>
    </div>
  );
}
function SubmitButton({ email, setIsValidEmail }) {
  SubmitButton.propTypes = {
    email: PropTypes.string.isRequired,
    setIsValidEmail: PropTypes.func.isRequired, // Assuming email is a required string
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };
  
  return (
    <div className={styles.SubmitButtonContainer}>
      <button
        className={styles.SubmitButton}
        onClick={handleSubmit}
      >
        Subscribe to monthly newsletter
      </button>
    </div>
  );
}

function ThankYou({ email, setIsValidEmail }) {
  ThankYou.propTypes = {
    email: PropTypes.string.isRequired,
    setIsValidEmail: PropTypes.func.isRequired,
  };
  const handleComeback = () => {
    setIsValidEmail(false);
  };
  return (
    <div className={styles.ThankYouContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
      >
        <defs>
          <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FF6A3A" />
            <stop offset="100%" stopColor="#FF527B" />
          </linearGradient>
        </defs>
        <g fill="none">
          <circle cx="32" cy="32" r="32" fill="url(#a)" />
          <path
            stroke="#FFF"
            strokeWidth="4"
            d="m18.286 34.686 8.334 7.98 19.094-18.285"
          />
        </g>
      </svg>{" "}
      <br />
      <span className={styles.ThankYouTitle}>
        Thanks for subscription!
      </span>{" "}
      <br />
      <p>
        a confirmation email has been sent for:
        <br /> <span style={{ fontWeight: "bold" }}>{email}</span>
        <br />
        please enter it and click the botton to confirm your subscription
      </p>{" "}
      <br />
      <button className={styles.ThankYoubutton} onClick={handleComeback}>
        dismis
      </button>
    </div>
  );
}
