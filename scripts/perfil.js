document.addEventListener('DOMContentLoaded', () => {
    const editBtn = document.getElementById('editProfileBtn');
    const modal = document.getElementById('editModal');
    const cancelBtn = document.getElementById('cancelModal');
    const saveBtn = document.getElementById('saveModal');

    const inputName = document.getElementById('inputName');
    const inputAge = document.getElementById('inputAge');
    const inputOccupation = document.getElementById('inputOccupation');

    const profileNameEl = document.getElementById('profileName');
    const profileDetailsEl = document.getElementById('profileDetails');

    // Load saved data from localStorage if available
    const savedName = localStorage.getItem('profileName');
    const savedAge = localStorage.getItem('profileAge');
    const savedOccupation = localStorage.getItem('profileOccupation');

    if (savedName && profileNameEl) profileNameEl.textContent = savedName;
    if (savedAge && savedOccupation && profileDetailsEl) {
        profileDetailsEl.textContent = `${savedAge} años · ${savedOccupation}`;
    }

    if (editBtn && modal) {
        editBtn.addEventListener('click', () => {
            if (profileNameEl) inputName.value = profileNameEl.textContent.trim();
            if (profileDetailsEl) {
                const details = profileDetailsEl.textContent.split('·');
                if (details.length >= 2) {
                    inputAge.value = parseInt(details[0]) || 20;
                    inputOccupation.value = details[1].trim();
                }
            }
            modal.style.display = 'flex';
        });
    }

    if (cancelBtn && modal) {
        cancelBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    if (saveBtn && modal) {
        saveBtn.addEventListener('click', () => {
            const newName = inputName.value.trim() || 'Sofia Martinez';
            const newAge = inputAge.value.trim() || '20';
            const newOccupation = inputOccupation.value.trim() || 'Estudiante';

            if (profileNameEl) profileNameEl.textContent = newName;
            if (profileDetailsEl) profileDetailsEl.textContent = `${newAge} años · ${newOccupation}`;

            localStorage.setItem('profileName', newName);
            localStorage.setItem('profileAge', newAge);
            localStorage.setItem('profileOccupation', newOccupation);

            modal.style.display = 'none';
        });
    }

    // "Mis mensajes" row navigation
    const propiedades = document.querySelectorAll(".propiedad");
    if (propiedades.length >= 2) {
        propiedades[1].style.cursor = "pointer";
        propiedades[1].addEventListener("click", () => {
            window.location.href = "mensajes.html";
        });
    }

    // "Cerrar Sesión" row navigation
    propiedades.forEach(prop => {
        const text = prop.textContent || "";
        if (text.includes("Cerrar Sesión")) {
            prop.style.cursor = "pointer";
            prop.addEventListener("click", () => {
                window.location.href = "login.html";
            });
        }
    });

    // Footer Navigation
    const navInicio = document.getElementById("nav-inicio");
    const navExplorar = document.getElementById("nav-explorar");
    const navMensajes = document.getElementById("nav-mensajes");
    const navPerfil = document.getElementById("nav-perfil");

    if (navInicio) navInicio.addEventListener("click", () => window.location.href = "principal.html");
    if (navExplorar) navExplorar.addEventListener("click", () => window.location.href = "explorar.html");
    if (navMensajes) navMensajes.addEventListener("click", () => window.location.href = "mensajes.html");
    if (navPerfil) navPerfil.addEventListener("click", () => window.location.href = "perfil.html");
});
