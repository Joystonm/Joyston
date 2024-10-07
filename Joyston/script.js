// Heading animation
var typed= new Typed(".text",{
    strings:["Front End Developer","UI/UX Designer"," data scientist"],
    typeSpeed:60,
    backSpeed:50,
    loop:true
})

// Progress bar animation
const filled=document.querySelector(".progress-bar")
function update(){
    filled.style.width=`${((window.scrollY)/(document.body.scrollHeight-window.innerHeight)*100)}%`
    requestAnimationFrame(update);
}
update()

// CONTACT POP UP
var submitbtn=document.getElementById("submit-btn")

submitbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    var form=document.getElementById("form")
    var popmessage=document.getElementById("pop-message")
    var Emessage=document.getElementById("email-message")

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;

    var email_error=document.getElementById("email_error")

    const emailpattern=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(name==="" || email===""|| comment===""){
        popmessage.textContent="please fill out all fields"
        return
    }

    if(!emailpattern.test(email)){
        popmessage.textContent= "Please enter a valid email address"
        return;
    }

    form.reset();
    popmessage.textContent="Submitted successfully!"

    setTimeout(()=>{
        popmessage.textContent=" "
    },3000)
} )


// Scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenelement = document.querySelectorAll('.box');

hiddenelement.forEach((element) => {
    observer.observe(element);
});

// loading
const loader=document.querySelector('.dot-spinner')
const main=document.querySelector('.main')
function loading(){
    setTimeout(()=>{
        loader.style.opacity=0
        loader.style.display='none'

        main.style.display='block'
        setTimeout((main.style.opacity=1),50)
        
    },2500)
}
loading()