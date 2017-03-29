# the-sophie-group

To get it up and running:
1) git clone
2) npm install
3) npm run dev

In two separate terminals. The vanilla `npm start` is for production — you won't use it in development!


## I need node >= 6.7.0

## My anatomy

`/app` has the React/Redux setup. `main.jsx` is the entry point.

`/db` has the Sequelize models and database setup.

`/server` has the Express server and routes. `start.js` is the entry point.

`/bin` has scripts. (Right now it has *one* script that creates a useful symlink.)
