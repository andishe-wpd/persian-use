import { trees as badwords } from "./constants/flowerName";


const usePersianSlang = (string: string) => {
  const words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (badwords.includes(words[i])) {
      return true; // string contains a bad word
    }
  }
  return false; // string doesn't contain any bad words
};

export default usePersianSlang;
