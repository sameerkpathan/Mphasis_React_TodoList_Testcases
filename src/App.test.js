import { shallow } from 'enzyme';
import App from './App';



describe("App testing", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<App />);
  })

  describe("App-Testing", () => {

    it('state check', () => {
      expect(wrapper.state()).toEqual({
        todos: [],
        id: null,
        todo: "",
        modalInput: ""
      })
    });

    it('changeHandler check', () => {
      let e = "text";
      // console.log(wrapper.state());
      wrapper.instance().changeHandler(e);
      //console.log(wrapper.state());
      expect(wrapper.state().todo).toEqual(e);
    });


    it('submitHandler check', () => {
      let e = { preventDefault: () => { } };
      //console.log(wrapper.state());
      let length = wrapper.state().todos.length;
      wrapper.instance().submitHandler(e);
      // console.log(wrapper.state());
      expect(wrapper.state().todos.length).toBeGreaterThan(length);
    });

    it('editHandler check', () => {
      let todo = wrapper.state().todos[0];
      wrapper.instance().editHandler(todo.id);
      expect(wrapper.state().id).toEqual(todo.id);
      expect(wrapper.state().modalInput).toEqual(todo.title);
    })

    it('editValue should update modal Input', () => {
      let text = "text";
      wrapper.instance().editValue(text);
      expect(wrapper.state().modalInput).toEqual(text);
    });


    it(' saveChanges should update todo from modalInput ', () => {
      let e = { preventDefault: () => { } };
      let id = wrapper.state().id;
      wrapper.instance().saveChanges(e);
      const selectTodo = wrapper.state().todos.find(todo => todo.id === id);
      expect(wrapper.state().modalInput).toEqual(selectTodo.title);
    });



    it('deleteHandler check', () => {
      let id = wrapper.state().todos[0].id;
      let length = wrapper.state().todos.length;
      wrapper.instance().deleteHandler(id);
      expect(wrapper.state().todos.length).toBeLessThan(length);
    });

    it("Header check", () => {
      // console.log(wrapper.debug())
      expect(wrapper.exists('TeamOmegaHeader')).toEqual(true);
    })

    it('form check', () => {
      expect(wrapper.exists('form')).toEqual(true);
    });


    it('form class check', () => {
      expect(wrapper.exists('.container-fluid')).toEqual(true);
    });


    it('Inputbox check', () => {
      expect(wrapper.exists('TeamOmegaInputBox')).toEqual(true);
    });

    it('Inputbox class check', () => {
      expect(wrapper.exists('.form-control')).toEqual(true);
    })
    
    it('Buttons check', () => {
      expect(wrapper.exists('TeamOmegaButtons')).toEqual(true);
    });

    it("Button class check", () => {
      expect(wrapper.exists('.btn-light')).toEqual(true);
    })

    it("Button class check", () => {
      expect(wrapper.exists('.mx-3')).toEqual(true);
    })


    it('TodoListApp check', () => {
      expect(wrapper.exists('TodoListApp')).toEqual(true);
    });


    it('Modal popup check', () => {
      expect(wrapper.exists('TeamOmegaModalPopup')).toEqual(true);
    });


  })
})
