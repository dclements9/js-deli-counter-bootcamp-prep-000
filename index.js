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
  if (line.length === 0){
    return "The line is currently empty."
  }else{

  }
}
