const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const closeForm = $('.form-layout-close')
const layout = $('.layout')
const formLayout = $('.form-layout')
const inputs = $$('.inputuser input')
const formLayoutEnter = $('.form-layout-enter')
const formLayoutMess = $('.form-layout-mess')
const loadContainer = $('.load-container')
const app = $('.app')

// Click close Form Đăng Nhập
closeForm.onclick = function(){
    formLayout.style.display = 'none';
}

// Type Something thì nút đăng nhập hiện lên
function checkType(){
    if(inputs[0].value != "" && inputs[1].value != "") formLayoutEnter.disabled = false
    else formLayoutEnter.disabled = true
}
inputs[0].addEventListener('keyup',checkType)
inputs[1].addEventListener('keyup',checkType)

const footer = $('.footer')
// Đăng nhập
formLayoutEnter.onclick = function(){
    if(inputs[0].value === "phuc" && inputs[1].value === "123"){
        loadContainer.style.display = 'flex'
        setTimeout(function(){
            loadContainer.style.display = 'none'
            layout.style.display = 'none'
            headerContainer.style.display = 'block'
            app.style.display = 'block'
            footer.style.display = 'block'
        },3000)
    }
    else formLayoutMess.innerHTML = "UserName or Password not correct!";
}

const day = $('.days')
const hour = $('.hours')
const minute = $('.minutes')
const second = $('.seconds')

function countDown() {
    const timeNow = new Date().getTime()
    const timeEvent = new Date(2021,11,2).getTime()
    const totalTime = timeEvent - timeNow

    if(totalTime<1){
        StopCountDown();
        return
    }

    const seconds = 1000 
    const minutes = seconds * 60 
    const hours = minutes * 60 
    const days = hours * 24
    
    const textDays = Math.floor(totalTime / days)
    const textHours = Math.floor((totalTime % days) / hours)
    const textMinutes = Math.floor((totalTime % hours) / minutes)
    const textSeconds = Math.floor((totalTime % minutes) / seconds)

    day.innerHTML = textDays 
    hour.innerHTML = textHours 
    minute.innerHTML = textMinutes 
    second.innerText = textSeconds 

}
const x = setInterval(function(){
    countDown();
},1000)
function StopCountDown() {
    clearInterval(x);
}

const titleList = $$('.title-list');
for(let i = 0;i<titleList.length;i++){
    titleList[i].onclick = function(){
        if(titleList[i].style.height != '95%'){
            titleList[i].style.height = '95%';
        }
        else{
            titleList[i].style.height = '30px';
        }
    }
}

const block3TitleContainer = $('.block3-title-container')
const block3Title = $('.block3-title')
const block3Icon = $('.block3-icon')
block3TitleContainer.onclick = function(){
    if(block3TitleContainer.style.width != '90%'){
        block3TitleContainer.style.width = '90%';
        block3Icon.classList.remove('fa-chevron-right');
        block3Icon.classList.add('fa-chevron-left');
        setTimeout(function(){
            block3Title.style.opacity = '1'
        },400)
    }
    else{
        block3TitleContainer.style.width = '30px';
        block3Title.style.opacity = '0'
        block3Icon.classList.remove('fa-chevron-left');
        block3Icon.classList.add('fa-chevron-right');
    }
}
const headerContainer = $('.header-container');
const headerLogoutText = $('.header-logout-text');
headerLogoutText.onclick = function(){
    loadContainer.style.display = 'flex'
    setTimeout(function(){
        loadContainer.style.display = 'none'
        layout.style.display = 'block'
        headerContainer.style.display = 'none'
        app.style.display = 'none'
        footer.style.display = 'none'
    },3000)
}

const checkBox = $('.checkbox');
// img header
const headerBodyImgContainer = $('.header-body-img-container')
const headerBodyImg = $('.header-body-img')
// Block cái ti vi
const blockLeft = $('.block-left')
const blSp = $('.bl-sp')
//
checkBox.onclick = function(){
    if(checkBox.checked == true)
    {
        headerBodyImgContainer.style.opacity = '0'
        setTimeout(function(){
            headerBodyImg.src = 'bd-bg.jpg'
            headerBodyImgContainer.style.opacity = '1'
        },500)
        blockLeft.style.opacity = '0'
        setTimeout(function(){
            blSp.src = 'bl-sp2.png'
            blockLeft.style.opacity = '1'
        },500)
    }
    else
    {
        headerBodyImgContainer.style.opacity = '0'
        setTimeout(function(){
            headerBodyImg.src = 'header-img.jpg'
            headerBodyImgContainer.style.opacity = '1'
        },500)
        blockLeft.style.opacity = '0'
        setTimeout(function(){
            blSp.src = 'bl-sp1.png'
            blockLeft.style.opacity = '1'
        },500)
    }
}


const block6Btn = $('.block-6-btn')
const block6Video = $('.block6-video')
const block6Text1 = $('.block6-text1')
const block6Text2 = $('.block6-text2')
const block6Text3 = $('.block6-text3')
const block6Text4 = $('.block6-text4')

block6Btn.onclick = function(){
    setTimeout(function(){
        block6Btn.style.display = 'flex';
        block6Btn.style.opacity = '1';
        block6Video.muted = true;
    },10000)
    block6Btn.style.opacity = '0';
    setTimeout(function(){
        block6Btn.style.display = 'none';
    },1000)
    block6Video.currentTime = 0;
    block6Video.muted = false;

    function textAppear(){
        block6Text1.style.opacity = '1';
        setTimeout(()=>{
            block6Text1.style.opacity = '0';
            block6Text2.style.opacity = '1';
            setTimeout(()=>{
                block6Text2.style.opacity = '0';
                block6Text3.style.opacity = '1';
                setTimeout(()=>{
                    block6Text3.style.opacity = '0';
                    block6Text4.style.opacity = '1';
                    setTimeout(()=>{
                        block6Text4.style.opacity = '0';
                    },2500)
                },2500)
            },2500)
        },2500)
    }

    textAppear();
}

const flashMessContainer = $('.flash-mess-container')
const flashMessCloseContainer = $('.flash-mess-close-container')

flashMessCloseContainer.onclick = function(){
    flashMessContainer.style.display = 'none';
}

const btnNotupdates = $$('.btn-notupdate')
for(let i = 0; i< btnNotupdates.length; i++){
    btnNotupdates[i].onclick = function(){
        flashMessContainer.style.display = 'flex';
        setTimeout(function(){
            flashMessContainer.style.opacity = '0'
        },2000)
        setTimeout(function(){
            flashMessContainer.style.display = 'none';
        },3000)
        setTimeout(function(){
            flashMessContainer.style.opacity = '1'
        },3001)
    }
}


const listNavMobi = $('.list-nav-mobi')
const headerNavList = $('.header-nav-list')
const clostIcon = $('.close-icon')
listNavMobi.onclick = function(){
    headerNavList.style.right = '-54px'
}
clostIcon.onclick = function(){
    headerNavList.style.right = '-395px'
}