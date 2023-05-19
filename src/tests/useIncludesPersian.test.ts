import { useIncludesPersian } from '..'

describe('useIncludesPersian', () => {
  test('should return true for a string containing Persian characters', () => {
    expect(useIncludesPersian('سلام دنیا')).toBe(true)
  })

  test('should return false for a string not containing Persian characters', () => {
    expect(useIncludesPersian('Hello world')).toBe(false)
  })
})
