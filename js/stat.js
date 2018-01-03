window.renderStatistics = function(ctx, names, times){

// ctx.fillText('Привет кекс', 100, 100);


ctx.fillStyle = 'white';
ctx.strokeRect(100,10,420,270);  //это обводка текста
ctx.fillRect(100,10,420,270); //рисуте белый прямоугольник.

ctx.fillStyle = 'black';
ctx.font = '16 PT Mono';
ctx.fillText('Ура вы победили', 120, 40);




var maxTime = maxValue(times);

ctx.fillText('Худшее время: ' + maxTime, 120, 60);


}
var maxValue = function functionName(times) {
  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  return parseInt(max);
};



/*

    ctx.fillStyle = 'rgba(0,0,0,0.7)'
    ctx.fillRect(100,10,270,420);



    ctx.fillStyle = '#000';

    ctx.font = '16px PT Mono';
    ctx.fillText = ('Ура вы победили! \n Список результатов:', 150, 40);
*/
