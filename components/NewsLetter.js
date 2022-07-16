import React from "react";

const NewsLetter = () => {
  return (
    <section className="bg-primary">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* <div className="col-md-6 align-items-center"> */}
          <label
            htmlFor="subscribe"
            className="text-center fs-2 col-md-6 align-items-center justify-content-center mt-3 my-md-4 baskerville-font"
            id="newsLetterHeader"
          >
            LET&apos;S KEEP IN TOUCH.
            <br />
            JOIN US!
          </label>
          {/* </div> */}
          <div className="col-md-6 align-items-center my-4 my-md-5">
            <div className="input-group">
              <input
                type="email"
                name="subscribe"
                size="40"
                className="form-control newsletter-input"
                aria-required="true"
                aria-invalid="false"
                placeholder="Enter your email"
                aria-labelledby="newsLetterHeader"
              />

              <input
                type="submit"
                value="Send"
                className="btn newsletter-submit"
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
