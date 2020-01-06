export const state = () => ({
  locales: ['en', 'fi', 'jp'],
  locale: 'en',
  questionNumber: 0,
  correctAnswers: 0
})

export const mutations = {
  nextQuestion(state) {
    state.questionNumber++
  },
  incrementCorrectAnswers(state) {
    state.correctAnswers++
  },
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
