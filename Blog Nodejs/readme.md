# Start
- Install node
- [Install ExpressJs](https://www.npmjs.com/package/express)
  - `npm init`
  - `npm install express`
  - [Get started](https://expressjs.com/en/starter/hello-world.html)
  ```javascript
        const express = require("express");
        const app = express();
        const port = 3000;

        app.get("/", (req, res) => res.send("Hello World!"));

        app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); 
    ```

- [Install Nodemon & inspector](https://www.npmjs.com/package/nodemon)
    - `npm install --save-dev nodemon`
    - Modify package.json - script
    ```json
    "scripts": {
    "start": "nodemon --inspect index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    ```
    - `--inspect` to show devtool nodejs inspect when inspect (debugging), nodejs logo in devtool
    - `npm start` to run project

