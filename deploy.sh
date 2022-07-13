#deploy my app
git fetch --all
git pull origin main
npm run build
sudo service apache2 restart