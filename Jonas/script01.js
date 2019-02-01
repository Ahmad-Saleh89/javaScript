var budgetController = (function(){

  var x = 23;               // private
  var add = function(a){    // private
    return x + a;
  }
  return {                  // public Object
    publicTest: function(b){
      return add(b);
    }
  }
})();

budgetController.publicTest(5); // -> 28
// We wouldn't be able to access publicTest without using IFFE
/* So basically budgetController equals an object that has a publicTest method, but we used IFFE so we can set some private variables first */

var UIController = (function(){

  
})();



var controller = (function(budgetCtrl, UICtrl){

  var z = budgetCtrl.publicTest(4);

  return {
    anotherPublic: function(){
      console.log(z);
    }
  }

})(budgetController, UIController);