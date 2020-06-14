#!/bin/bash
STAGING_STORAGE_FOLDER=/staging
PROD_STORAGE_FOLDER=/prod

echo "Replacing staging storage with prod storage"
rm -rf ${STAGING_STORAGE_FOLDER}/* && cp -r ${PROD_STORAGE_FOLDER}/* ${STAGING_STORAGE_FOLDER}/
chmod 777 -R ${STAGING_STORAGE_FOLDER}
echo "Connecting to mariadb and run the migration"
docker exec -ti $(docker ps -aqf "name=mariadb") bash -c 'mysqldump  -u root -p${MYSQL_ROOT_PASSWORD} --opt directus-prod | mysql -u root -p${MYSQL_ROOT_PASSWORD} -C directus-staging'
