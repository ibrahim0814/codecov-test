const functions = require('./functions');

test('Adds 2+2 to equal 4', ()=>{
    expect(functions.add(2,2)).toBe(4); //toBe is a matcher in jest, there are alot of them, use any one that you want
 }); 

 test('Subtracts 4-2 to equal 2', ()=>{
    expect(functions.sub(4,2)).toBe(2); //toBe is a matcher in jest, there are alot of them, use any one that you want
 }); 

 test('Should return null', ()=>{
    expect(functions.isNull()).toBeNull(); //toBe is a matcher in jest, there are alot of them, use any one that you want
 }); 