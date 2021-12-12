# Link to deployed app: [Jobly](https://jobly-react-zach.netlify.app/)

# Link to backend: [Backend](https://github.com/zacharyrb99/react-jobly-backend)

## Features:
This site allows you to search for companies and jobs to apply for.

1. Log in or sign up
    - I chose to make the app require a user to log in to use most of its features. This simplified the applying feature for jobs. The only thing you will be able to do while anonymous is view the homepage. 
2. Search companies or jobs.
    - I set the search funtionality up to be able to allow users to search for a company/jobs based on company size, salary or equity.
3. Apply to jobs
    - This feature allows users to easily apply for a job they found interesting.
4. Update user profile
    - This will allow a user to change their name and email, and requires password authentication. User currently aren't able to change their username or password. Currently bugged, working on a fix now.

## Flow
1. Create an account.
2. Head to company search page.
3. Search for company.
4. Apply for jobs for that company.

## Testing
All the tests are located on the backend repo (linked above). Simply open this folder in your terminal and run `npm run test`

## Tech Stack:
- __Front-end__: React
- __Back-end__: Nodejs, Express
- __Database__: Postgresql
