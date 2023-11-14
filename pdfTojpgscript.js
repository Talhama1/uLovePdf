function convertPdfToJpg() {
    const pdfInput = document.getElementById('pdfInput');
    const outputImage = document.getElementById('outputImage');
    const downloadLink = document.getElementById('downloadLink');

    if (!pdfInput.files || pdfInput.files.length === 0) {
        alert('Please select a PDF file.');
        return;
    }

    const pdfFile = pdfInput.files[0];

    // You can add your PDF to JPG conversion logic here
    // For simplicity, I'm using a placeholder image
    outputImage.src = 'placeholder.jpg';

    // Display the download link
    downloadLink.style.display = 'block';
    downloadLink.href = 'placeholder.jpg'; // Provide the actual JPG file URL
    downloadLink.download = 'converted.jpg'; // Provide the desired filename

    // Trigger the download automatically
    simulateClick(downloadLink);
}

function simulateClick(element) {
    const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    element.dispatchEvent(event);
}
