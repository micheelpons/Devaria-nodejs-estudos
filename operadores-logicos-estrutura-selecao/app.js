const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Esse programa vai checar se voce e maior de 18 anos e tem habilitacao para sabe se voce pode entrar no kart');
console.log('Alem das suas verificacoes, precisammos verificar se voce esta na lista de preseca do horario');

readline.question('Qual é o ano de seu nascimento?', ano => {
    if(ano > 2004){
        console.log('Você não tem 18 anos! Não poderá pilotar o kart!');
    }else{
        readline.question("Você tem habilitação? (Sim/Nao) ", temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Voce nao tem habilitação para entrar no kart!');
            }else{
                readline.question("Qual é o seu nome?", nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('Bem vindo ao kart Douglas!');
                            break;
                        case 'Michel' :
                            console.log('Bem vindo ao kart Michel!');
                            break;
                        case 'Rafael' :
                            console.log('Bem vindo ao kart Rafael!');
                            break;
                        default:
                            console.log('Seu nome não foi identificado na lista de presença!')
                    }
                })
            
            }
            

            
        })

        }
            
})
