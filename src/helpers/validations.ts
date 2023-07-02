
export function isCohortValid(cohortName:string) {
  // si es en el formato 37a (numero de dos digito y una letra)
  const regex:RegExp = /^\d{2}[a-zA-Z]$/

  return regex.test(cohortName)
}