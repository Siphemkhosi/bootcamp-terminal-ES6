
  import assert from 'assert';
import fromWhere from "../fromWhere.js";

 describe('Testing the fromWhere function' , function(){
    it('should return Bellville for CY' , function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    it('should return Paarl for CJ' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl'); 
    });
    it("should return  some other place if reg is not on the list" , function () {
        assert.equal(fromWhere('CF'), 'Some other place!')
    });

});


