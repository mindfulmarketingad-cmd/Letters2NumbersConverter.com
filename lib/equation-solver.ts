/**
 * Fill In The Blanks Equation Solver utilities
 * Solves mathematical equations with missing digits or operators
 */

export interface EquationSolution {
  original: string
  solution: string
  missing: string | number
  type: "digit" | "operator"
  verification: boolean
  explanation: string
}

/**
 * Parse equation and find missing value
 */
export function solveEquation(equation: string): EquationSolution[] {
  const equation_clean = equation.replace(/\s+/g, "").toUpperCase()
  const solutions: EquationSolution[] = []

  // Check if equation has = sign
  if (!equation_clean.includes("=")) {
    throw new Error("Equation must contain an equals sign (=)")
  }

  const [left, right] = equation_clean.split("=")

  if (!left || !right) {
    throw new Error("Invalid equation format")
  }

  // Try replacing ? with digits (0-9)
  if (equation_clean.includes("?")) {
    for (let digit = 0; digit <= 9; digit++) {
      const testEquation = equation_clean.replace("?", digit.toString())
      try {
        if (evaluateEquation(testEquation)) {
          solutions.push({
            original: equation,
            solution: testEquation,
            missing: digit,
            type: "digit",
            verification: true,
            explanation: `Missing digit is ${digit}. Verification: ${testEquation} = true`,
          })
        }
      } catch (e) {
        // Continue if evaluation fails
      }
    }

    // Try replacing ? with operators
    const operators = ["+", "-", "*", "/"]
    for (const op of operators) {
      const testEquation = equation_clean.replace("?", op)
      try {
        if (evaluateEquation(testEquation)) {
          solutions.push({
            original: equation,
            solution: testEquation,
            missing: op,
            type: "operator",
            verification: true,
            explanation: `Missing operator is ${op}. Verification: ${testEquation} = true`,
          })
        }
      } catch (e) {
        // Continue if evaluation fails
      }
    }
  }

  if (solutions.length === 0) {
    throw new Error("No valid solution found for this equation")
  }

  return solutions
}

/**
 * Evaluate mathematical equation
 */
export function evaluateEquation(equation: string): boolean {
  try {
    // Remove spaces
    equation = equation.replace(/\s+/g, "")

    // Split by =
    if (!equation.includes("=")) {
      throw new Error("No equals sign")
    }

    const [leftStr, rightStr] = equation.split("=")

    // Evaluate both sides
    const leftVal = evaluateExpression(leftStr)
    const rightVal = evaluateExpression(rightStr)

    return Math.abs(leftVal - rightVal) < 0.0001 // Account for floating point errors
  } catch (e) {
    return false
  }
}

/**
 * Safely evaluate mathematical expression
 */
function evaluateExpression(expr: string): number {
  // Remove spaces
  expr = expr.replace(/\s+/g, "")

  // Check for invalid characters
  if (!/^[0-9+\-*/.()]+$/.test(expr)) {
    throw new Error("Invalid characters in expression")
  }

  // Use function constructor with strict evaluation
  try {
    // eslint-disable-next-line no-new-func
    const result = new Function(`"use strict"; return (${expr})`)()
    return Number(result)
  } catch (e) {
    throw new Error("Invalid expression")
  }
}

/**
 * Generate fill-in-the-blank exercise
 */
export function generateExercise(
  difficulty: "easy" | "medium" | "hard",
  type: "digit" | "operator"
): { equation: string; answer: string | number } {
  let num1, num2, num3, operator

  if (difficulty === "easy") {
    num1 = Math.floor(Math.random() * 10) + 1
    num2 = Math.floor(Math.random() * 10) + 1
  } else if (difficulty === "medium") {
    num1 = Math.floor(Math.random() * 50) + 10
    num2 = Math.floor(Math.random() * 50) + 10
  } else {
    num1 = Math.floor(Math.random() * 500) + 100
    num2 = Math.floor(Math.random() * 500) + 100
  }

  if (type === "operator") {
    const operators = ["+", "-", "*", "/"]
    operator = operators[Math.floor(Math.random() * operators.length)]

    let result: number
    if (operator === "+") result = num1 + num2
    else if (operator === "-") result = num1 - num2
    else if (operator === "*") result = num1 * num2
    else result = Math.floor(num1 / num2)

    return {
      equation: `${num1} ? ${num2} = ${result}`,
      answer: operator,
    }
  } else {
    // Missing digit
    operator = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)]
    let result: number
    if (operator === "+") result = num1 + num2
    else if (operator === "-") result = num1 - num2
    else if (operator === "*") result = num1 * num2
    else result = Math.floor(num1 / num2)

    const resultStr = result.toString()
    const missingIndex = Math.floor(Math.random() * resultStr.length)
    const missingDigit = resultStr[missingIndex]

    const resultWithBlank = resultStr.substring(0, missingIndex) + "?" + resultStr.substring(missingIndex + 1)

    return {
      equation: `${num1} ${operator} ${num2} = ${resultWithBlank}`,
      answer: missingDigit,
    }
  }
}

/**
 * Validate equation format
 */
export function isValidEquationFormat(equation: string): boolean {
  const cleaned = equation.replace(/\s+/g, "")
  return cleaned.includes("=") && cleaned.includes("?")
}
