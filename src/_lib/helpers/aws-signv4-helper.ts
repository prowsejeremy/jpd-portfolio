// ////////////////////////////////////////////////////////////////////////////////////////////////
//
// Guide to how all this works found here:
// - https://medium.com/@prowsejeremy/aws-appsync-api-access-via-iam-user-in-nodejs-95f8d722e3c6
//
// ////////////////////////////////////////////////////////////////////////////////////////////////

import { SignatureV4 } from '@smithy/signature-v4'
import { HttpRequest } from '@smithy/protocol-http'
import { Sha256 } from '@aws-crypto/sha256-js'

const {
  API_URL,
  IAM_ACCESS_KEY_ID,
  IAM_SECRET_ACCESS_KEY
} = process.env;

const apiUrl = new URL(API_URL)

const signer = new SignatureV4({
  service: 'appsync',
  region: 'ap-southeast-2',
  credentials: {
    accessKeyId: IAM_ACCESS_KEY_ID,
    secretAccessKey: IAM_SECRET_ACCESS_KEY
  },
  sha256: Sha256,
})

export const signedFetch = async (graphqlObject:{query:String, variables?:{}}) => {

  if (!graphqlObject) return

  // set up the HTTP request
  const request = new HttpRequest({
    hostname: apiUrl.host,
    path: apiUrl.pathname,
    body: JSON.stringify(graphqlObject),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      host: apiUrl.hostname
    },
  })

  const signedRequest = await signer.sign(request)

  const { headers, body, method } = await signedRequest

  const awsSignedRequest = await fetch(API_URL, {
    headers,
    body,
    method
  }).then((res) => res.json())

  return awsSignedRequest
}