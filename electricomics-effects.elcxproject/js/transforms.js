/* ************
Custom page transition for electricomics that allows execution of CSS transforms on panels based on declarative annotations on the HTML elements

Dave Crane
http://improvisedcomics.co.uk
http://twitter.com/davethecrane
************ */

//quick jquery plugin to animate rotations
$.fn.animateRotate = function(angle, duration, easing, complete) {
  return this.each(function() {
    var $elem = $(this);

    $({deg: 0}).animate({deg: angle}, {
      duration: duration,
      easing: easing,
      step: function(now) {
        $elem.css({
           transform: 'rotate(' + now + 'deg)'
         });
      },
      complete: complete || $.noop
    });
  });
};

//do something twirly after turning the page
stepActions.transform = function(){
  var currentEl = globalNav.getCurrentEl();
  if (currentEl){
    var panels = $('ec-panel',currentEl)
    $.each(panels,function(i,panel){
      processTransform($(panel), currentEl);
    })
  }    
}

var processTransform = function (panel,page){
  //console.log(panel, page);
  var transformData = panel.data("transform");
  if (transformData && danceSteps[transformData.action]){
    danceSteps[transformData.action](panel, page, transformData);
  }
}

var danceSteps={
  transition:function(panel, page, data){
    var transits = ($.isArray(data.transit)) ? data.transit : [ data.transit ];
    var p = panel;
    for (var i=0;i<transits.length;i++){
      var transit = JSON.parse(JSON.stringify(transits[i]));
      var timings={
        duration: transit.duration || 1000,
        iterations: transit.iterations || 1,
        delay: transit.delay || 0
      }
      delete transit.duration;
      delete transit.iterations;
      delete transit.delay;
      if (transit.rotate){
        p = p.animateRotate(transit.rotate);
        delete transit.rotate;
      }
      if (Object.keys(transit).length>0){
        p = p.animate(transit, timings);
      }
    }
  },
  flipbook:function(panel, page, data){
      var images = $("img",panel);
      if (images.length<2){
        return;
      }
      var interval = data.interval || 2;
      var repeats = data.repeats || 1;
      var counter = 0;
      var timerId=setInterval(function(){
        var index = counter % images.length
        if (repeats>0 && counter>=(repeats*images.length)){
          clearInterval(timerId);
        }else{
          for (var i = 0; i < images.length; i++){
            var img = $(images.get(i));
            if (i != index){ 
              img.hide(); 
            }else{ 
              img.show(); 
              //console.log('flip',i,index,img.attr('src'))
            }
          }
        }
        counter++;
      },interval*1000);
  },
  turn:function(panel, page, data){
    var turns = panel.data('step-turns') || '360deg'
    this._animate([
      { transform: 'rotate(0deg)'},
      { transform: 'rotate('+turns+')'}
    ], panel)
  },
  _animate:function(transforms, panel, data){
    var dur = parseInt(panel.data('step-duration')) || 1000
    var iters = parseInt(panel.data('step-iterations')) || 1
    var delay = parseInt(panel.data('step-delay')) || 0
    panel.get(0).animate(transforms,{
      duration: dur,
      iterations: iters,
      delay: delay
    })
  }

}

