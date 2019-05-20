function chuyendoi(){
    let c = parseInt(document.getElementById("dof").value);
    let f = c * 9/5 +32;
    document.getElementById("nhietdo").innerHTML = f;
}

function chuyendoi1(){
    let m = parseInt(document.getElementById("feet").value);
    let ft = m * 3.2808;
    document.getElementById("dodai").innerHTML = ft;
}

function tinhtoan(){
    let canh = parseInt(document.getElementById("canh").value);
    let dt = canh * canh;
    document.getElementById("dientich").innerHTML = dt;
}

function tinhtoan1(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let dt = a * b;
    document.getElementById("dientich1").innerHTML = dt;
}

function tinhtoan2(){
    let c = parseInt(document.getElementById("c").value);
    let d = parseInt(document.getElementById("d").value);
    let dt = (c * d)/2;
    document.getElementById("dientich2").innerHTML = dt;
}

function phuongtrinh(){
    let e = parseInt(document.getElementById("e").value);
    let f = parseInt(document.getElementById("f").value);
    if (e > 0)
    {
        if (f===0) {
            pt = 0;
            document.getElementById("ketqua").innerHTML = pt;
        }
        else {
            pt = -f/e;
        document.getElementById("ketqua").innerHTML = pt;}
    } else
    document.getElementById("ketqua").innerHTML = "phương trình vô nghiệm";
}

function phuongtrinh1(){
    let x = parseFloat(document.getElementById("x").value);
    let y = parseFloat(document.getElementById("y").value);
    let z = parseFloat(document.getElementById("z").value);
    if (x === 0)
    {
        if (y===0) {
            document.getElementById("ketqua1").innerHTML = "Phương trình vô nghiệm";
        }
        else {
            pt1 = -y/x;
        document.getElementById("ketqua1").innerHTML = pt1;}
    } 
    let delta = y*y -4*x*z;
    let x1 ,x2;
    if (delta >0){
        x1 = parseFloat((- y + Math.sqrt(delta))/(2*x));
        x2 = parseFloat((- y - Math.sqrt(delta))/(2*x));
        document.getElementById("ketqua1").innerHTML = "Phương trình có 2 nghiệm: "+ "x1= " + x1 +" x2= " + x2;
    }else if (delta==0){
        x1 = parseFloat(-y/(2 * x));
        document.getElementById("ketqua1").innerHTML = "Phương trình có 2 nghiệm: "+ "x1= x2 = " + x1 ;
    } else 
    document.getElementById("ketqua1").innerHTML = "Phương trình vô nghiệm";
}

function tuoi(){
    let tuoi = parseInt(document.getElementById("tuoi").value);
    if (tuoi >0 && tuoi <120){
        document.getElementById("hienthituoi").innerHTML ="tuổi của bạn là " + tuoi ;
    }
    else document.getElementById("hienthituoi").innerHTML = "chỉ hiện tuổi trong 0-120 tuổi";
}

function tamgiac(){
    let canh1 = parseFloat(document.getElementById("canh1").value);
    let canh2 = parseFloat(document.getElementById("canh2").value);
    let canh3 = parseFloat(document.getElementById("canh3").value);
    if ((canh1 >0) && (canh2 >0) && (canh3 >0) && ((canh1 + canh2) > canh3) && ((canh2 + canh3)> canh1) && ((canh1+canh3) > canh2)){
        document.getElementById("tamgiac").innerHTML = "canh1,canh2,canh3 là 3 cạnh của 1 tam giác";
    }else
        document.getElementById("tamgiac").innerHTML = "canh1,canh2,canh3 không phải là 3 cạnh của 1 tam giác";
}

function tiendien(){
    let kwh = parseFloat(document.getElementById("kwh").value);
    let tong =0;
    if (kwh>0){
        tong = tong + (kwh * 1.678);
        document.getElementById("tiendien").innerHTML = "tổng tiền điện là " +tong;
    } else if (kwh>50){
        tong = tong + (kwh * 1.734);
        document.getElementById("tiendien").innerHTML = "tổng tiền điện là " +tong;
    } else if (kwh>100){
        tong = tong + (kwh * 2.014);
        document.getElementById("tiendien").innerHTML = "tổng tiền điện là " +tong;
    } else if (kwh>200){
        tong = tong + (kwh * 2.536)
        document.getElementById("tiendien").innerHTML = "tổng tiền điện là " +tong;
    } else{
        tong = tong + (kwh * 2.927)
        document.getElementById("tiendien").innerHTML = "tổng tiền điện là " +tong;
    }
}

function thue(){
    let thunhap = document.getElementById("thunhap").value;
    let thue = 0;
    if (thunhap <5000000){
        thue = thunhap/100*5;
        document.getElementById("thue").innerHTML = "thuế là " +thue;
    } else if (thunhap <10000000){
        thue = thunhap/100*10;
        document.getElementById("thue").innerHTML = "thuế là " +thue;
    } else if (thunhap <18000000){
        thue = thunhap/100*15;
        document.getElementById("thue").innerHTML = "thuế là " +thue;
    } else if (thunhap <32000000){
        thue = thunhap/100*20;
        document.getElementById("thue").innerHTML = "thuế là " +thue;
    } else if (thunhap <52000000){
        thue = thunhap/100*25;
        document.getElementById("thue").innerHTML = "thuế là " +thue;
    } else if (thunhap <80000000){
        thue = thunhap/100*30;
        document.getElementById("thue").innerHTML = "thuế là " +thue;
    } else{
        thue = thunhap/100*35;
        document.getElementById("thue").innerHTML = "thuế là " +thue;
    }
}