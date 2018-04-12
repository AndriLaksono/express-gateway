1. Clone this project git clone https://github.com/bigbang4u2/express-gateway.git
2. cd express-gateway-with-jwt-scopes
3. npm install
4. npm start
   gateway http server listening on :::8080
   admin http server listening on 127.0.0.1:9876

Testing

1. Go to https://jwt.io/
2. Paste below token in encoded section
   ```
    eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MjMzODc2NjcsImV4cCI6MTU1NDkyMzY2NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoidGVzdCIsInVzZXJuYW1lIjoidGVzdHVzZXIiLCJFbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJzY29wZSI6InZpZXdnZXQifQ.mUuqYiee2l2Y_kSk55iY-gyQDO3xfhzwBqHN9GI5mIE
   ```
3. You will see following in payload

   ```json
   {
       "iss": "Online JWT Builder",
       "iat": 1523387667,
       "exp": 1554923667,
       "aud": "www.example.com",
       "sub": "test",
       "username": "testuser",
       "Email": "test@example.com",
       "scope": "viewget"
   }
  
  ```
4. You can verify above token with secret
   ```
    qwertyuiopasdfghjklzxcvbnm123456
   ```
   Make sure this secret is present in gateway.config.yml
   ```
        - jwt:
          - action:
            secretOrPublicKey: 'qwertyuiopasdfghjklzxcvbnm123456'
            checkCredentialExistence: false
          
    ```      
5. As you can see scope is listed above viewget the same is present in gateway.config.yml in path /get and /ip has 
   scope viewip
6. In above payload you can define multiple scopes by space separated e.g "scope": "viewget viewip"

7. Now go to command line and type
   ```
   $ export JWT=<paste above JWT token here>
   $ curl -H "Authorization: Bearer "$JWT http://localhost:8080/ip
     You will get Insufficient Scope
   $ curl -H "Authorization: Bearer "$JWT http://localhost:8080/get
      You will get response
   ```

Creating it from scratch

1. eg gateway create
2. Give name to express-gateway-with-scopes
3. Copy jwtScopes directory from this repo to your newly creted express gateway and make sure your package.json
   is same as the one given in this repo.
4. Replace your config/gateway.config.yml with the one present in this repo.
5. npm install
6. eg plugin install jwtScopes
   ? Would you like to enable this plugin in system config? Yes
   ? Would you like to add new policies to gateway config? No
   Plugin installed!
7. npm start
   gateway http server listening on :::8080
   admin http server listening on 127.0.0.1:9876
