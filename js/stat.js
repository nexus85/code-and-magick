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
paintGistogramm(150, maxTime, names, times, ctx);

};


//поиск максимальноего значения
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

//нарисовать гистограму
var paintGistogramm = function (histpgramWidth, maxValue, names, times,ctx) {


var step = histpgramWidth / (maxValue - 0);

var barHeight = 20;
var indent = 50;
var initialX = 120;
var initialY = 80;
var lineHeight = 15;


for (var i = 0; i < times.length; i++) {
  // ctx.fillStyle = "back";



  if(names[i].toLowerCase() === 'вы'){
    ctx.fillStyle = 'rgba(0,0,0,0.7)';
  }else{
    ctx.fillStyle = 'black';
  }
  ctx.fillRect(initialX, initialY + indent * i , times[i] * step, barHeight);
  ctx.fillText(names[i], initialX + histpgramWidth + barHeight, initialY + lineHeight + indent *i );

  ctx.fillStyle = "white";
  ctx.font = '16 PT Mono';
  ctx.fillText(parseInt(times[i]), initialX, initialY + indent * i + barHeight);


  // hastogramStep + 20;
  // ctx.fillStyle = 'white';
  //
  // ctx.fillText(names[i]+' Набрал: '+ times[i], 120, hastogramStep);
}


};





/*

    ctx.fillStyle = 'rgba(0,0,0,0.7)'
    ctx.fillRect(100,10,270,420);



    ctx.fillStyle = '#000';

    ctx.font = '16px PT Mono';
    ctx.fillText = ('Ура вы победили! \n Список результатов:', 150, 40);
*/
