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
    USER_POOL_ID: "sa-east-1_yBCjymZqk",
    APP_CLIENT_ID: "2ad5hhtsecticl1mrtan04apv0",
    IDENTITY_POOL_ID: "sa-east-1:2f110697-001f-4e16-aefa-bb81f4bd27a8",
  },
};

export default config;