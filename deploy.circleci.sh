if [ "$CIRCLE_BRANCH" = "deploy/master/frontend" ]; then
    ssh ubuntu@$SERVER_HOSTNAME -i ~/.ssh/id_creco2019 -o StrictHostKeyChecking=no <<'ENDSSH'
        sudo pgrep -f nuxt | xargs kill -9
        sudo rm -rf master_frontend
        mkdir master_frontend
        cd master_frontend
        git clone --branch deploy/master/frontend https://github.com/CreatiCoding/creati-code-box
        cd creati-code-box
        nohup ./deploy.sh </dev/null >/dev/null 2>&1 &
ENDSSH;
elif [ "$CIRCLE_BRANCH" = "deploy/develop/frontend" ]; then
    ssh ubuntu@$SERVER_HOSTNAME -i ~/.ssh/id_creco2019 -o StrictHostKeyChecking=no <<'ENDSSH'
        sudo pgrep -f nuxt | xargs kill -9
        sudo rm -rf develop_frontend
        mkdir develop_frontend
        cd develop_frontend
        git clone --branch deploy/develop/frontend https://github.com/CreatiCoding/creati-code-box
        cd creati-code-box
        nohup ./deploy.sh </dev/null >/dev/null 2>&1 &
ENDSSH;
fi