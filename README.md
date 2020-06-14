# Galika-Landell
##### This directory contains all requires configurations to run:
 -  A Traefik reverse proxy (handling ssl certificates renewals with dns challenge)
 -  A mariadb (mysql) 
 -  An adminer server (similar to php my admin): adminer.galika-landell.com
 -  A traefik dashboard : traefik.galika-landell.com
 -  A cadvisor service : cadvisor.galika-landell.com
 -  A nodejs service returning the react app static files (NextJS SSG) for prod env: galika-landell.com
  - A nodejs service rendering instantly the react app (NextJS SSR) for staging env : staging.galika-landell.com

 
 ### Requirements
 - A debian server (tested on debian 10)
 - A domain name 
 
 ### Installation
1. Clone the repository on your server:
    1.1 - Create ssh keys : `ssh-keygen`
    1.2 - Add the public key from $HOME/.ssh/id_rsa.pub into your github account
    1.3 - Clone the repo : `git clone git@github.com:damioune123/galika-landell-website.git`
2. Install docker and docker-compose 
`sudo apt-get install docker docker-compose `
3. Configure redirection of sub-domains in ovh panel to galika-landell.com for :
      - staging.directus.galika-landell.com
      - directus.galika-landell.com
      - adminer.galika-landell.com
      - traefik.galika-landell.com
      - scripts.galika-landell.com
      - staging.galika-landell.com
      - cadvisor.galika-landell.com
  
  You may also configure some additional redirection to the prod server (galika-landell.be, ...)

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
9. Create a .env.prod and a .env.staging file in frontend folder based on the .env.sample template in the frontend directory
10. In the traefik directory, create a 'admin-users.txt' file based on 'admin-users.txt.sample', you can add your own admin users to access basic-auth protected url with following command :
 `sudo htpasswd myUserName`
11. Launch whoami, directus and directus staging containers
 `sudo docker-compose up -d `