;require(['anole', 'zepto', 'TweenLite', 'CSSPlugin', 'TimelineLite'], function (anole){
  var pada_count = 5;
  var padapada = function(){
    $("#boat-scene2")[0].classList.toggle("rot-10");
    $("#marco-scene2")[0].classList.toggle("rot-10");
    pada_count--;
    if (pada_count>0)
      setTimeout(padapada,100);
    else{
      setTimeout(function(){
        $("#marco-scene2")[0].classList.toggle("anime");
        $("#marco-scene2")[0].classList.toggle("rot-10");
        $("#marco-scene2")[0].classList.toggle("z-top");
      },400);
    }
  }
  anole.addScene({
    onInit: function (){
      this.scene = anole.getOrCreate("#part1",'<div id = "part1" class = "scene"></div>',{},anole.canvas);
      this.places = anole.getOrCreate('.places','<div class="places"></div>',{},this.scene);
      this.marco = anole.getOrCreate("#marco-scene2","<div id = 'marco-scene2' class = 'marco center'></div>",{top:"-12%"},this.scene);
      this.boat = anole.getOrCreate("#boat-scene2","<div id = 'boat-scene2' class = 'boat center'></div>",{top:"-10%"},this.scene);
      $("#boat-scene2")[0].className = "boat center";
      $("#marco-scene2")[0].className = "marco center";
      this.scene[0].className = "scene";
    },
    onStart: function (finish){
      this.tl1 = new TimelineLite();
      pada_count = 5;
      TweenLite.to(this.boat,0.5,{top:"45%",ease:Linear.easeNone});
      this.tl1.add(TweenLite.to(this.marco,0.5,{top:"42%", ease:Linear.easeNone, onComplete:padapada}));
      this.tl1.add(TweenLite.to(this.marco,1,{top:"55%", ease:Linear.easeNone, delay:0.8, onComplete:finish}));
    },
    onEnd: function (){
      this.tl1.progress(1);
    }
  })
});