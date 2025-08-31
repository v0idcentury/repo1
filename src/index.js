export default {
  async fetch(request) {
    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8'
      }
    });
  }
};

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Eridian Clock</title>
<style>
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(circle at center, #2b1055, #7597de);
  font-family: 'Courier New', monospace;
  color: #e0e0e0;
}
#app {
  text-align: center;
}
h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
  text-shadow: 0 0 10px #00ffee;
}
#clock {
  font-size: 4em;
  letter-spacing: 0.1em;
  text-shadow: 0 0 20px #00ffee, 0 0 40px #00ffee;
}
</style>
</head>
<body>
<div id="app">
<h1>Eridian Star Clock</h1>
<div id="clock">--:--:--</div>
</div>
<script>
function update() {
  const now = new Date();
  const pad = n => n.toString().padStart(2, '0');
  const time = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds());
  document.getElementById('clock').textContent = time;
}
setInterval(update, 1000);
update();
</script>
</body>
</html>`;
