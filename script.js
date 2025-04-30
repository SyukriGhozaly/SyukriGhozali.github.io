function pilihMobil(namaMobil, hargaMobil) {
    document.getElementById("mobil").value = namaMobil;
    document.getElementById("harga").value = hargaMobil;
}

function prosesForm() {
    const nama = document.getElementById("nama").value;
    const mobil = document.getElementById("mobil").value;
    const harga = parseInt(document.getElementById("harga").value);
    const lama = parseInt(document.getElementById("lama").value);
    
    if (!nama || !mobil || !lama || !harga) {
        alert("Mohon isi semua data!");
        return false;
    }

    const total = harga * lama;

    const hasil = `
        <h3>Pesanan Anda:</h3>
        <p>Nama: ${nama}</p>
        <p>Mobil: ${mobil}</p>
        <p>Lama Sewa: ${lama} hari</p>
        <p>Total Bayar: <strong>Rp ${total.toLocaleString()}</strong></p>
    `;
    document.getElementById("output").innerHTML = hasil;

    return false; // Mencegah reload form
}