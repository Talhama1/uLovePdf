function convertJpgToPdf() {
    const input = document.getElementById('imageInput');
    const output = document.getElementById('outputImage');
    const downloadLink = document.getElementById('downloadLink');

    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, img.width, img.height);

                const dataURL = canvas.toDataURL('image/jpeg');
                output.src = dataURL;

                // Convert and download as PDF
                const pdfOutput = new Image();
                pdfOutput.src = dataURL;
                pdfOutput.onload = function () {
                    const pdfOptions = { margin: 10, filename: 'uLove.pdf' };
                    html2pdf(pdfOutput, pdfOptions).then(() => {
                        // Show download link
                        downloadLink.style.display = 'block';
                        // Optionally, you can trigger the download automatically
                        // downloadLink.click();
                    });
                };
            };
        };

        reader.readAsDataURL(file);
    }
}
