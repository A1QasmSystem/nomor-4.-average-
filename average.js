var nilaiSantri = [5,9,6,7,9,8,10,7,8]

// cari nilai rata2 Santri dari daftar diatas

var total =0;
var byknilai = nilaiSantri.length;
// (lenght)mendeteksi panjang array

for(i = 0; i < byknilai; i++) {
    total += nilaiSantri[i]
}
document.write(total/byknilai)