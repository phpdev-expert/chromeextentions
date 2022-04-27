import React, { createContext, useContext, useMemo, useCallback } from 'react';

import { useQueryClient, useQuery } from 'react-query';

import { gql } from 'graphql-request';
import { request } from '../api/graphql_api';

const AuthContext = createContext({});

const UserInfoQuery = gql`
  mutation MyMutation {
    v1_iam_IAM_UserProfile {
      user {
        accountId
        companyInfoSet
        email
        createdAt
        emailVerified
        firstName
        lastName
        permissions
        resetOnLogin
        type
        updatedAt
        username
      }
    }
  }
`;

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const { data, isLoading, refetch, isFetching } = useQuery(
    'userinfo',
    () => request(UserInfoQuery),
    {
      retry: false,
    },
  );



  const loggedOut = !isLoading && !data?.v1_iam_IAM_UserProfile?.user?.username;

  const logout = useCallback(async () => {
    try {
      // await LogoutUser();

      // if (!import.meta.env.MODE || import.meta.env.MODE === 'development') {
      localStorage.removeItem('access-token');
      // localStorage.removeItem('refresh-token');
      // }

      queryClient.clear();
      // refetch();

      return null;
    } catch (e) {
      return e;
    }
  }, [queryClient]);

  const loginRootMutation = gql`
    mutation MyMutation(
      $email: String!
      $password: String!
      $accountid: String!
      $username: String!
    ) {
      v1_authn_Authn_Login(
        input: {
          email: $email
          password: $password
          accountid: $accountid
          username: $username
        }
      ) {
        authToken
        user {
          accountid
          companyInfoSet
          emailVerified
          firstName
          lastName
          type
          username
        }
      }
    }
  `;

  const login = useCallback(
    async (email, password) => {
      try {
        const res = await request(loginRootMutation, {
          email,
          password,
          accountid: 'abc',
          username: 'abc',
        });

        if (res.status === 200) {
          queryClient.invalidateQueries('userinfo');
        }

        return res;
      } catch (e) {
        if (e.response) {
          throw e;
        }
        throw e;
      }
    },
    [loginRootMutation, queryClient],
  );



  const value = useMemo(
    () => ({
      isAuthenticated: !!data?.v1_iam_IAM_UserProfile?.user?.username,
      user: data?.v1_iam_IAM_UserProfile?.user,
      isFetching,
      isLoading,
      logout,
      login,
      loggedOut,
      refetch,
      revalidate: () => queryClient.invalidateQueries('userinfo'),
    }),
    [
      loggedOut,
      login,
      logout,
      queryClient,
      data?.v1_iam_IAM_UserProfile?.user,
      isFetching,
      isLoading,
      refetch,
    ],
  );


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

// revalidate: () => queryClient.invalidateQueries('userinfo'),
