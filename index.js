function takeANumber(quantity,name){
    quantity.push(name)
    var position = quantity.length

  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return line(0)
    line.pop()   
  }
}
