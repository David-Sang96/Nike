import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex items-center justify-center gap-10 max-xl:flex-col-reverse">
      {/* left side */}
      <div className="flex-1">
        <img
          src={offer}
          alt="offer image"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>

      {/* right side */}
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals.From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex items-center gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <button className="flex items-center justify-center gap-2 rounded-full border border-slate-gray px-7 py-4 font-montserrat text-lg leading-none text-slate-gray">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
