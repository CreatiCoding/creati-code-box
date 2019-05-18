#!/bin/bash
BRANCH=$(git rev-parse --abbrev-ref HEAD)
DEPLOY_DEVELOP_FRONTEND='deploy/develop/frontend'
DEPLOY_DEVELOP_BACKEND='deploy/develop/backend'
DEPLOY_MASTER_FRONTEND='deploy/master/frontend'
DEPLOY_MASTER_BACKEND='deploy/master/backend'

echo $PWD

if [ "$BRANCH" = "$DEPLOY_DEVELOP_FRONTEND" ]; then
  cd creati-code-box-frontend 
  npm install -g yarn && yarn
  yarn start:d
  exit 1;
elif [ "$BRANCH" = "$DEPLOY_MASTER_FRONTEND" ]; then
  cd creati-code-box-frontend 
  npm install -g yarn && yarn
  yarn start:p
  exit 1;
else
  echo 'other branch'
fi
