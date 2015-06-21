
var handle = {
  set: function(storage, form) {
    var key = form.querySelector("[name=key]").value;
    var value = form.querySelector("[name=value]").value;

    storage.setItem(key, value);
    form.reset();
  },
  get: function(storage, form) {
    var key = form.querySelector("[name=key]").value;
    var value = form.querySelector("[name=value]");

    value.value = storage.getItem(key);
  },
  clear: function(storage, form) {
    storage.clear();
    form.reset();
  }
};

var storageProviders = {
  session: sessionStorage,
  local: localStorage
};

var onSubmit = function(event) {
  event.preventDefault();
  handle[document.activeElement.value](storageProviders[this.id], this);
};

document.getElementById('session').addEventListener('submit', onSubmit);
document.getElementById('local').addEventListener('submit', onSubmit);
