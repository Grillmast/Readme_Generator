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
  * [Questions](#questions)
  ${licenseSection}

  ## Features
  ${data.features}

  ## How to Use This Application
  ${data.usage}

  ## Tests 
  ${data.tests}
  
  ## Contributing
  ${data.contributing}

  ## Questions
  If you have any questions about the repo, please contact [${data.github}](mailto:${data.email}).
  `;
  }
  
  module.exports = generateMarkdown;
  