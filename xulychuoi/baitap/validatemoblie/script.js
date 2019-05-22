function kiemtramoblie(str) {
    check = /^\([0-9]{2}\)\-\(0[0-9]{9}\)/;
    if (check.test(str)) {
        document.write("số điện thoại hợp lệ <br> ");
    } else {
        document.write("số điện thoại không hợp lệ <br>");
    }
}
kiemtramoblie("(84)-(0978489648)");
kiemtramoblie("(a8)-(22222222)");