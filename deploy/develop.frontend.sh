sudo pgrep -f nuxt | xargs kill -9
sudo rm -rf develop_frontend
mkdir develop_frontend
cd develop_frontend
git clone --branch deploy/develop/frontend https://github.com/CreatiCoding/creati-code-box
cd creati-code-box
nohup ./deploy.sh </dev/null >/dev/null 2>&1 &