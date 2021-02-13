# React Redux Saga Boilerplate

The Create-react-app is used to get initial structure. It will adapt all CRA related things.
demo: https://react-redux-saga-hk.herokuapp.com/

## Features

* React.js - React 16, React Router 5
* Redux.js - Redux, Redux-saga, Redux-actions
* React-intl - multi language support 


## Quick Start

1. Clone this repo using `git clone https://github.com/khotharish1207/react-redux-saga.git`
2. Install dependencies `npm install`
3. Start server `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<!-- ## Project Structure -->



## Getting started

### Adding new route

In the root of project we have `src/routes.js`. You need to add an object with keys `path` and `component` to routes array.
Here is an example
```
[
    ...
    {
        path: '/url' // its require string. It is the view component's url
        component: App // Its requires component which will be served against url given in path
    }
]
```

### Adding new action

In directory `src/redux/actions`, you can define your action type constants and action creators. Here we are using Redux-actions creactors.
For example
```
import { createAction } from "redux-actions";

export const ACTION_TYPE = "ACTION_TYPE";
export const actionCreator = createAction(ACTION_TYPE)
```
You can import these actions in your components like

```
import { ACTION_TYPE, actionCreator }  from "redux/actions/actions"
```
 

### Adding new reducer

You can add your reducer in `src/redux/reducers` directory.

Its convention to use 'Reducer' in ending in file name.
Sample reducer is added in directory `src/redux/reducers/sampleReducer.js`  

It's important to include your newly created reducer in `rootReducer`.


### Adding new saga

You can add your reducer in `src/redux/sags` directory.

Its convention to use 'Saga' in ending in file name.
Sample reducer is added in directory `src/redux/sagas/sampleSaga.js`  

It's important to include your newly created reducer in `rootSaga`.


### Adding multilanguages

This project uses [react-intl](https://www.npmjs.com/package/react-intl)  for multi language support.

Currently it has `en` and `fr` supported keys added (Only for sample). 
You can add your language spefic keys by adding file with your choosen language in `src/messagebundle` directory. It's necessary to have same key in all language against which you are adding text in other language. Again don't forget to include your language key file in `src/messagebundle/index.js`. 
It is recommneded to use language code as your file name.

Example: If you have key `greet` in file. 

```
import { FormattedMessage } from "react-intl";

<FormattedMessage id="greet" defaultMessage={`Welcome`} />

```

For more documentation you can take look at https://github.com/formatjs/react-intl/blob/master/docs/Getting-Started.md#the-react-intl-module

