// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

gsap.to("#image",{
    y:-400,
    scrollTrigger:{
        scroll:".main",
        trigger:".page2",
        start:"top 90%",
        end:"top 80%",
        markers:true,
        scrub:4
    }
})

