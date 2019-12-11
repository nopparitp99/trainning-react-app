// ES5
function call(arguments) {
    return arguments
}

// ES2015
(arguments) => {
    return arguments
}

function Dog() {
    this.color = 'white'
    
    setTimeout(function() { 
      // this ตัวนี้หมายถึง this ใน context ของฟังก์ชันนี้
      // จึงไม่มีการพิมพ์อะไรออกไป เพราะในฟังก์ชันนี้ this ไม่มีค่าของ color
      console.log(this.color) 
    }, 100)
  }
  
  new Dog()
  
  // ถ้าต้องการให้พิมพ์ค่า color ออกมาต้องแก้ไขใหม่เป็น
  function Dog() {
    this.color = 'white'
    let self = this
    
    setTimeout(function() { 
      // เรียกผ่านตัวแปร self แทน
      console.log(self.color) 
    }, 100)
  }
  
  // หรือใช้ arrow function ดังนี้
  function Dog() {
    this.color = 'white'
    
    setTimeout(() => { 
      // this ของ arrow function นี้จะหมายถึง
      // this ตัวบน
      console.log(this.color) 
    }, 100)
  }

//นอกจากนี้เราสามารถละ () ได้ถ้าพารามิเตอร์นั้นมีเพียงตัวเดียว
const arr = [1, 2, 3]
// มีค่าเท่ากับ arr.map((x) => x * x)
arr.map(x => x * x)