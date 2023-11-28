var tl=gsap.timeline()
tl.from("#nav1 h2,#nav2 a, #nav3 h3",{
    y:-100,
    delay:0.4,
    duration:0.5,
    stagger:0.2,
})
tl.from("#left-content h1",{
    x:-300,
    opacity:0,
    
    duration:0.7,
    stagger:0.5,

})
tl.from("#right-content img",{
    scale:0,
    duration:0.8,
})
tl.from("#right-content h4",{
    opacity:0,
    duration:0.5,
})
tl.from("#left-content h3",{
    y:100,
    opacity:0,
    duration:0.5,
    stagger:0.2,

})

tl.from("#page2 #content-left h4",{
        scale:0,
        rotate:360,
        duartion:1,
        delay:1,
    //  scrollTrigger:{
    //     trigger:"#page2 #content-left h4",
    //     scroller:"body",
    //     markers:true,
    //     start:"top 70%",
    //     end:"top 30%",
        
        
        

    // }
})
tl.from("#content-right .poster",{
    opacity:0,
    y:-150,
    delay:0.2,
    duration:0.5,
    stagger:0.3,
})
