import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={46} />
          </a>
          <p className="text-white-400 mt-6 font-montserrat text-base leading-7 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="mt-8 flex items-center gap-5">
            {socialMedia.map((icon) => (
              <div
                key={icon.alt}
                className="flex size-12 items-center justify-center rounded-full bg-white"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap justify-between gap-20 text-white lg:gap-10">
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="mb-6 font-montserrat text-2xl font-medium leading-normal">
                {title}
              </h4>
              <ul>
                {links.map(({ name, link }) => (
                  <li
                    key={name}
                    className="text-white-400 mt-3 cursor-pointer font-montserrat leading-normal hover:text-slate-gray"
                  >
                    <a href={link}>{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-white-400 mt-24 flex items-center justify-between gap-4 max-sm:flex-col">
        <div className="flex flex-1 cursor-pointer items-center justify-start gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="m-0 rounded-full"
          />
          <p>Copyright . All rights reserved.</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
