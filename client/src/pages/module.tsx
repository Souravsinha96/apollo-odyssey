import React from 'react';
import { gql } from '../__generated__';
import { useQuery } from '@apollo/client';
import { Layout, ModuleDetail, QueryResult } from '../components';
import { useParams } from 'react-router-dom';
const GET_MODULE_AND_PARENT_TRACK = gql(`
query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
  module(id: $moduleId) {
    id
    title
    content
    videoUrl
  }
  track(id: $trackId) {
    id
    title
    modules {
      id
      title
      length
    }
  }
}

`);
const Module = () => {
  const { trackId = '', moduleId = '' } = useParams();
  const { data, loading, error } = useQuery(GET_MODULE_AND_PARENT_TRACK, {
    variables: {
      moduleId: moduleId,
      trackId: trackId,
    },
  });
  return (
    <Layout fullWidth>
      <QueryResult error={error} loading={loading} data={data}>
        <ModuleDetail track={data?.track} module={data?.module} />
      </QueryResult>
    </Layout>
  );
};
export default Module;
