document.getElementById('status').innerText = history.pushState ? 'available' : 'unavailable';


document.getElementById('nav').addEventListener('click', function(event){
  event.preventDefault();

  if(event.target.matches("a")){
    var url = event.target.href;
    var title = event.target.innerText;

    var state = { foo: "bar", title: title, url: url };

    history.pushState(state, title, url);
  }
});


document.getElementById('show-state').addEventListener('click', function(){

  document.getElementById('current-state').innerText = JSON.stringify(history.state);

});

window.addEventListener('popstate', function(e){

  var title = event.state ? event.state.title : "no state object";
  document.getElementById('history').insertAdjacentHTML('beforeend', "<li>"+ title +"</li>");

});
