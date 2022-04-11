import Styles from "./Contact.module.css";

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("tests");
  };
  return (
    <div className={Styles.container}>
      <h2 className={Styles.title}>Contact</h2>
      <form action='' className={Styles.form}>
        <label className={Styles.label} htmlFor=''>
          Mail:
        </label>
        <input className={Styles.input} type='text' required />
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
        ></textarea>
        <button onSubmit={() => onSubmit()} className={Styles.btn}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
