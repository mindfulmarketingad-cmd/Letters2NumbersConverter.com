/**
 * JSON to Java Code Generator utilities
 */

interface JsonValue {
  [key: string]: any
}

function toPascalCase(str: string): string {
  return str
    .split(/[\W_]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

function toCamelCase(str: string): string {
  const pascal = toPascalCase(str)
  return pascal.charAt(0).toLowerCase() + pascal.slice(1)
}

function getJavaType(value: any): string {
  if (value === null || value === undefined) return 'Object'
  if (typeof value === 'boolean') return 'boolean'
  if (typeof value === 'number') {
    return Number.isInteger(value) ? 'int' : 'double'
  }
  if (typeof value === 'string') return 'String'
  if (Array.isArray(value)) {
    const elementType = value.length > 0 ? getJavaType(value[0]) : 'Object'
    return `List<${elementType}>`
  }
  if (typeof value === 'object') return 'Object'
  return 'Object'
}

function generateGetterSetter(fieldName: string, type: string): string {
  const camelCase = toCamelCase(fieldName)
  const pascalCase = toPascalCase(fieldName)
  
  // Handle generic types for display
  const displayType = type.includes('List') ? type : type

  return `    public ${displayType} get${pascalCase}() {
        return this.${camelCase};
    }

    public void set${pascalCase}(${displayType} ${camelCase}) {
        this.${camelCase} = ${camelCase};
    }\n`
}

function generateInnerClass(className: string, obj: JsonValue, indent: number = 0): string {
  const indentStr = '    '.repeat(indent)
  let code = `${indentStr}public static class ${className} {\n`

  // Add private fields
  for (const [key, value] of Object.entries(obj)) {
    const type = getJavaType(value)
    const camelCase = toCamelCase(key)
    code += `${indentStr}    private ${type} ${camelCase};\n`
  }

  code += '\n'

  // Add getters and setters
  for (const [key, value] of Object.entries(obj)) {
    const type = getJavaType(value)
    const getter = generateGetterSetter(key, type)
    code += getter
      .split('\n')
      .map(line => (line.trim() ? indentStr + line : line))
      .join('\n')
  }

  code += `${indentStr}}\n`
  return code
}

export function generateJavaCode(jsonString: string, className: string = 'JsonObject'): string {
  try {
    const json = JSON.parse(jsonString)
    const pascalClassName = toPascalCase(className)
    
    let code = `public class ${pascalClassName} {\n`

    // Add private fields
    for (const [key, value] of Object.entries(json)) {
      const type = getJavaType(value)
      const camelCase = toCamelCase(key)
      
      if (type === 'Object' && typeof value === 'object' && !Array.isArray(value)) {
        const innerClassName = toPascalCase(key)
        code += `    private ${innerClassName} ${camelCase};\n`
      } else {
        code += `    private ${type} ${camelCase};\n`
      }
    }

    code += '\n'

    // Add getters and setters for main class
    for (const [key, value] of Object.entries(json)) {
      const getter = generateGetterSetter(key, getJavaType(value))
      code += getter
    }

    // Add inner classes for nested objects
    for (const [key, value] of Object.entries(json)) {
      if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
        const innerClassName = toPascalCase(key)
        code += '\n' + generateInnerClass(innerClassName, value)
      }
    }

    code += '}\n'
    return code
  } catch (error) {
    throw new Error(`Invalid JSON: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}
