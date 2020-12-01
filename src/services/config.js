const config = {
  s3: {
    REGION: "sa-east-1",
    BUCKET: "shopminions-upload",
  },
  apiGateway: {
    REGION: "sa-east-1",
    URL: "https://epoq5ep609.execute-api.sa-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "sa-east-1",
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;