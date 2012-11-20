if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to meteor_test.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
        alert("Button press");
    }
  });

  Template.facebook.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      console.log("Click FB login");
      Meteor.loginWithFacebook(['user_likes'], 
      function (err) {
        if (err)
          console.log(err.reason);
          //Session.set('errorMessage', err.reason || 'Unknown error');
      });
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup

    Accounts.ui.config({
      requestPermissions: {
        facebook: ['user_likes']
      },
      passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
    });
  });
}
