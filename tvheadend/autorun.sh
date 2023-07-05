#!/bin/sh
sudo apt-get install build-essential pkg-config gettext libssl-dev cmake git python-is-python3 libdvbcsa-dev vim

sudo tar -xf ./tvheadend.tar.gz -C /etc/

cd /ec/tvheadend
./configure
make

sudo mv ./tvheadend.service /etc/systemd/system/tvheadend.servcie

sudo systemctl daemon-reload
sudo systemctl enable tvheadend
sudo systemctl start tvheadend
