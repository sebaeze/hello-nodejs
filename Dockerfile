FROM registry.cirrus.ibm.com/ubi8/nodejs-14
#
ENV  PORT=8080
#
## RUN  sudo su && whoami && id && mkdir /usr/s2i
#
## ADD ./package.json     /tmp/src/
## ADD ./app.js           /tmp/src/
COPY package*.json ./
COPY app.js        ./
#
RUN   npm install
## RUN     ls -lta /usr/libexec/s2i && /usr/libexec/s2i/assemble
#
EXPOSE 8080
#
CMD /usr/libexec/s2i/run
#
