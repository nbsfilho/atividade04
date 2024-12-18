import { ListaSimples } from "./lista_simples";
import * as readline from "readline";

// Cria uma interface para entrada de dados pelo console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const minhaLista = new ListaSimples<number>();

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
function tratarOpcao(opcao: string) {
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
        } else {
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
        } else {
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
