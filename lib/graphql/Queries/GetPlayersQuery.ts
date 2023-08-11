export const GetLeaderboardQuery = {
  query: `
    query getLeaderboard {
      playersOrderedByScore(
        type: "Player",
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