import { usePurePersian } from '../index'

describe('usePurePersian', () => {
  it('should return true if the input string contains only Persian characters or spaces', () => {
    const str = 'سلام دنیا'
    expect(usePurePersian(str)).toBe(true)
  })

  it('should return false if the input string contains non-Persian characters', () => {
    const str = 'Hello, world!'
    expect(usePurePersian(str)).toBe(false)
  })

  it('should return false if the input string contains Persian and non-Persian characters', () => {
    const str = 'سلام, world!'
    expect(usePurePersian(str)).toBe(false)
  })

  it('should return false for an empty string', () => {
    const str = ''
    expect(usePurePersian(str)).toBe(false)
  })

  it('should return true for a string that only contains spaces', () => {
    const str = '   '
    expect(usePurePersian(str)).toBe(true)
  })
})
