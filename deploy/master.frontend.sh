        sudo pgrep -f nuxt | xargs kill -9
        sudo rm -rf master_frontend
        mkdir master_frontend
        cd master_frontend
        git clone --branch deploy/master/frontend https://github.com/CreatiCoding/creati-code-box
        cd creati-code-box
        nohup ./deploy.sh </dev/null >/dev/null 2>&1 &