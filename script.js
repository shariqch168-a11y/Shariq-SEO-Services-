// ===============================
// SHARIQ DIGITAL SEO
// Premium JavaScript
// ===============================

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({

behavior:'smooth'

});

});

});

// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section,.service-card,.why-card,.testimonial-card,.stat-box,.contact-card").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition="all .8s ease";

observer.observe(el);

});

// Animated Counter

const counters=document.querySelectorAll(".stat-box h2");

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

if(isNaN(target)) return;

let count=0;

const speed=target/80;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});

// Header Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 8px 30px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});

// Console

console.log("Shariq Digital SEO Website Loaded Successfully");
