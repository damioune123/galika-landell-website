const express = require('express');
const path = require('path');
require('dotenv').config();
const next = require('next');

const PORT = process.env.PORT || 3200;
const dev = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging';
if(process.env.NODE_ENV === 'production') {
    const app = express();
    console.log(path.join(__dirname,'../out'));
    app.use(express.static(path.join(__dirname,'../out')));

    app.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on ${PORT} FOR SSG`);
    });

}
else {
    const app = next({ dir: './', dev });
    const handler = app.getRequestHandler();
    app
        .prepare()
        .then(() => {
            const server = express();

            server.get('*', (req, res) => handler(req, res));
            server.listen(PORT, (err) => {
                if (err) throw err;
                console.log(`> Ready on ${PORT} FOR SSR`);
            });
        })
        .catch((ex) => {
            console.error(ex.stack);
            process.exit(1);
        });
}

