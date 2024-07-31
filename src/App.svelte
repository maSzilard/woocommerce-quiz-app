<!-- src/App.svelte -->
<script>
	import { onMount } from 'svelte';
	
	let questions = [];
	let currentQuestionIndex = 0;
	let score = 0;
	let quizCompleted = false;
  
	onMount(async () => {
	  // In a real app, you'd fetch questions from an API
	  questions = [
		{
		  question: "What is the capital of France?",
		  options: ["London", "Berlin", "Paris", "Madrid"],
		  correctAnswer: "Paris"
		},
		{
		  question: "Which planet is known as the Red Planet?",
		  options: ["Venus", "Mars", "Jupiter", "Saturn"],
		  correctAnswer: "Mars"
		},
		{
		  question: "What is the largest mammal?",
		  options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
		  correctAnswer: "Blue Whale"
		}
	  ];
	});
  
	function handleAnswer(selectedAnswer) {
	  if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
		score++;
	  }
	  
	  if (currentQuestionIndex < questions.length - 1) {
		currentQuestionIndex++;
	  } else {
		quizCompleted = true;
	  }
	}
  
	function restartQuiz() {
	  currentQuestionIndex = 0;
	  score = 0;
	  quizCompleted = false;
	}
  </script>
  
  <main>
	<h1>WooCommerce Quiz App</h1>
	
	{#if !quizCompleted}
	  <div class="question">
		<h2>Question {currentQuestionIndex + 1}</h2>
		<p>{questions[currentQuestionIndex].question}</p>
		
		<div class="options">
		  {#each questions[currentQuestionIndex].options as option}
			<button on:click={() => handleAnswer(option)}>{option}</button>
		  {/each}
		</div>
	  </div>
	{:else}
	  <div class="results">
		<h2>Quiz Completed!</h2>
		<p>Your score: {score} out of {questions.length}</p>
		<button on:click={restartQuiz}>Restart Quiz</button>
	  </div>
	{/if}
  </main>
  
  <style>
	main {
	  max-width: 600px;
	  margin: 0 auto;
	  padding: 20px;
	  font-family: Arial, sans-serif;
	}
  
	h1 {
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
  
	button:hover {
	  background-color: #6a458d;
	}
  </style>