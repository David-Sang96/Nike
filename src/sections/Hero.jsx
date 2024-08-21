import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  const changeShoeImage = (shoe) => setBigShoeImage(shoe);

  return (
    <section
      id="home"
      className="flex min-h-screen w-full flex-col justify-center gap-10 p-2 xl:flex-row"
    >
      {/* left side */}
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
            The New Arrival
          </span>
          <br />
          <span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
        </h1>
        <p className="mb-14 mt-6 font-montserrat text-lg leading-9 text-slate-gray sm:max-w-sm">
          Discover stylish Nike arrivals,quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Show now" iconURL={arrowRight} />
        <div className="mt-20 flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map(({ label, value }) => (
            <div key={label}>
              <p className="font-palanquin text-4xl font-bold">{value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* right side */}
      <div className="relative flex flex-1 items-center justify-center bg-primary bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        <img
          src={bigShoeImage}
          alt="shoe collection"
          width={610}
          height={500}
          className="relative z-10 object-contain"
        />
        <div className="absolute -bottom-[5%] flex gap-4 max-sm:px-6 sm:left-[10%] sm:gap-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={changeShoeImage}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
