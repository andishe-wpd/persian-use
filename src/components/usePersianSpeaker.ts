function usePersianSpeaker(string) {
  const speech = new SpeechSynthesisUtterance()
  speech.text = string
  speech.lang = 'fa-IR'
  window.speechSynthesis.speak(speech)
}

export default usePersianSpeaker

// To enable Persian language in Chrome's SpeechSynthesisUtterance, you need to make sure that your operating system has a Persian voice installed, and that it is available to the speech API in your browser. Here are the steps to enable Persian language on a Windows 10 system:

// Open the Windows Settings app by clicking on the Start menu and selecting the gear icon, or by pressing the Windows key + I.

// Click on "Time & Language".

// Click on "Language" in the left sidebar.

// Click on the "+" button under "Preferred languages".

// Select "Persian" from the list.

// Click on "Set as default" or "Options" to choose a specific Persian voice and speech recognition settings.

// Restart your web browser and test the SpeechSynthesisUtterance API with Persian language.
