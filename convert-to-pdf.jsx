// Convert all InDesign files in the NEW folder to PDF and save in the PDF folder
var sourceFolder = Folder("<Source Folder Path>");
var pdfFolder = Folder("<Destination Folder Path>");

// Create the PDF folder if it doesn't exist
if (!pdfFolder.exists) {
    pdfFolder.create();
}

if (sourceFolder.exists) {
    var inddFiles = sourceFolder.getFiles("*.indd");

    for (var i = 0; i < inddFiles.length; i++) {
        var doc = app.open(inddFiles[i]);
        var pdfFile = new File(pdfFolder + "/" + doc.name.replace(".indd", ".pdf"));
        
        // Export as PDF
        var pdfExportPreset = app.pdfExportPresets.itemByName("High Quality Print");
        if (!pdfExportPreset.isValid) {
            pdfExportPreset = app.pdfExportPresets.firstItem(); // Fallback to default preset
        }
        
        doc.exportFile(ExportFormat.PDF_TYPE, pdfFile, false, pdfExportPreset);
        doc.close(SaveOptions.NO);
    }
    alert("PDF conversion complete. Files saved in " + pdfFolder.fsName);
} else {
    alert("Source folder does not exist. Please check the path.");
}
