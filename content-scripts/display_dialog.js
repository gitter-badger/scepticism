function closeDialog(){
  var scepticism = document.querySelector('.scepticism-box');
  scepticism.parentNode.removeChild( scepticism );
}

browser.runtime.onMessage.addListener( (message) => {
  if (window.self === window.top) {
    var body = document.querySelector('body');
    var mainBox = document.createElement('div');
    var container = document.createElement('div');

    mainBox.setAttribute('class', 'scepticism-box')
    container.setAttribute('class', 'scepticism-content')

    var closeButton = document.createElement("input");
    closeButton.type = "button";
    closeButton.value = "Ok, I get it, thanks! Close this dialog";
    closeButton.onclick = closeDialog;
    closeButton.setAttribute('class', 'scepticism-close')

    var content = document.createTextNode(message.message);
    console.log( message.message )
    container.appendChild(content);
    container.appendChild(closeButton);
    mainBox.appendChild(container); //add the text node to the newly created div.
    body.appendChild(mainBox);
  }


});
