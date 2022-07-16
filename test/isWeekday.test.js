
 import assert from 'assert';
 import isWeekday from "../isWeekday.js";

 describe('Testing the isWeekday function' , function(){
    it('should return false if a day is not a weekday' , function(){
        
        assert.equal(isWeekday('Saturday'), false);


    });
    it('should return true for a weekday' , function(){
       assert.equal(isWeekday('Thursday'), true);
     });
    it("should return  false for sunday" , function () {
        assert.equal(isWeekday('Sunday'), false);
    });

});