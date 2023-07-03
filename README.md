# assignment

React Native Project.
This is a React Native project that showcases the implementation of basic News App and unit testing with Jest and the usage of Redux for state management.


## Project Setup
<details>
  <summary>Click to expand!</summary>


- Clone this repo `git clone https://github.com/saadamjad/NY-News-App`

- Install dependencies `yarn install` .
- Go to the root directory run this command `yarn android or yarn ios`

</details>

## Running the App

### Android and IOS

<details>
  <summary>Click to expand!</summary>


#### Pre-requisite Steps
1. Node.js (v12 or above)
2. npm or Yarn package manager
3. installed React Native Cli
4. Make sure dependencies / node_modules are installed (`yarn install`) (`npx install`)
5. Ensure your devices or simulators (real-device or Android AVD) are set up and running
6. go to the root directory and run this commands `yarn android` or `yarn ios`


</details>



## Development Notes

Requirements 
	•	Build a simple app to hit the NY Times Top Stories API and show a list of stories, that shows details when items on the list are tapped (a typical master/detail app).  (Done) 
	•	User will either select to see categorized top news or search for articles  (Done) 
	•	For categorized news, user should choose a news category out of 2 options: (Done) 
	•	World
	•	Science
	•	After choosing, each category should list a different list of news. (Done) 
	•	When clicking on an article, details must be shown plus the comments on that article  (Done)  
	•	For articles search, the user must have a screen with an input and history of the last 5 searched words. (Done) 
	•	Application should have user registration and login screens, they need to be integrated with local server using this repo -> https://github.com/techiediaries/fake-api-jwt-json-server  (Done) 
	•	The token we fetch from login call, needs to be passed through all NY Times requests in Authorization JWT Bearer token header.   (Done) 
	•	App should run on Android & iOS (Done) 
	•	Use of Redux for error handling and data persistence. (Done) 
	•	Use of Axios (Done) 
	•	Unit test and code coverage (Done) 
	•	Code to be generic and simple  (Done) 
	•	Leverage today’s best coding practices (Done) But still many things can be implemented according to the app scalability.  
	•	Clear README.md that explains how the code and the test can be run, how the coverage reports can be generated and how the local server can run. (Done) 
	•	Design is up to you.  (Done) 


## How to run Jest Test Cases

Jest is a popular JavaScript testing framework that provides an easy-to-use and comprehensive solution for unit testing. It is commonly used in React Native projects to test components, functions, and other parts of the application.

In this project, we have included unit tests for some of the components using Jest. You can find the test files inside the __tests__ directory.
You can find all mock data inside the __mocks__ directory.

To run the unit tests, use the following command:


   • `npm test or yarn test`. 
   • `npm test or yarn test --coverage` (  for test coverage).
   • `npm test or yarn test filename` (  for sepecific  file).



  ### Run Local Server
close this repo : `https://github.com/techiediaries/fake-api-jwt-json-server `

  <details>
   - go to the root directory
   - open terminal and run `npm run start-auth`

  </details>

### Redux

<details>
  <summary>Click to expand!</summary>

#### Avoid Passing Inline Functions

Redux is a popular state management library for JavaScript applications, including React and React Native. It helps manage complex application states by providing a predictable and centralized way to store and update data.

In this project, we have implemented Redux for state management. The main concepts in Redux are:

  1. Store: It holds the entire state tree of the application.
  2. Actions: They are plain JavaScript objects that represent an intention to change the state.
  3. Reducers: They specify how the state changes in response to actions.
  4. Selectors: They are functions that extract specific data from the state.
  5. Dispatch: It is a function provided by Redux to send actions to the store.
  6. You can find the Redux-related files and directories inside the src/state directory.


## Contributing


Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

Feel free to customize the README file to match your specific project structure and requirements. Additionally, ensure to provide proper attribution and licensing information as necessary.

Note: The example above assumes a basic project structure and provides a general overview of unit testing with Jest and Redux. You may need to adapt the information to fit your project's specific details and needs.


Regards

Saad Amjad Mobile App Developer