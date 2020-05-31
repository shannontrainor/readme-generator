function generateMarkdown(data) {
  return `
## Title
  ${data.title}

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

## Questions
  For questions concerning this repo, visit [${data.username}] (${data.url}) or emails ${data.email}.
`;


}

module.exports = generateMarkdown;
