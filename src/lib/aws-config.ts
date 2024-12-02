import { Amplify } from 'aws-amplify';

export const configureAWS = () => {
  Amplify.configure({
    Auth: {
      region: import.meta.env.VITE_AWS_REGION,
      userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
      userPoolWebClientId: import.meta.env.VITE_AWS_USER_POOL_CLIENT_ID,
    },
    Storage: {
      AWSS3: {
        bucket: import.meta.env.VITE_AWS_S3_BUCKET,
        region: import.meta.env.VITE_AWS_REGION,
      }
    }
  });
};