import gsap from 'gsap'
export default {
    fade: {
      name: 'fade',
      mode: 'out-in',

    beforeEnter(el) {
        console.log('beofre enter', el);
        const headers = el.getElementsByTagName('h1');
        gsap.from(el, {
            autoAlpha: 0,
            color: 'blue',
        })
        gsap.to(el, {
            autoAlpha: 1,
            color: 'green',
            duration: 2
        })
       
    },
    enter(el, done) {
        console.log('enter');
        gsap.to(el, {
            marginLeft: '40px',
            duration: 2
        })
    },
    afterEnter(el) {
        console.log('after Enter');
        
    },
    enterCancelled(el) {
        console.log('enter canceled', el);

    },
    leave(el,done) {
        console.log(el, done);
        gsap.to(el, {
            marginLeft: '80px',
            duration: 5,
        })

    },
    leaveCancelled(el) {
        console.log('leave cancelled');
    }
    }
  }