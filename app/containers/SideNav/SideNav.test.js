import { value } from './'

describe('>>> Value -- Testing first test', () => {
  it('Tests the result with positive vlaues', () => {
    const expectedResult = 3
    const result = value(1, 2)

    console.log('******************************************')
    console.log(result)
    console.log('******************************************')


    expect(result).toEqual(expectedResult)
  })
})
