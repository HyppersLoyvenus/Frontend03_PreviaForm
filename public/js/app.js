document.addEventListener("DOMContentLoaded", (event) => {
    // Captura dos elementos
    const form = document.getElementById('cadastro');
    const nomeInput = document.getElementById('nome');
    const categoriaSelect = document.getElementById('categoria');
    const aceitoCheckbox = document.getElementById('aceito');
    const arquivoInput = document.getElementById('arquivo');

    const pNome = document.getElementById('p-nome');
    const pCategoria = document.getElementById('p-categoria');
    const pAceito = document.getElementById('p-aceito');
    const pArquivo = document.getElementById('p-arquivo');

    // Eventos para a prévia
    nomeInput.addEventListener('input', () => {
        pNome.textContent = nomeInput.value || '—';
    });
    categoriaSelect.addEventListener('change', () => {
        pCategoria.textContent = categoriaSelect.value || '—';
    });
    aceitoCheckbox.addEventListener('change', () => {
        pAceito.textContent = aceitoCheckbox.checked ? 'sim' : 'não';
    });
    arquivoInput.addEventListener('change', () => {
        if (arquivoInput.files.length > 0) {
            pArquivo.textContent = arquivoInput.files[0].name;
        } else {
            pArquivo.textContent = 'nenhum';
        }
    });

    // Para enviar
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        console.log("Dados do formulário (FormData):");
        console.log(Object.fromEntries(formData));
        console.log("\n--- Entradas do FormData ---");
        
        for (const [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }
    });
});