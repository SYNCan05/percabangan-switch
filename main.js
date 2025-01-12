var makanan = prompt('masukan nama makanan \n (cth nasi,ayam,sapi,pizza,cocacola)');

switch (makanan) {
    case 'nasi':
    case 'ayam':
    case 'sapi':
        alert('makanan SEHAT');
        break;
    case 'pizza':
    case 'cocacola':
        alert('makanan/minuman TIDAK SEHAT!')
        break;
        default:
        alert('anda memasukan makanan yang salah');
        break;
}