var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeli.length === 0){
    return "There is nobody waiting to be served!"
  }
return `Currently serving ${katzDeliLine[0]}.`;
katzDeli = katzDeli.shift();

}
