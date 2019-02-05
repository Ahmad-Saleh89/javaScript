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
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expensesContainer: '.expenses__list'
  };

  return {   //Public     // Basically we're returning an object with some methods
    getInput: function(){ 
      return {            // this is also an object
        type: document.querySelector(DOMstrings.inputType).value, // income + OR expenses -
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      }
    },
    // Add a new item to the UI
    addListItem: function(obj, type){
      var html, container;
      // Create HTML string with placeholder text
      if(type === 'inc'){
        // container is the "income__list" NOT the big container
        container = DOMstrings.incomeContainer;
        html = `<div class="item clearfix" id="income-${obj.id}"><div class="item__description">${obj.description}</div><div class="right clearfix"><div class="item__value">${obj.value}</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
      }else if(type === 'exp'){
        container = DOMstrings.expensesContainer;
        html = `<div class="item clearfix" id="expense-${obj.id}"><div class="item__description">${obj.description}</div><div class="right clearfix"><div class="item__value">${obj.value}</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`
      }
      // Insert the HTML into the right column in the DOM 
      document.querySelector(container).insertAdjacentHTML('beforeend', html);
    },

    clearFields: function(){
      var fields, fieldsArray;
      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue); // --> NodeList
      /* Note that the querySelectorAll does not return an Array, it returns a NodeList. Therefore, we can't use the array methods directly */
      // Convert NodeList into an Array:
      // fieldsArray = Array.prototype.slice.call(fields); --> Older JS 
      fieldsArray = Array.from(fields); // JS 2015
      // Loop through the new Array
      fieldsArray.forEach(function(elem){
        elem.value = "";
      });
      fieldsArray[0].focus();
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
    // 2. Add the entry to the budget controller
    newEntry = budgetCtrl.addEntry(input.type, input.description, input.value);
    // 3. Add the item to the UI
    UICtrl.addListItem(newEntry, input.type);
    // 4. Clear the fields
    UICtrl.clearFields();
    // 5. Calculate the budget

    // 6. Display the budget on the UI
  };

  return {                // Public
    init: function(){
      console.log("Welcome to Budgety Application");
      setupEventListeners();
    }
  }

})(budgetController, UIController);

controller.init();