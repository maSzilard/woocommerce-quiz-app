<!-- src/ProgressChart.svelte -->
<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto';
    
    export let quizData;
    
    let chart;
    
    onMount(() => {
      const ctx = document.getElementById('progressChart').getContext('2d');
      chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: quizData.map(entry => entry.date),
          datasets: [{
            label: 'Quiz Score',
            data: quizData.map(entry => entry.score),
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              max: 10,
              title: {
                display: true,
                text: 'Score'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Date'
              }
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Your WooCommerce Quiz Progress'
            }
          }
        }
      });
    });
  </script>
  
  <div>
    <canvas id="progressChart"></canvas>
  </div>