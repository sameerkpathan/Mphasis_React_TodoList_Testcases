import Header from '../common/TeamOmegaHeader'
import { shallow } from "enzyme";

describe("Test",()=>{
    let wrapper 
    beforeEach(()=>{
      wrapper = shallow(<Header/>);
    })

describe("TeamOmegaHeader Testing",()=>{
   
   

    it("Heading Class ",()=>{
              // console.log("heading",wrapper.debug());
            expect(wrapper.find('.Header').length).toBe(1);
    })

    it("Heading Class-test ",()=>{
        expect(wrapper.exists('.text-center')).toEqual(true)
})

    it("Heading test",()=>{
        expect(wrapper.containsAllMatchingElements([<h1>Todo List</h1>])).toEqual(true);
    })
})
})
