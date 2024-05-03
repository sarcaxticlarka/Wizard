

function page1Anim(){
    var tl = gsap.timeline()

tl.from(".nav h1,  .nav .part2 h2, .nav .part2 button",{
    y: -40,
    delay:0.5,
    duration: 0.5,
    opacity:0,
    stagger: 0.15
})

tl.from(".center .center-p1 h1",{
    x: -200,
    opacity: 0,
    duration: 0.5
})
tl.from(".center .center-p1 p",{
    x: -100,
    opacity: 0,
    duration: 0.4
})
tl.from(".center .center-p1 .btn",{
   
    opacity: 0,
    duration: 0.4
})

tl.from(".center-p2 img",{
    opacity: 0,
     duration: 0.5,
     x: 200
}, "-=0.3")

tl.from(".page1bottom img",{
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6
})
}
 
 
function page2Anim(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: ".page2",
            scroller: ".main",
            start: "top 50%",
            end: "top -30%",
            scrub: 2, 
    
        }
    })
    
    tl2.from(".services",{
        y: 40,
        opacity: 0,
        duration: 0.5
    })
    tl2.from("#el1",{
        x: -300,
        opacity: 0,
        duration: 0.8
    },"a")
    tl2.from("#el2",{
        x: 300,
        opacity: 0,
        duration: 0.8
    },"a")
    
    tl2.from("#el3",{
        x: -300,
        opacity: 0,
        duration: 0.8
    },"b")
    tl2.from("#el4",{
        x: 300,
        opacity: 0,
        duration: 0.8
    },"b")
}

function page3Anim(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: ".page3",
            scroller: ".main",
            start: "top 30%",
            end: "top 0%",
            scrub: 2, 
    
        }
    })
    tl3.from(".page3 .left",{
        y: 30,
        opacity: 0,
        duration: 0.5
    })
    
    tl3.from(".page3 .right",{
        x: 30,
        opacity: 0,
        duration: 0.3
    }, "-=1")
}

function page4Anim(){
    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger: ".page4",
            scroller: ".main",
            start: "top 50%",
            end: "top 10%",
            scrub: 2, 
    
        }
    })
    tl4.from(".case",{
        y: -30,
        opacity: 0,
        duration: 0.2
    })
    tl4.from(".fp1",{
        y: -30,
        opacity: 0,
        duration: 0.2
    })
    
}
 

page1Anim()
page2Anim()
page3Anim()
page4Anim()







 


