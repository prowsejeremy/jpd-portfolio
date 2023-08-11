const encodeString = (str:string) => {
  return Buffer.from(str).toString('base64')
}

const decodeString = (str:string) => {
  return Buffer.from(str, 'base64').toString('ascii')
}


// Encrypt the provided access key
export const EncryptKey = (key:string, salt:string) => {
  if (!key || !salt) return false;

  const seasonedToken = encodeString(key)
  const timestamp = Date.now()
  const seasonedTs = encodeString(timestamp.toString())
  
  // Build encrypted token with current timestamp and salt key attached.
  return encodeString(`${seasonedToken}${salt}${seasonedTs}`)
}


// Decrypt and check validity of the provided access key
export const DecryptAndValidate = (key:string) => {

  const tsNow = Date.now()
  const ttl = 5000
  const salt = process.env.NEXT_PUBLIC_API_SECRET
  const api_token = process.env.NEXT_PUBLIC_API_TOKEN

  // Break immediately if provided values aren't in spec
  if (
    typeof salt !== 'string' ||
    typeof api_token !== 'string' ||
    typeof key !== 'string'
  ) return false
  
  // Initial decode of token
  const seasonedToken = decodeString(key)

  // Get lengths for decoding
  const atl = encodeString(api_token).length 
  const sl  = salt.length

  // Timestamp from request
  const encryptedTs = seasonedToken.substring(atl+sl)
  const receivedTs  = decodeString(encryptedTs)
  // Salt from request
  const receivedSalt = seasonedToken.substring(atl, atl+sl)
  // API Token from request
  const encryptedToken = seasonedToken.substring(0, atl)
  const receivedToken  = decodeString(encryptedToken)

  // Returns value in seconds as float.
  const tsValid = tsNow - parseInt(receivedTs) < ttl

  // ////////////////////////////////////////////////////////////////
  // Three-phase check to ensure the request is authorized
  // Testing the api-token and salt value as well as the timestamp
  // ////////////////////////////////////////////////////////////////
  return (
    tsValid &&
    receivedSalt === salt &&
    receivedToken === api_token
  )
}