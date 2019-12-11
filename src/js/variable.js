//var เป็น function-scoped หรือพูดง่ายๆคือเราใช้ var ประกาศตัวแปรตรงจุดไหนก็ตาม แต่เมื่อ JavaScript เริ่มทำงาน การประกาศตัวแปรด้วย var นั้นจะขยับตัวเองไปอยู่ใกล้กับจุดประกาศฟังก์ชันที่ใกล้ที่สุด

function foo(isValid) {
    if(isValid) {
        var x = 1
        return x
    }
    return x
}
  
// มีค่าเท่ากับ
function foo(isValid) {
var x; // ดีดตัวเองมาอยู่ใกล้จุดประกาศฟังก์ชัน
if(isValid) {
    var x = 1
    return x
}

return x
}

//let และ const นั้นเป็น block-scoped หมายถึงประกาศตัวแปรอยู่ในบลอคไหนก็จะอยู่แค่ในบลอคนั้น
const coffee = 'coffee' //เปลี่ยนแปลงไม่ได้

let mango = 'mango' //เปลี่ยนแปลงได้