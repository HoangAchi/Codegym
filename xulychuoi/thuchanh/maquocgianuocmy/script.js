function zipcodeus(str) {
    ma = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (ma.test(str)) {
        return true;
    }
    return false;
}
var zipcode = "03201 - 2150";
document.write(zipcodeus(zipcode) + "<br>");
zipcode = "7892";
document.write(zipcodeus(zipcode) + "<br>");

function zipcodehue(str) {
    ma = /^(49)[0-9]{3}/;
    if (ma.test(str)) {
        return true;
    }
    return false;
}
var zipcode = "49000";
document.write(zipcodehue(zipcode) + "<br>");
zipcode = "85000";
document.write(zipcodehue(zipcode) + "<br>");