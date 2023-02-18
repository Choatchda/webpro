// ข้อ 3.1
function getDogDemo(url) {
  // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://dog.ceo/api/breeds/image/random
  // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไร
  
  function success(res){
    console.log("success");
    document.getElementById("dogImg").src = res.message;
    document.getElementById("dogTime").innerHTML = "";
  }
  function error(res){
    console.log("error");

  }
  let num = 10
  const myloop = setInterval(() => {
    if(num == 0){
      clearInterval(myloop);
      getAPI("https://dog.ceo/api/breeds/image/random", success, error);
    }

    console.log(num)
    document.getElementById("dogTime").innerHTML = num;
    num -= 1;

  }, 1000)




}


// ข้อ 3.2
function Rainbow() {
  //TODO
  // 1. ในกรณีที่ status = 'success' ให้แสดงตัวเลขเป็นสีตามที่กำหนดในแต่ละ STATE
  // 2. ให้แสดงชื่อ STATE (STATE 1 หรือ STATE 2 หรือ STATE 3) ในกล่องข้อความเมื่อเกิด Error
  // 3. เปลี่ยนสีข้อความเป็นสีแดงเมื่อเกิด Error (class = 'has-text-error')

  const rainbow = document.getElementById("rainbow")
 

  setTimeout(() => {
    let result = getResult();
    // STATE 1 color = 'has-text-primary'
    if(result.status == 'success'){
      rainbow.innerHTML = result.text;
      rainbow.className = 'has-text-primary';
    }
    else{
      rainbow.innerHTML = "STATE1";
      rainbow.className = 'has-text-danger';


    }

    
      setTimeout(() => {
        let result = getResult();
        
        // STATE 2 color = 'has-text-success'

        if(result.status == 'success'){
          rainbow.innerHTML = result.text;
          rainbow.className = 'has-text-success';
        }
        else{
          rainbow.innerHTML = "STATE2";
          rainbow.className = 'has-text-danger';
    
    
        }
        setTimeout(() => {
            // STATE 3 color = 'has-text-success'
            let result = getResult();

            if(result.status == 'success'){
              rainbow.innerHTML = result.text;
              rainbow.className = 'has-text-success';
            }
            else{
              rainbow.innerHTML = "STATE3";
              rainbow.className = 'has-text-danger';
        
        
            }
        }, 2000)

      }, 2000)

  }, 2000)
}

function getResult(){
  const num = Math.floor(Math.random() * 10)
  console.log(num)
  if(num > 5) {
    return {
      'status': 'success',
      'text': num
    }
  }else{
    return {
      'status': 'error',
      'text': num
    }
  }
}

// ข้อ 3.3
function evenNumber(num) {
  // hint : ทำการสร้าง promise และเรียกใช้

    var checkNumber  = new Promise(
      function (resolve, reject){
        if(num % 2 == 0){
          var check1 =  "success :"+ " " + num + " " + "is an even number";
          resolve(check1);
        }
        else{
          var check2 = new Error( "Error :" +" "+ num +" "+ "is not an even number");
          reject(check2);
        }
      }
    )
    checkNumber.then(fullfield => {
      document.getElementById("result").innerHTML = fullfield;
    }
    )
    .catch(error => 
      {document.getElementById("result").innerHTML = error.message;
    })
      

}

// ข้อ 3.4
function task(id) {
  const delay = parseInt(Math.random() * 1000)


  // return promise
  let mycheck  = new Promise( function (resolve, reject){
    setTimeout( () => { 
      if(delay < 500){
      resolve("task" + id + ":" + delay + "ms ... PASS!");
    }
    else{
      reject(new Error("task" + id + ":" + delay + "ms ... NOTPASS!"));
    }}, delay)
  })
  
  return mycheck
  
   
  
}

function tester() {
  // hint : task(1).then().catch() ..... task(4)...
  // ต้องเรียก function task 4 ครั้ง เปลี่ยน id ไปเรื่อยๆ

  task(1).then(fullfield => console.log(fullfield))
  .catch(error => console.log(error.message))
  task(2).then(fullfield => console.log(fullfield))
  .catch(error => console.log(error.message))

  task(3).then(fullfield => console.log(fullfield))
  .catch(error => console.log(error.message))

  task(4).then(fullfield => console.log(fullfield))
  .catch(error => console.log(error.message))
}

// ข้อ 3.5
// hint : เรียก getAPI() ที่ url = https://api.thecatapi.com/v1/images/search 
// อย่าลืม console.log() ดูข้อมูลที่ได้ด้วยว่ามีโครงสร้างแบบใด
function checkAuth(password) {
  const mycheck = new Promise(function (resolve, reject) {
    if(password == "Cisco"){
      resolve("รหัสผ่านถูกต้อง")
    }
    else{
      reject("รหัสผ่านไม่ถูกต้อง")
    }


  })
  mycheck.then((fullfield) => {
    alert(fullfield);
    getAPI("https://api.thecatapi.com/v1/images/search", success, error);
  }
  )
  .catch((fullfield) => {
    alert(fullfield);
  })

  
}
function success(res){
   var cat = document.getElementById("cat");
   cat.src = res[0].url;
  
  

}
function error(){
  
}


function fetchData(password) {
  checkAuth(password);
  
}

// GET API
function getAPI(url, success, error) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.response);
      success(res);
    } else if (this.readyState == 4) {
      const res = JSON.parse(this.response);
      error(res);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send();
}
