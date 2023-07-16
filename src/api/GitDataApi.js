import axios from "axios";

const githubApi = axios.create({
  baseURL: "https://api.github.com",
});

export const getGithubUser = async (username) => {
  const response = await githubApi.request({
    url: `/users/${username}`,
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  console.log(response.data);

  return response.data;
};
