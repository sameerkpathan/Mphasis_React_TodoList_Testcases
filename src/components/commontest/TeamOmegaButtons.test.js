// import React from 'react';
// import { shallow } from 'enzyme';
//  import Button from '../common/TeamOmegaButtons'
// import { checkProps } from './App.mock'
// import Sinon from 'sinon';

// const setUp = (props = {}) => shallow(<Button {...props} />);


// describe('TeamOmegaButton Component', () => {

//   let mockFunc = Sinon.spy();

//   let component, wrapper, props, type = "button";

//   beforeAll(() => {
//     props = {
//        text: "",
//       click: mockFunc
//     }
//     component = setUp(props);
//   });

//   it('-->render', () => expect(component.find(`[data-test="TeamOmegaButton_Component"]`).exists()).toEqual(true));

//   it("-->checking proptype", () => {
//     const expectedProps = {
//       value:"",
//        toggle: "",
//       target: "",
//       dismiss: "",
//       className: "",
//       onSubmit: () => { }
//     }
//     const propsError = checkProps(Button, expectedProps);
//     expect(propsError).toBeUndefined();
//   })



//   describe('-->Child Component', () => {

//     describe(` html tag`, () => {

//       beforeEach(() => wrapper = component.find(`button`));

//       it(`-->contain a ${type} `, () => expect(wrapper.exists()).toEqual(true));


//       // it('--> trigger props on click event', () => {
//       //   wrapper.simulate('click');
//       //   expect(mockFunc.calledOnce).toEqual(true)
//       //   mockFunc.resetHistory()
//       // });

//     });


//   });



// });

import Button from '../common/TeamOmegaButtons'
import { shallow } from "enzyme";
import { checkProps } from './App.mock';
import Sinon from 'sinon';

let wrapper=shallow(<Button/>)
describe("TeamOmegaButtons",()=>{
  
    
    describe("TeamOmegaButtons",()=>{

      it('-->render', () => expect(wrapper.find(`[data-test="TeamOmegaButton_Component"]`).exists()).toEqual(true));

        it("checking proptype", () => {
            const expectedProps = {
            
              className: "",
              onSubmit:() => {

              },
              dismiss:"",
              toggle:"",
              target:"",
              
            }
            const propsError = checkProps(Button, expectedProps);
            expect(propsError).toBeUndefined();
          })

      it(`-->contain a button `, () => expect(wrapper.find('button').exists()).toEqual(true));

    })

   
    
})



