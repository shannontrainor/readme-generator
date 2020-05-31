function generateMarkdown(data) {
  return `
# ${data.title}

## Description 
  ${data.description}

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## Contributors
  ${data.contributors}

## Testing
  ${data.test}
`;





}

module.exports = generateMarkdown;
