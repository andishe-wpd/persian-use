// Function to convert Persian text to Finglish (Romanized Persian)
export const  usePersianToFinglish=  (text) =>{
    var map = {
      'آ': 'a', 'ا': 'a', 'ب': 'b', 'پ': 'p', 'ت': 't', 'ث': 's', 'ج': 'j',
      'چ': 'ch', 'ح': 'h', 'خ': 'kh', 'د': 'd', 'ذ': 'z', 'ر': 'r', 'ز': 'z',
      'ژ': 'zh', 'س': 's', 'ش': 'sh', 'ص': 's', 'ض': 'z', 'ط': 't', 'ظ': 'z',
      'ع': 'e', 'غ': 'gh', 'ف': 'f', 'ق': 'gh', 'ک': 'k', 'گ': 'g', 'ل': 'l',
      'م': 'm', 'ن': 'n', 'و': 'v', 'ه': 'h', 'ی': 'y', 'ي': 'y'
    };
    var finglish = '';
    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      if (map.hasOwnProperty(ch)) {
        finglish += map[ch];
      } else {
        finglish += ch;
      }
    }
    return finglish;
  }
  
  // Function to convert Finglish (Romanized Persian) text to Persian
  export const  useFinglishToPersian= (text) => {
    var map = {
      'a': 'ا', 'b': 'ب', 'p': 'پ', 't': 'ت', 's': 'س', 'j': 'ج', 'ch': 'چ',
      'h': 'ح', 'kh': 'خ', 'd': 'د', 'z': 'ز', 'zh': 'ژ', 'sh': 'ش', 'e': 'ع',
      'gh': 'ق', 'f': 'ف', 'k': 'ک', 'g': 'گ', 'l': 'ل', 'm': 'م', 'n': 'ن',
      'v': 'و', 'y': 'ی'
    };
    var persian = '';
    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      if (map.hasOwnProperty(ch)) {
        persian += map[ch];
      } else {
        persian += ch;
      }
    }
    return persian;
  }

  