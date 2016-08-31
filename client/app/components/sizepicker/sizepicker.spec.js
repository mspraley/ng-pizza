import SizepickerModule from './sizepicker'
import SizepickerController from './sizepicker.controller';
import SizepickerComponent from './sizepicker.component';
import SizepickerTemplate from './sizepicker.html';

describe('Sizepicker', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SizepickerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SizepickerController();
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
      expect(SizepickerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SizepickerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SizepickerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SizepickerController);
      });
  });
});
