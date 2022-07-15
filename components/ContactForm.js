//Contact Form Component

const ContactForm = () => {
  return (
    <section className="container mb-5">
      <h2 className="text-center h1 text-primary">Contact Us</h2>
      <p className="text-light text-center">
        If you would like to ask a question or book a table, then get in touch,
        either send us an email to{" "}
        <a href="mailto:Julian@theanchordigbeth.com">
          Julian@theanchordigbeth.com
        </a>
        , contact via social media or use the form provided below.
      </p>
      <form className="text-primary">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            placeholder="Let us know how we can help"
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
