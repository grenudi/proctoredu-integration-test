echo "====================| installing certbot|====================";
sudo snap install core; sudo snap refresh core;
sudo apt-get remove certbot;
sudo dnf remove certbot;
sudo snap install --classic certbot;
echo "====================| installation DONE |====================";

echo "====================| RUNNING certbot ! |====================";
certbot certonly --manual --config-dir certbot.d/config/ --work-dir certbot.d/work/ --logs-dir certbot.d/logs 
