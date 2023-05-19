const usePurePersian = (str: string) => {
  if (/^[\u0600-\u06FF\s]+$/.test(str)) {
    return true
  } else {
    return false
  }
}

export default usePurePersian
