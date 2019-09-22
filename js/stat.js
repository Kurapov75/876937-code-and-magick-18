var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GRAPH_X = 160;
var GRAPH_Y = 95;
var GRAPH_GAP = 80;
var GRAPH_WIDTH = 40;
var NAME_Y = 265;
var TIME_Y = 80;
var graphHeight = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }

  return maxElement;
  };
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!\nСписок результатов:', 140, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], GRAPH_X + GRAPH_GAP * i, NAME_Y);
    ctx.fillText(Math.ceil(times[i]), GRAPH_X + GRAPH_GAP * i, TIME_Y);
    ctx.fillStyle = 'hsl(240, 100%, 50%)';
    ctx.fillRect(GRAPH_X + GRAPH_GAP * i, GRAPH_Y, GRAPH_WIDTH, graphHeight * times[i] / maxTime);
  };
};
