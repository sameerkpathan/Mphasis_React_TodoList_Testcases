import React from 'react';
import { shallow } from 'enzyme';
import TodoListElement from '../TodoListElement'
import { checkProps, findTestByAttr } from './App.mock';
import { ListGroup } from 'react-bootstrap';

const setUp = (props={})=> shallow(<TodoListElement {...props}/>);

describe('TeamOmegaHeader Component', () => {
    let component
    describe("TeamOmega DropDown",()=>{
        it("checking proptype", () => {
            let todo={id:1,title:"info"}
            const expectedProps = {
                todos:[todo],            
                deleteHandler:()=>{
                },
                editHandler:()=>{
                },                          
            }
            const propsError = checkProps(TodoListElement, expectedProps);
            expect(propsError).toBeUndefined();

          })

          beforeEach(()=>{
            let todo={id:1,title:"info"}

            const expectedProps = {
                todos:[todo],            
                deleteHandler:()=>{
                },
                editHandler:()=>{
                },                          
            }
              component=setUp(expectedProps)

          })

        //   it("check map",()=>{
        //     component.find(ListGroup);
        //     console.log(component.find(ListGroup).exist())
        //   })
    })
});