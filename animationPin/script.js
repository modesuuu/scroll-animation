gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) =>{
  lenis.raf(time * 1000)
});

gsap.ticker.lagSmoothing(0);

ScrollTrigger.create({
  trigger: ".ws",
  start: "top bottom",
  end: "bottom bottom",
  scrub: 1,
  onUpdate: (self)=>{
    const galleryWrapper = document.querySelector(".gallery-wrapper");
    const sideCols = document.querySelectorAll(".col:not(.main)");
    const mainImg = document.querySelector(".img.main img");

    const scale = 1 + self.progress * 2.65;
    const yTranslate = self.progress * 300;
    const mainImgScale = 2 - self.progress * 0.85;
    
    galleryWrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;

    sideCols.forEach((col) => {
      col.style.transform = `translateY(${yTranslate}px)`;
    })

    mainImg.style.transform = `scale(${mainImgScale})`;
  },
})