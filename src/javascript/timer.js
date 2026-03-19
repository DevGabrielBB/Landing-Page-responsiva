(function () {
  var key = 'wd_timer_end';
  var end = localStorage.getItem(key);
  if (!end || Date.now() > parseInt(end)) {
    end = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem(key, end);
  }
  end = parseInt(end);
  function tick() {
    var diff = Math.max(0, end - Date.now());
    var h = Math.floor(diff / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-h').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-m').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-s').textContent = String(s).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);
})();
