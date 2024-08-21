/* eslint-disable react/prop-types */
const Button = ({ label, iconURL, fullWidth }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border border-coral-red bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white ${fullWidth && "w-full"}`}
    >
      {label}{" "}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 size-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
