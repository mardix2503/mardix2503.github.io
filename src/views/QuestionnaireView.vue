<template>
  <div class="questionnaire">
    <div class="sidebar">
      <p class="sidebar__title">Find out which product that fits your needs</p>
      <div v-for="(question, index) in questions" :key="index" :class="{'sidebar-item': true, 'active': index === currentQuestionIndex}">
        {{ question }}
      </div>
    </div>

    <div v-if="currentQuestionIndex === 0" class="question">

      <div class="img">
          <img src="@/assets/cobot1.jpg" class="image">
      </div>

      <h2>Which feature do you need?</h2>
      <label v-for="(answer, index) in question1Answers" :key="index" class="answer">
        <input type="radio" name="question1" :value="answer">{{ answer }}
      </label>
      <button @click="nextQuestion()" class="next-button">Next</button>
    </div>

    <div v-else-if="currentQuestionIndex === 1" class="question">

      <div class="img">
          <img src="@/assets/cobotsanding.jpg" class="image">
      </div>

      <h2>Which product are you working with?</h2>
      <label v-for="(answer, index) in question2Answers" :key="index" class="answer">
        <input type="radio" name="question2" :value="answer">{{ answer }}
      </label>
      <button @click="nextQuestion()" class="next-button">Next</button>
    </div>

    <div v-else-if="currentQuestionIndex === 2" class="question">

      <div class="img">
          <img src="@/assets/nordbo1.jpg" class="image">
      </div>

      <h2>Do you need GUI and mimic settings preset for sanding?</h2>
      <label v-for="(answer, index) in question3Answers" :key="index" class="answer">
        <input type="radio" name="question3" :value="answer">{{ answer }}
      </label>
      <button @click="nextQuestion()" class="next-button">Next</button>
    </div>

    <div v-else-if="currentQuestionIndex === 3" class="question">

      <div class="img">
          <img src="@/assets/nordbo2.jpg" class="image">
      </div>

      <h2>Is the product you are working with targeted at robot first timers?</h2>
      <label v-for="(answer, index) in question4Answers" :key="index" class="answer">
        <input type="radio" name="question4" :value="answer">{{ answer }}
      </label>
      <button @click="nextQuestion()" class="next-button">Next</button>
    </div>

    <div v-else-if="currentQuestionIndex === 4" class="question">

      <div class="img">
          <img src="@/assets/nordbo3.jpg" class="image">
      </div>

      <h2>Do you need intuitive joystick/system that gives more feed back when processing?</h2>
      <label v-for="(answer, index) in question5Answers" :key="index" class="answer">
        <input type="radio" name="question5" :value="answer">{{ answer }}
      </label>
      <button @click="nextQuestion()" class="next-button">Next</button>
    </div>

    <div v-else-if="currentQuestionIndex === 5" class="question">

      <div class="img">
          <img src="@/assets/nordbo4.jpg" class="image">
      </div>

      <h2>Do you need the possibility to include a industrial touch screen?</h2>
      <label v-for="(answer, index) in question6Answers" :key="index" class="answer">
        <input type="radio" name="question6" :value="answer">{{ answer }}
      </label>
      <router-link to="/products" class="next-button"><button>Next</button></router-link>
    </div>

    <div v-else>
      <h2>Results</h2>
      <p>You chose: {{ results }}</p>
    </div>
  </div>
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
      results: '',

      currentQuestionIndex: 0,
      questions: [
      '1. Feature',
      '2. Product',
      '3. Presets',
      '4. Robot first timers',
      '5. Joystick/system',
      '6. Industrial touch screen',
      '7. Results',
      ],
      }
    },
  methods: {
      nextQuestion() {
          // check if the user has answered the current question
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
          // if an answer was selected, go to the next question
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

<style scoped>
.questionnaire {
margin: 0 auto;
display: flex;
}

.sidebar {
width: 323px;
background-color: #194EC8;
}

.sidebar__title {
font-size: 28px;
color: white;
}

.sidebar-item {
padding: 10px;
font-size: 16px;
opacity: 0.25;;
}

.sidebar-item:last-child {
border-bottom: none;
}

.sidebar-item.active {
color: white;
opacity: 1;
}

.image {
  width: 350px;
  height: 400px;
  margin-left: 6vw;
  object-fit: cover;
}

.question {
margin-bottom: 20px;
margin: 0 auto;
width: 100%;
flex-direction: row;
}

h2 {
font-size: 45px;
margin-bottom: 10px;
}

.answer {
display: block;
margin-bottom: 10px;
font-size: 28px;
}

.next-button {
padding: 10px 20px;
background-color: #0B2058;
color: white;
border: none;
border-radius: 4px;
font-size: 25px;
cursor: pointer;
}
</style>
