<template>
  <div class="options">
    <ul class="options-list">
      <li
        v-for="(option, index) in answerOptions(correct)"
        :key="index"
        @click="checkAnswer(option, correct)"
        :class="falseAnswers.includes(option) ? 'failed' : ''"
        class="options-item"
      >
        <span>{{ $t('intervalsShort[' + option.toString() + ']') }}</span>
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
      correctAnswer: this.$props.correct,
      isActive: true,
      falseAnswers: []
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
      if (option === correct && this.isActive === true) {
        this.isActive = false
        this.$parent.nextQuestion()
      } else {
        console.log(option)
        if (this.falseAnswers.includes(option) === false) {
          this.falseAnswers.push(option)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.options {
  margin: 0 auto;
  text-align: center;

  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0;
    max-width: 640px;
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

    & > span {
      display: block;
      width: 100%;
      border-bottom: 7px solid #aaa;
      border-radius: 16px;
      padding: 20px 8px;
      background: #fff;
      color: #444;
      text-align: center;
      transition: all 0.1s ease-in-out;
      user-select: none;
    }

    &:hover > span {
      margin-top: 3px;
      border-bottom-width: 4px;
      box-shadow: 0px 0px 16px #ff88;
      cursor: pointer;
    }

    &.failed {
      & > span {
        margin-top: 5px;
        border-bottom-width: 2px;
        opacity: 0.6;
        cursor: initial;
      }
      &:hover > span {
        box-shadow: 0 0 0 #0000;
      }
    }
  }
  &-button {
    &.failed {
      background: #aaa;
    }
  }
}
</style>
