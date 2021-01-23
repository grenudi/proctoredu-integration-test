# proctoredu-integration-test
230520012021 ProctorEdu:test:0  
  
## USAGE
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
   
### tmp
- server (main - custom - mine)
    - serve static pages
        - SPA
            - ? cookies
            - welcome
            - pre test init
                - on success
                - on errors
            - test
                - slide tests
            - results
                - gather, display test results
                - gather, display Proc results
                    - ~redux to API for results, update on change (no refresh)
    - authorize for proc jwt
        - ? user id
    - rest api for Proc
        - ? routes
            - ? data
    - HTTPS 
        - snap certbot
        - ~acme.sh
          - server-acme.js(port 80);



