/* eslint-disable react/prop-types */
const Button = ({ label, iconURL }) => {
  return (
    <button className="font-montserrat bg-coral-red border-coral-red flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-lg leading-none text-white">
      {label}{" "}
      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 size-5 rounded-full"
      />
    </button>
  );
};

export default Button;
