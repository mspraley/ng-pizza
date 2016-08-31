import PizzaboxModule from './pizzabox'
import PizzaboxController from './pizzabox.controller';
import PizzaboxComponent from './pizzabox.component';
import PizzaboxTemplate from './pizzabox.html';

describe('Pizzabox', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PizzaboxModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PizzaboxController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PizzaboxTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PizzaboxComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PizzaboxTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PizzaboxController);
      });
  });
});
