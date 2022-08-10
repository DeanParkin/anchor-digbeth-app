import { useForm } from "react-hook-form";
import axios from "axios";

let messageSent = false;

export default function GiftVoucher() {
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
      }/api/giftvouchersend`,
      headers: { "Content-Type": "application/json" },
      data: data,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        console.log("Message was sent Successfully");
        messageSent = true;
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <section className="container pt-3 mb-3">
        <div className="text-center">
          <h2 className="h2 text-primary baskerville-font">Gift Voucher</h2>
          <div className="d-flex justify-content-center">
            <p className="text-light text-container text-wrap">
              We offer gift vouchers if you want to buy someone a couple of
              drinks. We do prefer to do things in person, send us your contact
              details here, we will require proof of ID on purchase and at sale.
              we will the contact you as soon as possible.
            </p>
          </div>
        </div>
        {/* onSubmit={handleSubmit(onSubmitForm)} */}
        <div className="d-flex justify-content-center">
          <form
            className="text-primary mb-3 contact-form"
            onSubmit={handleSubmit(onSubmitForm)}
          >
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
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                className={`form-control ${
                  errors.contactPhoneNumber ? "border-danger" : ""
                }`}
                id="phoneNumber"
                placeholder="Enter Phone Number"
                {...register("contactPhoneNumber", {
                  required: {
                    value: true,
                    message: "Your Phone Number is required",
                  },
                  pattern: {
                    //value: /^[0-9]{12}$/,
                    value:
                      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                    message: "Please enter a valid phone number",
                  },
                })}
              />
              <span className="text-danger py-2">
                {errors?.contactPhoneNumber?.message}
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
              <label className="" htmlFor="exampleInputAmount">
                Amount
              </label>
              <div className="input-group">
                <div className="input-group-text">£</div>
                <input
                  type="number"
                  id="exampleInputAmount"
                  className="form-control"
                  placeholder="Price"
                  {...register("amount", {
                    required: {
                      value: true,
                      message: "The gift voucher value is required",
                    },
                    min: { value: 5, message: "The minimum spend is £5" },
                  })}
                />
              </div>
              <span className="text-danger py-2">
                {errors?.amount?.message}
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message (optional)</label>
              <textarea
                className={`form-control ${
                  errors.contactMessage ? "border-danger" : ""
                }`}
                id="message"
                rows="3"
                placeholder="Let us know how we can help"
                {...register("contactMessage", {})}
              ></textarea>
              <span className="text-danger py-2">
                {errors?.contactMessage?.message}
              </span>
            </div>
            <div className="justify-content-end d-flex d-grid">
              <button type="submit" className="btn btn-primary mt-2">
                Submit
              </button>
            </div>
          </form>
        </div>
        {messageSent && (
          <div className="alert alert-success mt-2">
            <p className="text-center">Message sent successfully</p>
          </div>
        )}
      </section>
    </>
  );
}
