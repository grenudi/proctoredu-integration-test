# proctoredu-integration-test
230520012021 ProctorEdu:test:0
  
### tmp
- server (main - custom - mine)
    - serve static pages
        - SPA
            ? cookies
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
        ? user id
    - rest api for Proc
        ? routes
            ? data
    - HTTPS 
        - greenlock
        - nodejs greenlock lib
