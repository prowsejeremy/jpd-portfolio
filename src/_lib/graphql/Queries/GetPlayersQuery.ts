export const GetLeaderboardQuery = {
  query: `
    query getLeaderboard {
      playersOrderedByScore(
        type: "Player",
        limit: 10,
        sortDirection: DESC
      ) {
        items {
          type
          name
          score
        }
      }
    }
  `
}