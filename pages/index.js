import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/Carousel";
import NewsLetter from "../components/NewsLetter";
import Drinks from "../components/Drinks";
import Gallery from "../components/Gallery";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Anchor | Home</title>
        <meta
          name="description"
          content="The Anchor is a place of comfort to enjoy real ale, ciders, craft beers, wine, spirits and even cocktails, modern drinking in a traditional boozer. The Anchor is also one of the oldest public free houses in Digbeth, Birmingham, England, dating back to 1797."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Carousel />
      <header className="text-light text-center container pt-3">
        <h2 className="fs-5">Welcome To</h2>
        <p className="h2 text-primary baskerville-font">The Anchor Digbeth</p>
        <p className="my-2">
          The Anchor, as it is now known &#40;we dropped the
          &#8216;Inn&#8217;&#41; is still a free house so we are free to present
          you with the best and more interesting products available. We
          don&apos;t intend to re-invent the wheel, our aim is simply to provide
          a friendly space for everyone to enjoy great beer, wine, coffee,
          Cocktails and spirits with great service. Simple.
        </p>
      </header>
      <main>
        <section>
          <Drinks />
        </section>
        <section>
          <Gallery />
        </section>
        <section>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
