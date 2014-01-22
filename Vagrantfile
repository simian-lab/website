# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "saucy64"
  config.vm.provision :shell, :path => 'vagrant.sh'
  config.vm.network 'private_network', ip: '192.168.100.105'

  config.vm.synced_folder ".", "/vagrant", :mount_options => ["dmode=777","fmode=777"], :owner => "vagrant"
end