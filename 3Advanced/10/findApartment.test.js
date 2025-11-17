import {assert} from "chai";
import {findNewApartment} from "./findApartment.js"

describe("findApartment", ()=>{
    it("test with isGoodLocation", ()=>{
        assert.equal(findNewApartment.isGoodLocation("Sofia", false),"There is no public transport in area.","return - there is no public transport in area");
        assert.equal(findNewApartment.isGoodLocation("pesho", true),"This location is not suitable for you.","return - this location is not suitable for you");
        assert.equal(findNewApartment.isGoodLocation("Sofia", true),"You can go on home tour!","return - you can go on home tour!");
       // assert.equal(findNewApartment.isGoodLocation([], true), "Invalid input!","return - Invalid input!");
      assert.throw(()=> findNewApartment.isGoodLocation([], true) )

    });

    it("test with isLargeEnough", ()=>{
        let res = [40, 30];
       assert.equal(findNewApartment.isLargeEnough([40, 30], 30) , res.join(", "), "result is correct");
       assert.throw(()=> findNewApartment.isLargeEnough(false, false) )
        
    });

    it("test with isItAffordable", ()=>{
        
       assert.equal(findNewApartment.isItAffordable(40, 30) , "You don't have enough money for this house!", "result is correct");
       assert.equal(findNewApartment.isItAffordable(40, 50) , "You can afford this home!", "result is correct");
       
       assert.throw(()=> findNewApartment.isItAffordable(false, false) )
       assert.throw(()=> findNewApartment.isItAffordable(-50, 90) )
       assert.throw(()=> findNewApartment.isItAffordable(50, -90) )

        
    })
})