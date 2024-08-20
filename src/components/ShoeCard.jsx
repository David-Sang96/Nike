/* eslint-disable react/prop-types */
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`cursor-pointer rounded-xl border-2 max-sm:flex-1 ${imgURL.bigShoe === bigShoeImage ? "border-coral-red" : "border-transparent"}`}
      onClick={handleClick}
    >
      <div className="bg-card flex items-center justify-center bg-cover bg-center max-sm:p-4 sm:size-40">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
