#!/usr/bin/env bash

# Fix pesky locale issues
touch /etc/default/locale
echo 'LC_ALL="en_US.UTF-8"' | sudo tee /etc/default/locale

# Let's add the latest version of node to the repos
add-apt-repository -y ppa:chris-lea/node.js

# Make sure that the repos are updated before installing
apt-get update

# Get Node. This'll get npm as well
apt-get install nodejs -y

# Make sure we got git. This is needed for bower.
apt-get install git -y

# This is required for phantomjs
apt-get install fontconfig
 
# Get RVM and Ruby, with compass
curl -sSL https://get.rvm.io | bash -s stable
source /home/vagrant/.rvm/scripts/rvm
rvm use --install 1.9.3
gem install compass

# Get Yeoman, with Bower and Grunt
npm install -g yo
npm install -g grunt-cli
npm install -g bower

# Get the project all provisioned up
cd /vagrant
bower install --allow-root
