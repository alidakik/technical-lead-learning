const completed = JSON.parse(localStorage.getItem('tl-lessons-completed') || '[]');
const count = completed.length;
const countElement = document.getElementById('completedCount');
const fillElement = document.getElementById('progressFill');
const barElement = document.querySelector('.progress-bar');
const noteElement = document.getElementById('progressNote');

if (countElement && fillElement && barElement) {
  countElement.textContent = count;
  const percent = Math.min((count / 90) * 100, 100);
  fillElement.style.width = `${percent}%`;
  barElement.setAttribute('aria-valuenow', count);
  if (completed.includes('day-001') && noteElement) {
    noteElement.textContent = 'Day 01 complete. Return tomorrow for the next deliberate step.';
  }
}
