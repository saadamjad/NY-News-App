# assignment

React Native Project.
This is a React Native project that showcases the implementation of basic ecomerce UI and unit testing with Jest and the usage of Redux for state management.


## Project Setup
<details>
  <summary>Click to expand!</summary>


- Clone this repo `git clone https://github.com/saadamjad/assignment-react-native-fabric`

- Install dependencies `yarn install`
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

Requirements : https://www.freepik.com/free-vector/furniture-shopping-app-concept_9978560.htm


### Unit Testing with Jest

Jest is a popular JavaScript testing framework that provides an easy-to-use and comprehensive solution for unit testing. It is commonly used in React Native projects to test components, functions, and other parts of the application.

In this project, we have included unit tests for some of the components using Jest. You can find the test files inside the __tests__ directory.

To run the unit tests, use the following command:

  <details>
  -  `npm test or yarn test`
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