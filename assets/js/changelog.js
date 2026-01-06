const changelogContainer = document.querySelector('.changelog-list .container');

async function renderChangelog() {
    try {
        const response = await fetch('changelog.json');
        const data = await response.json();

        // Limpiar el contenedor antes de inyectar
        changelogContainer.innerHTML = '';

        data.changelog.forEach(group => {
            const groupElement = document.createElement('div');
            groupElement.className = 'release-group';

            // Construir el H2 de la versión (verificando si existe versión)
            const versionSpan = group.version 
                ? `<span class="release-version badge badge-fix">${group.version}</span>` 
                : '';
            
            groupElement.innerHTML = `
                <h2 class="release-date">${group.date} ${versionSpan}</h2>
            `;

            // Construir cada item de cambio
            group.items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'changelog-item';
                itemDiv.innerHTML = `
                    <span class="badge ${item.badge_class}">${item.badge_text}</span>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                `;
                groupElement.appendChild(itemDiv);
            });

            changelogContainer.appendChild(groupElement);
        });
    } catch (error) {
        console.error("Error cargando el changelog:", error);
    }
}

document.addEventListener('DOMContentLoaded', renderChangelog);
