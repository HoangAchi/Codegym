function kiemtraclass(str) {
    check = /^[CAP][0-9]{4}[GHIKLM]{1}$/;
    if (check.test(str)) {
        document.write("tên class hợp lệ <br>");
    } else {
        document.write("tên class không hợp lệ <br>");
    }
}
kiemtraclass("C0318G");
kiemtraclass("M0318G");
kiemtraclass("P0323A");