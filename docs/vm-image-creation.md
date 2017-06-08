# VM Image Creation

## 1. Create a new VM instance using Ubuntu 16.04 LTS

## 2. Update the VM

`sudo apt-get update`

`sudo apt-get upgrade`

`sudo reboot`

## 5. Install Docker CE

### Set up the repository

`sudo apt-get -y install \
  apt-transport-https \
  ca-certificates \
  curl`

`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`

    sudo add-apt-repository \
           "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
           $(lsb_release -cs) \
           stable"

`sudo apt-get update`

### Get Docker CE

`sudo apt-get -y install docker-ce`

### Test the Docker CE installation

`sudo docker run hello-world`

## 6. Change the VM settings so the boot disk is not deleted when the instance is deleted

## 7. Exit, stop, and delete the VM

## 8. Create an image from the disk
