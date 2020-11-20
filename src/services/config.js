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
    USER_POOL_ID: "us-east-2_8OZU13RCR",
    APP_CLIENT_ID: "2c0qpupd38gucju89h85mfc585",
    IDENTITY_POOL_ID: "us-east-2:d293ee44-5e8c-4380-8b54-8149ef0132b9",
  },
};

export default config;