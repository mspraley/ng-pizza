import PizzaModule from './pizza'
import PizzaController from './pizza.controller';
import PizzaComponent from './pizza.component';
import PizzaTemplate from './pizza.html';

describe('Pizza', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PizzaModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PizzaController();
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
      expect(PizzaTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PizzaComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PizzaTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PizzaController);
      });
  });
});
