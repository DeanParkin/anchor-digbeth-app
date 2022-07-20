import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/Carousel";
import NewsLetter from "../components/NewsLetter";
import Drinks from "../components/Drinks";
import Events from "../components/Events";
import ContactForm from "../components/ContactForm";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <div>
      <SEO
        title="Home"
        description="The Anchor, Digbeth is a place of comfort to enjoy real ale, ciders, craft beers, wine, spirits and even cocktails, modern drinking in a traditional boozer."
      />
      <Head>
        <title>The Anchor, Digbeth | Home</title>
      </Head>
      <Carousel />
      <header className="text-light text-center container pt-3">
        <h2 className="fs-5">Welcome To</h2>
        <div className="d-flex justify-content-center">
          <p className="h2 text-primary baskerville-font">The Anchor Digbeth</p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="my-2 text-container">
            The Anchor, as it is now known &#40;we dropped the
            &#8216;Inn&#8217;&#41; is still a free house so we are free to
            present you with the best and more interesting products available.
            We don&apos;t intend to re-invent the wheel, our aim is simply to
            provide a friendly space for everyone to enjoy great beer, wine,
            coffee, Cocktails and spirits with great service. Simple.
          </p>
        </div>
      </header>
      <main>
        <section>
          <Drinks />
        </section>
        <section>
          <Events />
        </section>
        <section>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
