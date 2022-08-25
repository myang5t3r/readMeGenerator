// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      badge = 'https://img.shields.io/badge/license-MIT-blue';
      return badge;
    case 'Apache 2.0':
      badge ='https://img.shields.io/badge/license-Apache%202.0-blue';
      return badge;
    case 'GNU GPLv3':
      badge = 'https://img.shields.io/badge/license-GNU%20GPLv3-blue';
      return badge;
    case 'ISC':
      badge ='https://img.shields.io/badge/license-ISC-blue';
      return badge;
    case 'None':
      badge ='';
      return badge;
  };    
}

//Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      link= 'https://choosealicense.com/licenses/mit/';
      return link;
    case 'Apache 2.0':
      link='https://choosealicense.com/licenses/apache-2.0/';
      return link;
    case 'GNU GPLv3':
      link= 'https://choosealicense.com/licenses/gpl-2.0/';
      return link;
    case 'ISC':
      link='https://choosealicense.com/licenses/isc/';
      return link;
    case 'None':
      link='';
      return link;
  }; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  // Use functions above to create items on markdown
  // renderLicenseBadge(data.license)
  // generate Markdown here
  let mkdwObject = `
  ## ${data.title}
  ___
  ## Table on Contents
  1. [${data.title}](#${data.title})
  2. [License](#License)
  3. [Description](#Description)
  4. [Installation](#Installation)
  5. [Usage](#Usage)
  6. [Contributing](#Contributing)
  7. [Tests](#Tests)
  8. [Questions](#Questions)
  ___
  ## License
  [![](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
  ___
  ## Description
  ${data.projectDescription}
  ___
  ## Installation
  ___
  ## Usage
  ___
  ## Contributing
  ___
  ## Tests
  ___
  ## Questions
  ___
  `
  // Return markdown to it can be saved
  return mkdwObject;
}

module.exports = generateMarkdown;
