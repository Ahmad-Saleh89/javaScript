// Budget Controller
var budgetController = (function(){

  // Think of this as an object generator whenever we need to add an expense
  var Expense = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1; // as a default
  };

  /* We are creating a prototype here because we want EACH INSTANCE of an Expense to have a percentage and then calculate this percentage */
  // Remeber: each expense will have its own percentage
  /**
   * Calculate this percentage by dividing this value by the total Income
   * @param {Number} totalIncome total income in our data
   */
  Expense.prototype.calcPercentage = function(totalIncome){
    if(totalIncome > 0){
      this.percentage = Math.round((this.value / totalIncome) * 100);
    }else{
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function(){
    return this.percentage;
  }

  // Think of this as an object generator whenever we need to add an income
  var Income = function(id, description, value){
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function(type){
    var sum = 0;
    data.entries[type].forEach(function(elem){
      sum += elem.value;
    });
    data.totals[type] = sum;
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
    },
    budget: 0,
    percentage: -1
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

    deleteEntry: function(type, id){
      var ids, index;
      /* Remember that we need to detect the index of the element that has the id - Not the id itself.
      That's why we need to create an array of all id's that we have  */
      ids = data.entries[type].map(function(elem){
        return elem.id;
      });
      index = ids.indexOf(id); // returns -1 when false
      if(index !== -1){
        data.entries[type].splice(index, 1);
      }
    },

    calculateBudget: function(){
      // calculate total income and expenses
      calculateTotal('exp');
      calculateTotal('inc');

      // calculate the budget: income - expenses
      data.budget = data.totals.inc - data.totals.exp;

      // calculate the percentage of income that we spent
      if(data.totals.inc > data.totals.exp){
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      }else{
        data.percentage = -1;
      }
    },

    // Calculate ALL expenses' percentages
    /* Remeber: elem here is an exp obj which has an access to Expense prototypes that we created above */
    calculatepercentages: function(){
      data.entries.exp.forEach(function(elem){
        elem.calcPercentage(data.totals.inc); 
      });
    },

    getAllPercentages: function(){ // Array
      // We use map because we want to store all percentages in an array
      var allPercentages = data.entries.exp.map(function(elem){
        return elem.getPercentage();
      });
      return allPercentages; // Array
    },

    getBudget: function(){
      return{
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      }
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
    expensesContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expPercentage: '.item__percentage',
    dateLabel: '.budget_title_date'
  };

    /* + for income & - for expense
    * Generating 2 decimal fields
    * Comma separating the thousands */
   var formatNumber =  function(num, type){
    var numSplit, int, decimal;
    num = Math.abs(num);
    num = num.toFixed(2); // returns string with 2 decimals after rounding it

    numSplit = num.split('.');
    int = numSplit[0];
    if(int.length > 3){ // add a comma if bigger than 999
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length -3, 3);
    }
    decimal = numSplit[1];

    return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + decimal;
  };

  /* In case of a NodeList, we can't use forEach method directly */
  // Therefore, let's create our own NodeList forEach method: nlForEach
  // Also let's use the callback concept as well
  var nlForEach = function(nodeList, callback){
    for(var i = 0; i < nodeList.length; i++){
      callback(nodeList[i], i);
    }
  };

  return {   //Public     // Basically we're returning an object with some methods
    getInput: function(){ 
      return {            // this is also an object
        type: document.querySelector(DOMstrings.inputType).value, // income + OR expenses -
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      }
    },
    // Add a new item to the UI
    addListItem: function(obj, type){
      var html, container;
      // Create HTML string with placeholder text
      if(type === 'inc'){
        // container is the "income__list" NOT the big container
        container = DOMstrings.incomeContainer;
        html = `<div class="item clearfix" id="inc-${obj.id}"><div class="item__description">${obj.description}</div><div class="right clearfix"><div class="item__value">${formatNumber(obj.value, type)}</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`;
      }else if(type === 'exp'){
        container = DOMstrings.expensesContainer;
        html = `<div class="item clearfix" id="exp-${obj.id}"><div class="item__description">${obj.description}</div><div class="right clearfix"><div class="item__value">${formatNumber(obj.value, type)}</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>`
      }
      // Insert the HTML into the right column in the DOM 
      document.querySelector(container).insertAdjacentHTML('beforeend', html);
    },

    // Delete an Item form UI
    /**
     * Pass an id of the element you want to remove
     * @param {*} elemID HTML element id attribute
     */
    deleteListItem: function(elemID){
      var el = document.getElementById(elemID);
      el.parentNode.removeChild(el);
    },

    // Clear input fields
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

    displayBudget: function(obj){
      var type = obj.budget > 0 ? 'inc' : 'exp';
      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
      document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');

      if(obj.percentage > 0){
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
      }else if(obj.percentage == 0){
        document.querySelector(DOMstrings.percentageLabel).textContent = ': )';
      }else{
        document.querySelector(DOMstrings.percentageLabel).textContent = ': (';
      }
    },

    /**
     * Display percentages in UI when it's called
     * @param {Array} percentages All percentages array
     */
    displayPercentages: function(percentages){
      var fields = document.querySelectorAll(DOMstrings.expPercentage); // returns NodeList

      nlForEach(fields, function(current, index){
        if(percentages[index] > 0){
          current.textContent = percentages[index] + '%';
        }else{
          current.textContent = '--';
        }
      });
    },

    displayDate: function(){
      var now, year, months, month;
      now = new Date();
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      month = now.getMonth();
      year = now.getFullYear();
      document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
    },

    changeType: function(){
      var fields = document.querySelectorAll(DOMstrings.inputType + ',' + DOMstrings.inputDescription + ',' + DOMstrings.inputValue);  // returns nodeList

      nlForEach(fields, function(current){
        current.classList.toggle('red-focus');
      });
      document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
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
    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType);
  };

  var updateBudget = function(){     // Private
    // 1. Calculate the budget
    budgetCtrl.calculateBudget();
    // 2. Return the budget
    var budget = budgetCtrl.getBudget()
    // 3. Display the budget on the UI
    UICtrl.displayBudget(budget);
  };

  var updatePercentages = function(){
    // 1. Calculate percentages
    budgetCtrl.calculatepercentages();
    // 2. Read percentages from the budget controller
    var percentages = budgetCtrl.getAllPercentages();
    // 3. Update the UI with the new percentages
    UICtrl.displayPercentages(percentages);
  };

  var ctrlAddEntry = function(){       // Private
    var input, newEntry;
    // 1. Get the field input data
    input = UICtrl.getInput();

    if(input.description !== "" && !isNaN(input.value) && input.value > 0 ){
      // 2. Add the entry to the budget controller
      newEntry = budgetCtrl.addEntry(input.type, input.description, input.value);
      // 3. Add the item to the UI
      UICtrl.addListItem(newEntry, input.type);
      // 4. Clear the fields
      UICtrl.clearFields();
      // 5. Calculate and Update the budget
      updateBudget();
      // 6. Calculate and update percentages
      updatePercentages();
    }
  };

  var ctrlDeleteItem = function(event){
    var itemID, splitID, type, ID;
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    if(itemID){
      // inc-1 , inc-2, exp-5 .... etc
      splitID = itemID.split('-');
      type = splitID[0];
      ID = parseInt(splitID[1]);

      // Delete the item from the data structure
      budgetCtrl.deleteEntry(type, ID);

      // Delete the item from the UI
      UICtrl.deleteListItem(itemID);

      // Update and show the new budget
      updateBudget();

      // Calculate and update percentages
      updatePercentages();
    }
  };

  return {                // Public
    init: function(){
      console.log("Welcome to Budgety Application");
      UICtrl.displayDate();
      setupEventListeners();
    }
  }

})(budgetController, UIController);

controller.init();
