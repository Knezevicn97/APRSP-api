const osmosis = require('osmosis');

module.exports.getUrlBaseValues = function() {
    return new Promise((resolve, reject) => {
        let baseUrl = 'http://www.gspns.co.rs/red-voznje/gradski';
        osmosis.get(baseUrl)
            .find('#vaziod')
            .set({
                'vaziod': ['option@value'],
                'vaziodTekst': ['option']
            })
            .find('#rv')
            .set({
                'rv': ['option@value'],
                'rvTekst': ['option']
            })
            .find('#dan')
            .set({
                'dan': ['option@value'],
                'danTekst': ['option']
            })
            .data(data => {
                "use strict";
                data.baseUrl = baseUrl;
                if(!data.rv || !data.dan || !data.vaziod)
                    return reject({'message': 'Failed to get base values from form'});
                resolve(data);
            });
    })
};