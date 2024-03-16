import { create } from "zustand";
import { TImage } from "../ts";

type TGameStore = {
  selectedImages: TImage[];
  setSelectedImages: (images?: TImage[]) => void;

  score: number;
};

const useGameStore = create<TGameStore>()((set, get) => ({
  selectedImages: [],
  score: 0,

  setSelectedImages: (images) => {
    const newScore =
      images?.length === 2 && images[0].id === images[1].id
        ? get().score + 100
        : get().score;

    set({
      selectedImages: images,
      score: newScore,
    });
  },
}));

export default useGameStore;
