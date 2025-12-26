
gsap.registerPlugin(ScrollTrigger);

gsap.to(".scroll",{
    x:"-100%",
    scrollTrigger:{
        trigger:".scroll",
        scroller:"body",
        start:"top 80%",
        end:"top -100%",
        scrub:3,
        

    }
})
var tl=gsap.timeline()
gsap.from(".pro1",{
    x:-100,
    stagger:0.5,
    scrollTrigger:{
        trigger:".pro1",
        scroller:"body",
        start:"top 80%",
        end:"top -100%",
        
        

    }

})

gsap.from(".proimg",{
    x:100,
    stagger:0.5,
     scrollTrigger:{
        trigger:".proimg",
        scroller:"body",
        start:"top 80%",
        end:"top -100%",
        
        

    }

})

gsap.from(".proper2",{
    y:50,
    opacity:0,
    stagger:0.10,
    duration:0.15,
    scrollTrigger:{
        trigger:".proper2",
        scroller:"body",
        start:"top 80%",
        end:"top -100%",
        
        

    }
})

gsap.from(".cont",{
    y:90,
    duration:1,
    scrollTrigger:{
        trigger:".cont",
        scroller:"body",
        start:"top 90%",
        end:"top -100%",
        
   
    }
})
gsap.from(".cont1",{
    y:-90,
    duration:1,
    scrollTrigger:{
        trigger:".cont1",
        scroller:"body",
        start:"top 130%",
        end:"top -100%",
   
    }
})
gsap.from(".cont2",{
    y:90,
    duration:1,
    scrollTrigger:{
        trigger:".cont2",
        scroller:"body",
        start:"top 90%",
        end:"top -100%",
     
    }
})

gsap.from(".con h2",{
    y:-500,
    duration:0.5,
    stagger:0.2,
    
})
var cursor=document.querySelector(".gsap")
document.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    
    })
})

gsap.from(".development img",{
    y:90,
    duration:1,
    stagger:0.10,
    opacity:0,
    scrollTrigger:{
        trigger:".development img",
        scroller:"body",
        start:"top 90%",
        end:"top -100%",
        
   
    }
})

gsap.from("li",{
    y:60,
    opacity:0,
    stagger:0.10
})
gsap.from("nav h2",{
    y:60,
    opacity:0,
    stagger:0.10
})
gsap.from("nav button",{
    y:60,
    opacity:0,
    stagger:0.10
})