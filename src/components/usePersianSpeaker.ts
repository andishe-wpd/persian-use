function usePersianSpeaker(string) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = string;
  speech.lang = "fa-IR";
  window.speechSynthesis.speak(speech);
}

export default usePersianSpeaker;
