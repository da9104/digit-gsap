
gsap.from('.nav-logo, .nav-links > a', 2, {
    top: '30',
    opacity: '0',
    ease: 'power4.inOut',
    delay: 1,
    stagger: {
        amount: 0.3,
    }
})

gsap.from('h1', 2, {
    y: '50',
    opacity: '0',
    ease: 'power4.inOut',
    delay: 1.1,
    stagger: {
        amount: 0.3,
    }
})

gsap.from('.hr', 2, {
    width: '0',
    ease: 'power4.inOut',
    delay: 2.5,
})

gsap.from('.btns', 2, {
    x: '50',
    opacity: 0,
    ease: 'power4.inOut',
    delay: 2.7,
})

gsap.from('.play-btn', 2, {
    scale: '0',
    opacity: 0,
    ease: 'power4.inOut',
    delay: 2.7,
})

gsap.from('.hero-wrapper', 2, {
    width: '100%',
    ease: 'power3.inOut',
    delay: 3,
})

gsap.from('.arrow', 2, {
    scale: '0',
    ease: 'power3.inOut',
    delay: 3,
})

gsap.from('.marquee', 2, {
    bottom: '-10rem',
    ease: 'power3.inOut',
    delay: 2.9,
})


gsap.from('.play-wrapper, .pattern, .copy', 2, {
    scaleY: 0,
    ease: 'power4.inOut',
    stagger: {
        amount: 0.3,
    },
    delay: 2.5,
})

