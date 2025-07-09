 // Exibe o chat quando o botão de ajuda é clicado
        document.getElementById('helpButton').onclick = function() {
            resetChat(); // Reseta o chat para o menu principal
            document.getElementById('chatContainer').style.display = 'block';
        };
        
        // Fecha o chat
        function closeChat() {
            document.getElementById('chatContainer').style.display = 'none';
        }

        // Reseta o chat para o menu principal
        function resetChat() {
            document.getElementById('faqList').style.display = 'block'; // Mostra as perguntas novamente
            document.getElementById('menuPrompt').innerText = "Escolha uma das opções abaixo:"; // Restaura o texto do menu
            document.getElementById('answer').innerHTML = ''; // Limpa a resposta
        }

        // Exibe a resposta de acordo com a pergunta clicada
        function showAnswer(questionNumber, questionText) {
            const answers = {
                1: "O acesso a plataforma de autenticação é obrigatório para acessar a IA, pois como usamos tecnologias do Google para melhorias na IA, deve autenticar a IA com a sua conta pessoal do Google, isso é somente para verificar a segurança para a empresa Google que você é realmente humano e não um robô. O login deve ser feito com (E-mail, senha e telefone vinculado a sua conta do Google). Caso alguma informação esteja inválida, errada ou incorreta o acesso é suspenso, o sistema não dará avisos extras, porém a IA não será acessada, dessa forma algum problema na autenticação ocorreu.",
                2: "O código não foi enviado devido a ter colocado o número errado, ou o mesmo não foi cadastrado na sua conta do Google. (Lembre-se que a segurança em duas etapas se estiver ativada não libera o envio do código pela linha móvel.) Caso errou a senha ou e-mail também o código não será enviado, somente tem 3 tentativas diárias, se ambas forem com falha somente no outro dia.",
                3: "A autenticação é feita com as credenciais verdadeiras, o sistema da nossa plataforma verifica se as informações são verdadeiras com a conta que informou, caso informar algum e-mail falso o sistema detectará e bloqueará o acesso, a demora para acessar a IA é a validação que o sistema está aguardando...",
                4: "Sim, caso a segurança em dois fatores estar ativa o código não é enviado para o chip cadastrado na sua conta Google, portanto deve desativar nas configurações da sua conta.",
                5: "O telefone é obrigatório para receber o código de acesso e autenticar que não é um robô, sem o telefone cadastrado o acesso não será realizado, o Google entende que não é um humano e bloqueia a solicitação. O telefone é a única maneira de realizar o acesso com a IA e Google, caso não concordar com os termos descritos na página do Google de uso do telefone para o acesso, a nossa equipe de suporte não poderá ajudar. Link da política do Google sobre o uso do número de telefone.<br><button onclick=\"window.open('https://support.google.com/adsense/answer/2938681?hl=pt-BR', '_blank')\" style='margin-top: 10px; background-color: #6e7ef3; color: white; border: none; border-radius: 5px; padding: 10px; cursor: pointer; width: 100%;'>Saiba mais</button>",
                6: "Clique aqui para registrar sua manifestação, nossos atendentes retornarão em até 48 horas...<br><button onclick=\"window.open('https://www.sistemadeiaindisponívelparausodevidoamanutencao.com', '_blank')\" style='margin-top: 10px; background-color: #6e7ef3; color: white; border: none; border-radius: 5px; padding: 10px; cursor: pointer; width: 100%;'>Fale conosco, botão indisponível ainda.</button>"
            };

            // Oculta as perguntas
            document.getElementById('faqList').style.display = 'none';

            // Substitui o texto do menu
            document.getElementById('menuPrompt').innerText = questionText;

            // Exibe o efeito de "digitando" com animação
            const answerDiv = document.getElementById('answer');
            answerDiv.innerHTML = '<div style="font-style: italic; color: white;">Digitando <span class="dots">...</span></div>';
            
            // Inicia a animação dos três pontinhos
            animateDots();

                setTimeout(() => {
    answerDiv.innerHTML = `
        <div style="background-color: #404141; border-radius: 10px; padding: 10px; margin-top: 10px; max-width: 80%; word-wrap: break-word;">
            ${answers[questionNumber]}
        </div>
        <button onclick="backToMenu()" style="margin-top: 10px; background-color: green; color: white; border: none; border-radius: 5px; padding: 10px; cursor: pointer; width: 100%;">
            Voltar ao Menu
        </button>
    `;
    stopAnimatingDots(); // Para a animação após a resposta ser exibida
}, 5000); // Tempo de espera de 5 segundos antes de mostrar a resposta
        }

        // Função para animar os três pontinhos
        let dotAnimationInterval;
        function animateDots() {
            const dots = document.querySelector('.dots');
            let dotCount = 0;
            dotAnimationInterval = setInterval(() => {
                dotCount = (dotCount + 1) % 4; // Ciclo de 0 a 3
                dots.textContent = '.'.repeat(dotCount); // Atualiza o número de pontos
            }, 500); // Atualiza a cada 500ms
        }

        // Função para parar a animação dos três pontinhos
        function stopAnimatingDots() {
            clearInterval(dotAnimationInterval); // Para a animação
            const dots = document.querySelector('.dots');
            dots.textContent = ''; // Limpa os pontos
        }

        // Função para voltar ao menu de opções
        function backToMenu() {
            document.getElementById('faqList').style.display = 'block'; // Mostra as perguntas novamente
            document.getElementById('menuPrompt').innerText = "Escolha uma das opções abaixo:"; // Restaura o texto do menu
            document.getElementById('answer').innerHTML = ''; // Limpa a resposta
        }
