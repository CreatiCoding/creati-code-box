#!/bin/bash
BRANCH=$(git rev-parse --abbrev-ref HEAD)
DEPLOY_DEVELOP_FRONTEND='deploy/develop/frontend'
DEPLOY_DEVELOP_BACKEND='deploy/develop/backend'
DEPLOY_MASTER_FRONTEND='deploy/master/frontend'
DEPLOY_MASTER_BACKEND='deploy/master/backend'

echo $PWD

npm i -g yarn

if [ "$BRANCH" = "$DEPLOY_DEVELOP_FRONTEND" ]; then
  cd ../..
  pgrep -f develop.*frontend | xargs --no-run-if-empty kill -9
  sudo rm -rf develop_frontend
  mv develop_frontend_new develop_frontend
  cd develop_frontend
  cd creati-code-box
  cd creati-code-box-frontend 
  yarn
  yarn start:d
  exit 1;
elif [ "$BRANCH" = "$DEPLOY_MASTER_FRONTEND" ]; then
  cd ../..
  pgrep -f master.*frontend | xargs --no-run-if-empty kill -9
  sudo rm -rf master_frontend
  mv master_frontend_new master_frontend
  cd master_frontend
  cd creati-code-box
  cd creati-code-box-frontend 
  yarn
  yarn start:p
  exit 1;
else
  echo 'other branch'
fi
