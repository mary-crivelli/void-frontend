# The Void - React Frontend

The Void is a mock forum style website with the following functionality: user signup, making/deleting posts, and user signin/logout.

To run the application on your local machine: 
- Get the [backend](https://github.com/carnsds-ibm/backend-openliberty-demo) up and running.
- Clone this repo
- Navigate into the repo
- Create a .env file in the root directory with the following variable declaration `REACT_APP_API_URL=http://localhost:9080`. 
- Run `npm install`
- Run `npm start`, this should execute the `start.sh` script in your root directory and declare your backend port. 

The app should be running on localhost:9080. You will know it is working properly if you see the login screen.