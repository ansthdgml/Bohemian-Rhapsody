(function ani(){
  TweenMax.staggerFromTo("h1", 3, {scaleX:0, scaleY:0}, {scaleX:7, scaleY:7}, 1, ani);
  TweenMax.staggerFromTo("h1", 0.9, {alpha:1}, {alpha:0, delay:0.5}, 1);
})();