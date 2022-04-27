import { GraphQLClient } from 'graphql-request';
// import { RefreshUser } from './user';

// const urls = {
//   test: `https://graphql.dev.defencestation.ca`,
//   development: import.meta.env.PUBLIC_API || 'http://localhost:3000/graphql',
//   production: window?._env_?.GRAPH_API,
// };

const graphQLClient = new GraphQLClient('https://graphql.dev.defencestation.ca/graphql');

/**
 * @param promise A promise to resolve
 * @nthTry Number of tries before rejecting
 * @desc Retries a promise n no. of times before rejecting.
 * @returns resolved promise
 */
async function retryPromise(promise, nthTry) {
  try {
    // try to resolve the promise
    const data = await promise;
    // if resolved simply return the result back to the caller
    return data;
  } catch (e) {
    // if the promise fails and we are down to 1 try we reject
    if (nthTry === 1) {
      return Promise.reject(e);
    }
    // if the promise fails and the current try is not equal to 1
    // we call this function again from itself but this time
    // we reduce the no. of tries by one
    // so that eventually we reach to "1 try left" where we know we have to stop and reject
    // console.log('retrying', nthTry, 'time');
    // we return whatever is the result of calling the same function
    return retryPromise(promise, nthTry - 1);
  }
}

// Obtain the fresh token each time the function is called
function getAccessToken() {
  return localStorage.getItem('access-token');
}

const request = async (query, variables, nthTry = 2) => {
  // console.log(nthTry);
  let requestHeaders = {};


  // if (!import.meta.env.MODE || import.meta.env.MODE === 'development') {
  if (getAccessToken()) {
    requestHeaders = {
      authorization: `${getAccessToken()}`,
    };
    // }
  }

  try {
    const data = await graphQLClient.request(query, variables, requestHeaders);
    return data;
  } catch (error) {
    if (nthTry !== 1) {
      if (error?.response?.errors?.length > 0) {
        if (
          error?.response?.errors[0].extensions?.code === 'unauthenticated' &&
          error?.response?.errors[0].message === 'jwt: exp claim is invalid'
        ) {
          // console.log(error?.response?.errors[0].extensions);

          // const atk = localStorage.getItem('access-token');
          // const rtk = localStorage.getItem('refresh-token');

          try {
            // if (
            //   !import.meta.env.MODE ||
            //   import.meta.env.MODE === 'development'
            // ) {
            // const newtokens = await RefreshUser(atk, rtk);
            // localStorage.setItem('access-token', newtokens.data.atoken);
            // localStorage.setItem('refresh-token', newtokens.data.rtoken);
          } catch (e) {
            // console.log(e);
          }

          // lets send a request to refresh the token
        }

        return request(query, variables, nthTry - 1);
      }
    }

    throw error;
  }
};

export { graphQLClient, request };
