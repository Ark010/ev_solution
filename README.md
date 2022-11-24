# Prerequsities needed: nodejs must be installed in our system
# Below steps have been followed to build the application
##### `Development`:
# Step 0: Create a github repository where we can push the changes globally
        git repo: `https://github.com/Ark010/ev_solution`
# Step 1: Clone the repository in a local folder with below cammand
        git clone `https://github.com/Ark010/ev_solution`
# Step 2: Create a react project with below cammand in local git repository created in previous step: 
        npx create-react-app 'ev_solution'
# Step 3: Change directory to 'ev_solution'
        cd ev_solution
# Step 4: Install below dependency libraries using npm cammand as it is used in the application
        npm install axios
# Step 5: Do the code changes as per the requirements

# Step 6: Run the project with below cammand in develpoment mode:
        npm start (Open [http://localhost:3000](http://localhost:3000) to view it in your browser.)
# Step 7:Finally, add all the changes to git using below cammands
        git add .
        git commit -m "commit comments"
        git push origin main

### `Deployment`:

# The developed project has been deployed to heroku server
# Step 0: Run below cammand to builds the app for production to the `build` folder.\
        `npm run build`
        It correctly bundles React in production mode and optimizes the build for the best performance.
# Step1: created a nodejs app on heroku server and it cretaed a git repo as:
        https://git.heroku.com/ev-solution.git

# Step 2: Clone the repository in a local folder with below cammand
        git clone `https://git.heroku.com/ev-solution.git`
`
# Step 3: Copy the developed project in this repo folder

# Step 4: Finally, add all the changes to heroku server using below cammands
        git add .
        git commit -m "commit comments"
        git push origin master

# Step 5: Run the application with url developed by heroku server   
        https://ev-solution.herokuapp.com/
