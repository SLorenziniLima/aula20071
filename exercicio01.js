//Fazer um menu de exercícios utilizando exemplos dado em aula (6 exercícios dentro de funções,
// e incluir nome ou algo de sua preferência para criar um objeto e manipulá-lo)

import promptSync from "prompt-sync"

import { exercicio02 } from "./exercicio02.js";

import { exercicio03 } from "./exercicio03.js";

import { exercicio04 } from "./exercicio04.js";

import { exercicio05 } from "./exercicio05.js";

import { exercicio06 } from "./exercicio06.js";

import { exercicio07 } from "./exercicio07.js";

let prompt = promptSync()

let resposta;

do {

    console.log("Bem vindo ao menu de exercicios")

    resposta = prompt( "Digite um numero de 1 a 6, para escolher um exercicio ou sair para interromper o programa: ")

    switch(resposta) {
        case"1":
        console.log ("Você escolheu o exercicio 1")
        exercicio02()

        break;

        case"2":
        console.log ("Você escolheu o exercicio 2")
        exercicio03()
        break;

        case"3":
        console.log ("Você escolheu o exercicio 3")
        exercicio04()
        break;

        case"4":
        console.log ("Você escolheu o exercicio 4")
        exercicio05()
        break;

        case"5":
        console.log ("Você escolheu o exercicio 5")
        exercicio06
        break;

        case"6":
        console.log ("Você escolheu o exercicio 6")
        exercicio07
        break;

        default:

        console.log(" Você agora vai sair do menu de exercicios")

        break;




    }

    
} while (resposta != "sair");

