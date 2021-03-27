function splitScroll(){
          const controller = new ScrollMagic.controller

          new.ScrollMagic.Scene({
                duration:600,
                triggerElement:'.c-pic',
                troggerHook:0
          })
          .setPin('.c-pic')
          .addIndicators()
          .addTo(controller)
}

splitScroll()