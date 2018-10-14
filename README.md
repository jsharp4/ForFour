# ForFour

ForFour is an application designed to quickly and seamlessly group users with others and find exciting events for them to attend together. A user logs in to the front end, and a user record is established in the MongoDB collection. The user is prompted to take a brief personality quiz and responses are processed as numerical entries in a vector corresponding to each user. These vectors are then placed into a pool, handled by pool.js, and are placed into groups of four using k-means clusting through the "k-means" npm package. A record for each group is stored in the collection. This group is passed to suggestEvent() in event.js, and all members of the group receive this event as a JSON entry in their "events" attribute. Functionality for optimizing based on user availability, calendar interfacing, and the user review process of people and events is unfinished.

The Ionic frontend is run from the forfour/ folder, ideally using the Ionic CLI. The Node.js backend resides in its namesake foler, and can be run using node app.js. app.js acts as the main program file. Other js files in the same directory are accessed via the module.exports attribute and require('./<filename>.js'). Note the in the .gitignore, node_modules for both frontend and backend have been ignored due to being copiously large. After cloning or pulling after changing dependencies, >>npm install will need to be run.
  
The backend is configured to connect to a MongoDB cluster, and credentials can easily be reconfigured within db.js for use by other developers.

More information, plans for future development, data model, and process flow diagram are available on DevPost:
https://devpost.com/software/forfour
