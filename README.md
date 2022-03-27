# NftHouse

Development of a web page that will use an API to obtain a collection of NFTs (Non-Fungible Tokens).

We can create a purchase or sale announcement when we register and start our session.

It will also allow you to remove them from the platform.


## API usage methods

We will have to install our Swagger API in a sister folder of the project:

```sh
npm install
```

To get our server up:

```sh
npm run start
```

Then we must locate ourselves in the root folder of the project:

```sh
cd nfthouse
```

To start the application use:

```sh
npm install
```

In production:

```sh
npm start
```

## API access via routes

List of all NFTs:

- http://localhost:3001/api/v1/adverts/


Find an NFTs by ID:

- http://localhost:3001/api/v1/adverts/id?

Search by tags:

- http://localhost:3001/api/v1/adverts/tags
