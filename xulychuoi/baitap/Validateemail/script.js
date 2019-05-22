function kiemtraemail(str) {
    check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (check.test(str)) {
        document.write("email hợp lệ <br>");
    } else {
        document.write("email không hợp lệ <br>");
    }
}
kiemtraemail("a@gmail.com");
kiemtraemail("ab@yahoo.com");
kiemtraemail("abc@hotmail.com");
kiemtraemail("@gmail.com");
kiemtraemail("ab@gmail.");
kiemtraemail("@#abc@gmail.com");