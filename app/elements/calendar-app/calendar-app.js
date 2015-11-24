class CalendarApp {
  beforeRegister() {
    this.is = 'calendar-app';
    this.properties = {
      route: String,
      user: Object,
      foo: {
        type: String,
        value: 'calendar-app',
        notify: true
      }
    };
  }

  created() {
  }

  ready() {
  }

  handleSignIn() {
    this.user = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
    console.log(this.user);
  }

  handleSignOut() {
    console.log('sign out');
  }
}

Polymer(CalendarApp);
