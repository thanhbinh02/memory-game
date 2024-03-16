import { FC } from "react";
import { useToggle } from "usehooks-ts";
import { TImage } from "../ts";
type Props = {
  image: TImage;
};

const FlipCard: FC<Props> = ({ image }) => {
  const [value, toggle] = useToggle(false);

  const handleClick = () => {
    toggle();
  };

  return (
    <div className="flex items-center justify-center w-24 h-24 cursor-pointer">
      <div
        onClick={handleClick}
        className={`relative w-full h-full card ${
          value ? "rotate-y-180deg" : ""
        }`}
      >
        <div className="backface-visibility-hidden w-24 h-24 bg-pink-500" />

        <div className="absolute top-0 backface-visibility-hidden rotate-y-180deg w-24 h-24">
          <img
            src={image.src}
            alt={image.name}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
