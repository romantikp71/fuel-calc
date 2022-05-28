function fuelPrice() {
    let num1, num2, num3, resultLitr, resultPrice;
    num1 = document.getElementById('n1').value;
    num1 = parseFloat(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseFloat(num2);

    num3 = document.getElementById('n3').value;
    num3 = parseFloat(num3);

    resultLitr = num1 * (num2 / 100);
    resultPrice = resultLitr * num3;

    document.getElementById('outL').innerHTML = resultLitr.toFixed(2);
    document.getElementById('outP').innerHTML = resultPrice.toFixed(2);
}

function rashod() {
    let num4, num5, resultRashod;
    num4 = document.getElementById('n4').value;
    num4 = parseFloat(num4);

    num5 = document.getElementById('n5').value;
    num5 = parseFloat(num5);

    resultRashod = (num4 / num5) * 100;

    document.getElementById('outR').innerHTML = resultRashod.toFixed(2);
}

function distance() {
    let num6, num7, resultDist;
    num6 = document.getElementById('n6').value;
    num6 = parseFloat(num6);

    num7 = document.getElementById('n7').value;
    num7 = parseFloat(num7);

    resultDist = num7 / num6 * 100;

    document.getElementById('outD').innerHTML = resultDist.toFixed(2);
}




