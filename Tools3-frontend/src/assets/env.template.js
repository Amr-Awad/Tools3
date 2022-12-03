(function(window) {
    window.env = window.env || {};
  
    // Environment variables
    window["env"]["backendport"] = "${BACKEND_PORT}";
    window["env"]["debug"] = "${DEBUG}";
  })(this);