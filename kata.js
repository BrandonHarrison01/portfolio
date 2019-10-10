function tickets(peopleInLine){
    let register = 0
    let change = 0
    for(let i = 0; i < peopleInLine.length; i++) {
      change = 0
      if(peopleInLine[i] > register + 25) {
        console.log('NO', i)
        return 'NO'
      } else if(peopleInLine[i] > 25) {
        change = peopleInLine[i] - 25
        if (register >= change) {
            register = register - change + peopleInLine[i]
            console.log(register, i)
        } else {
            console.log('no', i)
            return 'NO'
        }
      } else if (peopleInLine[i] === 25){
        register = register + peopleInLine[i]
        console.log(register, i)
      }
    }
    return 'YES'
  }

  tickets([25,50,25,100,25,50,25,100,25,25,25,100,25,50,25,100,25,25,50,100])