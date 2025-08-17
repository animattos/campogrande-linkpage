export const productsData = {
    'whey-protein': {
        title: 'Whey Protein',
        image: 'whey-protein.png',
        description: 'Fundamental para a recuperação e crescimento muscular. Rico em aminoácidos essenciais, o Whey Protein é a proteína do soro do leite, de alto valor biológico e rápida absorção.',
        benefits: [
            'Rápida absorção e digestão',
            'Recuperação muscular aprimorada pós-treino',
            'Estimula a síntese proteica',
            'Auxilia no ganho de massa muscular magra',
            'Pode contribuir para a saciedade e controle de peso'
        ],
        suggestion: 'Misture uma dose (aproximadamente 30g) com água ou leite. Ideal para ser consumido imediatamente após o treino, ou em qualquer momento do dia para aumentar a ingestão proteica.',
        chartData: {
            labels: ['Mês 1', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5', 'Mês 6'],
            datasets: [{
                label: 'Ganho de Massa Muscular (kg)',
                data: [0.5, 1.2, 1.8, 2.5, 3.0, 3.5],
                backgroundColor: 'rgba(40, 167, 69, 0.6)',
                borderColor: 'rgba(40, 167, 69, 1)',
                borderWidth: 1
            }]
        }
    },
    'creatine': {
        title: 'Creatina',
        image: 'creatine.png',
        description: 'Aumenta a força, potência e o desempenho em exercícios de alta intensidade. A creatina é um composto que auxilia na produção de energia rápida para os músculos, ideal para treinos explosivos.',
        benefits: [
            'Aumento significativo de força e potência muscular',
            'Melhora o desempenho em exercícios de alta intensidade e curta duração',
            'Favorece o ganho de massa muscular magra',
            'Auxilia na recuperação muscular',
            'Pode melhorar a função cerebral (cognição)'
        ],
        suggestion: 'Consuma 3-5g de creatina por dia, preferencialmente após o treino ou em qualquer horário. Não é necessário fazer "saturação", o uso contínuo já traz resultados.',
        chartData: {
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6'],
            datasets: [{
                label: 'Aumento de Carga (kg)',
                data: [2, 5, 8, 10, 12, 15],
                backgroundColor: 'rgba(0, 123, 255, 0.6)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        }
    },
    'bcaa': {
        title: 'BCAA',
        image: 'bcaa.png',
        description: 'Aminoácidos de cadeia ramificada (Leucina, Isoleucina e Valina) que auxiliam na recuperação muscular, previnem o catabolismo (perda de massa muscular) e reduzem a fadiga durante o exercício.',
        benefits: [
            'Redução da fadiga durante o treino',
            'Prevenção do catabolismo muscular',
            'Suporte à recuperação e reparo muscular',
            'Auxílio na síntese de proteínas',
            'Melhora da performance em exercícios prolongados'
        ],
        suggestion: 'A dose varia de 5-10g. Pode ser consumido antes, durante ou após o treino, misturado em água. Em dias de não treino, pode ser tomado com as refeições.',
        chartData: {
            labels: ['Treino 1', 'Treino 2', 'Treino 3', 'Treino 4', 'Treino 5', 'Treino 6'],
            datasets: [{
                label: 'Nível de Fadiga Percebida (1-10)',
                data: [7, 6.5, 6, 5.5, 5, 4.5],
                backgroundColor: 'rgba(255, 193, 7, 0.6)',
                borderColor: 'rgba(255, 193, 7, 1)',
                borderWidth: 1
            }]
        }
    },
    'thermogenic': {
        title: 'Termogênico',
        image: 'thermogenic.png',
        description: 'Acelera o metabolismo e promove a queima de gordura. Geralmente contém cafeína e outros extratos naturais que aumentam o gasto energético do corpo e a oxidação de gorduras.',
        benefits: [
            'Aumento do gasto calórico e queima de gordura',
            'Mais energia e disposição para o treino',
            'Redução do apetite e controle da fome',
            'Melhora do foco e da concentração',
            'Auxílio na definição muscular'
        ],
        suggestion: 'Siga a indicação do fabricante, geralmente 1 ou 2 cápsulas pela manhã e/ou antes do treino. Evite tomar próximo ao horário de dormir para não prejudicar o sono.',
        chartData: {
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6'],
            datasets: [{
                label: 'Perda de Gordura Corporal (%)',
                data: [0.5, 1.0, 1.5, 2.0, 2.5, 3.0],
                backgroundColor: 'rgba(220, 53, 69, 0.6)',
                borderColor: 'rgba(220, 53, 69, 1)',
                borderWidth: 1
            }]
        }
    },
    'l-carnitine': {
        title: 'L-Carnitina',
        image: 'l-carnitine.png',
        description: 'Transporta ácidos graxos (gordura) para as mitocôndrias, onde são queimados para produzir energia. É um aminoácido que otimiza o uso da gordura como fonte de combustível para o corpo.',
        benefits: [
            'Otimiza a queima de gordura para energia',
            'Melhora a performance e resistência em exercícios aeróbicos',
            'Pode reduzir a fadiga e o dano muscular',
            'Auxilia na recuperação pós-exercício',
            'Benefícios para a saúde cardiovascular'
        ],
        suggestion: 'Geralmente 1 a 3g por dia, tomada preferencialmente 30-60 minutos antes do treino. Pode ser líquida ou em cápsulas.',
        chartData: {
            labels: ['Mês 1', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5', 'Mês 6'],
            datasets: [{
                label: 'Gordura Utilizada como Energia (unidades arbitrárias)',
                data: [10, 15, 20, 25, 30, 35],
                backgroundColor: 'rgba(108, 117, 125, 0.6)',
                borderColor: 'rgba(108, 117, 125, 1)',
                borderWidth: 1
            }]
        }
    },
    'fiber': {
        title: 'Suplementos de Fibra',
        image: 'fiber.png',
        description: 'Promovem saciedade, melhoram o trânsito intestinal e auxiliam no controle do apetite. As fibras são essenciais para uma digestão saudável e para a regulação do açúcar no sangue.',
        benefits: [
            'Aumento da saciedade, auxiliando no controle do peso',
            'Melhora do trânsito intestinal e prevenção da constipação',
            'Regulação dos níveis de açúcar no sangue',
            'Redução do colesterol',
            'Manutenção da saúde da microbiota intestinal'
        ],
        suggestion: 'A dose varia conforme o produto, mas geralmente é de 5-10g, misturada em um copo grande de água. É crucial beber bastante água ao consumir suplementos de fibra.',
        chartData: {
            labels: ['Dia 1', 'Dia 7', 'Dia 14', 'Dia 21', 'Dia 28'],
            datasets: [{
                label: 'Nível de Saciedade (1-10)',
                data: [6, 7, 7.5, 8, 8.5],
                backgroundColor: 'rgba(23, 162, 184, 0.6)',
                borderColor: 'rgba(23, 162, 184, 1)',
                borderWidth: 1
            }]
        }
    }
};