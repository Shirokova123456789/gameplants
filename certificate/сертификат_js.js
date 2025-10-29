document.addEventListener('DOMContentLoaded', function() {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const generateBtn = document.getElementById('generateBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const nameOutput = document.getElementById('nameOutput');
    const certificateTemplate = document.getElementById('certificateTemplate');
    
    // Функция для генерации сертификата
    function generateCertificate() {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();

        if (!firstName || !lastName) {
            alert('Пожалуйста, введите имя и фамилию');
            return;
        }

        // Форматируем полное имя
        const fullName = `${firstName} ${lastName}`;
        
        // Отображаем имя на сертификате
        nameOutput.textContent = fullName;
        
        // Показываем кнопку скачивания
        downloadBtn.style.display = 'block';
    }

    // Функция для скачивания сертификата
    function downloadCertificate() {
        // Создаем canvas для объединения изображения и текста
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Устанавливаем размеры canvas как у изображения
        canvas.width = certificateTemplate.naturalWidth;
        canvas.height = certificateTemplate.naturalHeight;
        
        // Ждем загрузки изображения
        certificateTemplate.onload = function() {
            // Рисуем изображение на canvas
            ctx.drawImage(certificateTemplate, 0, 0);
            
            // Настройки текста
            ctx.font = 'bold 48px Times New Roman'; // Настройте под ваш шаблон
            ctx.fillStyle = '#2c3e50';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            // Позиция текста (настройте под ваш шаблон)
            const textX = canvas.width / 2;
            const textY = canvas.height * 0.45;
            
            // Рисуем текст
            ctx.fillText(nameOutput.textContent, textX, textY);
            
            // Создаем ссылку для скачивания
            const link = document.createElement('a');
            link.download = `сертификат_${firstNameInput.value}_${lastNameInput.value}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        };
        
        // Если изображение уже загружено
        if (certificateTemplate.complete) {
            certificateTemplate.onload();
        }
    }

    // Обработчики событий
    generateBtn.addEventListener('click', generateCertificate);
    downloadBtn.addEventListener('click', downloadCertificate);

    // Разрешаем генерацию по нажатию Enter
    [firstNameInput, lastNameInput].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                generateCertificate();
            }
        });
    });
});