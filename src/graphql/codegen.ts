import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Scalars['Boolean'];
  createUser: User;
  updatePassword: Scalars['Boolean'];
  updateTokenToNull: Scalars['Boolean'];
};


export type MutationCreatePostArgs = {
  authorId: Scalars['Int'];
};


export type MutationCreateUserArgs = {
  city: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  nickName: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdatePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationUpdateTokenToNullArgs = {
  id: Scalars['Int'];
};

export type Post = {
  __typename?: 'Post';
  authorId: Scalars['Int'];
  body: Scalars['String'];
  createdAt: Scalars['Int'];
  id: Scalars['ID'];
  user: User;
  userId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  fetchUserByEmail: User;
  fetchUserById: User;
};


export type QueryFetchUserByEmailArgs = {
  email: Scalars['String'];
};


export type QueryFetchUserByIdArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  city: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  nickName: Scalars['String'];
  password: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  token: Scalars['String'];
};

export type CreatePostMutationVariables = Exact<{
  authorId: Scalars['Int'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: boolean };

export type FetchUserByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FetchUserByIdQuery = { __typename?: 'Query', fetchUserById: { __typename?: 'User', email: string, country: string, city: string, nickName: string, posts?: Array<{ __typename?: 'Post', id: string, body: string, createdAt: number, user: { __typename?: 'User', email: string } }> | null } };

export type FetchUserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type FetchUserByEmailQuery = { __typename?: 'Query', fetchUserByEmail: { __typename?: 'User', email: string, country: string, city: string, nickName: string, posts?: Array<{ __typename?: 'Post', id: string, body: string, createdAt: number, user: { __typename?: 'User', email: string } }> | null } };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  country: Scalars['String'];
  city: Scalars['String'];
  nickName: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', token: string } };

export type UpdatePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: boolean };

export type UpdateTokenToNullMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type UpdateTokenToNullMutation = { __typename?: 'Mutation', updateTokenToNull: boolean };


export const CreatePostDocument = gql`
    mutation CreatePost($authorId: Int!) {
  createPost(authorId: $authorId)
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      authorId: // value for 'authorId'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const FetchUserByIdDocument = gql`
    query FetchUserById($id: Int!) {
  fetchUserById(id: $id) {
    email
    country
    city
    nickName
    posts {
      id
      body
      createdAt
      user {
        email
      }
    }
  }
}
    `;

/**
 * __useFetchUserByIdQuery__
 *
 * To run a query within a React component, call `useFetchUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchUserByIdQuery(baseOptions: Apollo.QueryHookOptions<FetchUserByIdQuery, FetchUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchUserByIdQuery, FetchUserByIdQueryVariables>(FetchUserByIdDocument, options);
      }
export function useFetchUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchUserByIdQuery, FetchUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchUserByIdQuery, FetchUserByIdQueryVariables>(FetchUserByIdDocument, options);
        }
export type FetchUserByIdQueryHookResult = ReturnType<typeof useFetchUserByIdQuery>;
export type FetchUserByIdLazyQueryHookResult = ReturnType<typeof useFetchUserByIdLazyQuery>;
export type FetchUserByIdQueryResult = Apollo.QueryResult<FetchUserByIdQuery, FetchUserByIdQueryVariables>;
export const FetchUserByEmailDocument = gql`
    query FetchUserByEmail($email: String!) {
  fetchUserByEmail(email: $email) {
    email
    country
    city
    nickName
    posts {
      id
      body
      createdAt
      user {
        email
      }
    }
  }
}
    `;

/**
 * __useFetchUserByEmailQuery__
 *
 * To run a query within a React component, call `useFetchUserByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUserByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUserByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useFetchUserByEmailQuery(baseOptions: Apollo.QueryHookOptions<FetchUserByEmailQuery, FetchUserByEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchUserByEmailQuery, FetchUserByEmailQueryVariables>(FetchUserByEmailDocument, options);
      }
export function useFetchUserByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchUserByEmailQuery, FetchUserByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchUserByEmailQuery, FetchUserByEmailQueryVariables>(FetchUserByEmailDocument, options);
        }
export type FetchUserByEmailQueryHookResult = ReturnType<typeof useFetchUserByEmailQuery>;
export type FetchUserByEmailLazyQueryHookResult = ReturnType<typeof useFetchUserByEmailLazyQuery>;
export type FetchUserByEmailQueryResult = Apollo.QueryResult<FetchUserByEmailQuery, FetchUserByEmailQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($email: String!, $password: String!, $country: String!, $city: String!, $nickName: String!) {
  createUser(
    email: $email
    password: $password
    country: $country
    city: $city
    nickName: $nickName
  ) {
    token
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      country: // value for 'country'
 *      city: // value for 'city'
 *      nickName: // value for 'nickName'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($oldPassword: String!, $newPassword: String!) {
  updatePassword(oldPassword: $oldPassword, newPassword: $newPassword)
}
    `;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const UpdateTokenToNullDocument = gql`
    mutation updateTokenToNull($id: Int!) {
  updateTokenToNull(id: $id)
}
    `;
export type UpdateTokenToNullMutationFn = Apollo.MutationFunction<UpdateTokenToNullMutation, UpdateTokenToNullMutationVariables>;

/**
 * __useUpdateTokenToNullMutation__
 *
 * To run a mutation, you first call `useUpdateTokenToNullMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTokenToNullMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTokenToNullMutation, { data, loading, error }] = useUpdateTokenToNullMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateTokenToNullMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTokenToNullMutation, UpdateTokenToNullMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTokenToNullMutation, UpdateTokenToNullMutationVariables>(UpdateTokenToNullDocument, options);
      }
export type UpdateTokenToNullMutationHookResult = ReturnType<typeof useUpdateTokenToNullMutation>;
export type UpdateTokenToNullMutationResult = Apollo.MutationResult<UpdateTokenToNullMutation>;
export type UpdateTokenToNullMutationOptions = Apollo.BaseMutationOptions<UpdateTokenToNullMutation, UpdateTokenToNullMutationVariables>;