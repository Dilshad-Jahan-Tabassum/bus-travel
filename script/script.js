const seats =  document.getElementsByClassName("bus-seat");

for (const seat of seats) {
    //console.log(seat.innerHTML)
    seat.addEventListener("click", function(event){ 
         //only 4 seat selection 
         const fourSeat =  getConvertedValue("seat-count");
         if(fourSeat + 1 > 4){
             alert("One person can select only four seats");
             return;
         }

        //seat color
        event.target.style.backgroundColor = "#1DD100";
        event.target.style.color = "white";
        event.target.setAttribute("disabled", false);
       
        
        //seat booking entry
        const seatName = event.target.innerText;
        const seatClass = "economy";
        const seatPrice = 550;

        const seatBookingList = document.getElementById("seat-booking-list")

        //seat count increase
        const seatCount = getConvertedValue("seat-count");
        document.getElementById("seat-count").innerText = seatCount + 1;
        
        //seat count decrease
        const seatDecreaseCount = getConvertedValue("seat-decrease");
        document.getElementById("seat-decrease").innerText = seatDecreaseCount - 1;


        const div = document.createElement("div")
        div.classList.add("seat-selection")

        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")

        p1.innerText = seatName
        p2.innerText = seatClass
        p3.innerText = seatPrice

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        seatBookingList.appendChild(div)
        // console.log(p1)
        // console.log(p2)
        // console.log(p3)

        updateCost(seatPrice)
        updateGrandTotalCost()

        
    })
}

        


//scroll to the p.h. section
function seatPlanning(){
    const routeDeparture = document.getElementById('route-departure')
    routeDeparture.scrollIntoView({behavior: 'smooth'})
    //console.log('click')
}

//next button update


    const nextButton = document.getElementById("next_button")

function updateNextButton(){
    const p_name = document.getElementById("passenger_name").value
    const p_number = document.getElementById("phone_number").value
    const p_email = document.getElementById("email_input").value

    if(p_name === "" && p_email === "" && p_number === ""){
        nextButton.disabled = true;
        
    }
    else{
        nextButton.disabled = false
    }   
}
document.getElementById("passenger_name").addEventListener('input', updateNextButton);
document.getElementById("phone_number").addEventListener('input', updateNextButton);
document.getElementById("email_input").addEventListener('input', updateNextButton);

updateNextButton();


//update grand total cost
function updateGrandTotalCost(status){

    const totalCost = getConvertedValue("total-cost")
    if(status == undefined){
        document.getElementById("grand-total-cost").innerText = totalCost;
    }
    else{
        const applyCoupon = document.getElementById("apply-coupon").value
        
        if(applyCoupon == "NEW15"){
            const newDiscountPrice = totalCost * .15;
            document.getElementById("grand-total-cost").innerText = totalCost - newDiscountPrice;

            //after apply coupon hidden portion
            const couponCodeApply = document.getElementById("coupon-code-apply")
            const ApplyButton = document.getElementById("apply-button")
            couponCodeApply.classList.add("hidden")
        }
        else if(applyCoupon == "Couple 20"){
            const coupleDiscountPrice = totalCost * .2;
            document.getElementById("grand-total-cost").innerText = totalCost - coupleDiscountPrice;

            //after apply coupon hidden portion
            const couponCodeApply = document.getElementById("coupon-code-apply")
            const ApplyButton = document.getElementById("apply-button")
            couponCodeApply.classList.add("hidden")
        }
        else{
            alert("Please give valid coupon code")
        }
    }
    
}

//update total cost
function updateCost(seatPrice){
    const totalCostPrice =  document.getElementById("total-cost")
    const totalCost = getConvertedValue("total-cost")
    const totalAmount = totalCost + seatPrice
    totalCostPrice.innerText = totalAmount;
}

//convert value function
function getConvertedValue(elemntId){
    const price = document.getElementById(elemntId).innerText;
    const convertPrice = parseInt(price)
    return convertPrice;
}


