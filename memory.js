/*const ab = 200; // It will allocate the memory for a number type variable  
const a = 'anystring'; // it will allocate the memory for a string type variable  
  
const new_obj = {  
  a: 5,  
  b: null,  
}; // It will allocate the memory for an object and contain values  
  
// Just like the objects, it will also allocate memory for the array and  
// contained values  
const my_array = [5, null, 'anystring'];  
// JavaScript also allocated memory to a function  
function my_function(a) {  
  return a + 5;  
} // It will allocate a function (which is a callable object)  
// JavaScript also allocates memory to a function expressions object  
anyHtmlElement.addEventListener('click', function() {  
  htmlElement.style.backgroundColor = 'green';  
}, true);  
let ad = {  
    x: {  
      y: 5  
    }  
  };  
  // Here, two objects are created; x and y. where x is referenced by the other y as one of its properties.  
  // The other is referenced by virtue of being assigned to the 'a variable.  
  // Here, none of the given objects can be garbage-collected.  
    
  let ac= b;      // The 'b' variable is the second thing that has a reference to the object.  
    
  a = 5;          // Here, the object that was originally in 'a' will have a unique reference  
                  //   embodied by the 'b' variable.  
    
  let z = b.x;    // Reference to 'x' property of the object.  
                  //   now, z object will have two references: one as a property,  
                  //   the other as the 'z' variable.  
    
  b = 'chrome';  // The object that was originally in 'b' has now zero  
                  //   references to it. It can be garbage-collected.  
                  //   However its 'a' property is still referenced by  
                  //   the 'z' variable, so it cannot be freed.  
    
  z = null;       // The 'a' property of the object originally in a  
                  //   has zero references to it. It can be garbage collected.  */