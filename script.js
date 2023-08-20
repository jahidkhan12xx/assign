
// //////////////My Variables////////////////////////////////

const couponText = document.querySelector("#couponEntry");
const applyBtn = document.querySelector("#applyBtn");
const makePurchase =document.querySelector("#makePurchaseBtn");
const totalPrice = document.querySelector("#totalPrice");
const discountPrice = document.querySelector("#discountPrice");
const grandTotal = document.querySelector("#grandTotal");


///////////////Listing item ////////////////////////////////

///My function//



let total = 0 ;
function handleClick(event){
    const itemName = event.childNodes[3].childNodes[3].innerText;
    const itemPriceString = event.childNodes[3].childNodes[5].childNodes[0].innerText;
    const itemPrice = parseFloat(itemPriceString);
    const listItem = document.querySelector("#list");

    const list = document.createElement("li");
    const count = listItem.childElementCount;
    list.innerHTML=` ${count+1}. ${itemName}`;

    listItem.appendChild(list);


    total=total+itemPrice;
    totalPrice.innerText=total.toFixed(2);

    grandTotal.innerText=total.toFixed(2);
    if(total>0){
        makePurchase.removeAttribute("disabled");
    }
    if(total>=200){
        applyBtn.removeAttribute("disabled");
    }

}

///////DISCOUNT /////////////////////////////////

applyBtn.addEventListener("click",()=>{
    const couponCheck =couponText.value;
    if(couponCheck=="SELL200"){
        const discount = total*0.2;
        discountPrice.innerText = discount.toFixed(2);
        const afterDiscount= total-discount;
        grandTotal.innerText=afterDiscount.toFixed(2);
        
    }
    else{
        alert("Invalid Coupon");
        grandTotal.innerText=total;
    }
})

document.querySelector("#go").addEventListener("click",()=>{
    window.location.href="index.html";
})