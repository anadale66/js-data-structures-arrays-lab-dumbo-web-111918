// Write your solution here!

const drivers =  ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name)
}

function appendDriver (name) {
  return [...drivers, name];
}



