//Definição da classe e das variáveis de instância da classe.
class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }


//Implementar os Métodos de instância para calcular a categoria---------------------------------
  calculaCategoria(){
    if(this.idade > 8 && this.idade < 12){
      return ("Categoria: Infantil")
    }
   if(this.idade > 11 && this.idade < 14){
      return ("Categoria: Juvenil")
    }
    if(this.idade > 13 && this.idade < 16){
      return ("Categoria: Intermediário")
    }
    if(this.idade > 15 && this.idade < 31){
      return ("Categoria: Adulto")
    }
    return ("Sem categoria");
 }
 
//Implementar os Métodos de instância para calcular o IMC(Fórmula: imc = peso / (altura x altura)-------------------  
  calculaIMC(){
    return(`Indice de massa corpórea é de ${this.peso / (this.altura * this.altura)}.`);
  }

//Implementar os Métodos de instância para calcular a média válida---------------------------------------  
 calculaMediaValida(){
  let mediaValida = (this.notas.sort()).slice(1,4);
  
     let soma = 0;
     mediaValida.forEach(function(nota){
       soma = soma + nota;
     });
       return(`Alcançou média válida de: ${soma / mediaValida.length}.`);
 }
  
//Implementar os Métodos de instância para visualizar o nome do atleta--------------------------------------    
  obtemNomeAtleta(){
    return (`Nome completo: ${this.nome}.`)
  }
  
//Implementar os Métodos de instância para visualizar a idade do atleta--------------------------------------    
  obtemIdadeAtleta(){
    return (`O atleta possui ${this.idade} anos de idade.`);
  }
  
//Implementar os Métodos de instância para visualizar o peso do atleta--------------------------------------    
  obtemPesoAtleta(){
    return(`Seu peso é de ${this.peso}Kg.`);
  }

//Implementar os Métodos de instância para visualizar as notas do atleta--------------------------------------    
  obtemNotasAtleta(){
    return (`Notas: ${this.notas}.`)
  }
  
//Implementar os Métodos de instância para visualizar a Categoria do atleta-------------------------------------- 
  obtemCategoria(){
    return(cesar.calculaCategoria());
  }

//Implementar os Métodos de instância para visualizar o IMC do atleta-------------------------------------- 
  obtemIMC(){
    return (cesar.calculaIMC())
  }
  
//Implementar os Métodos de instância para retornar a média válida do atleta-------------------------------------- 
  obtemMediaValida(){
    return(cesar.calculaMediaValida());
  }

//Implementar os Métodos de instância para retornar a altura do atleta-------------------------------------- 
  obtemAlturaAtleta(){
    return (`Sua altura é de ${this.altura} metros.`);
  }
  
}  

//Variavel/instância que recebe o "nome do atleta:cesar" vinculado à classe "Atleta"
  let cesar = new Atleta ("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);  
  
  
//Chamar os métodos de instâncias - Classe Atleta
  console.log(cesar.obtemNomeAtleta());    
  console.log(cesar.obtemIdadeAtleta());
  console.log(cesar.obtemPesoAtleta());
  console.log(cesar.obtemAlturaAtleta());
  console.log(cesar.obtemNotasAtleta());
  console.log(cesar.calculaCategoria());
  console.log(cesar.calculaIMC());
  console.log(cesar.calculaMediaValida());

    //console.log(cesar.obtemCategoria());
    //console.log(cesar.obtemIMC());
    //console.log(cesar.obtemMediaValida());
