import React from "react";
import Image from "next/image";

import event1 from "../public/imgs/Events/FREE_POOL_WEB.jpg";
import event2 from "../public/imgs/Events/2for1_COCKTAILS_WEB.jpg";
import event3 from "../public/imgs/Events/QUIZ_WEB.jpg";
import event4 from "../public/imgs/Events/FIZZ_FRIDAY_WEB.jpg";
import event5 from "../public/imgs/Events/LIVE_MUSIC_WEB.jpg";
import event6 from "../public/imgs/Events/TRADE_WEB.jpg";

const Events = () => {
  const ImageCss = { maxWidth: "100%", height: "auto" };

  const eventsArray = [
    { name: "Free pool every Monday's", image: event1 },
    { name: "2 for 1 cocktails every Wednesday", image: event2 },
    { name: "Quiz Night every Thursday 7:30pm", image: event3 },
    { name: "Friday fizz all day every week", image: event4 },
    { name: "live music every Sunday 5:00-7:00pm", image: event5 },
    { name: "Bab members only trade night", image: event6 },
  ];

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
          {eventsArray.map((event, key) => (
            <div className="col-md-6" key={key}>
              <div className="card mb-2 border-primary">
                <Image
                  src={event.image}
                  alt={event.name}
                  className="d-block w-100"
                  style={ImageCss}
                  //priority={true}
                  placeholder="blur"
                  // width={1350}
                  // height={600}
                  //objectFit="fill"
                  //objectFit="cover"
                  layout="responsive"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
