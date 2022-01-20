/* eslint-disable */
import { getPercentageValue, getMaxScore } from './utils'

describe('getPercentageValue tests', () => {
  test('get valid percentage value 3/20', () => {
    expect(getPercentageValue(3, 20)).toEqual(15)
  })

  test('get valid percentage value 7/20', () => {
    expect(getPercentageValue(7, 20)).toEqual(35)
  })

  test('get valid percentage value 10/20', () => {
    expect(getPercentageValue(10, 20)).toEqual(50)
  })

  test('get valid percentage value 14/20', () => {
    expect(getPercentageValue(14, 20)).toEqual(70)
  })

  test('get valid percentage value 1/3', () => {
    expect(getPercentageValue(1, 3)).toEqual(33)
  })

  test('get valid percentage value 2/3', () => {
    expect(getPercentageValue(2, 3)).toEqual(67)
  })

  test('get valid percentage value 5/12', () => {
    expect(getPercentageValue(5, 12)).toEqual(42)
  })

  test('get 0 if total is not provided', () => {
    expect(getPercentageValue(6)).toEqual(0)
  })

  test('get NaN if provide a value different than number', () => {
    expect(getPercentageValue('', 'yefcode')).toEqual(NaN)
  })
})

describe('getMaxScore tests', () => {
  test('get valid max score value', () => {
    const totalQuestions = 20
    const currentScoreIndex = 2
    const score = 1
    expect(getMaxScore(totalQuestions, currentScoreIndex, score)).toEqual(95)
  })

  test('get valid max score value', () => {
    const totalQuestions = 20
    const currentScoreIndex = 8
    const score = 3
    expect(getMaxScore(totalQuestions, currentScoreIndex, score)).toEqual(75)
  })

  test('get valid max score value', () => {
    const totalQuestions = 20
    const currentScoreIndex = 13
    const score = 6
    expect(getMaxScore(totalQuestions, currentScoreIndex, score)).toEqual(65)
  })
})