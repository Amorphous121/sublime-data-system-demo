# API README

## Introduction
This demo is intended for Sublime Data Systems


## Data Structure
Each data record follows the structure below:

- `firstName`: The first name of the individual.
- `lastName`: The last name of the individual.
- `city`: The city where the individual resides.
- `company`: The company where the individual is associated with.
- `_id`: Id of the records

## Endpoint
The API endpoint to access the data is:

```
GET /customers/{customerId}
```

- `customerId`: Unique identifier for each individual record.

## Example
Suppose we have the following data record:

```json
{
  "firstName": "Aman",
  "lastName": "Gupta",
  "city": "Ahmedabad",
  "company": "SublimeDataSystems"
}
```

To access this record via the API, you would make a GET request to:

```
GET /customers/6630b7ca457f01b3b5097bf7
```

Where `6630b7ca457f01b3b5097bf7` is the unique identifier for this record.

## Response
The API responds with the data record in JSON format. For example:

```json
{
    "message": "Customer fetched successfully",
    "status": "success",
    "data": {
        "customer": {
            "_id": "6630b7e4ee590cb9ab7ab42b",
            "firstName": "Aman",
            "lastName": "Gupta",
            "city": "Ahmedabad",
            "company": "SublimeDataSystems",
            "createdAt": "2024-04-30T09:20:36.566Z",
            "updatedAt": "2024-04-30T09:20:36.566Z"
        }
    }
}
```


### Get all customers:


The API responds with an array of customer records, along with pagination information.

To access this record via the API, you would make a GET request to:

```
GET /customers
```

For Example:

```json
{
    "message": "Customer fetched successfully",
    "status": "success",
    "data": {
        "customers": [
            {
                "_id": "6630b7ca457f01b3b5097bf7",
                "firstName": "nayan",
                "lastName": "Gupta",
                "city": "Ahmedabad",
                "company": "SublimeDataSystems",
                "__v": 0
            }
        ],
        "page": "1",
        "limit": "10",
        "totalPage": 1
    }
}
```



### Create Customer:

To access this record via the API, you would make a POST request to:

```
POST /customers
```

The API will take below input:

```json
{
    "firstName": "Aman",
    "lastName": "Gupta",
    "city": "Ahmedabad",
    "company": "SublimeDataSystems"
}
```

## Response 

```json
{
    "message": "Customer fetched successfully",
    "status": "success",
    "data": {
        "customers": [
            {
                "_id": "6630b7ca457f01b3b5097bf7",
                "firstName": "nayan",
                "lastName": "Gupta",
                "city": "Ahmedabad",
                "company": "SublimeDataSystems",
                "__v": 0
            }
        ],
        "page": "1",
        "limit": "10",
        "totalPage": 1
    }
}
```

### Get Citywise customer count:
The API responds with an array of cities with their customer count:

To access this record via the API, you would make a GET request to:

```
GET /customers/citywise-customers
```

## Response 

```json
{
    "message": "CityWise customer count fetched successfully.",
    "status": "success",
    "data": {
        "citiWiseData": [
            {
                "_id": "Ahmedabad",
                "customerCount": 2
            }
        ]
    }
}
```


## Errors
If the requested record is not found, the API responds with a 404 Not Found status code.

If there is an internal server error, the API responds with a 500 Internal Server Error status code.

If the input data is not valid, then the API Will response with 400 BadRequest Error code.