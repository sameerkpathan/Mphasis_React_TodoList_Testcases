import TeamOmegaInputBox from "../common/TeamOmegaInputBox";
import { shallow } from "enzyme";
import { checkProps,findTestByAttr } from './App.mock';


describe("InputBox",()=>{
   let wrapper 
   beforeEach(()=>{
       wrapper=shallow(<TeamOmegaInputBox/>)
   })
   
   describe("InputBox-Testing",()=>{

    it("checking proptype", () => {
        const expectedProps = {
          todo:"",
          placeholder:"",
          type:"",
          className: "",
        }
        const propsError = checkProps(TeamOmegaInputBox, expectedProps);
        expect(propsError).toBeUndefined();
      })

      it('-->render data', () => expect(findTestByAttr(wrapper, 'TeamOmegaInput').exists()).toEqual(true));

})
   })

