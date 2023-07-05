"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCohortValid = void 0;
function isCohortValid(cohortName) {
    // si es en el formato 37a (numero de dos digito y una letra)
    const regex = /^\d{2}[a-zA-Z]$/;
    return regex.test(cohortName);
}
exports.isCohortValid = isCohortValid;
