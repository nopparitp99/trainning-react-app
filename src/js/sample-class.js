// ประกาศคลาสผ่านคีย์เวิร์ด class
class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    
    static species = 'Homo sapiens sapiens'
    
    walk() {
      console.log("I'm walking...")
    }
    
    print() {
      console.log(`My name is ${this.name}`)
      console.log(`I'm ${this.age}'`)
    }
  }
  
  const person = new Person('MyName', 99)
  person.walk() // I'm walking...
  person.print() // My name is MyName \n I'm 99'
  
  // static method เรียกตรงผ่านคลาสได้เลย
  console.log(Person.species) // Homo sapiens sapiens
  
  // สำหรับการทำ inheritance สามารถใช้คีย์เวิร์ด extends ดังนี้
  class Female extends Person {
  
  }