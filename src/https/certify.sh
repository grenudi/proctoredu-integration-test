#!/bin/sh
echo "\n====================| CD to working dir |====================\n";
echo "\n====================| Prepare    certbot|====================\n";
sudo snap install core; sudo snap refresh core;
sudo apt-get remove certbot;
sudo dnf remove certbot;
echo "\n====================| Instaling  certbot|====================\n";
sudo snap install --classic certbot;
echo "\n====================| Installed  certbot|====================\n";
sleep 1;
echo "\n==============| PREPARE for manual stearing ! |==============\n";
sleep 3;
echo "\n===================| THE CERTBOT HIMSELF |===================\n";
certbot certonly --manual --config-dir certbot.d/config/ --work-dir certbot.d/work/ --logs-dir certbot.d/logs 
