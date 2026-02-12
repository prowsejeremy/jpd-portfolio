const mongoConnectionString = () => {
  const username = process.env.MONGO_USER;
  const password = process.env.MONGO_PASS;
  const database = process.env.MONGO_DB;

  const host = process.env.MONGO_HOST;
  const port = process.env.MONGO_PORT;

  if (!username || !password || !host || !port || !database) {
    throw new Error(
      "Missing required environment variables for MongoDB connection",
    );
  }

  return `mongodb://${username}:${password}@${host}:${port}/${database}`;
};

export default mongoConnectionString;
