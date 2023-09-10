# The Backend

## Setup

### Install dependencies

Run `npm install` to install all dependencies specified in `package.json`.

### Start the server

Run `npm start` to start the server. The server will be running on port 3000.

### Start the server in development mode

Run `npm run dev` to start the server in development mode using `nodemon`. The server will be running on port 3000.

### Run tests

Run `npm test` to run all tests.

## API

### GET /api/v1/status

#### Response

##### Body

```json
{
    "status": "Running"
}
```

### POST /api/v1/questions

#### Request

##### Body

```json
{
  "title": "Two Sum",
  "description": "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
  "category": "Array",
  "complexity": "Easy"
}
```

#### Response

##### Body

```json
{
    "id": 1,
    "title": "Two Sum",
    "description": "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    "category": "Array",
    "complexity": "Easy",
    "createdAt": "2019-01-01T00:00:00.000Z",
    "updatedAt": "2019-01-01T00:00:00.000Z"
}
```

### GET /api/v1/questions/:questionId

#### Response

##### Body

```json
{
    "id": 1,
    "title": "Two Sum",
    "description": "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    "category": "Array",
    "complexity": "Easy",
    "createdAt": "2019-01-01T00:00:00.000Z",
    "updatedAt": "2019-01-01T00:00:00.000Z"
}
```

### PUT /api/v1/questions/:questionId

#### Request

##### Body

```json
{
  "title": "Two Sum",
  "description": "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
  "category": "Array",
  "complexity": "Easy"
}
```

#### Response

##### Body

```json
{
    "id": 1,
    "title": "Two Sum",
    "description": "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    "category": "Array",
    "complexity": "Easy",
    "createdAt": "2019-01-01T00:00:00.000Z",
    "updatedAt": "2019-01-01T00:00:00.000Z"
}
```

### DELETE /api/v1/questions/:questionId

#### Response

##### Body

```json
{
    "id": 1,
    "title": "Two Sum",
    "description": "Given an array of integers, return indices of the two numbers such that they add up to a specific target.",
    "category": "Array",
    "complexity": "Easy",
    "createdAt": "2019-01-01T00:00:00.000Z",
    "updatedAt": "2019-01-01T00:00:00.000Z"
}
```
