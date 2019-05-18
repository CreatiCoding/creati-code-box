ls -al ~/.ssh
pwd
if [ "$CIRCLE_BRANCH" = "deploy/master/frontend" ]; then
    ssh ubuntu@$SERVER_HOSTNAME -i ~/.ssh/$SSH_FILE -o StrictHostKeyChecking=no < ./deploy/master.frontend.sh 2>&1
ENDSSH
elif [ "$CIRCLE_BRANCH" = "deploy/develop/frontend" ]; then
    ssh ubuntu@$SERVER_HOSTNAME -i ~/ppk/creco/$SSH_FILE -o StrictHostKeyChecking=no < ./deploy/develop.frontend.sh 2>&1
fi
