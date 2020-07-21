This is a very simple library you can use to manage your multilanguage in your app.

## Usage
1. Installation
 ```bash
npm i labels-manager
 ```

2. Create a file with a name like '[locale].json' with the following format and put it in the public/labels
    sample name it-IT.json

 ```json
 {
    "demo": {
        "label_01": "Demo Label 01",
        "label_02": "Demo Label 02"
    },
    "anotherContext": {}
}
 ```

2. Import
 ```javascript
 import { LanguageManager } from 'labels-manager';
 ```

3. Load your language (this should be done once an saved in your app state, or update just if you want to reload the labels or change language)
 ```javascript
  const [labels, setLabels] = useState({});
  LanguageManager.loadLabels('it-IT').then(response => {
      setLabels(response);
    })
    .catch(err => {
    console.log("Problem loading the Site Labels");
    });
 ```
 
 4. Show a label in code
  ```javascript
  const [value, setValue] = useState(true);
  const label = value ? 'demo.label_01' : 'demo.label_02';
  ...
  {LanguageManager.getLabel(labels, label, 'default_ demoLabel')}
  ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the Demo app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run distribute`

Builds (made for windows) the app for production to the `dist` folder.<br />
It correctly bundles the React component.

### `npm publish`

Publish the dist on npmjs.

## License
[MIT](https://choosealicense.com/licenses/mit/)
