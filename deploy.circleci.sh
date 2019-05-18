ls -al ~/.ssh
pwd
if [ "$CIRCLE_BRANCH" = "deploy/master/frontend" ]; then
    ssh ubuntu@$SERVER_HOSTNAME -i ~/.ssh/$SSH_FILE -o StrictHostKeyChecking=no < ./deploy/master.frontend.sh
ENDSSH
elif [ "$CIRCLE_BRANCH" = "deploy/develop/frontend" ]; then
    ssh ubuntu@$SERVER_HOSTNAME -i ~/.ssh/$SSH_FILE -o StrictHostKeyChecking=no < ./deploy/develop.frontend.sh
fi
