import { FC, useEffect, useState } from "react";
import { useToggle } from "usehooks-ts";
import { useShallow } from "zustand/react/shallow";
import { useGameStore } from "../hooks";
import { TImage } from "../ts";
type Props = {
  image: TImage;
};

const FlipCard: FC<Props> = ({ image }) => {
  const [value, toggle] = useToggle(false);
  const [isShowImage, setIsShowImage] = useState(false);

  const [selectedImages, setSelectedImages] = useGameStore(
    useShallow((state) => [state.selectedImages, state.setSelectedImages])
  );

  useEffect(() => {
    if (selectedImages.length === 2) {
      // Firstly, I check if image is in selected images
      const isImagesSelected = selectedImages.some(
        (item) => item.uuid === image.uuid
      );

      // Secondly, I check if 2 images in the selectedImages array have the same ID
      const isCheckSameId = selectedImages[0].id === selectedImages[1].id;

      if (isImagesSelected) {
        setTimeout(() => {
          if (isCheckSameId) {
            setIsShowImage(true);
          } else {
            toggle();
          }
          setSelectedImages([]);
        }, 500);
      }
    }
  }, [image.uuid, selectedImages, setSelectedImages, toggle]);

  const handleClick = () => {
    if (selectedImages.length === 2) return;

    if (selectedImages.length === 0) {
      setSelectedImages([image]);
    }

    if (selectedImages.length === 1 && selectedImages[0].uuid === image.uuid) {
      setSelectedImages([]);
    }

    if (selectedImages.length === 1 && selectedImages[0].uuid !== image.uuid) {
      setSelectedImages([...selectedImages, image]);
    }

    toggle();
  };

  return (
    <div className="flex items-center justify-center w-24 h-24 cursor-pointer">
      <div
        onClick={handleClick}
        className={`relative w-full h-full card ${
          value ? "rotate-y-180deg" : ""
        } ${isShowImage ? "pointer-events-none" : ""}`}
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
