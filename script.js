document.querySelectorAll('.conforme, .nao-conforme').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.parentElement;
        
        // Se o botão "Conforme" for clicado
        if (this.classList.contains('conforme')) {
            // Se já estiver marcado como "Conforme", desmarque
            if (item.style.backgroundColor === 'rgb(40, 167, 69)') {
                item.style.backgroundColor = '';
                item.style.color = '';
            } else {
                item.style.backgroundColor = '#28a745';
                item.style.color = 'white';
                // Desabilitar o botão "Não Conforme"
                item.querySelector('.nao-conforme').disabled = true;
            }
        } 
        // Se o botão "Não Conforme" for clicado
        else {
            // Se já estiver marcado como "Não Conforme", desmarque
            if (item.style.backgroundColor === 'rgb(220, 53, 69)') {
                item.style.backgroundColor = '';
                item.style.color = '';
            } else {
                item.style.backgroundColor = '#dc3545';
                item.style.color = 'white';
                // Desabilitar o botão "Conforme"
                item.querySelector('.conforme').disabled = true;
            }
        }
        
        // Desabilitar os botões após a seleção se não estiver desmarcando
        if (item.style.backgroundColor !== '') {
            item.querySelectorAll('button').forEach(btn => btn.disabled = true);
        }
    });
});
document.querySelectorAll('.conforme, .nao-conforme').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.parentElement;

        // Alterna a classe 'active' para marcar/desmarcar
        if (this.classList.contains('conforme')) {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                item.querySelector('.nao-conforme').classList.remove('active');
            }
        } else {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                item.querySelector('.conforme').classList.remove('active');
            }
        }
    });
});
document.querySelectorAll('.conforme, .nao-conforme').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.parentElement;

        // Alterna a classe 'active' para marcar/desmarcar
        if (this.classList.contains('conforme')) {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                item.querySelector('.nao-conforme').classList.remove('active');
            }
        } else {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                item.querySelector('.conforme').classList.remove('active');
            }
        }
    });
});
document.querySelectorAll('.conforme, .nao-conforme').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.closest('.checklist-item');

        // Alterna a classe 'active' para marcar/desmarcar
        if (this.classList.contains('conforme')) {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                item.querySelector('.nao-conforme').classList.remove('active');
            }
        } else {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                item.querySelector('.conforme').classList.remove('active');
            }
        }
    });
});

document.querySelectorAll('.conforme, .nao-conforme').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.closest('.checklist-item');

        // Alterna a classe 'active' para marcar/desmarcar
        if (this.classList.contains('conforme')) {
            this.classList.toggle('active');
            const naoConformeButton = item.querySelector('.nao-conforme');
            naoConformeButton.classList.remove('active'); // Desmarcar 'não conforme'
        } else {
            this.classList.toggle('active');
            const conformeButton = item.querySelector('.conforme');
            conformeButton.classList.remove('active'); // Desmarcar 'conforme'
        }
    });
});
document.querySelectorAll('.checklist-item').forEach(item => {
    const conformeCheckbox = item.querySelector('.conforme');
    const naoConformeCheckbox = item.querySelector('.nao-conforme');

    conformeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            naoConformeCheckbox.checked = false; // Desmarcar "Não"
        }
    });

    naoConformeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            conformeCheckbox.checked = false; // Desmarcar "Sim"
        }
    });
});
document.querySelectorAll('.checklist-item').forEach(item => {
    const conformeCheckbox = item.querySelector('.conforme');
    const naoConformeCheckbox = item.querySelector('.nao-conforme');

    conformeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            naoConformeCheckbox.checked = false; // Desmarcar "Não"
        }
    });

    naoConformeCheckbox.addEventListener('change', function() {
        if (this.checked) {
            conformeCheckbox.checked = false; // Desmarcar "Sim"
        }
    });
});

// Lógica para salvar observações
const salvarButton = document.getElementById('salvarObservacao');
const observacaoInput = document.getElementById('observacao');
const observacoesSalvasList = document.getElementById('observacoesSalvas');

salvarButton.addEventListener('click', function() {
    const observacaoText = observacaoInput.value.trim();
    if (observacaoText) {
        const li = document.createElement('li');
        li.textContent = observacaoText;
        observacoesSalvasList.appendChild(li);
        observacaoInput.value = ''; // Limpar o campo após salvar
    } else {
        alert('Por favor, digite uma observação antes de salvar.');
    }
});
