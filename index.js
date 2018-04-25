var katzDeliLine = [];

function takeANumber(katzDeliLine, name ){
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}


function nowServing(katzDeliLine) {
 var x =  katzDeliLine.length
 
 if (x === 0)
   return  "There is nobody waiting to be served!"
 else {
    var y = katzDeliLine[0]
    katzDeliLine[0].delete
    return y
 }
}