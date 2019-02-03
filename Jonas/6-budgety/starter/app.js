// Budget Controller
var budgetController = (function(){

  // Think of this as an object generator whenever we need to add an expense
  var Expense = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // Think of this as an object generator whenever we need to add an income
  var Income = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // Here where our data will be stored
  var data = {
    entries: { // Entries will be stored here "expenses OR incomes"
      exp: [],
      inc: []
    },
    totals: { // Total expenses or total incomes
      exp: 0,
      inc: 0
    }
  };

  return {
    /* OK, so we need to add an entry by using either Expense constructor OR Income constructor.
    * In order to know which one to use, we need to know what type is chosen:
    - If it's exp (-), then use Expense constructor
    - If it's inc (+), then use Income constructor */
    addEntry: function(type, des, val){
      var newEntry, ID;

      // Create new ID
      /* Remember that each elem of our exp array or inc array is actually an object that has these properties (id , description , value) 
      * Here we're tracking the id of the last elem of the array & then adding 1 */
     if(data.entries[type] > 0){
       ID = data.entries[type][data.entries[type].length - 1].id + 1;
     }else{
       ID = 0;
     }
      

      // Create new entry
      if(type === 'exp'){
        newEntry = new Expense(ID, des, val); 
      }else if(type === 'inc'){
        newEntry = new Income(ID, des, val);
      }
    // Push it into our data structure
     data.entries[type].push(newEntry);

    //  Return the new entry
     return newEntry;
    },
    test: function(){
      console.log(data);
    }
  }

})();



/* ***************************************************** */
// UI Controller
var UIController = (function(){
  var DOMstrings = {        // Private obj
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {   //Public     // Basically we're returning an object with some methods
    getInput: function(){ 
      return {            // this is also an object
        type: document.querySelector(DOMstrings.inputType).value, // income + OR expenses -
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    },
    getDOMstrings: function(){
      return DOMstrings;
    }
  };

})();



/* ***************************************************** */
// Global App Controller
var controller = (function(budgetCtrl, UICtrl){

  var setupEventListeners = function(){   // Private
    var DOM = UICtrl.getDOMstrings(); // Get DOM elements from UI controller
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddEntry);
    document.addEventListener('keypress', function(event){
      if(event.keyCode === 13 || event.which === 13){ // Enter btn
        ctrlAddEntry();
      }
    });
  };

  var ctrlAddEntry = function(){       // Private
    var input, newEntry;
    // 1. Get the field input data
    input = UICtrl.getInput();
    console.log(input);
    // 2. Add the item to the budget controller
    newEntry = budgetCtrl.addEntry(input.type, input.description, input.value);
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  };

  return {                // Public
    init: function(){
      console.log("Welcome to Budgety Application");
      setupEventListeners();
    }
  }

})(budgetController, UIController);

controller.init();