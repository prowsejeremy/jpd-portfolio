export const PostScoreMutation = {
  query: `
    mutation postScore($name:String!, $score:Int!) {
      createPlayer(input: {type: "Player", name: $name, score: $score}) {
        type
        name
        score
      }
    }
  `,
  variables: {}
}