#!/usr/bin/env node
const GitUrlParse = require("git-url-parse");
var gitdata = GitUrlParse(process.env.GIT_URL);
var bburl = 'https://'+gitdata.source+'/'+gitdata.full_name;
var branch = process.env.GIT_BRANCH.replace(/.*\//, '');
var data = {
  build_url: process.env.BUILD_URL,
  repository_url: bburl,
  branch: branch,
  branch_url: bburl+'/branch/'+branch,
  branch_commits_url: bburl+'/commits/branch/'+branch,
  commit_url: bburl+'/commits/'+process.env.GIT_COMMIT
};

console.log(JSON.stringify(data, null, 2));
