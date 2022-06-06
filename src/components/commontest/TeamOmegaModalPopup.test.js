import Modal from '../common/TeamOmegaModalPopup'
import { shallow } from 'enzyme'
import { checkProps } from './App.mock';

describe("TeamOmega Modal Popup",()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper=shallow(<Modal/>);
    })

    describe("Modal-Testing",()=>{
        it("Modal-Props-testing",()=>{
            const expectedProps = {
                todo: "",
                onchange: ()=>{

                },
                 onsubmit:()=>{
                     
                 }
               }
               const propsError = checkProps(Modal, expectedProps);
               expect(propsError).toBeUndefined();
        })
    }
    )
})