//Function to give formatted Card Enter
function cardEntry() {
    document.getElementById("number").addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    });
}

//Function to give formatted Expiry Date Entry
function ExpDateEntry() {
    document.getElementById('expdate').addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^\dA-Z]/, '').replace(/(.{2})/, '$1/').trim();
    });
}


//Function to give encrypted CVV Entry
function CVVEntry() {
    document.getElementById('cvv').addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[\da-zA-z]/g, '*').trim();
    });
}

let cvv_value = '';

function GetData(a) {
    val1 = event.keyCode;
    let val2 = String.fromCharCode(val1);
    cvv_value = cvv_value.concat(val2)
}


//Function to Validate Name Entry
function checkName(a) {
    let regex = /^[A-Z]/;
    return regex.test(a);
}

cardEntry();
ExpDateEntry();
CVVEntry();

let cardnums = [1234, 2345, 3456, 4567];
let mes1 = '';
let k = '';
let card = '';

function CheckCardType() {
    let a = document.getElementById("number").value;
    if (a.length == 4) {
        mes1 = a;
        for (let i = 0; i < 4; i++) {
            if (mes1 == cardnums[i]) {
                k = i;
                document.getElementById("expdate").disabled = false;
                document.getElementById("cvv").disabled = false;
                document.getElementById("name").disabled = false;
                if (k == 0) {
                    document.getElementById("img").innerHTML = "<img src='./images/mastercard.png'>";
                    card = "Master Card";
                } else if (k == 1) {
                    document.getElementById("img").innerHTML = "<img src='./images/visa image.png'>"
                    card = "Visa Card";
                } else if (k == 2) {
                    document.getElementById("img").innerHTML = "<img src='./images/rupay card.png'>"
                    card = "Rupay Card";
                } else if (k == 3) {
                    document.getElementById("img").innerHTML = "<img src='./images/paypal card.png'>"
                    card = "PayPal Card";
                }
                break;

            } else if (mes1 != cardnums[i]) {
                document.getElementById("expdate").disabled = true;
                document.getElementById("cvv").disabled = true;
                document.getElementById("name").disabled = true;
                document.getElementById("img").innerHTML = "<li class=fa>&#xf06a</li>";
            }
        }
    }
}

function Confirmation() {
    one = document.getElementById("number").value;
    two = document.getElementById("expdate").value;
    four = document.getElementById("name").value;

    document.getElementById("cardnumber").innerHTML = one;
    document.getElementById("card_company").innerHTML = card;
    document.getElementById("expiry").innerHTML = two;
    document.getElementById("cvv_number").innerHTML = cvv_value;
    document.getElementById("cardname").innerHTML = four;
}