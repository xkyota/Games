document.getElementById("findMaxBtn").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    if (isNaN(num1)  isNaN(num2)  isNaN(num3)) {
        document.getElementById("result").innerText = "Будь ласка, введіть всі числа!";
        return;
    }

    let maxNumber = Math.max(num1, num2, num3);
    document.getElementById("result").innerText = Найбільше число: ${maxNumber};
});