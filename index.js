var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.indexOf(name) + 1} in line.`;
}

function nowServing(katzDeli){
  var katz = katzDeli.shift();
  if(katzDeli.length === 0){
    return "There is nobody waiting to be served!"
  }
return `Currently serving ${katz}.`;


}
