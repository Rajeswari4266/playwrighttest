let numbers= [1,2,30,40,55,6]
 
 
 
numbers.forEach(
 
    function callback(number,index, array) {
        if(array[index]%2==0)
    console.log( array[index] + ' is even number')
else
    console.log( array[index] + ' is odd number')
   
})
