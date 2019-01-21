var UtilityFunctions;
(function (UtilityFunctions) {
    function lateFees(days, books) {
        return ((days + books) * 0.25);
    }
    UtilityFunctions.lateFees = lateFees;
})(UtilityFunctions || (UtilityFunctions = {}));
//# sourceMappingURL=utilityFunctions.js.map