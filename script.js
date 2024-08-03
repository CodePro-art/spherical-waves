Array.linspace = function (a, b, n) {
  let result = [];
  const step = (b - a) / (n - 1);
  for (let i = 0; i < n; i++) result.push(a + i * step);

  return result;
};

const SIDE = 6000;
const RESOL = 200;
const COORD = Array.linspace(-0.5 * SIDE, 0.5 * SIDE, RESOL);
const POS = -0.4 * SIDE;
const RADIUS = 40;
const POWER = 0.5;

function newPlot(intens, zmin, colormap) {
  const data = [
    {
      z: intens,
      type: "heatmap",
      showscale: false,
      zsmooth: "fast",
      hoverinfo: "none",
      colorscale: colormap,
      zmin: zmin,
      zmax: 1
    }
  ];

  const layout = {
    xaxis: { visible: false },
    yaxis: { visible: false },
    margin: { l: 0, t: 0, r: 0, b: 0 }
  };

  Plotly.newPlot(graph, data, layout);
}

function updatePlot(intens, zmin, colormap) {
  Plotly.restyle(graph, { z: [intens], zmin: [zmin], colorscale: [colormap] }, [
    0
  ]);
}

let plot = function (intens, zmin, colormap) {
  newPlot(intens, zmin, colormap);
  plot = updatePlot;
};

function update() {
  const count = parseInt(countSlider.value);
  const spacing = (SIDE * parseInt(spaSlider.value)) / 1000;
  const wave = parseInt(waveSlider.value);
  const wavenumber = (2 * Math.PI) / wave;
  const scale = 0.001 * parseInt(scaleSlider.value);
  const field = fieldRadio.checked;

  countDisplay.innerText = count.toFixed(0);
  spaDisplay.innerText = spacing.toFixed(0);
  waveDisplay.innerText = wave.toFixed(0);

  const sources = [];
  for (let i = 0, b = -0.5 * (count - 1) * spacing; i < count; i++)
    sources.push({ x: POS, y: b + i * spacing });

  const intens = COORD.map(function (y) {
    return COORD.map(function (x) {
      // phasor components
      let cos = 0;
      let sin = 0;

      sources.forEach(function (s) {
        const dx = x - s.x;
        const dy = y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist <= RADIUS) return scale;

        const amp = Math.pow(RADIUS / dist, POWER);
        const phase = wavenumber * dist;
        cos += amp * Math.cos(phase);
        sin += amp * Math.sin(phase);
      });

      return scale * (field ? cos : cos * cos + sin * sin);
    });
  });

  plot(intens, field ? -1 : 0, colorSelect.value);
}

window.addEventListener("load", update);