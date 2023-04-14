function BMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var bmi = weight / ((height / 100) ** 2);
    var bmio = (bmi.toFixed(2));
    var kategori = ""
    if (bmio <= 18.5) {
        kategori = "Normal"
    } else if (bmio <= 24.9) {
        kategori = "Normal Weight"
    } else if (bmio <= 29.9) {
        kategori = "Overweight"
    } else if (bmio >= 30) {
        kategori = "Obesity"
    }


    document.getElementById("hasil").innerHTML = "Your BMI is " + bmio + " which means You are " + kategori;

}