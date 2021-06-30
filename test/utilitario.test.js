const Utilitario = require('../lib/utilitario')
const u = new Utilitario();

describe('Utilitario' , () => {
    test('verifique as seguintes entradas: (i) um vetor {1, 2, 3, 4, 5, 6}' , () => {
        u.acharExtremos([1, 2, 3, 4, 5, 6])
        expect(u.menor).toBe(1);
        expect(u.maior).toBe(6);
        expect(u.indiceMenor).toBe(0);
        expect(u.indiceMaior).toBe(5);
    });

    test('verifique as seguintes entradas: (ii) um vetor {1, 99, 3, -5, 8}' , () => {
        u.acharExtremos([1, 99, 3, -5, 8])
        expect(u.menor).toBe(-5);
        expect(u.maior).toBe(99);
        expect(u.indiceMenor).toBe(3);
        expect(u.indiceMaior).toBe(1);
    });

    test('verifique as seguintes entradas: (iii) um vetor vazio' , () => {
        expect(() => {
            u.acharExtremos([]);
        }).toThrow('vetor com zero elementos');
    });

    test('verifique as seguintes entradas: (iv) um vetor nulo' , () => {
        expect(() => {
            u.acharExtremos(null);
        }).toThrow('vetor nao pode ser nulo');
    });
});