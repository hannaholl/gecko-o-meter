# gecko-o-meter

## Requirements
[Node / npm](https://nodejs.org/en/)

## Setup
#### 1. Clone the repo
`git clone git@github.com:hannaholl/gecko-o-meter.git`

#### 2. Install the node modules
`npm install`

#### 3. Start webpack dev server
Run `npm start` to start the webpack dev server. This will run the app on your [http://localhost:8080](http://localhost:8080).  
`react-hot-loader` is used to update the app as you change the .js and .scss files.

## Build
To create a build, run `npm run build`. This will bundle the app with webpack and copy the `index.html` and `bundle.js` files
into a new `dist` folder. The `dist` folder should contain all files needed to run the app.

## Next steps
- Implement different kind of meters for the same data and let users switch between them.
- Improve the build script. We should create a separate CSS file (use [ExtractTextPlugin](https://github.com/webpack/extract-text-webpack-plugin) for this), minimise the code etc.
- Support more currencies (instead of printing the currency code when it's an unkown currency). There should be an API for this, or possibly we can find the data somewhere and store it in our own db or the app.
- Some interactions would be nice. Maybe let users  play around with the values and animate the pointer as they change.
- Improve the design.
- Make it responsive. At the moment it's a fixed size.
- Add tests.
