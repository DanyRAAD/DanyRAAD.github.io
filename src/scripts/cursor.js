let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let ringX = mouseX;
let ringY = mouseY;

window.addEventListener("load",()=>{

    const dot=document.querySelector("#cursor-dot");
    const ring=document.querySelector("#cursor-ring");
    const trails = [...document.querySelectorAll(".trail")];

    const particles = trails.map(() => ({

    x: mouseX,
    y: mouseY

    }));

    trails.forEach((trail, index) => {

        const scale = 1 - (index / trails.length) * 0.6;

        trail.dataset.scale = scale;

        trail.style.opacity = 1 - (index / trails.length);

    });

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
        
        let targetX = ringX;
        let targetY = ringY;

        particles.forEach((particle,index)=>{

            const speed = 0.42 - index * 0.02;

            particle.x += (targetX - particle.x) * speed;
            particle.y += (targetY - particle.y) * speed;

            const scale = trails[index].dataset.scale;

            trails[index].style.transform =
            `translate3d(${particle.x}px,${particle.y}px,0)
            translate(-50%,-50%)
            scale(${scale})`;

            targetX = particle.x;
            targetY = particle.y;

    });

        requestAnimationFrame(animate);

    }

    animate();

    const interactive = document.querySelectorAll(
    "a, button"
    );

    interactive.forEach(element => {

        element.addEventListener("mouseenter", () => {

            ring.style.width = "35px";
            ring.style.height = "35px";

        });

        element.addEventListener("mouseleave", () => {

            ring.style.width = "25px";
            ring.style.height = "25px";

        });

    });

});