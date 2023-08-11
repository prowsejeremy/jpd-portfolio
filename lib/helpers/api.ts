import { signedFetch } from 'lib/helpers/aws-signv4-helper'
import { GetLeaderboardQuery } from 'lib/graphql/Queries/GetPlayersQuery'
import { PostScoreMutation } from 'lib/graphql/Mutations/PostScoreMutation'

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