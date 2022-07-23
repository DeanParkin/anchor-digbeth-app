import React from "react";
import Image from "next/image";

import event1 from "../public/imgs/events/FREE POOL_WEB.jpg";
import event2 from "../public/imgs/events/2for1 COCKTAILS_WEB.jpg";
import event3 from "../public/imgs/events/QUIZ_WEB.jpg";
import event4 from "../public/imgs/events/FIZZ FRIDAY_WEB.jpg";
import event5 from "../public/imgs/events/LIVE MUSIC_WEB.jpg";
import event6 from "../public/imgs/events/TRADE_WEB.jpg";

const Events = () => {
  return (
    <>
      <div className="container text-center pt-3">
        <h2 className="h2 text-primary baskerville-font">Events</h2>
        <div className="d-flex justify-content-center">
          <p className="text-light">Check out some of our events</p>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-2 border-primary">
              <Image
                src={event1}
                alt="The Anchor has a wide range of beer"
                className="d-block w-100"
                priority={true}
                placeholder="blur"
                // width={1350}
                // height={600}
                //objectFit="fill"
                //objectFit="cover"
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-2 border-primary">
              <Image
                src={event2}
                alt="The Anchor has a wide range of beer"
                className="d-block w-100"
                priority={true}
                placeholder="blur"
                // width={1350}
                // height={600}
                //objectFit="fill"
                //objectFit="cover"
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-2 border-primary">
              <Image
                src={event3}
                alt="The Anchor has a wide range of beer"
                className="d-block w-100"
                priority={true}
                placeholder="blur"
                // width={1350}
                // height={600}
                //objectFit="fill"
                //objectFit="cover"
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-2 border-primary">
              <Image
                src={event4}
                alt="The Anchor has a wide range of beer"
                className="d-block w-100"
                priority={true}
                placeholder="blur"
                // width={1350}
                // height={600}
                //objectFit="fill"
                //objectFit="cover"
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-2 border-primary">
              <Image
                src={event5}
                alt="The Anchor has a wide range of beer"
                className="d-block w-100"
                priority={true}
                placeholder="blur"
                // width={1350}
                // height={600}
                //objectFit="fill"
                //objectFit="cover"
                layout="responsive"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-2 border-primary">
              <Image
                src={event6}
                alt="The Anchor has a wide range of beer"
                className="d-block w-100"
                priority={true}
                placeholder="blur"
                // width={1350}
                // height={600}
                //objectFit="fill"
                //objectFit="cover"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
