<!-- src/App.svelte -->
<script>
	import { onMount } from 'svelte';
	import Calendar from './Calendar.svelte';
	import ProgressChart from './ProgressChart.svelte';
	import { wooCommerceQuestions } from './questions.js';
  
	let questions = [];
	let currentQuestionIndex = 0;
	let score = 0;
	let quizCompleted = false;
	let loading = true;
	let quizData = [];
	let showQuiz = false;
	let showProgressChart = false;
	let selectedDate = null;
	let showFeedback = false;
	let selectedAnswer = '';
	let isCorrect = false;
	let masteredQuestions = {};  // New: Track mastered questions
  
	onMount(async () => {
	  loadQuizData();
	  loadMasteredQuestions();
	  await loadQuestions();
	  loading = false;
	});
  
	async function loadQuestions() {
	  let availableQuestions = wooCommerceQuestions.filter(q => !masteredQuestions[q.question] || masteredQuestions[q.question] < 2);
	  if (availableQuestions.length < 10) {
		// If we don't have enough non-mastered questions, reset mastery for all questions
		masteredQuestions = {};
		availableQuestions = wooCommerceQuestions;
	  }
	  questions = shuffleArray(availableQuestions).slice(0, 10);
	}
  
	function shuffleArray(array) {
	  let shuffled = [...array];
	  for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	  }
	  return shuffled;
	}
  
	function handleAnswer(answer) {
	  selectedAnswer = answer;
	  isCorrect = answer === questions[currentQuestionIndex].correctAnswer;
	  if (isCorrect) {
		score++;
		// Update mastered questions
		const questionText = questions[currentQuestionIndex].question;
		masteredQuestions[questionText] = (masteredQuestions[questionText] || 0) + 1;
		saveMasteredQuestions();
	  }
	  showFeedback = true;
	}
  
	function nextQuestion() {
	  if (currentQuestionIndex < questions.length - 1) {
		currentQuestionIndex++;
		showFeedback = false;
		selectedAnswer = '';
	  } else {
		quizCompleted = true;
		saveQuizResult();
	  }
	}
  
	function saveQuizResult() {
	  const quizDate = selectedDate || new Date().toISOString().split('T')[0];
	  const existingEntryIndex = quizData.findIndex(entry => entry.date === quizDate);
	  
	  if (existingEntryIndex !== -1) {
		quizData[existingEntryIndex].score = score;
	  } else {
		quizData.push({ date: quizDate, score: score });
	  }
	  
	  localStorage.setItem('quizData', JSON.stringify(quizData));
	}
  
	function loadQuizData() {
	  const storedData = localStorage.getItem('quizData');
	  quizData = storedData ? JSON.parse(storedData) : [];
	}
  
	function saveMasteredQuestions() {
	  localStorage.setItem('masteredQuestions', JSON.stringify(masteredQuestions));
	}
  
	function loadMasteredQuestions() {
	  const storedData = localStorage.getItem('masteredQuestions');
	  masteredQuestions = storedData ? JSON.parse(storedData) : {};
	}
  
	function startQuiz(date = null) {
	  currentQuestionIndex = 0;
	  score = 0;
	  quizCompleted = false;
	  showQuiz = true;
	  showProgressChart = false;
	  showFeedback = false;
	  selectedAnswer = '';
	  selectedDate = date || new Date().toISOString().split('T')[0];
	  loadQuestions();
	}
  
	function backToCalendar() {
	  showQuiz = false;
	  showProgressChart = false;
	  selectedDate = null;
	}
  
	function toggleProgressChart() {
	  showProgressChart = !showProgressChart;
	}
  
	function handleDayClick(event) {
	  const clickedDay = event.detail;
	  selectedDate = clickedDay.date;
	  if (clickedDay.completed) {
		showDetailedResults(clickedDay);
	  } else {
		startQuiz(selectedDate);
	  }
	}
  
	function showDetailedResults(quizResult) {
	  showQuiz = false;
	  quizCompleted = true;
	  score = quizResult.score;
	}
  
	function retakeQuiz() {
	  startQuiz(selectedDate);
	}
  </script>
  
  <main>
	<h1>Daily WooCommerce Developer Quiz</h1>
	
	{#if loading}
	  <p>Loading...</p>
	{:else if !showQuiz}
	  <div class="mastery-info">
		<h3>Your Progress</h3>
		<p>Questions Mastered: {Object.values(masteredQuestions).filter(count => count >= 2).length} / {wooCommerceQuestions.length}</p>
	  </div>
	  <Calendar quizData={quizData} on:dayclick={handleDayClick} selectedDate={selectedDate} />
	  <div class="button-container">
		<button on:click={() => startQuiz()}>Take Today's Quiz</button>
		<button on:click={toggleProgressChart}>
		  {showProgressChart ? 'Hide Progress Chart' : 'Show Progress Chart'}
		</button>
	  </div>
	  {#if showProgressChart}
		<ProgressChart quizData={quizData} />
	  {/if}
	  {#if quizCompleted}
		<div class="results">
		  <h2>Quiz Results for {selectedDate}</h2>
		  <p>Your score: {score} out of 10</p>
		  <button on:click={retakeQuiz}>Retake Quiz</button>
		</div>
	  {/if}
	{:else if !quizCompleted}
	  <div class="question">
		<h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
		<p>{questions[currentQuestionIndex].question}</p>
		
		<div class="options">
		  {#each questions[currentQuestionIndex].options as option}
			<button 
			  on:click={() => handleAnswer(option)}
			  disabled={showFeedback}
			  class:selected={selectedAnswer === option}
			  class:correct={showFeedback && option === questions[currentQuestionIndex].correctAnswer}
			  class:incorrect={showFeedback && selectedAnswer === option && !isCorrect}
			>
			  {option}
			</button>
		  {/each}
		</div>
  
		{#if showFeedback}
		  <div class="feedback">
			<p>{isCorrect ? 'Correct!' : 'Incorrect.'}</p>
			<p>Correct answer: {questions[currentQuestionIndex].correctAnswer}</p>
			<p>{questions[currentQuestionIndex].explanation}</p>
			<button on:click={nextQuestion}>
			  {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
			</button>
		  </div>
		{/if}
	  </div>
	{:else}
	  <div class="results">
		<h2>Quiz Completed!</h2>
		<p>Your score: {score} out of {questions.length}</p>
		<button on:click={backToCalendar}>Back to Calendar</button>
	  </div>
	{/if}
  </main>
  
  <style>
	main {
	  max-width: 800px;
	  margin: 0 auto;
	  padding: 20px;
	  font-family: Arial, sans-serif;
	}
  
	h1, h2 {
	  color: #333;
	  text-align: center;
	}
  
	.question, .results {
	  background-color: #f0f0f0;
	  padding: 20px;
	  border-radius: 8px;
	  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}
  
	.options {
	  display: grid;
	  gap: 10px;
	  margin-top: 20px;
	}
  
	button {
	  padding: 10px;
	  background-color: #7f54b3;
	  color: white;
	  border: none;
	  border-radius: 4px;
	  cursor: pointer;
	  transition: background-color 0.3s ease;
	}
  
	button:hover:not(:disabled) {
	  background-color: #6a458d;
	}
  
	button:disabled {
	  opacity: 0.7;
	  cursor: not-allowed;
	}
  
	.selected {
	  border: 2px solid #333;
	}
  
	.correct {
	  background-color: #4CAF50;
	}
  
	.incorrect {
	  background-color: #f44336;
	}
  
	.feedback {
	  margin-top: 20px;
	  padding: 10px;
	  background-color: #e0e0e0;
	  border-radius: 4px;
	}
  
	.button-container {
	  display: flex;
	  justify-content: space-around;
	  margin-top: 20px;
	}
	.selected {
		border: 2px solid #007bff;
	}
	.correct {
		background-color: #28a745;
		color: white;
	}
	.incorrect {
		background-color: #dc3545;
		color: white;
	}
	.feedback {
		margin-top: 20px;
		padding: 10px;
		background-color: #f8f9fa;
		border-radius: 5px;
	}
	.mastery-info {
		background-color: #f0f0f0;
		padding: 15px;
		border-radius: 8px;
		margin-bottom: 20px;
		text-align: center;
	}

	.mastery-info h3 {
		margin-top: 0;
		color: #333;
	}

	.mastery-info p {
		font-size: 1.1em;
		font-weight: bold;
		color: #007bff;
	}
</style>