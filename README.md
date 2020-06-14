# Galika-Landell
##### This directory contains all requires configurations to run:
 -  A Traefik reverse proxy (handling ssl certificates renewals with a ovh dns challenge)
 -  A mariadb (mysql) 
 -  An adminer server (similar to php my admin): adminer.damienmeur.com
 -  Two directus (staging and production):  staging.directus.damienmeur.com, directus.damienmeur.com
 -  A traefik dashboard : traefik.damienmeur.com
 -  A whoami service : whoami.damienmeur.com
 -  A nodejs service returning the react app static files : damienmeur.com
 
 ### Requirements
 - A debian server (tested on debian 10)
 - A domain name on ovh (You may change the dns challenge config from traefik for another dns challenge)
 
 ### Installation
1. Clone the repository on your server:
    1.1 - Create ssh keys : `ssh-keygen`
    1.2 - Add the public key from $HOME/.ssh/id_rsa.pub into your github account
    1.3 - Clone the repo : `git clone git@github.com:damioune123/portfolio.git`
2. Install docker and docker-compose 
`sudo apt-get install docker docker-compose `
3. Configure redirection of sub-domains in ovh panel to damienmeur.com for :
      - staging.directus.damienmeur.com
      - directus.damienmeur.com
      - adminer.damienmeur.com
      - whoami.damienmeur.com
      - traefik.damienmeur.com
4. Generate a cert.json empty file for CA 
 `cd traefik && touch letsencrypt/acme.json && chmod 0600 letsencrypt/acme.json`
5. Generate secrets for the OVH DNS challenge : https://buzut.net/certbot-challenge-dns-ovh-wildcard/ (keep the generated secrets)
6. Copy ".env.sample:  into ".env", do no forget to replace the OVH secrets in  the .env
7. Create the db_network and web docker networks :
 `sudo docker network create db_network  && sudo docker network create web`
8. Grant all access to the mysql root admin
` sudo docker ps`
` sudo docker exec -ti containerId sh`
` mysql -u root -p`
` GRANT ALL PRIVILEGES ON `%`.* TO 'admin'@'%' IDENTIFIED BY 'your_password' WITH GRANT OPTION;`
` flush PRIVILEGES;`
` exit`
9. Launch whoami, directus and directus staging containers
`sudo docker-compose up -d