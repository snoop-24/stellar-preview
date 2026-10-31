// Direction G. Draws the practice problem graph on Nova.
(function () {
  const NS = 'http://www.w3.org/2000/svg', el = (n, a) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); return e; };
  class Graph extends HTMLElement {
    connectedCallback() { if (this.done) return; this.done = true; const s = el('svg', { viewBox: '0 0 420 260' }), X = v => 40 + v * 70, Y = v => 228 - v * 42;
      for (let i = 1; i <= 4; i++) { s.append(el('line', { x1: X(i), x2: X(i), y1: 14, y2: 228, stroke: 'var(--ln)' })); const t = el('text', { x: X(i), y: 248, 'text-anchor': 'middle', fill: 'var(--mu)', 'font-size': 13 }); t.textContent = i; s.append(t); }
      for (let i = 1; i <= 4; i++) { s.append(el('line', { x1: 40, x2: 400, y1: Y(i), y2: Y(i), stroke: 'var(--ln)' })); const t = el('text', { x: 26, y: Y(i) + 4, 'text-anchor': 'middle', fill: 'var(--mu)', 'font-size': 13 }); t.textContent = i; s.append(t); }
      s.append(el('line', { x1: 40, y1: 228, x2: 400, y2: 228, stroke: 'var(--ink)', 'stroke-width': 1.5 }), el('line', { x1: 40, y1: 228, x2: 40, y2: 14, stroke: 'var(--ink)', 'stroke-width': 1.5 }), el('line', { x1: X(0), y1: Y(1), x2: X(3.8), y2: Y(4.8), stroke: 'var(--ac)', 'stroke-width': 3 }), el('circle', { cx: X(2), cy: Y(3), r: 6, fill: 'var(--card)', stroke: 'var(--ac)', 'stroke-width': 3 }), el('circle', { cx: X(2), cy: Y(1), r: 6, fill: 'var(--ac)' }));
      this.append(s); }
  }
  customElements.get('st-graph') || customElements.define('st-graph', Graph);
})();
