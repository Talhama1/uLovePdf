function convertJpgToPng() {
    // Get the input element
    var input = document.getElementById('jpgInput');

    // Ensure a file is selected
    if (!input.files || input.files.length === 0) {
        alert('Please select a JPG file.');
        return;
    }

    // Get the first selected file
    var jpgFile = input.files[0];

    // Check if the selected file is a JPG file
    if (!jpgFile.type.startsWith('image/jpeg')) {
        alert('Please select a valid JPG file.');
        return;
    }

    // Create a FileReader to read the file
    var reader = new FileReader();

    // Define the onload event for the reader
    reader.onload = function (e) {
        // Create an image element
        var img = new Image();

        // Set the source of the image to the data URL
        img.src = e.target.result;

        // Create a canvas element
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        // Get the 2D context of the canvas
        var ctx = canvas.getContext('2d');

        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0);

        // Convert the canvas content to a data URL (PNG format)
        var pngDataUrl = canvas.toDataURL('image/png');

        // Display the converted image
        var outputImage = document.getElementById('outputImage');
        outputImage.src = pngDataUrl;

        // Create a download link
        var downloadLink = document.createElement('a');
        downloadLink.href = pngDataUrl;
        downloadLink.download = 'converted_image.png';

        // Simulate a click on the download link
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    // Read the JPG file as a data URL
    reader.readAsDataURL(jpgFile);
}
