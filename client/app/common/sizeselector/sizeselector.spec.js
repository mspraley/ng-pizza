import SizeselectorModule from './sizeselector'
import SizeselectorController from './sizeselector.controller';
import SizeselectorComponent from './sizeselector.component';
import SizeselectorTemplate from './sizeselector.html';

describe('Sizeselector', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SizeselectorModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SizeselectorController();
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
      expect(SizeselectorTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SizeselectorComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SizeselectorTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SizeselectorController);
      });
  });
});
