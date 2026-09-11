const lessonId = 'day-001';
const button = document.getElementById('completeLesson');
let completed = JSON.parse(localStorage.getItem('tl-lessons-completed') || '[]');

function render() {
  const isComplete = completed.includes(lessonId);
  button.classList.toggle('completed', isComplete);
  button.querySelector('strong').textContent = isComplete ? 'Day 01 completed' : 'Mark Day 01 complete';
  button.querySelector('small').textContent = isComplete ? 'Click to undo' : 'Your progress stays in this browser';
}

button.addEventListener('click', () => {
  completed = completed.includes(lessonId) ? completed.filter(id => id !== lessonId) : [...completed, lessonId];
  localStorage.setItem('tl-lessons-completed', JSON.stringify(completed));
  render();
});
render();
