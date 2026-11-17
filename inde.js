(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- nav ---------- */
  var nav = $('#nav');
  var burger = $('#burger');
  var links = $('#navLinks');

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  burger.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  $$('a', links).forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  $('#year').textContent = new Date().getFullYear();

  /* ---------- status live dari backend ---------- */
  var pill = $('#statusPill');
  var pillText = $('#statusText');

  function setStatus(state, text) {
    pill.setAttribute('data-state', state);
    pillText.textContent = text;
  }

  function checkStatus() {
    var ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctrl) ctrl.abort(); }, 8000);

    fetch('/api/maintenance', { cache: 'no-store', signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) {
        if (!r.ok) throw new Error('http ' + r.status);
        return r.json();
      })
      .then(function (d) {
        var m = d && (d.is_maintenance !== undefined ? d : d.data || d.maintenance || d);
        if (m && m.is_maintenance) setStatus('maint', 'Maintenance');
        else setStatus('ok', 'Online');
      })
      .catch(function () { setStatus('down', 'Gangguan'); })
      .then(function () { clearTimeout(timer); });
  }
  checkStatus();
  setInterval(checkStatus, 60000);

  /* ---------- contoh kode API ---------- */
  var BASE = location.origin && location.origin.indexOf('http') === 0 ? location.origin : 'https://domain-kamu.my.id';
  var URL_CREATE = BASE + '/api/pg/v1/qris/create';
  var URL_STATUS = BASE + '/api/pg/v1/qris/status/pgtx_xxxxxxxxxxxxxxxx';

  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function hl(code) {
    var re = /(\/\/[^\n]*|(?:^|\n)#[^\n]*)|("(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*')|\b(const|await|async|curl|require|function|return|new|true|false)\b|\b(\d{3,})\b/g;
    var out = '', last = 0, m;
    while ((m = re.exec(code)) !== null) {
      out += esc(code.slice(last, m.index));
      var cls = m[1] ? 'c' : m[2] ? 's' : m[3] ? 'k' : 'n';
      out += '<span class="' + cls + '">' + esc(m[0]) + '</span>';
      last = m.index + m[0].length;
    }
    return out + esc(code.slice(last));
  }

  var samples = {
    curl:
      'curl -X POST "' + URL_CREATE + '" \\\n' +
      '  -H "X-API-Key: RSC_xxxxxxxxxxxxxxxx" \\\n' +
      '  -H "Content-Type: application/json" \\\n' +
      '  -d \'{\n' +
      '    "amount": 10000,\n' +
      '    "reference": "INV-001",\n' +
      '    "callback_url": "https://tokomu.com/callback"\n' +
      '  }\'\n\n' +
      '# cek status\n' +
      'curl "' + URL_STATUS + '" \\\n' +
      '  -H "X-API-Key: RSC_xxxxxxxxxxxxxxxx"',

    node:
      "const res = await fetch('" + URL_CREATE + "', {\n" +
      "  method: 'POST',\n" +
      "  headers: {\n" +
      "    'X-API-Key': process.env.RSC_KEY,\n" +
      "    'Content-Type': 'application/json'\n" +
      "  },\n" +
      "  body: JSON.stringify({\n" +
      "    amount: 10000,\n" +
      "    reference: 'INV-001',\n" +
      "    callback_url: 'https://tokomu.com/callback'\n" +
      "  })\n" +
      "});\n\n" +
      "const { data } = await res.json();\n" +
      "// data.qris_image -> tampilkan ke pembeli\n" +
      "// data.total      -> nominal yang harus dibayar",

    php:
      '$ch = curl_init("' + URL_CREATE + '");\n' +
      'curl_setopt_array($ch, [\n' +
      '  CURLOPT_POST => true,\n' +
      '  CURLOPT_RETURNTRANSFER => true,\n' +
      '  CURLOPT_HTTPHEADER => [\n' +
      '    "X-API-Key: RSC_xxxxxxxxxxxxxxxx",\n' +
      '    "Content-Type: application/json"\n' +
      '  ],\n' +
      '  CURLOPT_POSTFIELDS => json_encode([\n' +
      '    "amount" => 10000,\n' +
      '    "reference" => "INV-001",\n' +
      '    "callback_url" => "https://tokomu.com/callback"\n' +
      '  ])\n' +
      ']);\n' +
      '$data = json_decode(curl_exec($ch), true)["data"];',

    res:
      '{\n' +
      '  "success": true,\n' +
      '  "data": {\n' +
      '    "reference": "pgtx_xxxxxxxxxxxxxxxx",\n' +
      '    "merchant_reference": "INV-001",\n' +
      '    "amount": 10000,\n' +
      '    "total": 10123,\n' +
      '    "qris_image": "https://.../qr.png",\n' +
      '    "expired_at": "2026-01-01T10:04:00.000Z",\n' +
      '    "status": "pending"\n' +
      '  }\n' +
      '}\n\n' +
      '// status: pending | paid | expired'
  };

  Object.keys(samples).forEach(function (k) {
    var el = $('#code-' + k);
    if (el) el.innerHTML = hl(samples[k]);
  });

  var current = 'curl';
  $$('.tab').forEach(function (t) {
    t.addEventListener('click', function () {
      current = t.getAttribute('data-tab');
      $$('.tab').forEach(function (x) { x.classList.toggle('on', x === t); });
      $$('.pane').forEach(function (p) { p.classList.toggle('on', p.getAttribute('data-pane') === current); });
      resetCopy();
    });
  });

  var copyBtn = $('#copyBtn');
  var copyTimer;
  function resetCopy() {
    clearTimeout(copyTimer);
    copyBtn.textContent = 'Salin';
    copyBtn.classList.remove('done');
  }
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }
  copyBtn.addEventListener('click', function () {
    var text = samples[current];
    var done = function () {
      copyBtn.textContent = 'Tersalin';
      copyBtn.classList.add('done');
      clearTimeout(copyTimer);
      copyTimer = setTimeout(resetCopy, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else {
      fallbackCopy(text);
      done();
    }
  });

  /* ---------- reveal on scroll ---------- */
  var targets = $$('.card, .flow li, .contact, .head, .code, .api-copy, .facts');
  targets.forEach(function (t) { t.classList.add('rv'); });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var idx = targets.indexOf(e.target) % 3;
          e.target.style.transitionDelay = (idx * 60) + 'ms';
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -30px 0px' });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add('in'); });
  }
})();
