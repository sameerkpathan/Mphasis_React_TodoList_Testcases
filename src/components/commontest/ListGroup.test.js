import ListGroup from "../ListGroupItems";
import { shallow } from "enzyme";
import { checkProps } from './App.mock';

describe("List Group Check",()=>{
    let wrapper;

    beforeAll(()=>{
        wrapper=shallow(<ListGroup/>)
    });

    describe("props check in ListGroup",()=>{
        it("Props check",()=>{
            const expectedProps = {
                title: "",
                deleteHandler: ()=>{

                },
                editHandler: ()=>{
                    
                },
               }
               const propsError = checkProps(ListGroup, expectedProps);
               expect(propsError).toBeUndefined();
        })

        it("span check",()=>{
            expect(wrapper.exists('span')).toEqual(true);
        })

        it("span class check",()=>{
            expect(wrapper.exists('.float-start')).toEqual(true);
        })

        it("span class check",()=>{
            expect(wrapper.exists('.text-left')).toEqual(true);
        })

        it("Button check",()=>{
            expect(wrapper.exists("TeamOmegaButtons")).toEqual(true);
        })

        it("Button class check",()=>{
            expect(wrapper.exists(".btn-sm")).toEqual(true);
        })

        it("Button class check",()=>{
            expect(wrapper.exists(".float-end")).toEqual(true);
        })
    })
})