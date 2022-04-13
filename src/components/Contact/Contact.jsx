import { useState } from "react";
import Styles from "./Contact.module.css";

const Contact = () => {
  const [mail, setMail] = useState("");
  const [textInput, setTextInput] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setTextInput("");
    setMail("");
  };
  console.log(mail);
  console.log(textInput);

  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Contact</h2>
      <form onSubmit={onSubmit} action='' className={Styles.form}>
        <label className={Styles.label} htmlFor=''>
          Mail:
        </label>
        <input
          className={Styles.input}
          type='text'
          required
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        />
        <label className={Styles.label} htmlFor=''>
          Message:
        </label>
        <textarea
          className={Styles.textArea}
          name=''
          id=''
          cols='30'
          rows='10'
          required
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
        ></textarea>
        <button className={Styles.btn} type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
