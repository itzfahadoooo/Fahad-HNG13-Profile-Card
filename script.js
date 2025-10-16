document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (!timeElement) return;

  function updateTime() {
    const currentTime = Date.now();
    timeElement.textContent = `🕒 Time (ms): ${currentTime}`;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
