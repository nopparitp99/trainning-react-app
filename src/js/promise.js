const userId = 13

const updateAvatar = (avatar) => {
  return new Promise((resolve, reject) => {
    User.update(userId, avatar, (error, user) => {
      if(error) reject(error)
      else resolve(user)
    })
  })
}

const getCurrentAvatar = (profile) => {
  return new Promise((resolve, reject) => {
    fetch(`http://www.gravatar.com/avatar/${profile.email}`, (error, avatar) => {
      if(error) reject(error)
      else resolve(avatar)
    })
  })
}

const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    User.findById(userId, (error, profile) => {
      if(error) reject(error)
      else resolve(profile)
    })
  })
}

getUser(userId).then((profile) => {
  return getCurrentGravatar(profile)
}).then((avatar) => {
  return updateAvatar(avatar)
}).then((user) => {
  return doXXX(user)
}).catch((error) => {
  console.error(error.message)
})

async function updateLatestAvatar(userId) {
    try {
        const profile = await User.findById(userId)
        const avatar  = await fetch(`http://www.gravatar.com/avatar/${profile.email}`)
        const user    = await User.update(userId, avatar)
        doXXX(user)
    } catch(error) {
        console.error(error.message)
    }
}

updateLatestAvatar(13)


function getDog() {
  setTimeout(() => { 
    // this ของ arrow function นี้จะหมายถึง
    // this ตัวบน
    function getFoodDog() {
      setTimeout(() => { 
        // this ของ arrow function นี้จะหมายถึง
        // this ตัวบน
        function getFoodDog2() {
          setTimeout(() => { 
            // this ของ arrow function นี้จะหมายถึง
            // this ตัวบน
             getFoodDog()
          }, 100)
        }
      }, 100)
    }
  }, 100)
}



