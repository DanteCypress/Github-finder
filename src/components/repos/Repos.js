import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItems";
const Repos = ({ reops }) => {
  return Repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

Repos.prototype = {
  repos: PropTypes.array.isRequired
};
export default Repos;
