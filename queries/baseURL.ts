
export const getBaseURL = () => {
  switch (process.env.APP_ENV) {
    case 'prod':
      return `https://us-east1-push-prod-apps.cloudfunctions.net/pushpointsrewardsystem`;
    case 'staging':
      return `https://us-east1-push-stage-apps.cloudfunctions.net/pushpointsrewardsystem`;
    case 'dev':
      return `https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld`;
    case 'local':
        return `http://localhost:3000/rpc`
    default:
      return `https://us-east1-push-dev-apps.cloudfunctions.net/helloWorld`;
  }
};

export const analyticsBaseURL = 'https://backend.epns.io/apis/v1';
