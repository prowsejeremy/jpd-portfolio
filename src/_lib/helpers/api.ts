import { signedFetch } from 'src/_lib/helpers/aws-signv4-helper'
import { GetLeaderboardQuery } from 'src/_lib/graphql/Queries/GetPlayersQuery'
import { PostScoreMutation } from 'src/_lib/graphql/Mutations/PostScoreMutation'

export default {
  appsync: {
    getLeaderboard: async () => {

      const leaderboard = await signedFetch(GetLeaderboardQuery)

      return leaderboard
    },
    postScore: async ({name, score}:{name:String, score:Number}) => {

      PostScoreMutation.variables = { name, score }

      const playerRecord = await signedFetch(PostScoreMutation)

      return playerRecord
    }
  }
}