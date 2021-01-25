# proctoredu-integration-test
230520012021 ProctorEdu:test:0  
  
## USAGE

[video demo](https://drive.google.com/file/d/1K8wL7GS9ovVNWFqeE3RGC25uUqprtDRw/view?usp=sharing "proctoring demo video")
```
git clone https://github.com/grenudi/proctoredu-integration-test;
cd proctoredu-integration-test;
npm install;
```
#### generate and register sertificate for your server;
change ```CONFIG.server.domain.main``` in ```package.json``` to match yours
```
npm run certify;
```
run while "npm run certify" is not yet at interactive stage: ```npm run acme```  
**interactive**! do whatever the certbot tells you to do, and check the link!  
stop "npm run acme"  
```
npm run start
```
#### port forwarding
look at ```CONFIG.server``` adjust ports to your needs  
don't forget to forward them if neccessary  
   
#### set the secret
change secret to actual secret.
using the link https://[your domain]/secretFromProctorEdu/[secret goes here]



