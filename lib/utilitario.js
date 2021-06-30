class Utilitario {

    validate(v) {
        if (v == null)
            throw 'vetor nao pode ser nulo';

        if (v.length == 0)
            throw 'vetor com zero elementos';
    }

    acharExtremos(v) {

        this.validate(v);

        this.menor = v[0];
        this.maior = v[0];

        this.indiceMenor = 0;
        this.indiceMaior = 0;

        for (let i = 1; i < v.length; i++) {
            if (v[i] < this.menor) {
                this.menor = v[i];
                this.indiceMenor = i;
            }
            if (v[i] > this.maior) {
                this.maior = v[i];
                this.indiceMaior = i;
            }
        }
    }
}

module.exports = Utilitario;