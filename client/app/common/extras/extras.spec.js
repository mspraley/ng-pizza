import ExtrasModule from './extras'
import ExtrasController from './extras.controller';
import ExtrasComponent from './extras.component';
import ExtrasTemplate from './extras.html';

describe('Extras', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ExtrasModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ExtrasController();
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
      expect(ExtrasTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ExtrasComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ExtrasTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ExtrasController);
      });
  });
});
