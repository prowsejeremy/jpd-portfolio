db = db.getSiblingDB(process.env.MONGO_DB);

// Create Initial User
try {
  db.createUser({
    user: process.env.MONGO_USER,
    pwd: process.env.MONGO_PASS,
    roles: [
      {
        role: "readWrite",
        db: process.env.MONGO_DB,
      },
    ],
  });
  console.log("User created successfully.");
} catch (e) {
  console.log("User already exists, skipping creation.");
}

// Create Collection
try {
  db.createCollection("leaderboard", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "score"],
        properties: {
          name: {
            bsonType: "string",
            pattern: "^[a-zA-Z]{3}$",
            description:
              "must be a string of exactly 3 alphabetic characters and is required",
          },
          score: {
            bsonType: "int",
            minimum: 0,
            description:
              "must be an integer greater than or equal to 0 and is required",
          },
        },
      },
    },
  });

  db.leaderboard.createIndex({ score: -1 });
  console.log("Collection created successfully.");
} catch (e) {
  console.log("Collection already exists, skipping creation.");
}
