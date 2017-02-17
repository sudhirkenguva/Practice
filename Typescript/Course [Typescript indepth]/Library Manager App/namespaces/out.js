var UtilityFunctions;
(function (UtilityFunctions) {
    function lateFees(days, books) {
        return ((days + books) * 0.25);
    }
    UtilityFunctions.lateFees = lateFees;
})(UtilityFunctions || (UtilityFunctions = {}));
/// <reference path="utilityFunctions.ts" />
var fees = UtilityFunctions.lateFees(15, 3);
console.log('late fees is ' + fees);
