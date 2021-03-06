/**
 * Purpose   : Finding the week days after entering the date.
 * 
 * @author   : Kumar Shubham
 * @version  : 1.0
 * @since    : 24-07-2018
 */
var utility = require('../utility/utility');
var input = utility.userInput();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
input.question('Enter the month ', (m) => {
    input.question('Enter the day ', (d) => {
        input.question('Enter the year ', (y) => {
            var output = utility.day(m,d,y);
            console.log(days[output]);
            input.close();
        })
    })
})