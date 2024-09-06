![0_gV7fEaDKRGwpprdj](https://user-images.githubusercontent.com/52916480/180915551-8078bbb0-2cda-4366-b85f-3ff70cf0349d.png)

# Automation API Testing Framework

> Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases

> Chai is a assertion library for Node and the browser and can be used with any testing framework (like Mocha)

## Prerequisites:

-   Install Node.js and npm, we will use npm to install Mocha and Chai
-   POSTMAN for making fast HTTP requests to the API

## How to Getting Started:

```sh
$ cd qa_test
$ npm install
$ cp env.sample .env //when using mac
$ copy env.sample .env //when using windows
```

## This is directory structure within `qa_test`

##### -- api

##### ---- data

##### ---- helper

##### ---- page

##### ---- test

##### -- reports

##### -- seed_data

##### -- .env

##### -- package.json

| Directory | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| data      | For test data, file extention should be .json                     |
| helper    | Common code, for general needed such as response_code, token, etc |
| page      | 1 endpoint, many HTTP method in one file .js                      |
| test      | 1 endpoint, 1 HTTP method, many test cases                        |

## Foldering and Naming Convention

1. Filename using `snake_case`
2. Variable name using `camelCase`
3. The file (.js and .json) should be located in a path that matches the endpoint path

```sh
POST {{url}}/suggestions/product
--page: /qa_test/api/page/suggentions/product.js
--test: /qa_test/api/test/suggentions/get_product_test.js
        /qa_test/api/test/suggentions/post_product_test.js
--data: /qa_test/api/data/suggentions/product_data.json
```

## Run the test

###### Here are our default commands:

```sh
$ npm run test-api | to run all tests
$ npm run test-api -- --grep @tag | to run test with specific tag
$ npm run test-api -- --grep @skip --invert | to exclude @skip tag

$ npm run test-reports | to generate mochawesome report
```

You can specify the command that you want to run from package.json file.

## Dummy Sample REST API

1. http://fakerestapi.azurewebsites.net/swagger
2. https://reqres.in
3. http://dummy.restapiexample.com
4. https://jsonplaceholder.typicode.com/

## Generate Schema JSON

https://jsonschema.net

## Reference

1. https://medium.com/@fadlymahendra/api-test-automation-menggunakan-mocha-chai-22a78c48e842
2. https://medium.com/ralali-engineering/quality-engineering-transformation-in-ralali-com-4852b03fe5f8

# Let's make TRUSTED and IMPACTFUL tests!
