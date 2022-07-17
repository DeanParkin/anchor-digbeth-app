import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

//import ContactForm from "../components/ContactForm";

let messageSent = false;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitForm(data) {
    let config = {
      method: "POST",
      url: `${
        process.env.URL == "http://localhost:3000" ? process.env.URL : ""
      }/api/contact`,
      headers: { "Content-Type": "application/json" },
      data: data,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        console.log("Message was sent Successfully");
        messageSent = true;
        //reset();
      }
    } catch (err) {
      console.error(err);
    }

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
      {/* onSubmit={handleSubmit(onSubmitForm)} */}
      <form className="text-primary" onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className={`form-control ${
              errors.contactName ? "border-danger" : ""
            }`}
            id="name"
            placeholder="Enter name"
            {...register("contactName", {
              required: { value: true, message: "Your Name is required" },
            })}
          />
          <span className="text-danger py-2">
            {errors?.contactName?.message}
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className={`form-control ${
              errors.contactEmail ? "border-danger" : ""
            }`}
            id="email"
            placeholder="Enter email"
            {...register("contactEmail", {
              required: { value: true, message: "Your Email is required" },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
          />
          <span className="text-danger py-2">
            {errors?.contactEmail?.message}
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className={`form-control ${
              errors.contactMessage ? "border-danger" : ""
            }`}
            id="message"
            rows="3"
            placeholder="Let us know how we can help"
            {...register("contactMessage", {
              required: { value: true, message: "Message is required" },
              minLength: {
                value: 50,
                message: "Message must be at least 50 characters",
              },
            })}
          ></textarea>
          <span className="text-danger py-2">
            {errors?.contactMessage?.message}
          </span>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
      {messageSent && (
        <div className="alert alert-success mt-2">
          <p className="text-center">Message sent successfully</p>
        </div>
      )}
    </section>
  );
}
