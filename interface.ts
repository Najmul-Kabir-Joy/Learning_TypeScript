interface Player {
    name: string,
    club: string,
    salary: number,
    team?: string
}
/*if you don't want to set a 
declared property for a object simply use
? mark
*/
const player1: Player = {
    name: 'Najmul',
    club: 'Dhaka',
    salary: 15000,
    team: 'BD'
}
const player2: Player = {
    name: 'Najmul',
    club: 'Dhaka',
    salary: 15000,
}

interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number,
}

interface Developer extends Employee {
    lang: string,
    codeEditor: string,
    typingSpeed: number
}

const zack: Developer = {
    name: 'Zakku',
    designation: 'sr eng',
    salary: 2000,
    age: 12,
    lang: 'java',
    codeEditor: 'vs_code',
    typingSpeed: 100
}
