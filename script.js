document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (!timeElement) return;

  function updateTime() {
    const currentTime = Date.now();
    timeElement.textContent = Date.now();
  }

  updateTime();
  setInterval(updateTime, 1000);
});
