import { signedFetch } from "@/src/_lib/helpers/awsSignv4Helper";
import { GetLeaderboardQuery } from "src/_lib/graphql/Queries/GetPlayersQuery";
import { PostScoreMutation } from "src/_lib/graphql/Mutations/PostScoreMutation";

const api = {
  appsync: {
    getLeaderboard: async () => {
      const leaderboard = await signedFetch(GetLeaderboardQuery);

      return leaderboard;
    },
    postScore: async ({ name, score }: { name: string; score: number }) => {
      PostScoreMutation.variables = { name, score };

      const playerRecord = await signedFetch(PostScoreMutation);

      return playerRecord;
    },
  },
};

export default api;
