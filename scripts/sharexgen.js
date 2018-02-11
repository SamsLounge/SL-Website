window.onload = function() {
    var b = document.querySelector("#generate-button");
    if (!b) throw new Error("The script was used but generate button not found");
    var ab = document.querySelector("#token");
    if (!ab) throw new Error("The script was used but no field for token found");
    var d = document.querySelector("#file-length")
    var k = "{{KEY}}";
    var f = "{{FILE_LENGTH}}";
    var t = "{\r\n\
      \"Name\": \"Netsky Community pxl uploader\",\r\n\
      \"DestinationType\": \"ImageUploader, TextUploader, FileUploader\",\r\n\
      \"RequestType\": \"POST\",\r\n\
      \"RequestURL\": \"https://upload.netskycommunity.me\",\r\n\
      \"FileFormName\": \"fileform\",\r\n\
      \"Arguments\": {\r\n\
        \"key\": \"{{KEY}}\",\r\n\
        \"file_length\": \"{{FILE_LENGTH}}\"\r\n\
      },\r\n\
      \"ResponseType\": \"Text\",\r\n\
      \"URL\": \"$json:url$\"\r\n\
    }";
    var r = /[A-Za-z0-9]/
    b.onclick = function(e) {
        e.preventDefault();
        if (ab.value.trim() === "") return alert("No token was specified.");
        if (!ab.value.trim().match(r)) return alert("Invalid token.")
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display:none";
        var z;
        if (!d) z = 5;
        else if (d && d.value.trim() === "") z =5;
        else if (isNaN(parseInt(d.value))) z = 5;
        else z = d.value.trim()
        var s = t.replace(k, ab.value.trim()).replace(f, z);
        var b = new Blob([s], {type: "application/octet-stream"});
        var u = window.URL.createObjectURL(b);
        a.href = u;
        a.download = "pxl.sxcu";
        a.click();
        window.URL.revokeObjectURL(u);
        a.parentElement.removeChild(a);
    };
};