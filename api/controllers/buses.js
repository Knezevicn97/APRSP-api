const Bus = require('../model/bus');

const utilsScraper = require('../utils/gspnsScraper');


function getBuses(req, res) {
    let rv, linija;
    let cela_nedelja = [];
    let async_call = 0;

    if(!req.query.rv || !req.params.id) {
        return res.status(400)
            .json({"message": "Malformed request, query paramater rv is required"})
    } else {
        dani = ['R', 'S', 'N']
        rv = req.query.rv.toLowerCase();
        linija = req.params.id.toUpperCase();
    }

    if (rv !== 'rvg' && rv !== 'rvp') {
        return res.status(400)
            .json({'message': 'Malformed request, allowed values for query parameter rv are \'rvg\', \'rvp\''});
    }

    for (dan of dani) {
        utilsScraper.scrapeBus(linija, dan, rv)
        .then(data => {
            async_call += 1;
            cela_nedelja.push(data)
            if(async_call === dani.length) {
                res.status(200).json(cela_nedelja)
            }
        })
        .catch(err => {
            async_call += 1;
            if(async_call === dani.length && cela_nedelja.length === 0) {
                res.status(500).json(err)
            } else if (async_call === dani.length) {
                res.status(200).json(cela_nedelja)
            }
        });
    }
}

module.exports = {getBuses};