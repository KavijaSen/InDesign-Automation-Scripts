// Replace the last page of InDesign files with a new page and save to a new location
var sourceFolder = Folder("<Source Folder path>");
var newPageFile = File("<Replacement Page path>");
var targetFolder = Folder("<Destination Folder Path>");

if (sourceFolder.exists && newPageFile.exists && targetFolder.exists) {
    var inddFiles = sourceFolder.getFiles("*.indd");

    for (var i = 0; i < inddFiles.length; i++) {
        var doc = app.open(inddFiles[i]);
        var lastPageIndex = doc.pages.length - 1;
        
        // Open the replacement page file
        var replacementDoc = app.open(newPageFile);
        replacementDoc.pages[0].duplicate(LocationOptions.AFTER, doc.pages[lastPageIndex]);
        doc.pages[lastPageIndex].remove();
        replacementDoc.close(SaveOptions.NO);
        
        // Save the updated document
        var savePath = new File(targetFolder + "/" + doc.name);
        doc.save(savePath);
        doc.close();
    }
    alert("Replacement complete and files saved in " + targetFolder.fsName);
	
} else 
{
    if (!sourceFolder.exists) {
    alert("Source folder does not exist: " + sourceFolder.fsName);
} else if (!newPageFile.exists) {
    alert("New page file does not exist: " + newPageFile.fsName);
} else if (!targetFolder.exists) {
    alert("Target folder does not exist: " + targetFolder.fsName);
} else {
    alert("All paths exist. Proceeding with the script.");
}

}
