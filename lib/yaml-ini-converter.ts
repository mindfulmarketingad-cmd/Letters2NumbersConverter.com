/**
 * YAML to INI Converter utilities
 */

export function yamlToIni(yamlContent: string): string {
  const lines = yamlContent.split('\n')
  const iniLines: string[] = []
  let currentSection = ''
  let indentStack: { indent: number; section: string }[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    
    // Skip empty lines and comments
    if (!line.trim() || line.trim().startsWith('#')) {
      continue
    }

    // Calculate indentation
    const indent = line.search(/\S/)
    const content = line.trim()

    // Handle section headers (no indent, ends with colon)
    if (indent === 0 && content.endsWith(':')) {
      currentSection = content.slice(0, -1).trim()
      iniLines.push(`[${currentSection}]`)
      indentStack = []
    } 
    // Handle nested sections
    else if (indent > 0 && content.endsWith(':')) {
      const nestedSection = content.slice(0, -1).trim()
      
      // Update indent stack
      indentStack = indentStack.filter(item => item.indent < indent)
      indentStack.push({ indent, section: nestedSection })
      
      // Create full section path
      const fullSection = [currentSection, ...indentStack.map(item => item.section)].join('.')
      iniLines.push(`[${fullSection}]`)
    }
    // Handle key-value pairs
    else if (indent > 0 && content.includes(':')) {
      const [key, ...valueParts] = content.split(':')
      const value = valueParts.join(':').trim()
      iniLines.push(`${key.trim()}=${formatValue(value)}`)
    }
  }

  return iniLines.join('\n')
}

export function iniToYaml(iniContent: string): string {
  const lines = iniContent.split('\n')
  const yamlLines: string[] = []
  let currentSection: string[] = []

  for (const line of lines) {
    const trimmed = line.trim()

    // Skip empty lines and comments
    if (!trimmed || trimmed.startsWith(';')) {
      continue
    }

    // Handle sections
    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      const sectionName = trimmed.slice(1, -1).trim()
      const sections = sectionName.split('.')
      
      currentSection = sections
      
      // Add indented section header
      const indent = (sections.length - 1) * 2
      yamlLines.push(`${' '.repeat(indent)}${sections[sections.length - 1]}:`)
    }
    // Handle key-value pairs
    else if (trimmed.includes('=')) {
      const [key, ...valueParts] = trimmed.split('=')
      const value = valueParts.join('=').trim()
      
      // Calculate indentation based on section depth
      const indent = currentSection.length * 2
      yamlLines.push(`${' '.repeat(indent)}${key.trim()}: ${parseValue(value)}`)
    }
  }

  return yamlLines.join('\n')
}

function formatValue(value: string): string {
  // Remove quotes if present
  if ((value.startsWith('"') && value.endsWith('"')) || 
      (value.startsWith("'") && value.endsWith("'"))) {
    return value.slice(1, -1)
  }
  return value
}

function parseValue(value: string): string {
  // Handle boolean values
  if (value.toLowerCase() === 'true') return 'true'
  if (value.toLowerCase() === 'false') return 'false'
  
  // Handle numeric values
  if (!isNaN(Number(value)) && value !== '') return value
  
  // Quote string values if they contain special characters
  if (value.includes(' ') || value.includes(':')) {
    return `"${value}"`
  }
  
  return value
}
