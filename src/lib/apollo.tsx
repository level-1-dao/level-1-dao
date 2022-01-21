import {
  useMutation as apolloMutation,
  MutationHookOptions,
  DocumentNode,
} from "@apollo/client";

export function useMutation(
  query: DocumentNode,
  options?: MutationHookOptions
) {
  const [load, { data, loading, error }] = apolloMutation(query, {
    notifyOnNetworkStatusChange: true,
    errorPolicy: "all",
    ...options,
  });
  return { load, data, loading, error };
}
