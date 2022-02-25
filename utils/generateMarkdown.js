// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badge = '';
let link = '';
function renderLicenseBadge(data) {
  if (data.license == "MIT") {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }else if (data.license == "ISC") {
    badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }else if (data.license == "Apache") {
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    badge = '';
  }
  return badge
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  
  if (data.license == "MIT") {
    link = `https://opensource.org/licenses/MIT`;
  }else if (data.license == "ISC") {
    link = `https://opensource.org/licenses/ISC`;
  }else if (data.license == "Apache") {
    link = `https://opensource.org/licenses/Apache-2.0`;
  } else {
    link = '';
  }
  return link
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let license = '';
  if (data.license !== null) {
    license = data.license;
  }
  return `## License: \n${badge}\n\n${link}`;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data);
  renderLicenseLink(data);
  return renderLicenseSection(data);
 
};

module.exports = generateMarkdown;