<template>
  <div class="options">
    <ul class="options-list">
      <li
        v-for="(option, index) in answerOptions(correct)"
        :key="index"
        @click="checkAnswer(option, correct)"
        :class="option === correct ? 'AIJEEEE' : 'ei'"
        class="options-item"
      >
        <span class="options-button">{{ $t('intervalsShort[' + option.toString() + ']') }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    correct: {
      required: true,
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      correctAnswer: this.$props.correct
    }
  },
  mounted() {
    this.answerOptions()
  },
  methods: {
    answerOptions(correct) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    checkAnswer(option, correct, item) {
      if (option === correct) {
        this.$parent.nextQuestion()
      } else {
        this.isActive = !this.isActive
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.options {
  margin: 0 auto;

  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    max-width: 808px;
  }
  &-item {
    margin-top: 16px;
    position: relative;
    width: 23%;
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 900;
    list-style: none;
    transition: all 0.1s ease-in-out;

    &:hover > span {
      margin-top: 3px;
      border-bottom-width: 3px;
      box-shadow: 0px 0px 16px #ff88;
      cursor: pointer;

      &.failed {
        margin-top: 3px;
        border-bottom-width: 3px;
        cursor: initial;
      }
    }
  }
  &-button {
    display: block;
    width: 100%;
    border-bottom: 6px solid #aaa;
    border-radius: 16px;
    padding: 12px 8px;
    background: #fff;
    color: #444;
    text-align: center;
    transition: all 0.1s ease-in-out;

    &.clicked {
      background: #aaa;
    }
  }
}
</style>
