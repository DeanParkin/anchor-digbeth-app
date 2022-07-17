import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="container text-center pt-3">
        <h2 className="h2 text-primary baskerville-font">Events</h2>
        <p className="text-light">Check out some of our events</p>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-2 border-primary">
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-2 border-primary">
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Card title</h3>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-2 border-primary">
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body bg-dark text-light">
                <h3 className="card-title">Card title</h3>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
