
let header__timerextra = document.querySelector(".header__timer-extra")
// header__timerextra.innerHTML = 0
function startTimer (){
    // startTimer()
   
    if (header__timerextra.innerHTML < 50){
        header__timerextra.innerHTML++
    setTimeout(() => {
        startTimer()
    }, 100);
}
else if (header__timerextra.innerHTML < 70){
    header__timerextra.innerHTML++
setTimeout(() => {
    startTimer()
}, 300);
}
else if (header__timerextra.innerHTML < 80){
    header__timerextra.innerHTML++
setTimeout(() => {
    startTimer()
}, 400);
}
else if (header__timerextra.innerHTML < 90){
    header__timerextra.innerHTML++
setTimeout(() => {
    startTimer()
}, 500);
}
else if (header__timerextra.innerHTML < 100){
    header__timerextra.innerHTML++
setTimeout(() => {
    startTimer()
}, 1000);
}
}
startTimer()








let clas = {
    plainBurger:{
        name: "active",
        image: `<img src="./images/product2.jpg" alt="" class="imgcamburger">`
        ,
    },
    freshBurger:{
        name: "active",
        image: `<img src="images/product1.jpg" alt="" class="imgburger">`
    }
        ,
    freshCombo:{
        name: "active",
        image: ` <img src="./images/product3.jpg" alt="" class="imgcambo">`
    }   
}




let main__producttitle =[...document.querySelectorAll(".main__product-title")]

for (const key in main__producttitle) {
    main__producttitle[key].addEventListener("click" , function() {
        main__producttitle[key].classList.remove("main__product-title")
        // console.log(view__close);
    })
}


let img = [...document.querySelectorAll(".main__product-img")]
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("click" ,function() {
        // console.log(this.closest(".main__product").getAttribute("id"));
        praperimg(this)    
    })
        
   
}

function praperimg (imgs) {
    // console.log(item);
    let parents = imgs.closest(".main__product")
    let parentsid = parents.getAttribute("id")
    let imgbtn = parents.getAttribute(".main__product-img")
    let view = document.querySelector(".view")
    let BurgerImg = document.querySelector(".BurgerImg")
    
    

    let activeclass = clas[parentsid].name
    let imgclass = clas[parentsid].image
    view.classList.add(`${activeclass}`)
    BurgerImg.innerHTML = imgclass


    let a = parents.querySelector(".b")
    console.log(a);
    let view__close = document.querySelector(".view__close")
    // console.log(view__close);
    view__close.addEventListener("click" , function() {
        view.classList.remove("active")
        a.classList.add("main__product-title")
        // console.log(view__close);
    })
}



let food = {
    plainBurger:{
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kcall: 500,
        get calckcall() {
            return this.kcall * this.amount
        },
        get calcSum() {
            return this.price * this.amount
        }
    },
    freshBurger:{
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kcall: 650,
        get calckcall() {
            return this.kcall * this.amount
        },
        get calcSum() {
            return this.price * this.amount
        }
    },
    freshCombo:{
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kcall: 700,
        get calckcall() {
            return this.kcall * this.amount
        },
        get calcSum() {
            return this.price * this.amount
        }
    }   
}

    let btn = [...document.querySelectorAll(".main__product-btn")]
    // console.log(btn);
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click" ,function() {
            // console.log(this.closest(".main__product").getAttribute("id"));
            praper(this)    
        })
            
       
    }

    function praper (item) {
        // console.log(item);
        let parents = item.closest(".main__product")
        let parentsid = parents.getAttribute("id")
        let num = parents.querySelector(".main__product-num")
        let price = parents.querySelector(".main__product-price")
        let kcall = parents.querySelector(".main__product-kcall")
        let sym = item.getAttribute("data-symbol")
        // console.log(sym);

        let count = food[parentsid].amount
        // console.log(count);

        if (sym == "+") {
            count++
        }else if (sym == '-' && 0 < count) {
            count--
        }
        food[parentsid].amount = count
        num.innerHTML = count 
        price.innerHTML = food[parentsid].calcSum + " sum"
        kcall.innerHTML = food[parentsid].calckcall + " calories"
    }

    
  


    let addCart = document.querySelector(".addCart")
    let receipt = document.querySelector(".receipt")

    let receipt__window = receipt.querySelector(".receipt__window")
    let receipt__windowbtn = receipt.querySelector(".receipt__window-btn")
    let receipt__windowout = receipt.querySelector(".receipt__window-out")

    addCart.addEventListener("click" ,function() {
        receipt.style.display = "block"
        setTimeout(() => {
            receipt.style.opacity = "1"
            receipt__window.style.top = "25%"  
        }, 100);

        let menu = "Your Card: \n \n\n" 
        let totalPrise = 0
        let totalKcall = 0

        for (const key in food) {

            if (food[key].amount) {
                menu = menu + `${food[key].name} ${food[key].amount} x ${food[key].price} sum = ${food[key].calcSum} \n\n\n`
                totalPrise = totalPrise + food[key].calcSum
                totalKcall = totalKcall + food[key].calckcall
            }
           
        }
        receipt__windowout.innerHTML = `${menu} \n Total Prise: ${totalPrise} sum \n\n Total Kcall: ${totalKcall} calories`
       
    })


    receipt__windowbtn.addEventListener("click", function (e) {
     location.reload()


      if (e.currentTarget) { 
        receipt.style.opacity = "0"
        receipt__window.style.top = "-100%" 
        setTimeout(() => {
            
            receipt.style.display = "none"
        }, 100);}
    })