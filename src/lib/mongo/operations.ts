import { dbconnect, dbdisconnect } from "@/src/lib/mongo/connections";

const postScore = async ({ name, score }: { name: string; score: number }) => {
  try {
    const { db, client } = await dbconnect();
    const collection = db.collection("leaderboard");

    await collection.insertOne({ name, score });

    await dbdisconnect(client);

    return {
      status: "success",
      message: "Score posted successfully",
    };
  } catch (e: any) {
    console.error("FAILURE: Could not insert valid document:", e.message);
    throw new Error("Could not post score");
  }
};

const getScores = async () => {
  try {
    const { db, client } = await dbconnect();
    const collection = db.collection("leaderboard");

    const scores = await collection.find().sort({ score: -1 }).toArray();

    await dbdisconnect(client);

    return {
      data: scores,
      message: "Scores retrieved successfully",
    };
  } catch (e: any) {
    console.error("FAILURE: Could not retrieve scores:", e.message);
    throw new Error("Could not retrieve scores");
  }
};

export { postScore, getScores };
