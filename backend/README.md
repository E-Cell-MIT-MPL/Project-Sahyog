# SSP Server

## ENV checklist

- Copy [`example.env`](./example.env) to make a `.env` file.
- MONGODB_URI points to the MongoDB connection string, error logged if not provided
- PORT points to the PORT to use, if not specified `5500` is used.
- FRONTEND_LOCAL_URL points to frontend URL for CORS configuration if any
- TWILIO_... environment variables refer to Twilio Configuration

## NPM Commands Checklist
- Running the developmental express server
```bash
npm run dev
```

- Running the production express server
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