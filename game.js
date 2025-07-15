  let currentStat = 100;
  const maxStat = 100;

  function updateBar() {
    const bar = document.getElementById("stat-bar");
    bar.style.width = currentStat + "%";

    if (currentStat > 60) {
      bar.style.backgroundColor = "#4caf50"; // Green
    } else if (currentStat > 30) {
      bar.style.backgroundColor = "#ff9800"; // Orange
    } else {
      bar.style.backgroundColor = "#f44336"; // Red
    }
  }

  function decreaseStat() {
    currentStat = Math.max(0, currentStat - 10);
    updateBar();
  }

  function increaseStat() {
    currentStat = Math.min(maxStat, currentStat + 10);
    updateBar();
  }

  updateBar(); // Initialize on load

