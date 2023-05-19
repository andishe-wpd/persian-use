const freeTranslator = async (
  textString: string,
  fromLanguage: string,
  toLanguage: string
) => {
  const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2'
  const bodyParams: { q: string; target: string; source?: string } = {
    q: textString || 'hello',
    target: toLanguage || 'fa',
  }
  if (fromLanguage !== '') {
    bodyParams.source = fromLanguage
  }
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': '4fd1502ec0msha65e5581287fcf8p148d6bjsnb054300cbfb1',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    },
    body: new URLSearchParams(bodyParams),
  }

  try {
    const response = await fetch(url, options)
    const result = await response.text()
    return result
  } catch (error) {
    console.error(error)
  }
}

export const persianToEnglishTranslator = (inputString: string) => {
  return freeTranslator(inputString, 'fa', 'en')
}
export const englishToPersinaTranslator = (inputString: string) => {
  return freeTranslator(inputString, 'en', 'fa')
}
export const anythingToPersianTranslator = (inputString: string) => {
  return freeTranslator(inputString, '', 'fa')
}
