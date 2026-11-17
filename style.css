:root {
  --ink: #0b1220;
  --ink-2: #47526b;
  --ink-3: #8089a0;
  --navy: #0b1f4d;
  --navy-2: #0f2a66;
  --blue: #1d4ed8;
  --blue-2: #2f6bff;
  --sky: #e8f0ff;
  --line: #dfe5f1;
  --bg: #ffffff;
  --bg-2: #f5f8fe;
  --ok: #12945a;
  --warn: #c77700;
  --bad: #c92a2a;
  --r: 14px;
  --font: 'Inter', system-ui, sans-serif;
  --head: 'Space Grotesk', 'Inter', sans-serif;
  --mono: 'JetBrains Mono', ui-monospace, monospace;
}

*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; padding: 0; }
html { scroll-behavior: smooth; scroll-padding-top: 76px; }
body { font-family: var(--font); color: var(--ink); background: var(--bg); line-height: 1.6; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; border: 0; background: none; color: inherit; }
code { font-family: var(--mono); font-size: .9em; }

.wrap { width: min(1160px, 100% - 40px); margin-inline: auto; }

/* ---------- nav ---------- */
.nav { position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,.88); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid transparent; transition: border-color .2s, box-shadow .2s; }
.nav.scrolled { border-color: var(--line); box-shadow: 0 6px 24px -18px rgba(11,31,77,.35); }
.nav-row { display: flex; align-items: center; gap: 24px; height: 68px; }
.brand { display: flex; align-items: center; gap: 10px; font-family: var(--head); font-weight: 600; letter-spacing: .02em; }
.brand-logo { width: 40px; height: 40px; border-radius: 10px; object-fit: cover; border: 1px solid var(--line); }
.brand-text { font-size: 16px; }
.brand-text b { margin-left: 6px; color: var(--blue); }
.nav-links { display: flex; gap: 28px; margin-left: 24px; }
.nav-links a { font-size: 14.5px; color: var(--ink-2); font-weight: 500; position: relative; padding: 4px 0; }
.nav-links a::after { content: ""; position: absolute; left: 0; bottom: -2px; height: 2px; width: 0; background: var(--blue); transition: width .2s; }
.nav-links a:hover { color: var(--ink); }
.nav-links a:hover::after { width: 100%; }
.nav-right { margin-left: auto; display: flex; align-items: center; gap: 12px; }

