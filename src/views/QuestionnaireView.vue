<template>
  <main>
    <div>
      <div v-if="currentQuestionIndex === 0">
        <h2>Which feature do you need?</h2>
        <label v-for="(answer, index) in question1Answers" :key="index">
          <input type="radio" name="question1" :value="answer">{{ answer }}
        </label>
        <button @click="nextQuestion()">Next</button>
      </div>
      <div v-else-if="currentQuestionIndex === 1">
        <h2>Which product are you working with?</h2>
        <label v-for="(answer, index) in question2Answers" :key="index">
          <input type="radio" name="question2" :value="answer">{{ answer }}
        </label>
        <button @click="nextQuestion()">Next</button>
      </div>
      <div v-else-if="currentQuestionIndex === 2">
        <h2>Do you need GUI and mimic settings preset for sanding?</h2>
        <label v-for="(answer, index) in question3Answers" :key="index">
          <input type="radio" name="question3" :value="answer">{{ answer }}
        </label>
        <button @click="nextQuestion()">Next</button>
      </div>
      <div v-else-if="currentQuestionIndex === 3">
        <h2>Is the product you are working with targeted at robot first timers?</h2>
        <label v-for="(answer, index) in question4Answers" :key="index">
          <input type="radio" name="question4" :value="answer">{{ answer }}
        </label>
        <button @click="nextQuestion()">Next</button>
      </div>
      <div v-else-if="currentQuestionIndex === 4">
        <h2>Do you need intuitive joystick/system that gives more feed back when processing?</h2>
        <label v-for="(answer, index) in question5Answers" :key="index">
          <input type="radio" name="question5" :value="answer">{{ answer }}
        </label>
        <button @click="nextQuestion()">Next</button>
      </div>
      <div v-else-if="currentQuestionIndex === 5">
        <h2>Do you need the possibility to include a industrial touch screen?</h2>
        <label v-for="(answer, index) in question6Answers" :key="index">
          <input type="radio" name="question6" :value="answer">{{ answer }}
        </label>
        <button @click="nextQuestion()">Next</button>
      </div>
      <div v-else>
        <h2>Results</h2>
        <p>You chose: {{ results }}</p>
      </div>
    </div>
  </main>
</template>

  <script>
export default {
    data() {
        return {
        currentQuestionIndex: 0,
        question1Answers: ['Sanding', 'Grinding', 'Spray painting', 'Deburring', 'Polishing'],
        question2Answers: ['Wood + composite', 'Textile', 'Metal', 'Plastic'],
        question3Answers: ['Yes', 'No'],
        question4Answers: ['Yes', 'No'],
        question5Answers: ['Yes', 'No'],
        question6Answers: ['Yes', 'No'],
        results: ''
        }
    },
    methods: {
        nextQuestion() {
            let selectedAnswer
            switch (this.currentQuestionIndex) {
                case 0:
                    selectedAnswer = document.querySelector('input[name="question1"]:checked')
                    break
                case 1:
                    selectedAnswer = document.querySelector('input[name="question2"]:checked')
                    break
                case 2:
                    selectedAnswer = document.querySelector('input[name="question3"]:checked')
                    break
                case 3:
                    selectedAnswer = document.querySelector('input[name="question4"]:checked')
                    break
                case 4:
                    selectedAnswer = document.querySelector('input[name="question5"]:checked')
                    break
                case 5:
                    selectedAnswer = document.querySelector('input[name="question6"]:checked')
                    break
            }
            if (selectedAnswer) {
                switch (this.currentQuestionIndex) {
                case 0:
                    this.results += selectedAnswer.value + ', '
                    break
                case 1:
                    this.results += selectedAnswer.value + ', '
                    break
                case 2:
                    this.results += selectedAnswer.value + ', '
                    break
                case 3:
                    this.results += selectedAnswer.value + ', '
                    break
                case 4:
                    this.results += selectedAnswer.value + ', '
                    break
                case 5:
                    this.results += selectedAnswer.value
                    break
                }
                this.currentQuestionIndex++
            }
        }
    }
}
</script>
