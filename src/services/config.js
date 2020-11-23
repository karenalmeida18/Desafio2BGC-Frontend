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
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_0n1BFYA04",
    APP_CLIENT_ID: "6f9eh2s587m9gblv3e6ok0nbhj",
    IDENTITY_POOL_ID: "us-east-2:a57f40b2-3d19-433a-9086-3740c7fbf630",
  },
};

export default config;