module.exports = class Bus {
    constructor(id, broj, naziv, linija, dan, raspored = {}, dodaci) {
        this.id = id;
        this.broj = broj;
        this.naziv = naziv;
        this.linija = linija;
        this.dan = dan;
        this.raspored = raspored;
        this.dodaci = dodaci;
    }
};