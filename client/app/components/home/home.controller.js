class HomeController {
  constructor($scope) {
    'ngInject';
    this.name = 'home';
    var ctrl = this;
    ctrl.open = false;
    ctrl.cardSelected = false;
    ctrl.paymentStatus = "Processing..."
    ctrl.paymentSuccess = false

    this.cards = [
      {
        number : 'XXXX  XXXX  XXXX  8543',
        name : 'MATTHEW SPRALEY',
        expirationDate : '09/18'
      },
      {
        number : '4893 3291 1145 5355',
        name : 'MATTHEW SPRALEY',
        expirationDate : '02/20'
      }
    ]
    this.openCardSelector = function() {
      ctrl.open = true;
    }

    this.selectCard = function() {
      ctrl.cardSelected = true
      setTimeout(function(){
        ctrl.paymentStatus = 'Payment Successful';
        ctrl.paymentSuccess = true
        $scope.$apply()
      }, 2000)
    }
  }
}

export default HomeController;
