// ข้อ 2.1

function display(msg) {
    let div = document.getElementById('ex01-div')
    div.innerHTML = msg
}

function showConfirm(callback) {
    // You code here

    if(confirm("ยืนยันไหม") == true){
        let answer = display("ยืนยันจ้า");
    }
    else{
        let answer = display("ไม่ดีกว่า")
    }
    callback(answer);
}

// ข้อ 2.2
function start() {
    // hint: ส่ง callback function เข้าไปเป็น argument ของ setTimeout()
    setTimeout(() => {
        document.getElementById("start").innerHTML = "Program started"
        setTimeout(() => {
            document.getElementById("process").innerHTML = "Hello World!!";
        setTimeout(() => {
            document.getElementById("end").innerHTML = "Program ended";
        }, 3000)
        }, 2000)
    }, 0)
}

// ข้อ 2.3
function stopTime() {
    time = document.getElementById("Time").value;

    if(time > 0){
        const dointerval = setInterval(() => {
    if(time == 0){
            clearInterval(dointerval)
         }
         min = Math.floor(time/60);
         sec = time%60;
         minuse = min.toString().padStart(2, "0");
         secuse = sec.toString().padStart(2,"0");

         document.getElementById("setMinute").innerHTML = minuse;
         document.getElementById("setSecond").innerHTML = secuse;
         console.log(min + " : " + sec);
         console.log(secuse);
         time -= 1

        }, 1000);
    }
}




