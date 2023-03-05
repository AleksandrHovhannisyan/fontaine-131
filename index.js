const { getMetricsForFamily } = require('fontaine');

(async () => {
  const metrics = await getMetricsForFamily('Fira Sans');
  console.log(metrics);
})();
