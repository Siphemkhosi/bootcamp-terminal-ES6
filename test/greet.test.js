
   import assert from  'assert';
  import greet from '../greet.js';
  
  

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('hello Andre', greet('Andre'));
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('hello Karen', greet('Karena'));
    });
});

 
    
         