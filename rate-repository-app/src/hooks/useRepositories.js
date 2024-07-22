import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { language: 'english' }
  })

  const fetchRepositories = async () => {
    setRepositories(data?.repositories)
  };
 
  useEffect(() => {
    fetchRepositories();
  }, [data]);

  return { repositories, loading, error };
};

export default useRepositories;