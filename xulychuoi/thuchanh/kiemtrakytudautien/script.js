function chucaidautienhoa(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        document.write("Ký tự đầu tiên của chuỗi là hoa <br>");
    } else {
        document.write("Ký tự đầu tiên của chuỗi không là hoa <br>");
    }
}
chucaidautienhoa("Abcd");
chucaidautienhoa("abcd");

function chucaicuoicungthuong(thuong) {
    result = /[a-z]$/;
    if (result.test(thuong)) {
        document.write("ký tự cuối cùng của chuỗi là thường <br>");
    } else {
        document.write("ký tự cuối cùng của chuỗi không là thường <br>");
    }
}
chucaicuoicungthuong("Nguyen Duc Thanh Hoang");
chucaicuoicungthuong("HOANG");

function chuoiinhoa(check) {
    chuoihoa = /[A-Z]/;
    if (chuoihoa.test(check)) {
        document.write("chuỗi này là chuỗi in hoa<br>");
    } else {
        document.write("chuỗi này là không phải là chuỗi hoa<br>");
    }
}
chuoiinhoa("Nguyen van Nam");
chuoiinhoa("NGUYEN VAN NAM");
chuoiinhoa("nguyen van nam");

function chuoiinthuong(check1) {
    chuoithuong = /[a-z]/;
    if (chuoithuong.test(check1)) {
        document.write("chuỗi này là chuỗi in thường<br>");
    } else {
        document.write("chuỗi này là không phải là chuỗi thường<br>");
    }
}
chuoiinthuong("Nguyen van Nam");
chuoiinthuong("NGUYEN VAN NAM");
chuoiinthuong("nguyen van nam");