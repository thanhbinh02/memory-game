import { uniqueId } from "lodash-es";

export const doubleArray = <T>(array: T[]) => array.concat(array);

export const shuffleArray = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const addUUIDToItem = <T>(array: T[]) => {
  return array.map((item) => ({
    ...item,
    uuid: uniqueId(),
  }));
};
