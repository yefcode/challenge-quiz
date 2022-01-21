/* eslint-disable */
const questions = require("../../src/questions")

describe('Challenge quiz e2e tests', () => {
  const difficulties = { easy: 1, medium: 2, hard: 3 }
  let questionIndex = 0
  let currentQuestion = 1

  before(() => {
    cy.visit('/')
  })

  // Constants
  const testBeforeSelectAnswer = () => {
    it('should load the question values', () => {
      cy.get('.question-container > h2').should('have.text', `Question ${questionIndex + 1} of 20`)
      cy.get('.category').should('have.text', decodeURIComponent(questions[questionIndex].category))

      cy.get('.question').should('have.text', decodeURIComponent(questions[questionIndex].question))
    })

    it('should load the correct difficulty stars', () => {
      cy.get('.difficulty').should('have.length', 3)
      cy.get('.black').should('have.length', decodeURIComponent(difficulties[questions[questionIndex].difficulty]))
      cy.get('.gray').should('have.length', decodeURIComponent(3 - difficulties[questions[questionIndex].difficulty]))
    })

    it('should load the answers styles', () => {
      if (questions[questionIndex].type === 'multiple') {
        cy.get('button').should('have.length', 4)
        cy.get('.disable-answer').should('have.length', 0)
        cy.get('.selected-answer').should('have.length', 0)
        cy.get('.correct-answer').should('have.length', 0)
      } else {
        cy.get('button').should('have.length', 2)
        cy.get('.disable-answer').should('have.length', 0)
        cy.get('.selected-answer').should('have.length', 0)
        cy.get('.correct-answer').should('have.length', 0)
      }
    })

    it('should not load the next question button', () => {
      cy.get('.correct-sorry').should('have.length', 0)
      cy.get('.next-question').should('have.length', 0)
    })
  }

  const testScore = (score, maxScore) => {
    cy.get('.score-container > span').eq(0).should('have.text', `Score: ${score}%`)
    cy.get('.score-container > span').eq(1).should('have.text', `Max Score: ${maxScore}%`)
  }

  const afterAnswerSelected = () => {
    if (questions[questionIndex].type === 'multiple') {
      cy.get('button').should('have.length', 5)
      cy.get('.disable-answer').should('have.length', 4)
      cy.get('.selected-answer').should('have.length', 1)
  
      cy.get('button').eq(0).should('be.disabled')
      cy.get('button').eq(1).should('be.disabled')
      cy.get('button').eq(2).should('be.disabled')
      cy.get('button').eq(3).should('be.disabled')
    } else {
      cy.get('button').should('have.length', 3)
      cy.get('.disable-answer').should('have.length', 2)
      cy.get('.selected-answer').should('have.length', 1)
  
      cy.get('button').eq(0).should('be.disabled')
      cy.get('button').eq(1).should('be.disabled')
    }
  }

  const resultMessageClickNextQuestion = (message) => {
    cy.get('.correct-sorry').should('have.text', `${message}`)
    cy.get('button.next-question').should('have.text', 'Next Question').click()
    questionIndex++
  }

  const selectIncorrectAnswer = (score, maxScore) => {
    before(() => {
      cy.get('button.answer').contains(
        decodeURIComponent(questions[questionIndex].incorrect_answers[0])).click()
    })

    it('should load the answers styles after answer selected', () => {
      cy.get('.correct-answer').should('have.length', 1)
      afterAnswerSelected()
    })

    it('should load the correct score values', () => { testScore(score, maxScore) })

    it('should load the sorry message and the next question button', () => {
      resultMessageClickNextQuestion('Sorry!')
    })
  }

  const selectCorrectAnswer = (score, maxScore) => {
    before(() => {
      cy.get('button.answer').contains(
        decodeURIComponent(questions[questionIndex].correct_answer)).click()
    })
  
    it('should load the answers styles', () => {
      cy.get('.correct-answer').should('have.length', 0)
      afterAnswerSelected()
    })

    it('should load the correct score values', () => { testScore(score, maxScore) })

    it('should load the correct message and the next question button', () => {
      resultMessageClickNextQuestion('Correct!')
    })
  }

  const testIncorrectAnswer = (score, maxScore) => {
    describe(`Question ${currentQuestion} before select answer`, testBeforeSelectAnswer)
    describe(`Question ${currentQuestion} select incorrect answer`, () => {
      selectIncorrectAnswer(score, maxScore)
    })
    currentQuestion++
  }

  const testCorrectAnswer = (score, maxScore) => {
    describe(`Question ${currentQuestion} before select answer`, testBeforeSelectAnswer)
    describe(`Question ${currentQuestion} select correct answer`, () => {
      selectCorrectAnswer(score, maxScore)
    })
    currentQuestion++
  }

  // ----------------------------------------------------------------
  describe('Question 1 load the correct score values', () => {
    it('should load the correct score values', () => { 
      testScore(0, 100) 
      cy.get('.lowest-score-bar').should('have.css', 'width', '0px')
      cy.get('.current-score-bar').should('have.css', 'width', '0px')
    })
  })

  describe(`Question ${currentQuestion} test Incorrect answer`, () => { testIncorrectAnswer(0, 95) })
  describe(`Question ${currentQuestion} test`, () => { testCorrectAnswer(50, 95) })
  describe(`Question ${currentQuestion} test`, () => { testCorrectAnswer(67, 95) })
  describe(`Question ${currentQuestion} test Incorrect answer`, () => { testIncorrectAnswer(50, 90) })
  describe(`Question ${currentQuestion} test`, () => { testCorrectAnswer(60, 90) })
  describe(`Question ${currentQuestion} test`, () => { testCorrectAnswer(67, 90) })
  describe(`Question ${currentQuestion} test`, () => { testCorrectAnswer(71, 90) })
  describe(`Question ${currentQuestion} test Incorrect answer`, () => { testIncorrectAnswer(63, 85) })
  describe(`Question ${currentQuestion} test`, () => { testCorrectAnswer(67, 85) })
  describe(`Question ${currentQuestion} test`, () => { testCorrectAnswer(70, 85) })
  describe(`Question ${currentQuestion} test Incorrect answer`, () => { testIncorrectAnswer(64, 80) })
  describe(`Question ${currentQuestion} test`, () => { testCorrectAnswer(67, 80) })
  describe(`Question ${currentQuestion} test`, () => { testCorrectAnswer(69, 80) })
  describe(`Question ${currentQuestion} test Incorrect answer`, () => { testIncorrectAnswer(64, 75) })
  describe(`Question ${currentQuestion} test`, () => { testCorrectAnswer(67, 75) })
  describe(`Question ${currentQuestion} test`, () => { testCorrectAnswer(69, 75) })
  describe(`Question ${currentQuestion} test`, () => { testCorrectAnswer(71, 75) })
  describe(`Question ${currentQuestion} test Incorrect answer`, () => { testIncorrectAnswer(67, 70) })
  describe(`Question ${currentQuestion} test`, () => { testCorrectAnswer(68, 70) })
  describe(`Question ${currentQuestion} test`, () => { testCorrectAnswer(70, 70) })

  describe('Quiz completed test', () => {
    it('should load the score', () => {
      cy.get('.text-center h1').eq(0).should('have.text', 'Quiz Completed')
      cy.get('.text-center h2').eq(0).should('have.text', 'Score 70%')
      cy.get('.text-center h2').eq(1).should('have.text', 'Score 14 / 20')
      cy.get('.text-center .restart-quiz').should('have.text', 'Restart Quiz')
    })
  })
})
