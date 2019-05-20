    function chiahaiso(){
        let a = parseInt(document.getElementById("a").value);
        let b = parseInt(document.getElementById("b").value);
        let kq = a%b;
        if (kq == 0)
            document.getElementById("ketquachia").innerHTML = "a chia hết cho b";
        else 
            document.getElementById("ketquachia").innerHTML = "a không chia hết cho b";
    }
    function tuoi(){
        let tuoi = parseInt(document.getElementById("tuoi").value);
        if (tuoi === 15) 
            document.getElementById("tuoilop10").innerHTML = "tuổi đủ điều kiện vào lớp 10";
        else
            document.getElementById("tuoilop10").innerHTML = "không đủ tuổi điều kiện vào lớp 10";
    }
    function ktsonguyen()
    {
        let songuyen = parseInt(document.getElementById("songuyen").value);
        if (songuyen > 0) 
            document.getElementById("ketquasonguyen").innerHTML = "số nguyên lớn hơn 0";
        else if (songuyen < 0)
            document.getElementById("ketquasonguyen").innerHTML = "số nguyên bé hơn 0";
        else
            document.getElementById("ketquasonguyen").innerHTML = "số nguyên bằng  0";
    }
    function solonnhat()
    {
        let c = parseInt(document.getElementById("c").value);
        let d = parseInt(document.getElementById("d").value);
        let e = parseInt(document.getElementById("e").value);
        let max = c;
        if (max < d)
        { 
            max = d;
            document.getElementById("ketquasolonnhat").innerHTML = max;
        }
        if (max < e) {
                max = e;
                document.getElementById("ketquasolonnhat").innerHTML = max;
            }
        else document.getElementById("ketquasolonnhat").innerHTML = max;
    }
    function hocluc(){
        let baikiemtra = parseInt(document.getElementById("baikiemtra").value);
        let giuaky = parseInt(document.getElementById("giuaky").value);
        let cuoiky = parseInt(document.getElementById("cuoiky").value);
        let dtb = (baikiemtra+giuaky+cuoiky)/3;
        if (dtb >= 8)
            document.getElementById("xephanghocluc").innerHTML = "học sinh giỏi";
        else if (dtb >= 6)        
            document.getElementById("xephanghocluc").innerHTML = "học sinh khá";
        else if (dtb >= 5)
            document.getElementById("xephanghocluc").innerHTML = "học sinh TB";
        else 
            document.getElementById("xephanghocluc").innerHTML = "học sinh kém";    
    }
    function hoahong()
        {
            let sotien = parseInt(document.getElementById("sotien").value);
            if (sotien >= 1000000) 
            {
                tienhoahong =  sotien + (sotien/100*2);
                document.getElementById("sohoahong").innerHTML = tienhoahong;
            }
            else if (sotien >=100){
                tienhoahong = sotien + (sotien/100);
                document.getElementById("sohoahong").innerHTML = tienhoahong;
            }
            else
            {
                tienhoahong = sotien;
                document.getElementById("sohoahong").innerHTML = tienhoahong;
            }
        }
    function cuocdt(){
            let thoigian = parseInt(document.getElementById("thoigian").value);
            if (thoigian <=6){
                tien = thoigian * 80;
                document.getElementById("tongtien").innerHTML = tien;}
            else{
                tien = thoigian *13.33;
                document.getElementById("tongtien").innerHTML = tien;
            }
    }