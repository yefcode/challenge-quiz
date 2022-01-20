const getPercentageValue = (value = 0, total = 0) => {
  if (total) {
    return Math.round(((value / total) * 100))
  } else {
    return 0
  }
}

const getMaxScore = (totalQuestions, currentScoreIndex, score) => {
  return getPercentageValue((totalQuestions - currentScoreIndex + score), totalQuestions)
}

export { getPercentageValue, getMaxScore }
