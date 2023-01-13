import './style.css'
import {gsap} from 'gsap'
/*
 <path id="letter_l1" 
 <path id="letter_w" 
 <path id="letter_o1" 
 <path id="letter_l2"
 <path id="letter_h" 
 <path id="letter_!" 
 <path id="letter_e" 
 <path id="letter_l3"
 <path id="letter_r" 
 <path id="letter_d" 
*/
// the svg is in the wrong order by default, another (better?) solution would have been to use "fromTo" in gsap
const tl1 = new gsap.timeline({repeat: -1, repeatDelay: 2}); // for infinite repeat add -1

gsap.defaults({
  ease: "back.out",
  duration: 1,
});

// hello
tl1.to('#letter_h', {x: -207, ease: "none", fill: 'green',
});
tl1.to('#letter_e', {duration: 2, x: -230, fill: 'green',
});
tl1.to('#letter_l1', {x: 120, fill: 'green',
});
tl1.to('#letter_l2', {x: -10, fill: 'green',
});
tl1.to('#letter_o1', {transformOrigin: 'center center', x: 70, rotation: 360, fill: 'green',
});

// world!
tl1.to('#letter_exclam', {duration: 2, x: 207, fill: 'green',
}, 0);
tl1.to('#letter_w', {duration: 2, x: 210, fill: 'green',
}, ">");
tl1.to('#letter_o2', {x: -20, transformOrigin: 'center center', rotation: 360,  fill: 'green',
}, ">");
tl1.to('#letter_r', {x: -45, fill: 'green',
}, ">");
tl1.to('#letter_l3', {x: 20, fill: 'green',
}, ">");
tl1.to('#letter_d', {x: -25, fill: 'green',
}, ">");

// final touch
tl1.to('.letter', { duration: 1, scaleX: (1.25), scaleY: (1.25), stagger: 0.1, fill: 'yellow', yoyo: true,
});
tl1.to('.letter', { delay: 3, duration: 3, scaleX: (-1), rotation: '0_cw', opacity: 0, fill: 'white',
});
