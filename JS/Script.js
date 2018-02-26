//var feed = new Instafeed({
//  get: 'tagged',
//  tagName: 'dog',
//  userId: '1642413801',
//  clientId: '8451dbbe5f324e66b5db2678191999b9',
//  accessToken: '1642413801.1677ed0.2fd901b9b5774cb383d81fae0d5106f4',
//  sortBy: 'most-recent',
//});
//feed.run();
           var imgPaths = [
               ['./assets/layer5.png',400],
               ['./assets/flicker.png',300]];
           var imgO = new Array();
           var currImg = 0;
           var currDispTime = imgPaths[0][1];
           var siteWidth = 1920;
           var scale = screen.width /siteWidth
		   var options = {
  "animate": true,
  "patternWidth": 122.34,
  "patternHeight": 293.8,
  "grainOpacity": 0.2,
  "grainDensity": 1.22,
  "grainWidth": 1,
  "grainHeight": 1.22
}
grained("#container", options);

/*
background-color :rgb(204, 204, 204)
*/

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

           //preload the images
           for(i=0; i < imgPaths.length; i++) {
               imgO[i] = new Image();
               imgO[i].src = imgPaths[i][0];
           }

           function swapImg() {
               currImg = (currImg == 0)? 1 : 0;
               currDispTime = (currDispTime == imgPaths[0][1])? imgPaths[1][1] : imgPaths[0][1];
               imgObj.src = imgO[currImg].src;
               setTimeout('swapImg()',currDispTime);
           }

           window.onload=function() {
               imgObj = document.getElementById("imgSwap");
               imgObj.src = imgO[currImg].src;
               swapImg();
           }

