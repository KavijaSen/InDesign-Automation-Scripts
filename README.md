<h1>Adobe InDesign Automation Scripts</h1>

<p>
These two scripts automate tasks in Adobe InDesign: one replaces the last page of an InDesign file, 
and the other converts all InDesign files in a folder to PDF format. After completing the tasks, 
both scripts will save the updated files in the specified folder. Follow the steps below to run them in InDesign.
</p>

<h2>1. Download and Configure</h2>
<ul>
    <li>Download the scripts.</li>
    <li>Provide the required file names and folder locations where specified in the script.</li>
</ul>

<h2>2. Save and Place the Scripts in the Scripts Panel Folder</h2>

<h3>Windows</h3>
<p>Copy and save the scripts in the following path:</p>
<pre>C:\Users\YourUsername\AppData\Roaming\Adobe\InDesign\Version X.0\Scripts\Scripts Panel\</pre>

<h3>Mac</h3>
<p>Copy and save the scripts in the following path:</p>
<pre>~/Library/Preferences/Adobe InDesign/Version X.0/Scripts/Scripts Panel/</pre>

<h2>3. Open the Scripts Panel in InDesign</h2>
<ul>
    <li>Launch <strong>Adobe InDesign</strong>.</li>
    <li>Go to <strong>Window > Utilities > Scripts</strong>.</li>
    <li>In the <strong>Scripts Panel</strong>, locate your script under <strong>User</strong>.</li>
</ul>

<h2>4. Run the Script</h2>
<ul>
    <li>Double-click the script file in the Scripts Panel.</li>
    <li>If the script requires specific file paths, ensure your InDesign documents are placed in the correct folders.</li>
</ul>

<h3>For <code>replace-last-page.jsx</code></h3>
<ul>
    <li>The InDesign files should be in the <code>Source Folder Path</code> folder.</li>
    <li>The replacement page should be in the <code>Replacement Page path</code> folder.</li>
    <li>The updated files will be saved in the <code>Destination Folder Path</code> folder.</li>
</ul>

<h3>For <code>convert-to-pdf.jsx</code></h3>
<ul>
    <li>InDesign files should be placed in <code>Source Folder Path</code>.(update this in the script)</li>
    <li>PDFs will be exported to the same <code>Destination Folder Path</code> folder.</li>
</ul>

<p><strong>A confirmation alert will appear once the script completes.</strong></p>
