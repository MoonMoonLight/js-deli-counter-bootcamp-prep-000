var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "${name} you are the # ${katzDeliLine.indexOf(name) + 1} inline.";
}
