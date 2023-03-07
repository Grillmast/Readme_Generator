// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `<img alt="License: ${license}" src="https://img.shields.io/badge/license-${encodeURIComponent(license)}-blue.svg" />`;
  }
  return '';
}

function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://opensource.org/license/mit-0/)`;
  } else if (license === "Apache 2.0") {
    return `[Apache 2.0](https://opensource.org/license/apache-2-0/)`;
  } else if (license === "GPL 3.0") {
    return `[GPL 3.0](https://opensource.org/license/gpl-3-0/)`;
  } else if (license === "BSD 3") {
    return `[BSD 3](https://opensource.org/license/bsd-3-clause/)`;
  } else if (license === "None") {
    return "";
  }
}
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseSection = data.license !== 'None' ? 
    `## License

    This project is licensed under the ${data.license} license.

    ${renderLicenseLink(data.license)}`
        :'';

    return `# ${data.title}
  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Features](#features)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributing](#contributing)
  ${licenseSection}

  ## Features
  ${data.features}

  ## How to Use This Application
  ${data.usage}

  ## Tests 
  ${data.tests}
  
  ## Contributing
  ${data.contributing}
  `;
  }
  
  module.exports = generateMarkdown;
  