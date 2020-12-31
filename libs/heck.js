let heckImports = null;

let init_heck_script = document.createElement('script');
init_heck_script.setAttribute('src', 'init_heck.js');
document.head.appendChild(init_heck_script);

let Heck = function() {
  this.addImports = function(imports) {
    heckImports = imports;
  }
}

heck = new Heck();
