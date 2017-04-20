requirejs.config({
  baseUrl: "node_modules",
  paths: {
    'jquery': 'jquery/dist/jquery',
    'underscore': 'underscore/underscore'
  },
  shim: {
    'underscore': {
      exports: '_'
    }
  }
}); 