var button= document.getElementById("button")
var popup=document.getElementById("pop-up-c")
var c_items=document.getElementById("c")
var closebtn=document.getElementById("close")
var body=document.getElementById("body")
var contactbtn=document.getElementById("contact-btn")


    


function openNav() {
    popup.style.display = "block"
    document.body.classList.add("stop-scrolling");
    
}

function closeNav() {
    popup.style.display = "none"
    document.body.classList.remove("stop-scrolling");
    

}

closebtn.addEventListener('click', () => {
    closeNav();
})
document.addEventListener('click', function(e) {
    console.log(e)
    if ( e.target!=button && popup.contains(e.target)==false) {
        closeNav();
    }
})
contactbtn.addEventListener('click', () => {
    window.scrollTo(0,document.body.scrollHeight); });

    




    


    