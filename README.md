# Team Profile Generator

### Github : https://github.com/micha2791/Team-Generator

### Walkthrough video :

## Description
a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.


## User Story
```
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

```

## Usage
- This application will allow user to generate a team profile
- Users will be prompt to enter a manager information
- Then user will have choices to select to add a team member (an engineer or an intern) or end the application
- When user selects Engineer, user will be prompted to enter Engineer information included the GitHub
- When user selects Intern, user will be prompted to enter Intern information included the school
- When user selects to end application, HTML page will be generated
- Once HTML page have been created, all the profile entered will be displayed
- When user click on an email address in the HTML, default email program opens and populated the TO field of the email with the address
- When user click on the GitHub username, then that GitHub profile opens in a new tab


## Technologies Use
<p><a href="https://nodejs.org/">Node.js</a></p>
<p><a href="https://www.npmjs.com/">NPM</a></p>
<p><a href="https://www.npmjs.com/package/inquirer">Inquirer.js</a></p>
<p><a href="https://www.npmjs.com/package/jest">Jest</a></p>
<p><a href="https://getbootstrap.com/">Bootstrap</a></p>


## Contributor:
Michael Correa ©2022 All Rights Reserved.
- - -