document.addEventListener('DOMContentLoaded', function() {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const generateBtn = document.getElementById('generateBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const nameOutput = document.getElementById('nameOutput');
    const certificateTemplate = document.getElementById('certificateTemplate');
    

    function generateCertificate() {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();

        if (!firstName || !lastName) {
            alert('Пожалуйста, введите имя и фамилию');
            return;
        }

        const fullName = `${firstName} ${lastName}`;
        
        nameOutput.textContent = fullName;
        
        downloadBtn.style.display = 'block';
    }

    function downloadCertificate() {

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
  
        canvas.width = certificateTemplate.naturalWidth;
        canvas.height = certificateTemplate.naturalHeight;
        

        certificateTemplate.onload = function() {
          
            ctx.drawImage(certificateTemplate, 0, 0);
            
           
            ctx.font = 'bold 48px Times New Roman'; // Настройте под ваш шаблон
            ctx.fillStyle = '#2c3e50';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            
            const textX = canvas.width / 2;
            const textY = canvas.height * 0.45;
            
           
            ctx.fillText(nameOutput.textContent, textX, textY);
            
           
            const link = document.createElement('a');
            link.download = `сертификат_${firstNameInput.value}_${lastNameInput.value}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        };
        
        
        if (certificateTemplate.complete) {
            certificateTemplate.onload();
        }
    }

   
    generateBtn.addEventListener('click', generateCertificate);
    downloadBtn.addEventListener('click', downloadCertificate);


    [firstNameInput, lastNameInput].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                generateCertificate();
            }
        });
    });

});
