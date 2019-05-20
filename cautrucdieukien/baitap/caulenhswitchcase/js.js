
        function songay(){
        let ngay = document.getElementById("ngay").value;
                switch(ngay){
                case '1':
                case '3':
                case '5':
                case '7':
                case '8':
                case '10':
                case '12':
                document.getElementById("ketquangay").innerHTML = "tháng có 31 ngày";
                break;
                case '2':
                document.getElementById("ketquangay").innerHTML = "tháng có 28 ngày hoặc 29 ngày";
                break;
                case '4':
                case '6':
                case '9':
                case '11':
                document.getElementById("ketquangay").innerHTML = "tháng có 30 ngày";
                break;
                default:
                document.getElementById("ketquangay").innerHTML = "tháng không tồn tại";
                break;
            }
        }
