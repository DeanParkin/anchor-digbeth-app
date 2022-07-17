import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  function onSubmitForm(values) {
    console.log(values);
    //reset();
  }
  return (
    <section className="container pt-3 mb-3">
      <div className="text-center">
        <h2 className="h2 text-primary baskerville-font">Contact Us</h2>
        <p className="text-light">
          If you would like to ask a question or book a table, then get in
          touch, either send us an email to{" "}
          <a href="mailto:Julian@theanchordigbeth.com">
            Julian@theanchordigbeth.com
          </a>
          , contact via social media or use the form provided below.
        </p>
      </div>
      <form className="text-primary" onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            ref={register}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            placeholder="Let us know how we can help"
            ref={register}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
