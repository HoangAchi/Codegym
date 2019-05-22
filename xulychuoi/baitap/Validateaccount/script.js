function kiemtraaccount(str) {
    check = /^[_a-z0-9]{6,}$/;
    if (check.test(str)) {
        document.write("account hợp lệ <br>");
    } else {
        document.write("account không hợp lệ <br>");
    }
}

kiemtraaccount("123abc_");
kiemtraaccount("_abc123");
kiemtraaccount("_____");
kiemtraaccount("123456");
kiemtraaccount("abcdefg");
kiemtraaccount(".@");
kiemtraaccount("12345");
kiemtraaccount("1234_");
kiemtraaccount("abcde");