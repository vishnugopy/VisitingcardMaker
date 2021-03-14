let namevalue = document.querySelector("#name");
let job = document.querySelector("#job");
let mail = document.querySelector("#email");
let tel = document.querySelector("#phonenumber");
let logo = document.querySelector("#logo");
let generatebutton = document.querySelector("#generatebutton");


let namepreview = document.querySelector("#namepreview");
let jobpreview = document.querySelector("#jobpreview");
let telpreview = document.querySelector("#telpreview");
let mailpreview = document.querySelector("#mailpreview");
let logopreview = document.querySelector("#logopreview");


generatebutton.addEventListener("click" , () =>{
    namepreview.innerHTML = namevalue.value ;
    jobpreview.innerHTML = job.value ;
    mailpreview.innerHTML = mail.value ;
    telpreview.innerHTML = tel.value ;
    logopreview.src = window.URL.createObjectURL(logo.files[0]);
    console.log(window.URL.createObjectURL(logo.files[0]));
})



