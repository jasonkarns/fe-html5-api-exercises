var filepicker = document.querySelector("input");
var viewer = document.querySelector("#viewer");

filepicker.onchange = function (event) {
  event.preventDefault();

  var reader = new FileReader();

  reader.onload = function(event){
    viewer.style.backgroundImage = 'url(' + event.target.result + ')';
  };
  reader.readAsDataURL(this.files[0]);
};

viewer.ondragover = function () { return false; };

viewer.ondragenter = viewer.ondragleave = function (event) {
  event.preventDefault();
  this.classList.toggle('draghover');
};

viewer.addEventListener('drop', function (event) {
  event.preventDefault();

  var reader = new FileReader();

  reader.onload = function(event){
    viewer.style.backgroundImage = 'url(' + event.target.result + ')';
  };

  reader.readAsDataURL(event.dataTransfer.files[0]);
});
