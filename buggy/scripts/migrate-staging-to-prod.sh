#!/bin/bash
STAGING_STORAGE_FOLDER=/staging
PROD_STORAGE_FOLDER=/prod

echo "Replacing prod storage with staging storage"
rm -rf ${PROD_STORAGE_FOLDER}/* && cp -r ${STAGING_STORAGE_FOLDER}/* ${PROD_STORAGE_FOLDER}/
chmod 777 -R ${PROD_STORAGE_FOLDER}
echo "Connecting to mariadb and run the migration"
docker exec -ti $(docker ps -aqf "name=mariadb") bash -c 'mysqldump  -u root -p${MYSQL_ROOT_PASSWORD} --opt directus-staging | mysql -u root -p${MYSQL_ROOT_PASSWORD} -C directus-prod'
/app/scripts/build-ssg-prod.sh