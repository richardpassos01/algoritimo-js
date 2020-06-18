let saldoDisponivel = 1000;

alert('insira seu cartão');

alert('Seu saldo disponivel é' + saldoDisponivel + 'R$');

let valorSaque = Number(window.prompt('Quanto deseja sacar'));

if(valorSaque <= saldoDisponivel) {
    saldoDisponivel = saldoDisponivel - valorSaque;

    console.log('vc sacou seu dinheiro');

    console.log('Seu novo saldo é de', saldoDisponivel);
    
    console.log('Obrigado pela preferencia');
} else {
    alert('Tu nao tem dinheiro rapá.');
}


