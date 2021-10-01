

const tl = gsap.timeline({ defaults: { ease: 'power1.in' } });
gsap.registerPlugin(ScrollTrigger);






tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1.6 });

tl.fromTo('.title', { opacity: 0 }, { opacity: 1, duration: 1.6 }, "-=1.4");
// tl.fromTo('.title2', { opacity: 0 }, { opacity: 1, duration: 1.6 }, "-=1.4");
// tl.fromTo('.title3', { opacity: 0 }, { opacity: 1, duration: 1.6 }, "-=1.4");
// tl.fromTo('.luis-bio', { opacity: 0 }, { opacity: 1, duration: 1.6 }, "-=1.4");
tl.fromTo('.scroll', { opacity: 0 }, { opacity: 1, duration: 1.6 }, "-=1.4");
// tl.fromTo('.trip-info', { opacity: 0 }, { opacity: 1, duration: 1.6 }, "-=1.4");


//gsap.from(".boxes", { duration: 5, x: 300, ease: "bounce", opacity: 0, scale: 0.5 });
gsap.from(".logo", { duration: 4, x: 300, opacity: 0, scale: 0.5 });







gsap.from(".transition1", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 0,
    scrollTrigger: {
        trigger: ".transition1",
        start: "top center",
        end: "top 100px",
       
        toggleActions: "restart none reverse none",
    }
})




gsap.from(".transition2", {
    x: -100,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: -0,
    scrollTrigger: {
        trigger: ".transition2",
        start: "top center",
        toggleActions: "restart none reverse none",
       
        end: "top 100px",
    }
})

gsap.from(".transition3", {
    x: 200,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 0,
    scrollTrigger: {
        trigger: ".transition3",
        start: "top center",
        toggleActions: "restart none reverse none",
    
        end: "top 100px",
    }
});

gsap.from(".transition4", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 0,
    scrollTrigger: {
        trigger: ".transition4",
        start: "top center",
        toggleActions: "restart none reverse none",
        end: "top 100px",
    }
});

gsap.from(".transition5", {
    x: 0,
    y: 100,
    opacity: 0,
    stagger: 0.8,
    rotation: 0,
    scrollTrigger: {
        trigger: ".transition5",
        start: "top center",
        toggleActions: "restart none reverse none",
       
        end: "top 100px",
    }
});




gsap.from(".transition6", {
  x: 0,
  y: 100,
  opacity: 0,
  stagger: 0.8,
  rotation: 0,
  scrollTrigger: {
      trigger: ".transition6",
      start: "top center",
      toggleActions: "restart none reverse none",
      end: "top 100px",
  }
});

gsap.from(".transition7", {
  x: 0,
  y: 100,
  opacity: 0,
  stagger: 0.8,
  rotation: 0,
  scrollTrigger: {
      trigger: ".transition7",
      start: "top center",
      toggleActions: "restart none reverse none",
      end: "top 100px",
  }
});


gsap.from(".transition-pic", {
  x: 200,
  y: 100,
  opacity: 0,
  stagger: 0.8,
  rotation: 0,
  scrollTrigger: {
      trigger: ".transition-pic",
      start: "top center",
      toggleActions: "restart none reverse none",
      end: "top 100px",
  }
});



gsap.from(".transition8", {
  x: -100,
  y: 100,
  opacity: 0,
  stagger: 0.8,
  rotation: 0,
  scrollTrigger: {
      trigger: ".transition8",
      start: "top center",
      toggleActions: "restart none reverse none",
      end: "top 100px",
  }
});

// gsap.from(".form-transition", {
//   x: -100,
//   y: 100,
//   opacity: 0,
//   stagger: 0.8,
//   rotation: 0,
//   scrollTrigger: {
//       trigger: ".form-transition",
//       start: "top center",
//       toggleActions: "restart none reverse none",
//       end: "top 100px",
//   }
// });



// gsap.from(".transition8", {
//   x: 0,
//   y: 100,
//   opacity: 0,
//   stagger: 0.8,
//   rotation: 0,
//   scrollTrigger: {
//       trigger: ".transition8",
//       start: "top center",
//       end: "top 100px",
//   }
// });

// gsap.from(".transition9", {
//     x: -400,
//     y: 100,
//     opacity: 0,
//     stagger: 0.8,
//     rotation: 0,
//     scrollTrigger: {
//         trigger: ".transition5",
//         start: "top center",
       
//         end: "top 100px",
//     }
// });

gsap.from(".transitionticker", {
  x: 0,
  y: 100,
  opacity: 0,
  stagger: 0.8,
  rotation: 0,
  scrollTrigger: {
      trigger: ".transitionticker",
      start: "top center",
    
      end: "top 100px",
  }
});






const dur = 30;

document.querySelectorAll('.js-ticker .wrapper').forEach(ticker => {
  // Get the initial size of the ticker
  const totalDistance = $(ticker).width();
  
  // Position the ticker
  gsap.set(ticker, {yPercent: -50});
  
  // Clone the first item and add it to the end
  $(ticker).append($(ticker.querySelector("li")).clone());
  
  // Get all of the items
  const items = ticker.querySelectorAll("li");
  
  const anim = gsap.to(ticker, { 
    duration: dur,
    x: -totalDistance,
    ease: "none",
    repeat: -1
  });

  let startPos;
  const wrap = gsap.utils.wrap(0, 1);
  const draggable = new Draggable(ticker, {
    type: "x",
    trigger: ticker,
    throwProps: true,
    onPressInit: function() {
      anim.pause();
      startPos = this.x;
    },
    onDrag: function() {
      let prog = wrap(-this.x / totalDistance);
      anim.progress(prog);
    },
    onThrowUpdate: function() {
      let prog = wrap(-this.x / totalDistance);
      anim.progress(prog);
    },
    onThrowComplete: function() {
      anim.play();
      gsap.fromTo(anim, {timeScale:0}, {duration: 1, timeScale:1, ease:"none"});
    },

  });
});










// tests
