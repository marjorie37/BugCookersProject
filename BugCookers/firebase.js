const image = {};
const config = {
  apiKey: "AIzaSyB4YhG4SUBKCPRmO5z_ZDuvkGs5tm-_2nk",
  authDomain: "bugcookers.firebaseapp.com",
  databaseURL: "https://bugcookers.firebaseio.com",
  projectId: "bugcookers",
  storageBucket: "bugcookers.appspot.com",
  messagingSenderId: "162351635646"
};
firebase.initializeApp(config);

preview = (event) => {
  let file;
  if(event.type === "change"){
    file = document.getElementById('file').files[0];
  }else{
    file = event.dataTransfer.files[0];
  }
  const preview = document.getElementById('newImage');
  if(preview.hasChildNodes()){
    preview.removeChild(preview.firstChild);
  }
  if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
    const reader = new FileReader();
    reader.addEventListener("load", function() {
      const image = new Image();
      image.height = 160;
      image.title = file.name;
      image.src = this.result;
      preview.appendChild(image);

    }, false);
    reader.readAsDataURL(file);
    this.createNewFile(file);
  }
}

createNewFile = (file) => {
  const canvas = document.createElement('canvas');
  const reader = new FileReader();
  reader.addEventListener("load", function() {
    const image = new Image();
    image.title = file.name;
    image.src = this.result;
    image.onload = function() {
      let maxWidth = 400,
          maxHeight = 400,
          imageWidth = image.width,
          imageHeight = image.height;


      if (imageWidth > imageHeight) {
        if (imageWidth > maxWidth) {
          imageHeight *= maxWidth / imageWidth;
          imageWidth = maxWidth;
        }
      }
      else {
        if (imageHeight > maxHeight) {
          imageWidth *= maxHeight / imageHeight;
          imageHeight = maxHeight;
        }
      }
      canvas.width = imageWidth;
      canvas.height = imageHeight;
      image.width = imageWidth;
      image.height = imageHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(this, 0, 0, imageWidth, imageHeight);
      const blob = dataURLToBlob(canvas.toDataURL('image/jpeg',0.5));
      const file = new File([blob], "image",{type: "image/jpeg"});
      update(file);
    }
  })
  const update = (file) =>{
    const id = Date.now();
    const storageRef = firebase.storage().ref(`${id}/image.jpg`);
    image[`${id}`] = "image.jpg";
    storageRef.put(file).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    });
  }
  const dataURLToBlob = (dataURL) => {
    const BASE64_MARKER = ';base64,';
    const parts = dataURL.split(BASE64_MARKER);
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;

    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return (new Blob([uInt8Array], {type: contentType}));
  }
  reader.readAsDataURL(file);
}




handleDrop = event => {
  event.stopPropagation();
  event.preventDefault();
  this.preview(event);
}

handleDragOver = event => {
  event.stopPropagation();
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
}
download = () => {
  console.log(image);
}
