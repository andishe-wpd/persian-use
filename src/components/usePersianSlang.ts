import { trees } from "./constants/flowerName";

const usePersianSlang = (string: string) => {
  return trees.includes(string);
};

export default usePersianSlang;
