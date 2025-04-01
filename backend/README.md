# SSP Server

## ENV checklist

- Copy [`example.env`](./example.env) to make a `.env` file.
- MONGO_URI points to the MongoDB connection string, error logged if not provided
- PORT points to the PORT to use, if not specified `5500` is used.
- FRONTEND_LOCAL_URL points to frontend URL for CORS configuration if any

## NPM Commands Checklist
- Running the express server
```bash
npm run start
```

- Run ESLint checks (Javascript errors ke liye)
```bash
npm run lint
```

- Run Prettier format checks (formatting check ke liye)
```bash
npm run check
```

- Run Prettier to format (automatically formatting ke liye)
```bash
npm run format
```