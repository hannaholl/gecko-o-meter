# gecko-o-meter

This consists of a `GeckoMeter` React component that renders a pointer meter (is this what they're called??) and a container component that fetches data from `https://widgister.herokuapp.com/challenge/frontend` and passes it down to the meter component.

## Requirements
[Node / npm](https://nodejs.org/en/)

## Get started
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

## Usage

### Components

#### MeterContainer
This container component is responsible for fetching data and passing it down to the presentational components. It also shows a loading message while getting the data and an error message if something went wrong.

#### GeckoMeter
The `GeckoMeter` component renders the min, max and current values in `Unit` components and calculates the percentage between them to display in the `PointerMeter`.
##### Props
| Name | Type | Description |
| --- | --- | --- |
| min | Number | The minimum value to display |
| max | Number | The maximum value to display |
| value | Number | The current value |
| format | String | The format of the values, currently only `currency` is supported |
| unit | String | The unit for the values |

#### PointerMeter
The `PointerMeter` component takes a percentage and displays a meter with the pointer pointing to the percentage passed in.
##### Props
| Name | Type | Description |
| --- | --- | --- |
| percentage | Number | A number between 0-1 |

#### Unit
This component renders a value along with an optional unit. If the format passed in equals `currency` and the `unit` is one of the supported currencies (currently GBP, USD and EUR) it will show the currency symbol before the value. Otherwise the `unit` will simply be displayed after the value. Both format and unit are optional and if they are not supplied the value will be displayed on it's own.
##### Props
| Name | Type | Description |
| --- | --- | --- |
| value | Number | The current value |
| format | String | The format of the values, only `currency` is supported |
| unit | String | The unit of the value |

## Next steps

Given the time limitations and that this is just a small test, there are a lot of things that can be improved or added.

- Implement different kind of meters for the same data and let users switch between them.
- Some interactions would be nice. Maybe let users  play around with the values and animate the pointer as they change.
- Improve the design.
- Make it responsive. At the moment it's a fixed size.
- Better error handling.
  - If the value returned is not within the min/max range meter will just go to min/max. This should probably be handled differently.
  - Sometimes the min value is more than the max. Right now we just swap them around when this happens but we should probably let the user know that the data might be incorrect.
- Add tests.
- Add a loader while fetching data.
- Update the data over time.
- Support more currencies (instead of printing the currency code when it's an unkown currency). There should be an API for this, or possibly we can find the data somewhere and store it in our own db or the app.
- Improve the build script. We should create a separate CSS file (use [ExtractTextPlugin](https://github.com/webpack/extract-text-webpack-plugin) for this), minimise the code etc.
