import { MongoClient } from "mongodb";
import mongoConnectionString from "@/src/lib/mongo/buildConnectionString";

const dbconnect = async (): Promise<{ db: any; client: MongoClient }> => {
  try {
    const uri = mongoConnectionString();
    const client = new MongoClient(uri);
    await client.connect();

    console.log("Connected to MongoDB successfully");
    const db = client.db(process.env.MONGO_DB);

    return { db, client };
  } catch (e: any) {
    console.error("Error connecting to MongoDB:", e.message);
    throw e;
  }
};

const dbdisconnect = async (client: any) => {
  try {
    await client.close();
    console.log("Disconnected from MongoDB successfully");
  } catch (e: any) {
    console.error("Error disconnecting from MongoDB:", e.message);
  }
};

export { dbconnect, dbdisconnect };
