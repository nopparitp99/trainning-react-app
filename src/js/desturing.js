let person = { 
    age: 24, 
    gender: 'male', 
    name: { 
      firstName: 'firstName', 
      lastName: 'lastName'
    } 
  }
  
  // ถ้าเราต้องการค่าเหล่านี้ออกจากอ็อบเจ็กต์ ต้องมาประกาศตัวแปรแบบนี้
  let age = person.age 
  let genger = person.gender
  let name = person.name
  let firstName = name.firstName
  let lastName = name.lastName
  
  // หากใช้ Destructuring จะเหลือแค่นี้
  let { age, gender, name } = person
  let { firstName, lastName } = name
  
  // แต่ในความเป็นจริงแล้ว name เป็นเพียงแค่ทางผ่าน
  // เราไม่ต้องการมัน เราต้องการแค่ firstName และ lastName
  // จึงใช้ Destructuring ซ้อนเข้าไปอีกครั้ง
  // เพียงเท่านี้ตัวแปร name ก็จะไม่เกิดขึ้นมาให้รำคาญใจ
  let { age, gender, name: { firstName, lastName } } = person