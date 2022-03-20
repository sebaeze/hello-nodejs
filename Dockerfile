FROM   s2i-httpd:1.0 
#
RUN      echo '**estoy en extends de s2i-httpd *** ' && pwd && ls -lt
#WORKDIR  ./node-app
#
## CMD npm run start
#