.status { display: inline-flex; align-items: center; gap: 8px; font-size: 12.5px; font-weight: 500; padding: 6px 12px; border-radius: 999px; background: var(--bg-2); border: 1px solid var(--line); color: var(--ink-2); white-space: nowrap; }
.status i { width: 8px; height: 8px; border-radius: 50%; background: var(--ink-3); }
.status[data-state="ok"] i { background: var(--ok); box-shadow: 0 0 0 0 rgba(18,148,90,.5); animation: pulse 2s infinite; }
.status[data-state="ok"] { color: #0c6b41; background: #eaf8f1; border-color: #c4ead6; }
.status[data-state="maint"] i { background: var(--warn); }
.status[data-state="maint"] { color: #8a5200; background: #fff5e3; border-color: #f2dcb0; }
.status[data-state="down"] i { background: var(--bad); }
.status[data-state="down"] { color: #9b1c1c; background: #fdeeee; border-color: #f3c9c9; }
@keyframes pulse { 70% { box-shadow: 0 0 0 7px rgba(18,148,90,0); } 100% { box-shadow: 0 0 0 0 rgba(18,148,90,0); } }

.burger { display: none; width: 40px; height: 40px; border-radius: 10px; border: 1px solid var(--line); flex-direction: column; align-items: center; justify-content: center; gap: 5px; }
.burger span { width: 18px; height: 2px; background: var(--ink); border-radius: 2px; transition: transform .2s; }
.burger[aria-expanded="true"] span:first-child { transform: translateY(3.5px) rotate(45deg); }
.burger[aria-expanded="true"] span:last-child { transform: translateY(-3.5px) rotate(-45deg); }

/* ---------- buttons ---------- */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; height: 48px; padding: 0 22px; border-radius: 12px; font-weight: 600; font-size: 15px; transition: transform .15s, background .2s, box-shadow .2s, border-color .2s; }
.btn:active { transform: translateY(1px); }
.btn-sm { height: 38px; padding: 0 16px; font-size: 14px; border-radius: 10px; }
.btn-dark { background: var(--navy); color: #fff; }
.btn-dark:hover { background: var(--navy-2); }
.btn-blue { background: var(--blue); color: #fff; box-shadow: 0 10px 24px -12px rgba(29,78,216,.8); }
.btn-blue:hover { background: #1740b8; transform: translateY(-1px); }
.btn-line { border: 1.5px solid var(--line); color: var(--ink); background: #fff; }
.btn-line:hover { border-color: var(--blue); color: var(--blue); }

/* ---------- hero ---------- */
.hero { padding: 64px 0 72px; background:
  linear-gradient(var(--line) 1px, transparent 1px) 0 0 / 100% 56px,
  linear-gradient(90deg, var(--line) 1px, transparent 1px) 0 0 / 56px 100%;
  background-color: var(--bg);
  position: relative; }
.hero::before { content: ""; position: absolute; inset: 0; background: radial-gradient(ellipse at 20% 40%, #fff 35%, rgba(255,255,255,.55) 100%); pointer-events: none; }
.hero-grid { position: relative; display: grid; grid-template-columns: 1.05fr .95fr; gap: 48px; align-items: center; }
.eyebrow { font-family: var(--mono); font-size: 12.5px; letter-spacing: .08em; text-transform: uppercase; color: var(--blue); font-weight: 500; margin-bottom: 14px; }
h1 { font-family: var(--head); font-weight: 700; font-size: clamp(38px, 5.4vw, 64px); line-height: 1.04; letter-spacing: -.025em; color: var(--navy); }
h1 em { font-style: normal; color: var(--blue); }
.lead { margin-top: 22px; font-size: 18px; color: var(--ink-2); max-width: 540px; }
.cta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 30px; }
.facts { display: flex; gap: 36px; margin-top: 40px; padding-top: 24px; border-top: 1px solid var(--line); flex-wrap: wrap; }
.facts dt { font-size: 12.5px; color: var(--ink-3); }
.facts dd { font-family: var(--head); font-size: 22px; font-weight: 600; color: var(--navy); }

.hero-art { position: relative; justify-self: center; width: min(100%, 520px); }
.logo-frame { background: #fff; border: 1px solid var(--line); border-radius: 28px; padding: 14px; box-shadow: 0 40px 80px -40px rgba(11,31,77,.45), 0 2px 0 var(--line); transform: rotate(1.2deg); transition: transform .4s; }
.hero-art:hover .logo-frame { transform: rotate(0); }
.logo-frame img { width: 100%; height: auto; aspect-ratio: 1 / 1; object-fit: cover; border-radius: 18px; background: var(--bg-2); }
.tick { position: absolute; font-family: var(--mono); font-size: 12px; font-weight: 500; background: var(--navy); color: #fff; padding: 6px 12px; border-radius: 8px; box-shadow: 0 10px 20px -10px rgba(11,31,77,.6); }
.t1 { top: -10px; left: -14px; }
.t2 { right: -12px; top: 38%; background: var(--blue); }
.t3 { bottom: -12px; left: 12%; background: #fff; color: var(--navy); border: 1px solid var(--line); }

/* ---------- strip ---------- */
.strip { background: var(--navy); color: #cfdcff; }
.strip-row { display: flex; justify-content: space-between; gap: 24px; padding: 16px 0; font-size: 13.5px; font-weight: 500; overflow-x: auto; scrollbar-width: none; }
.strip-row::-webkit-scrollbar { display: none; }
.strip-row span { white-space: nowrap; display: inline-flex; align-items: center; gap: 10px; }
.strip-row span::before { content: ""; width: 6px; height: 6px; background: var(--blue-2); border-radius: 1px; transform: rotate(45deg); }

/* ---------- sections ---------- */
.section { padding: 96px 0; }
.section-tint { background: var(--bg-2); }
.section-dark { background: var(--navy); color: #fff; }
.head { max-width: 640px; margin-bottom: 48px; }
h2 { font-family: var(--head); font-weight: 700; font-size: clamp(28px, 3.6vw, 42px); line-height: 1.1; letter-spacing: -.02em; color: var(--navy); }
.section-dark h2 { color: #fff; }
.sub { margin-top: 14px; color: var(--ink-2); font-size: 16.5px; }
.section-dark .sub { color: #b8c7ee; }
.section-dark .eyebrow { color: #7fa4ff; }

/* ---------- cards ---------- */
.cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.card { position: relative; background: #fff; border: 1px solid var(--line); border-radius: var(--r); padding: 28px 26px 26px; display: flex; flex-direction: column; gap: 10px; transition: transform .25s, border-color .25s, box-shadow .25s; }
.card::after { content: attr(data-n); position: absolute; top: 22px; right: 24px; font-family: var(--mono); font-size: 12px; color: var(--ink-3); }
.card:hover { transform: translateY(-4px); border-color: #b9ccf7; box-shadow: 0 24px 40px -28px rgba(29,78,216,.45); }
.ico { width: 44px; height: 44px; padding: 10px; border-radius: 11px; background: var(--sky); fill: none; stroke: var(--blue); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; margin-bottom: 8px; }
.card h3 { font-family: var(--head); font-size: 20px; font-weight: 600; color: var(--navy); }
.card p { color: var(--ink-2); font-size: 15px; flex: 1; }
.tag { align-self: flex-start; margin-top: 8px; font-family: var(--mono); font-size: 11.5px; padding: 4px 10px; border-radius: 6px; background: var(--bg-2); color: var(--ink-2); border: 1px solid var(--line); }
.card-accent { background: var(--navy); border-color: var(--navy); }
.card-accent h3 { color: #fff; }
.card-accent p { color: #b8c7ee; }
.card-accent::after { color: #7f95c9; }
.card-accent .ico { background: rgba(255,255,255,.1); stroke: #9ec0ff; }
.card-accent:hover { border-color: var(--blue-2); }
.more { margin-top: 8px; color: #9ec0ff; font-weight: 600; font-size: 14.5px; }
.more:hover { color: #fff; }

/* ---------- api ---------- */
.api-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 56px; align-items: start; }
.steps-mini { list-style: none; margin-top: 28px; display: grid; gap: 0; border-top: 1px solid rgba(255,255,255,.14); }
.steps-mini li { padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,.14); color: #cfdcff; font-size: 15px; display: flex; gap: 14px; }
.steps-mini b { width: 80px; flex: none; color: #fff; font-weight: 600; }
.steps-mini code { color: #9ec0ff; }

.code { background: #07142f; border: 1px solid rgba(255,255,255,.12); border-radius: 16px; overflow: hidden; min-width: 0; }
.code-bar { display: flex; align-items: center; justify-content: space-between; padding: 10px 12px 10px 8px; border-bottom: 1px solid rgba(255,255,255,.1); gap: 8px; }
.tabs { display: flex; gap: 2px; overflow-x: auto; scrollbar-width: none; }
.tab { padding: 8px 14px; border-radius: 8px; font-size: 13.5px; color: #8ea4d8; font-weight: 500; white-space: nowrap; }
.tab:hover { color: #fff; }
.tab.on { background: rgba(255,255,255,.1); color: #fff; }
.copy { font-size: 13px; padding: 7px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,.2); color: #cfdcff; white-space: nowrap; }
.copy:hover { background: rgba(255,255,255,.08); }
.copy.done { background: var(--ok); border-color: var(--ok); color: #fff; }
.pane { display: none; padding: 20px; overflow-x: auto; font-size: 13.5px; line-height: 1.75; color: #dbe6ff; min-height: 270px; }
.pane.on { display: block; }
.pane .k { color: #7fb0ff; }
.pane .s { color: #9be0b4; }
.pane .c { color: #6f84b8; }
.pane .n { color: #ffcf7a; }
.code-foot { display: flex; flex-wrap: wrap; gap: 8px 22px; padding: 12px 20px; border-top: 1px solid rgba(255,255,255,.1); font-family: var(--mono); font-size: 12px; color: #8ea4d8; }
.code-foot b { color: #7fb0ff; font-weight: 500; margin-right: 6px; }

/* ---------- flow ---------- */
.flow { list-style: none; display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; counter-reset: s; border: 1px solid var(--line); border-radius: var(--r); overflow: hidden; }
.flow li { padding: 32px 28px 34px; border-right: 1px solid var(--line); background: #fff; }
.flow li:last-child { border-right: 0; }
.num { display: grid; place-items: center; width: 36px; height: 36px; border-radius: 50%; background: var(--navy); color: #fff; font-family: var(--head); font-weight: 600; margin-bottom: 18px; }
.flow h3 { font-family: var(--head); font-size: 19px; color: var(--navy); margin-bottom: 8px; }
.flow p { color: var(--ink-2); font-size: 15px; }

/* ---------- contacts ---------- */
.contacts { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
.contact { display: grid; grid-template-columns: 1fr auto; grid-template-areas: "k a" "v a"; align-items: center; row-gap: 2px; background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 18px 22px; transition: border-color .2s, transform .2s; }
.contact:hover { border-color: var(--blue); transform: translateX(3px); }
.c-k { grid-area: k; font-size: 13px; color: var(--ink-3); }
.c-v { grid-area: v; font-family: var(--head); font-weight: 600; font-size: 18px; color: var(--navy); }
.c-a { grid-area: a; font-size: 20px; color: var(--blue); }

/* ---------- footer ---------- */
.foot { border-top: 1px solid var(--line); padding: 28px 0; }
.foot-row { display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; }
.foot-brand { display: flex; align-items: center; gap: 10px; font-family: var(--head); font-weight: 600; color: var(--navy); }
.foot-brand img { width: 32px; height: 32px; border-radius: 8px; object-fit: cover; }
.foot p { font-size: 13.5px; color: var(--ink-3); }

/* ---------- reveal ---------- */
.rv { opacity: 0; transform: translateY(18px); transition: opacity .6s ease, transform .6s ease; }
.rv.in { opacity: 1; transform: none; }

/* ---------- responsive ---------- */
@media (max-width: 960px) {
  .hero-grid, .api-grid { grid-template-columns: 1fr; }
  .hero { padding-top: 40px; }
  .hero-art { order: -1; width: min(100%, 380px); }
  .cards { grid-template-columns: repeat(2, 1fr); }
  .flow { grid-template-columns: 1fr; }
  .flow li { border-right: 0; border-bottom: 1px solid var(--line); }
  .flow li:last-child { border-bottom: 0; }
}
@media (max-width: 760px) {
  .burger { display: flex; }
  .nav-links { position: absolute; top: 68px; left: 0; right: 0; flex-direction: column; gap: 0; margin: 0; background: #fff; border-bottom: 1px solid var(--line); padding: 8px 20px 16px; display: none; }
  .nav-links.open { display: flex; }
  .nav-links a { padding: 14px 0; border-bottom: 1px solid var(--line); font-size: 16px; }
  .nav-links a::after { display: none; }
  .nav .btn { display: none; }
  .section { padding: 68px 0; }
  .cards, .contacts { grid-template-columns: 1fr; }
  .facts { gap: 24px; }
  .t1 { left: -4px; } .t2 { right: -4px; }
}
@media (max-width: 420px) {
  .status span { display: none; }
  .status { padding: 8px; }
  .brand-text { font-size: 14.5px; }
}
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
  .rv { opacity: 1; transform: none; }
}
