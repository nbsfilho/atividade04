// Classe Nó
export class No<T> {
  public valor: T;
  public proximo: No<T> | null = null;

  constructor(valor: T) {
    this.valor = valor;
  }
}

// Classe Lista Simplesmente Encadeada
export class ListaSimples<T> {
  private inicio: No<T> | null = null;
  private total: number = 0;

  // Adicionar elemento à lista
  public adicionar(valor: T): void {
    const novoNo = new No(valor);
    if (this.inicio === null) {
      this.inicio = novoNo;
    } else {
      let atual = this.inicio;
      while (atual.proximo !== null) {
        atual = atual.proximo;
      }
      atual.proximo = novoNo;
    }
    this.total++;
  }

  // Remover elemento da lista
  public remover(valor: T): boolean {
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
  public tem(valor: T): boolean {
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
  public mostrar(): void {
    let atual = this.inicio;
    const elementos: T[] = [];
    while (atual !== null) {
      elementos.push(atual.valor);
      atual = atual.proximo;
    }
    if (elementos.length === 0) {
      console.log(" A lista está vazia.");
    } else {
      console.log(elementos.join(" -> "));
    }
  }
}
