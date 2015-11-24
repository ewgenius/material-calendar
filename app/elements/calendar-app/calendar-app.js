var a = () => {};

class CalendarApp {
  beforeRegister() {
    this.is = 'calendar-app';
    this.properties = {
      route: String,
      foo: {
        type: String,
        value: 'calendar-app',
        notify: true
      }
    };
  }

  created() {
    console.log('created');
  }

  ready() {
    console.log('ready')
  }

  attached() {
    console.log('attached');
  }

  detached() {
    console.log('detached');
  }

  attributeChanged() {
    console.log('attributeChanged');
  }
}

Polymer(CalendarApp);
