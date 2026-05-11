// Função que calcula o saldo e define o nível
function calcularNivel(vitorias, derrotas) {
    // Cálculo do saldo
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão baseada na quantidade de VITÓRIAS
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorno de um objeto com os dois valores
    return { saldoVitorias, nivel };
}

// Chamada da função e armazenamento do resultado
let resultado = calcularNivel(85, 20);

// Saída final conforme solicitado
console.log(`O Herói tem de saldo de **${resultado.saldoVitorias}** está no nível de **${resultado.nivel}**`);
