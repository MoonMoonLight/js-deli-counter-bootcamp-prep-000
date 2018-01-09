var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeliLine, name){
  if(katzDeliLine.length >= 1){
    console.log(`Currently serving ${katzDeliLine[0]}.`);
    katzDeliLine.shift();

  } else {
    return "There is nobody waiting to be served!"
  }
}
