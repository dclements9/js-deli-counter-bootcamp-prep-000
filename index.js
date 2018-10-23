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

function currentLine(line){
  var lineNames = []
  var namePosition = 1
  var i = 0

  if (line.length === 0){
    return "The line is currently empty."
  }else{
  //  while(line.length > 0){
      while(i < line.length){
    lineNames.push(`${namePosition}. ${line[i]}`)
    i++
  //  return `The line is currently: ${lineNames}`
  }
    return `The line is currently: ${lineNames}`
  }
}
