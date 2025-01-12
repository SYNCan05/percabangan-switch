let hari = new Date().getDay()

switch(hari){
    case 0:
        hari = "minggu";
    break;

    case 1:
        hari= "senin";
    break;

    case 2:
        hari= "selasa";
    break;

    case 3:
        hari= "rabu";
    break;

    case 4:
        hari= "kamis";
    break;

    case 5:
        hari= "jum'at";
    break;

    case 6:
        hari= "sabtu";
    break;
}

alert(`hari ini adalah hari ${hari}`)