let element_things = [1, 2, 3, 4];
let new_things = [element_things, [element_things.length - 1]];
element_things.forEach((item,index,arr) => (new_things[1][index] = item + 1));

console.log(new_things);