function takeANumber(quantity,name){
    quantity.push(name)
    var position = quantity.length

  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${line.shift()}.`
  }
}
/*
function currentLine(line){
  var lineNames = []
  var namePosition = 1
  var i = 0

  if (line.length === 0){
    return "The line is currently empty."
  }else{
    while(i < line.length){
      lineNames.push(`${namePosition}. ${line[i]}`)
      i++
      namePosition++
  }
    return `The line is currently: ${lineNames} `
  }
}
*/

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }

  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames}`
}
