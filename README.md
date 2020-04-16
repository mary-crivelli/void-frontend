# The Void - React Frontend

The Void is a mock forum style website with the following functionality: user signup, making/deleting posts, and user signin/logout.

To run the application on your local machine: 
- Get the [backend](https://github.com/carnsds-ibm/backend-openliberty-demo) up and running
- Clone this repo
- Navigate into the repo in your terminal
- Create a .env file in the root directory and set a variable named `BACKEND_URL` to an appropriate host, or export the variable in your terminal `export BACKEND_URL="<backend url>"`
- Run `npm install`
- Run `chmod +x start.sh`, then execute the `start.sh` script in your root directory

The app should be running on http://localhost:3000. You will know it is working properly if you see the login screen.
