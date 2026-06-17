// Модальное окно
function openModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // prevent background scroll
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // restore scroll
    }
}

// Закрытие модалки по клику вне окна
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Обработка формы в модалке
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('diagnostikaForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь можно добавить отправку на сервер (fetch / EmailJS и т.д.)
            // Для демо просто показываем сообщение
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Заявка отправлена!';
            submitBtn.style.background = 'linear-gradient(135deg, #2e7d32, #1b5e20)';
            submitBtn.disabled = true;
            
            setTimeout(function() {
                closeModal();
                // Сброс формы
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                
                // Можно показать thank you сообщение
                alert('Спасибо! Мы свяжемся с вами в течение 48 часов для бесплатной диагностики.');
            }, 1600);
        });
    }

    // Бургер меню
    const burger = document.querySelector('.burger');
    const mobileMenu = document.getElementById('mobileMenu');

    if (burger && mobileMenu) {
        burger.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Меняем иконку бургера
            if (mobileMenu.classList.contains('active')) {
                burger.innerHTML = '✕';
                burger.style.fontSize = '26px';
            } else {
                burger.innerHTML = '☰';
                burger.style.fontSize = '28px';
            }
        });

        // Закрытие меню при клике на ссылку
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                burger.innerHTML = '☰';
                burger.style.fontSize = '28px';
            });
        });
    }
});

// Закрытие мобильного меню (для вызова из HTML)
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const burger = document.querySelector('.burger');
    
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (burger) {
        burger.innerHTML = '☰';
        burger.style.fontSize = '28px';
    }
}