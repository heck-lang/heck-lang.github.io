let heckImports = null;

let heck_init_script = document.createElement('script');
heck_init_script.setAttribute('src', 'heck-init.js');
document.head.appendChild(heck_init_script);

let Heck = function() {
  this.addImports = function(imports) {
    heckImports = imports;
  }
}

heck = new Heck();
