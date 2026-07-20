let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let ringX = mouseX;
let ringY = mouseY;

window.addEventListener("load",()=>{

    const dot=document.querySelector("#cursor-dot");
    const ring=document.querySelector("#cursor-ring");

    if(!dot || !ring) return;

    document.addEventListener("mousemove",(e)=>{

        mouseX=e.clientX;
        mouseY=e.clientY;

    });

    function animate(){

        ringX += (mouseX-ringX)*0.15;
        ringY += (mouseY-ringY)*0.15;

        dot.style.transform=
            `translate3d(${mouseX}px,${mouseY}px,0) translate(-50%,-50%)`;

        ring.style.transform=
            `translate3d(${ringX}px,${ringY}px,0) translate(-50%,-50%)`;

        requestAnimationFrame(animate);

    }

    animate();

});