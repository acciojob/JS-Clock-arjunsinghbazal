//your code here
function rotateClockHands() {
  const now = new Date();

  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.minute-hand');
  const secondHand = document.querySelector('.second-hand');

  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourRotation = (hours * 30) + (minutes * 0.5); // 30 degrees per hour, 0.5 degrees per minute
  const minuteRotation = (minutes * 6) + (seconds * 0.1); // 6 degrees per minute, 0.1 degrees per second
  const secondRotation = seconds * 6; // 6 degrees per second

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Run the rotateClockHands function every second
setInterval(rotateClockHands, 1000);
