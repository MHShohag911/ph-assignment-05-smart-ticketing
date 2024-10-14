const arrOfSeats = [];
getElementValueById("button-coupon").disabled = true;
getElementValueById("btn-next").disabled = true;

function getInputValue() {
  const inputField = getElementValueById("coupon-input");
  const inputValueText = inputField.value;

  if (inputValueText === "NEW15") {
    const priceBeforeDiscount15 = stringToNumber("total-price-without-discount");

    const priceAfterDiscount15 = priceDiscount(priceBeforeDiscount15, 15);
    setElementValueById('grand-total', priceAfterDiscount15)
  } else if (inputValueText === "Couple 20") {
    const priceBeforeDiscount20 = stringToNumber(
      "total-price-without-discount"
    );

    const priceAfterDiscount20 = priceDiscount(priceBeforeDiscount20, 20)
    setElementValueById('grand-total', priceAfterDiscount20);
  }
}

function selectSeat(id) {
  const seat = getElementValueById(id);
  const seatNo = seat.innerHTML;
  //   console.log(arrOfSeats.includes(seatNo))
  if (!arrOfSeats.includes(seatNo) && arrOfSeats.length <= 3) {
    arrOfSeats.push(seatNo);
    selectSeatInfo(id);
    seat.classList.add("selected-seat");
    //   console.log(arrOfSeats)
    const totalSeatsSelected = stringToNumber("no-of-seat-selected");
    const totalSelectedSeats = totalSeatsSelected + 1;
    setElementValueById('no-of-seat-selected', totalSelectedSeats);

    const totalSeatsLeft = stringToNumber("max-seat");
    setElementValueById('max-seat', (totalSeatsLeft - 1));

    const perTicketPriceNumber = stringToNumber('per-ticket-price');

    const ticketPriceWithoutDiscount = totalPriceCalculate(perTicketPriceNumber, arrOfSeats.length);

    setElementValueById('total-price-without-discount', ticketPriceWithoutDiscount);

    setElementValueById('grand-total', ticketPriceWithoutDiscount);

    if (arrOfSeats.length >= 4) {
      getElementValueById("button-coupon").disabled = false;
    }
    if (arrOfSeats.length >= 4) {
      document.addEventListener("click", my_modal_2.showModal());
    }
  }
  getNumber()
}

function selectSeatInfo(elementId) {
  const addSelectSeat = getElementValueById("seat-info-row");
  const div = createElement('div');
  const h3 = createElement("h3");
  const p1 = createElement("p");
  const p2 = createElement("p");
  h3.innerText = elementId;
  p1.innerText = "Economy";
  p1.className = "text-center";
  p2.innerText = "550";
  p2.id = "per-ticket-price";
  p2.className = "text-right";
  div.classList = "grid grid-cols-3 text-gray-500";
  // console.log(p1.innerText);
  div.appendChild(h3);
  div.appendChild(p1);
  div.appendChild(p2);
  //   console.log(h3.innerText, p1.innerText, p2.innerText);
  addSelectSeat.appendChild(div);
}

const numberField = getElementValueById('number');
numberField.addEventListener('keyup', getNumber);
function getNumber(){
    const phoneNumber = numberField.value;
    if(phoneNumber.length==11 && arrOfSeats.length>=1){
        getElementValueById("btn-next").disabled = false;
    }else{
    }
}


// console.log(getNumber())

function customerInfo() {
  const nameText = getElementValueById("name");
  const numberText = getElementValueById('number');
  const emailText = getElementValueById("email");
  const name = nameText.value;
  const number = numberText.value;
  const email = emailText.value;
  console.log(name, number, email)
}





