#!/bin/bash
echo "Showing running docker containers"
docker ps
echo "Connecting to express_prod and building it with Next.js"
docker exec -ti $(docker ps -aqf "name=galika-landell-website_express_prod") npm run build:prod
echo "Connecting to express_prod and exporting it with Next.js SSG"
docker exec -ti $(docker ps -aqf "name=galika-landell-website_express_prod") npm run export:prod
echo "Process finished"