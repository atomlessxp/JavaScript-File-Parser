FROM php:7.4-cli
# Copy contents of current dir to docker container
COPY . /usr/src/myapp
# Set workdir. Similar to cd into this project on local machine.
WORKDIR /usr/src/myapp
CMD [ "php", "./index.php" ]