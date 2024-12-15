"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const lista_simples_1 = require("./lista_simples");
const readline = __importStar(require("readline"));
// Cria uma interface para entrada de dados pelo console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const minhaLista = new lista_simples_1.ListaSimples();
// Função para mostrar o menu
function mostrarMenu() {
    console.log(`
=======================
  MENU DE OPÇÕES
=======================
1. Adicionar número à lista
2. Remover número da lista
3. Verificar se um número está na lista
4. Mostrar a lista
5. Sair
=======================
`);
    rl.question("Escolha uma opção: ", (opcao) => {
        tratarOpcao(opcao);
    });
}
// Função Menu
function tratarOpcao(opcao) {
    switch (opcao) {
        case "1":
            rl.question("Digite o número a ser adicionado: ", (numero) => {
                const valor = parseInt(numero, 10);
                minhaLista.adicionar(valor);
                console.log(` Número ${valor} adicionado com sucesso!`);
                mostrarMenu();
            });
            break;
        case "2":
            rl.question("Digite o número a ser removido: ", (numero) => {
                const valor = parseInt(numero, 10);
                const removido = minhaLista.remover(valor);
                if (removido) {
                    console.log(` Número ${valor} removido com sucesso!`);
                }
                else {
                    console.log(` Número ${valor} não encontrado na lista.`);
                }
                mostrarMenu();
            });
            break;
        case "3":
            rl.question("Digite o número a ser verificado: ", (numero) => {
                const valor = parseInt(numero, 10);
                const encontrado = minhaLista.tem(valor);
                if (encontrado) {
                    console.log(` O número ${valor} está na lista.`);
                }
                else {
                    console.log(` O número ${valor} não foi encontrado na lista.`);
                }
                mostrarMenu();
            });
            break;
        case "4":
            console.log(" Conteúdo atual da lista:");
            minhaLista.mostrar();
            mostrarMenu();
            break;
        case "5":
            console.log("Saindo do programa. Até mais!");
            rl.close();
            break;
        default:
            console.log(" Opção inválida. Tente novamente.");
            mostrarMenu();
            break;
    }
}
// Inicia o programa mostrando o menu
mostrarMenu();
