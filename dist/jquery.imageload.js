/*! imageload - v1.0.0 - 2014-04-11
* https://github.com/edgardleal/imageload
* Copyright (c) 2014 Edgard Leal; Licensed MIT */
(function ($) {

  $.widget("custom.imageLoad", {
      options : {
        src : undefined,
        nocache : true, // nao usa o cache
        baseSmall : "http://198.199.90.117/imagens/80/",
        baseLarge : "http://198.199.90.117/imagens/400/",
        placeholder : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
      } ,
      _load : function(){
        var $image = $(this.element);
        var self = this;
        this.isLoaded = true;
        $image
           .attr("src", this.options.baseSmall + this.options.src)
           .load(function(){
               if(self.options.baseLarge){
                 $image.attr('src', self.options.baseLarge + self.options.src);
               }
            });
      },
      update : function(){
        var self = this;
        var $image = $(self.element);
          if(self.isLoaded){
            return;
          }else if($image.position().top > window.pageYOffset && $image.position().top < screen.height + window.pageYOffset){
             self._load();
          }
        },
      _setup : function(){
          this.element.attr('src',  this.options.placeholder);
          this.element.addClass('imageLoad');
        },
      _create : function() {
       this.options.src = $(this.element).attr("data");
       this.isLoaded = false;
       this._setup();
        if(this.options.nocache){
          this.options.src = 
             this.options.src + "?nocache=" + (Math.round(Math.random() * 999999));
        }
      
       var self = this;
       self.image = $(self.element);
        $(window).bind('scroll', function(){
            self.update();
          });
       self.update();
     
  }
});

  // Custom selector.
  $.expr[':'].imageLoad = function (elem) {
    // Is this element imageLoad?
    return $(elem).hasClass('imageLoad');
  };

}(jQuery));
