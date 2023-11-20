# Jeremy Prowse Digital
## Portfolio site

If, for whatever bizarre reason you find yourself reading this, welcome! This is code behind my personal portfolio site: [jpd.nz](https://jpd.nz). I have used this project to explore a few ideas I've wanted to play around with as well as a testing ground for a number of technologies I've been interested in trying out.

The site, while rather simple in design has a few key elements going on under the hood 👀:

- Next.js 13 using the app dir
- Styled Components
- Fully Typescript
- Scalable UI/Design > 1024px
- Deployment and hosting via AWS Amplify
- A super secret easter egg 🤫 that integrates with [AWS AppSync to host a custom backend](https://medium.com/@prowsejeremy/aws-appsync-api-access-via-iam-user-in-nodejs-95f8d722e3c6)

### Setup and dev

- Ensure you have a current Node.js (16>) development environment setup.
- Configure a local .env file with the appropriate environment variables then run:

```
  npm i && npm run dev
```

Head to [localhost:3000](http://localhost:3000) in your browser and you're off to the races 🐎
