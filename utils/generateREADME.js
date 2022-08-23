// Links to license badges
const licenseBadgeLinks = {
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  Unlicense:
    "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  "Apache 2.0":
    "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "GNU v3":
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "BSD 3-Clause":
    "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "Mozilla Public License 2.0":
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
};

// Function to generate markdown for README
function generateREADME(answers) {
  answers.licenseBadge = licenseBadgeLinks[answers.license];
  return `# ${answers.title}
${answers.licenseBadge}
## Description
${answers.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install dependencies, run the following:
~~~
${answers.installation}
~~~
## Usage
${answers.usage}
## License
This repository is licensed under the ${answers.license} license.
## Contributing
${answers.contribute}
## Tests
To run tests, run the following:
~~~
${answers.tests}
~~~
## Questions
Questions about this repository? Please contact me at [${answers.email}](mailto:${answers.email}). View more of my work in GitHub at [${answers.username}](https://github.com/${answers.username}) 
`;
}

module.exports = generateREADME;
