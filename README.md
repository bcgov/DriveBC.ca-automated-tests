[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

# DriveBC Front End Automated Tests

This repository is for developing and executing front end testing scripts against the
[new DriveBC.ca site](https://github.com/bcgov/DriveBC.ca).

- [DriveBC Front End Automated Tests](#drivebc-front-end-automated-tests)
  - [Playwright documentation](#playwright-documentation)
  - [Setup](#setup)
  - [Usage](#usage)

---

## <a name="playwright"></a>Playwright documentation
[Playwright](https://playwright.dev/docs/intro)

## <a name="setup"></a>Setup
Copy and rename the .env.example file and rename to .env. Change variables as needed. BCEID_USER and BCEID_PASSWORD are required.

## <a name="usage"></a>Usage
npx playwright test tests/