"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaSimples = exports.No = void 0;
// Classe Nó
class No {
    constructor(valor) {
        this.proximo = null;
        this.valor = valor;
    }
}
exports.No = No;
// Classe Lista Simplesmente Encadeada
class ListaSimples {
    constructor() {
        this.inicio = null;
        this.total = 0;
    }
    // Adicionar elemento à lista
    adicionar(valor) {
        const novoNo = new No(valor);
        if (this.inicio === null) {
            this.inicio = novoNo;
        }
        else {
            let atual = this.inicio;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
        this.total++;
    }
    // Remover elemento da lista
    remover(valor) {
        if (this.inicio === null) {
            return false;
        }
        if (this.inicio.valor === valor) {
            this.inicio = this.inicio.proximo;
            this.total--;
            return true;
        }
        let atual = this.inicio;
        while (atual.proximo !== null) {
            if (atual.proximo.valor === valor) {
                atual.proximo = atual.proximo.proximo;
                this.total--;
                return true;
            }
            atual = atual.proximo;
        }
        return false;
    }
    // Verificar se a lista contém um elemento
    tem(valor) {
        let atual = this.inicio;
        while (atual !== null) {
            if (atual.valor === valor) {
                return true;
            }
            atual = atual.proximo;
        }
        return false;
    }
    // Mostrar os elementos da lista
    mostrar() {
        let atual = this.inicio;
        const elementos = [];
        while (atual !== null) {
            elementos.push(atual.valor);
            atual = atual.proximo;
        }
        if (elementos.length === 0) {
            console.log(" A lista está vazia.");
        }
        else {
            console.log(elementos.join(" -> "));
        }
    }
}
exports.ListaSimples = ListaSimples;
