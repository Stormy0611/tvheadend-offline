#!/bin/sh
sudo apt-get install build-essential pkg-config gettext libssl-dev cmake git python-is-python3 libdvbcsa-dev vim

sudo mv --force ./tvheadend /etc/
sudo mv --force ./tvheadend.service /etc/systemd/system/

cd /etc/tvheadend
./configure
make

sudo systemctl daemon-reload
sudo systemctl enable tvheadend
sudo systemctl start tvheadend
