import React from "react";

const NewsLetter = () => {
  return (
    <section className="newsletter bg-primary">
      <div className="container h-100">
        <div className="row">
          <div className="col-md-6 mb-md-0 mb-5 d-flex justify-content-center align-items-center h-100">
            <label
              htmlFor="subscribe"
              className="text-center"
              id="newsLetterHeader"
            >
              LET&apos;S KEEP IN TOUCH.
              <br />
              JOIN US!
            </label>
          </div>
          <div className="col-md-6 mb-md-0 mb-5">
            <div className="input-group d-flex justify-content-center align-items-center">
              <input
                type="email"
                name="subscribe"
                value=""
                size="40"
                className="form-control"
                aria-required="true"
                aria-invalid="false"
                placeholder="Enter email"
                aria-labelledby="newsLetterHeader"
              />

              <input
                type="submit"
                value="Send"
                className="btn bg-dark text-primary"
              />
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
