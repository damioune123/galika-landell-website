#!/bin/bash


#!/bin/bash


source .account

echo "Registering mega$1@$EMAILDOMAIN"
CONFIRM="$(megareg --scripted --register --email mega$EMAIL --name user name --password $PASSWORD)"
#echo "megareg run"
echo "$CONFIRM" >> megarc/links
cp megarc/storageTest megarc/storage"$1"
sed -i "s/TEST/$1/g" megarc/storage"$1"
sleep 2
LINK="$(php megareg/getLink.php $1)"
while [ "$LINK" = "0" ]
do
	echo "waiting for email..."
	sleep 1
	LINK="$(php megareg/getLink.php $1)"
	echo ">$LINK<"
done

link3=${CONFIRM/@LINK@/\'"$LINK"\'}
eval $link3
#echo "<< Welcome email"
echo $link3 >> megarc/links
#echo "Press enter to clear the mailbox or CTRL+C to stop"
#read asdf
sleep 1
#echo "truncating..."
truncate -s 0 /var/mail/ubuntu
sleep 1
echo "   > Registered $1..."
# -*- coding: utf-8 -*-
echo $BACKUP_ENVIRONMENT
echo $BACKUP_NAME
# ----------------------------------------------------
# A Shell script to take MySql database backup
# and upload to MEGA cloud storage using megatools
# ----------------------------------------------------
# REQUIREMENTS : You should have -
# 1. Registered and verified MEGA account - https://mega.nz/
# 2. Installed megatools - https://github.com/megous/megatools
# ----------------------------------------------------
# This script is part of this tutorial - http://wp.me/p2nCeQ-a2
# ----------------------------------------------------

# CONFIG - Set you information here
#db_user=root
#db_pass=yourDbPassword
#db_name=databaseName
mega_user=damienmeur-backup@protonmail.com
mega_pass=pQoe#%4B9zwj
mega_path=/Root/backup
## NOTE: MEGA remote path should start with /Root/
#
## Create a temporary file
#tmpfile=$(mktemp)
#printf "Created temporary file: ${tmpfile} \n"
#
## Create Database dump and write to tmp file
#printf "Writing database dump to tmp file..."
#mysqldump -u ${db_user} -p${db_pass} ${db_name} > ${tmpfile}
#printf " Done. \n"
#
## Upload dump file to MEGA cloud storage
#printf "Uploading at ${mega_path}/${db_name}_$(date '+%Y-%m-%d-%H-%M').sql \n"
## Comment out next line if directory is already created for mega_path
megals -u ${mega_user} -p ${mega_pass}
#megaput --no-progress -u ${mega_user} -p ${mega_pass} --path ${mega_path}/${db_name}_$(date '+%Y-%m-%d-%H-%M').sql ${tmpfile}
#
#printf "Cleanup... "
#rm ${tmpfile}
#printf " Done. \n"
