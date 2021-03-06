/**
 * Purpose   : Displaying calender after user input month and year via using user defined queue.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 29-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
input.question('Enter the month ',(month) => {
    input.question('Enter the year ',(year) => {
        utility.calenderQueue(month,year);
        input.close();
    })
})