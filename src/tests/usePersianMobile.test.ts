import { usePersianMobile } from '..'

describe('usePersianMobile', () => {
  it('should return true for valid Persian mobile numbers', () => {
    expect(usePersianMobile('09121234567')).toBe(true)
    expect(usePersianMobile('989121234567')).toBe(true)
    expect(usePersianMobile('+989121234567')).toBe(true)
  })

  it('should return true for valid English mobile numbers', () => {
    expect(usePersianMobile('09121234567')).toBe(true)
    expect(usePersianMobile('989121234567')).toBe(true)
    expect(usePersianMobile('+989121234567')).toBe(true)
  })

  it('should return false for invalid mobile numbers', () => {
    expect(usePersianMobile('12345')).toBe(false)
    expect(usePersianMobile('0912345678')).toBe(false)
    expect(usePersianMobile('+98912345678')).toBe(false)
    expect(usePersianMobile('+12')).toBe(false)
    expect(usePersianMobile('invalid')).toBe(false)
  })

  it('should convert Persian numbers to English numbers', () => {
    expect(usePersianMobile('۰۹۱۲۳۴۵۶۷۸۹')).toBe(true)
    expect(usePersianMobile('۹۸۹۱۲۳۴۵۶۷۸۹')).toBe(true)
    expect(usePersianMobile('+۹۸۹۱۲۳۴۵۶۷۸۹')).toBe(true)
  })
})
