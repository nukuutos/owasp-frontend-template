import axios from '../../../utils/axios';

const asyncCall = async (config) => {
  const { accessToken, addingHeaders, ...confingProps } = config;

  const { data } = await axios({
    ...confingProps,
    headers: {
      ...addingHeaders,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return data;
};

export default asyncCall;
