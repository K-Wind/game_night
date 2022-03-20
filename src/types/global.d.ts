declare global {
    namespace NodeJS {
      interface ProcessEnv {
        REALM_APIKEY: string;
        REALM_APPID: string;
        REALM_URL: string;
        NODE_ENV: 'development' | 'production';
      }
    }
  }