function mapToSquare (input) {
    // TODO ใช้ .map สร้าง array ที่เป็นเลขยกกำลังสองของ input
    var array2 = input.map(myfunction)

    function myfunction(value){
        return value * value
    }
    
    return array2
}

function convertTemperature (input) {
    // TODO: ให้แปลงอุณหภูมิจาก °F เป็น °C โดยใช้ฟังก์ชัน .map()

    var model = input.map(myfunction)
    function myfunction(value) {
        if(fah_to_celsius(value.temperature) % 5 == 0){    
        
        return  {
                "date":value.date, 
                "temperature":fah_to_celsius(value.temperature)   
            }

        }
        


    }
    
    function fah_to_celsius (fah) {
        let cel = (fah - 32) * 5 / 9
        
        return Number(cel.toFixed(1))
    }

    return model

    

    
}

function filterEvenNumber (input) {
    // TODO: filter input เอาเลขคู่เท่านั้น

    var use = input.filter(myfunction)

    function myfunction(value){
        return (value % 2 == 0)
        

    }
    return use
}

function filterAgeRange (input) {
    // TODO: กรอง input.people ตามช่วงอายุ
   var use = input.people.filter(myfunction)

   function myfunction(value){
    return (input.min < value.age) && (value.age <= input.max)

   }

   return use





}

function removeByFilter (input) {
    // TODO: ลบ Object ใน Array ด้วยการ filter
   var use   = input.people.filter(myfunction)
    function myfunction(value) {
        return input.removeId !=  value.id

    }
    return use
}

function replaceBySplice (input) {
    // TODO: ให้ใช้ฟังก์ชัน .splice() ในการ **เปลี่ยน (replace)** สมาชิกใน Array  
    // เรียงลำดับตัวเลขให้ถูกต้อง
     input.splice(4, 1, 4)

    return input
}
