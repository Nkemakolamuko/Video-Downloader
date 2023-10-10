// Using Callback
function downloadImageForCallback() {
    let linkUrl = document.getElementById("link").value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', linkUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = function() {
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.target = '_blank';
        tag.download = 'your-video.mp4';
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    };
    xhr.onerror = err => {
        alert('Failed to download Video');
    };
    xhr.send();
    linkUrl = '';
}


// Using Promise
function downloadImageForPromise() {
    let linkUrl = document.getElementById("link-two").value;

    fetch(linkUrl)
        .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to download picture');
        }
            return response.blob();
        })
        .then((blob) => {
            const urlCreator = window.URL || window.webkitURL;
            const imageUrl = urlCreator.createObjectURL(blob);
            const tag = document.createElement('a');
            tag.href = imageUrl;
            tag.target = '_blank';
            tag.download = 'your-video.mp4';
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
        })
        .catch((error) => {
            alert(error.message);
        });
    linkUrl = ''
}


// Await/Await 
async function downloadImage() {
    try {
        let linkUrl = document.getElementById("link-three").value;

        const response = await fetch(linkUrl);

        if (!response.ok) {
        throw new Error('Failed to download picture');
        }

        const blob = await response.blob();

        const urlCreator = window.URL || window.webkitURL;
        const imageUrl = urlCreator.createObjectURL(blob);
        
        const tag = document.createElement('a');
        tag.href = imageUrl;
        tag.target = '_blank';
        tag.download = 'sample.mp4';
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    } catch (error) {
        alert(error.message);
    }

    linkUrl.value = ' '
}