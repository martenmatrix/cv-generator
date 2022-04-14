# CV Generator

This is a simple React application to create a Curriculum Vitae. The user is able to enter his personal information, add experience sections and add education sections.

It was written in React classes and then rewritten to with function components. The React classes version is located in the `main` branch and the functional component's version is located in the `function-component-rewrite`.

## Table of Contents
- [Deployed links](#globe_with_meridians-deployed-links)
- [Usage](#grey_exclamation-usage)
- [Features](#sparkles-features)
- [Installation](#wrench-installation)
- [Technology stack](#blue_book-technology-stack)
- [License](#scroll-license)

## :globe_with_meridians: Deployed links
The application is hosted at the following address:

- https://martenmatrix.github.io/cv-generator/

## :grey_exclamation: Usage
1. Enter your personal information like your first name, last name, e-mail, phone and address in the section with the title of "General Info".
2. In the section "Education", you are able to add your education. You are able to enter the name of the school, a brief description about your education and a timeframe. If you want to add another education section, just click the "Add" button.
3. In the section "Experience", you are able to add your experience. You are able to enter the company you've worked at, the position you've held, a timeframe and a brief description. If you want to add another experience section, just click the "Add" button.
> :warning: Exports are currently not supported. You'll have to take a screenshot.

If something does not work as expected, or you have a suggestion, please [create an issue](https://github.com/martenmatrix/cv-generator/issues/new).

## :sparkles: Features
- create a CV
- the CV updates as you type
- add general information
- add multiple education sections
- add multiple experience sections

##  :wrench: Installation

If you want to run the application on your local pc or just want to contribute, do the following steps:

1. Clone the repository.
	`git clone https://github.com/martenmatrix/cv-generator`

2. Install the dependencies.
	`npm install`

3. If you want to run the website on your localhost type: 
	`npm run start`

4. If you want to build the website for deployment run:
	`npm run build`
	A folder called `build` should get created.

## :blue_book: Technology Stack
- **Create React App** v4.0.3

## :scroll: License
[MIT](https://github.com/martenmatrix/cv-generator/blob/main/LICENSE)
