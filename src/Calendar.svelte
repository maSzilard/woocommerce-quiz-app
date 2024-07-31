<!-- src/Calendar.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';
    
    export let quizData;
    export let selectedDate;
    
    const dispatch = createEventDispatcher();
    
    const currentYear = new Date().getFullYear();
    const currentDate = new Date().toISOString().split('T')[0];
    const august = Array(31).fill().map((_, i) => {
      const date = new Date(currentYear, 7, i + 1).toISOString().split('T')[0];
      const quizEntry = quizData.find(entry => entry.date === date);
      return { 
        date, 
        completed: !!quizEntry, 
        score: quizEntry ? quizEntry.score : null,
        isCurrentDay: date === currentDate
      };
    });
  
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const firstDayOfMonth = new Date(currentYear, 7, 1).getDay();
  
    function handleDayClick(day) {
      dispatch('dayclick', day);
    }
  </script>
  
  <div class="calendar">
    <h2>August {currentYear}</h2>
    <div class="days-of-week">
      {#each daysOfWeek as day}
        <div class="day-of-week">{day}</div>
      {/each}
    </div>
    <hr>
    <div class="days">
      {#each Array(firstDayOfMonth).fill() as _}
        <div class="day empty"></div>
      {/each}
      {#each august as day}
        <div 
          class="day" 
          class:completed={day.completed}
          class:selected={day.date === selectedDate}
          class:current-day={day.isCurrentDay}
          on:click={() => handleDayClick(day)}
        >
          {day.date.split('-')[2]}
          {#if day.completed}
            <span class="score">{day.score}/10</span>
          {/if}
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .calendar {
      margin-bottom: 20px;
    }

    .calendar  h2 {
        text-align: center;
    }

    .days-of-week, .days {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 5px;
    }

    .days-of-week {
      margin-bottom: 10px;
    }

    .day-of-week, .day {
      border: 1px solid #ccc;
      padding: 5px;
      text-align: center;
      border-radius: 15px;
    }
    .day {
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .day:hover {
      background-color: #f0f0f0;
    }
    .day.empty {
      border: none;
    }
    .completed {
      background-color: #e6f3ff;
    }
    .selected {
      border: 2px solid #007bff;
    }
    .score {
      font-size: 0.8em;
      color: #666;
    }
    .current-day {
        background-color: #ffeb3b;
        font-weight: bold;
    }
    .current-day.completed {
        background-color: #4caf50;
        color: white;
    }
  </style>