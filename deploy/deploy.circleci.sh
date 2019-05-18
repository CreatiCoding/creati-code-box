ls -al ~/.ssh/$SSH_FILE
pwd
if [ "$CIRCLE_BRANCH" = "deploy/master/frontend" ]; then
    echo 'master'
    ssh ubuntu@$SERVER_HOSTNAME -i ~/.ssh/$SSH_FILE -o StrictHostKeyChecking=no < ./deploy/master.frontend.sh 2>&1
elif [ "$CIRCLE_BRANCH" = "deploy/develop/frontend" ]; then
    echo 'develop'
    ssh ubuntu@$SERVER_HOSTNAME -i ~/.ssh/$SSH_FILE -o StrictHostKeyChecking=no < ./deploy/develop.frontend.sh 2>&1
fi
