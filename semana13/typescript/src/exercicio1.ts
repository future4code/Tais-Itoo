// a-A variável reclama que o tipo não é string
let minhaString: string='10'

// b- Adicionando | string depois de number
let meuNumero: number | string = '10'

// c- Criando uma type e passando alguns parâmetros
type person = {
    name: string;
    age: number;
    favoriteColor: string
} 

const aline: person = {
    name: 'Aline',
    age: 20,
    favoriteColor: 'green'
}

// d , e

enum ArcoIris {
    C1 = 'VERMELHO',
    C2 = 'LARANJA',
    C3 = 'AMARELO',
    C4 = 'VERDE',
    C5 = 'AZUL',
    C6 = 'ANIL',
    C7 = 'VIOLETA'
}

const bob: person = {
    name: 'Bob',
    age: 30,
    favoriteColor: ArcoIris.C5,
};

const maria: person = {
    name: 'Maria',
    age: 35,
    favoriteColor: ArcoIris.C1,
};

const jose: person = {
    name: 'Jose',
    age: 40,
    favoriteColor: ArcoIris.C3,
};

