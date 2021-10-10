import Charts from "./chart.js";

let trafficChart = document.querySelector('.traffic-chart');

let nou = new Charts(trafficChart);

let loginContainer = document.querySelector('.login-main');

let loginButon = document.querySelector('.login-buton');
let signButon = document.querySelector(".sign-up-buton");
let signContainer = document.querySelector('.sign-main');

let flag = 0;
loginButon.addEventListener('click',()=>{
    if(flag ==0 && signContainer.style.right != '10%'){
        loginContainer.style.left = '10%';
        flag = 1;
    }else{
        loginContainer.style.left = '100%';
        flag = 0;
    }
});

signButon.addEventListener("click", ()=>{
    if(flag== 0 && loginContainer.style.left !='10%'){
        signContainer.style.right = '10%';
        flag = 1;
    }else{
        signContainer.style.right = '100%';
        flag = 0;
    }
})
