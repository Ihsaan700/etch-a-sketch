(()=>{var c=document.querySelector(".canvas-draw"),e=c.getContext("2d"),k=document.querySelector("a.button-clear"),a=document.querySelectorAll("div.knob");e.lineJoin="round";e.lineCap="round";e.lineWidth=25;var l=0;e.strokeStyle=`hsl(${l}, 100%, 50%)`;var n=10,s=c.width,i=c.height,t=Math.floor(Math.random()*s),o=Math.floor(Math.random()*i);e.beginPath();e.moveTo(t,o);e.lineTo(t,o);e.stroke();function d(r){switch(console.log(r.key),l+=10,e.strokeStyle=`hsl(${l}, 80%, 50%)`,e.beginPath(),e.moveTo(t,o),r.key){case"ArrowUp":o-=n;break;case"ArrowRight":t+=n;break;case"ArrowDown":o+=n;break;case"ArrowLeft":t-=n;break;default:break}e.lineTo(t,o),e.stroke()}function h(){e.clearRect(0,0,s,i),e.beginPath(),e.moveTo(t,o),e.lineTo(t,o),e.stroke()}function g(r){switch(r.key.includes("Arrow")&&(d({key:r.key}),console.log("handle key"),r.preventDefault()),r.key){case"ArrowLeft":a[0].classList.toggle("rotate-left");break;case"ArrowRight":a[0].classList.toggle("rotate-right");break;case"ArrowUp":a[1].classList.toggle("rotate-right");break;case"ArrowDown":a[1].classList.toggle("rotate-left");break;default:break}}window.addEventListener("keydown",g);k.addEventListener("click",h);})();
//# sourceMappingURL=index.js.map
