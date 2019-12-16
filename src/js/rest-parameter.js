// ไม่ว่าจะส่งตัวเลขเข้ามากี่ตัว ตัวแรกจะเป็น initial 
// ส่วนตัวอื่นจะเก็บอยู่ในอาร์เรย์ชื่อ rest
function sum(initial, ...rest) {
    return rest.reduce((prev, cur) => prev + cur, initial)
}
  
console.log(sum(10, 1, 2, 3)) // 16