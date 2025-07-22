const span=document.getElementById('counter')
const target=parseInt(span.textContent)
const duration=2000
const interval = Math.floor(duration / target);
  
let count =0;

span.textContent = count;

  const counter = setInterval(() => {
    count++;
    span.textContent = count;
    if (count >= target) {
      clearInterval(counter);
    }
  }, interval);