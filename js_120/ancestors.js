/*
PEDAC: Understand the Problem, Create Examples, Identify the Data Structures you
will use, Formulate an Algorithm, Code with intent

----------------------Understand the Problem----------------------- 
THINGS TO CONSIDER: 
-If any part of the problem is unclear, ask for clarification. -Do I
need to return the same object or an entirely new one?

PROBLEM STATEMENT:
Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. 

EXPECTED INPUT: none

EXPECTED OUTPUT: the prototype chain of an object in an array

RULES: EXPLICIT
    -
    -
    -
  IMPLICIT (What's not stated in the problem?)
    -
    -
    -

QUESTIONS:
-
-
-
-----------------------Examples/ Test Cases------------------------ 
VALIDATE YOUR UNDERSTANDING OF THE PROBLEM

EXAMPLES

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']


------------------Data Structures and Algorithm--------------------
- Given an object find the name of its prototype
  - IF the name is null then you've reached the end of the prototype chain 
- Add that name to an array
- Find the prototype name of the prototype object.
-
-
-
-
-
-
-
-
*/
//---------------------------Code----------------------------------
let foo = { name: 'foo' };
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

Object.prototype.name = "Object.prototype";

Object.prototype.ancestors = function () {
  let collectAncestors = [];
  let proto = Object.getPrototypeOf(this);

  while (Object.getPrototypeOf(proto)) {
    collectAncestors.push(proto.name);
    proto = Object.getPrototypeOf(proto);    
  }

  collectAncestors.push(proto.name)
  return collectAncestors;
}


// TEST CASES:
console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']

