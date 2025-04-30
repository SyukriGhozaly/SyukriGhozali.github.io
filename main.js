function htiung() {
    const hari = parseFloat(document.getElementById("hari").value);
    const mobil = (document.getElementById("mobil").value);
    let hasil ;

    if (isNaN(hari)){
        alert ("masukkan Jumlah Hari");
    }

    switch (mobil) {
        case "Avanza":
            hasil = 300000 * hari;
            break ;
        case "Xenia":
            hasil = 350000 * hari;
            break ;
        case "Lamborghini":
            hasil = 15000000 * hari;
            break ;
        case "Agya":
            hasil = 250000 * hari;
            break ;
        case "Reborn":
            hasil = 600000 * hari;
            break ;
        case "Alphard":
            hasil = 1000000 * hari;
            break ;
        case "Inova":
             hasil = 400000 * hari;
            break ;
            case "L-300":
            hasil = 150000 * hari;
            break ;                
    }
    alert("Jumlah Sewa Yang Harus di Bayar" + hasil);
}
function Ulang() {
    document.getElementById("hari").value = "";
    document.getElementById("mobil").value = "Avanza";
  }