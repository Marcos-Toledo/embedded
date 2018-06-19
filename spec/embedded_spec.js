describe('Widget Embedded', function() {
  var container, widget;

  beforeAll(function() {
    container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);
  });

  beforeEach(function() {
    widget = new Clicksign('d973213c-6411-11e8-8df5-7cd1c3e91b23');
    widget.mount('container');
  });

  afterEach(function() {
    widget.unmount();
  });

  it('should be an object', function() {
    expect(widget).not.toBe(null);
  });

  it('should has a default endpoint', function() {
    expect(widget.endpoint).toBe('https://app.clicksign.com');
  });

  it('should let change endpoint', function() {
    widget.endpoint = 'https://app.example.com';
    expect(widget.endpoint).toBe('https://app.example.com');
  });

  it('should has an iframe', function() {
    expect(document.getElementsByTagName('iframe').length).toBe(1);
  });

  it('should run auth callback', function() {
    var auth = 0;

    widget.on('auth', function(ev) { auth++ });
    widget.trigger('auth');

    expect(auth).toBe(1);
  });

  it('should run signed callback twice', function() {
    var signed = 0;

    widget.on('signed', function(ev) { signed++ });
    widget.trigger('signed');
    widget.trigger('signed');

    expect(signed).toBe(2);
  });

  it('should run 2 changed callback', function() {
    var changed = 0;

    widget.on('changed', function(ev) { changed++ });
    widget.on('changed', function(ev) { changed++ });
    widget.trigger('changed');

    expect(changed).toBe(2);
  });

  it('should remove iframe after unmount', function() {
    widget.unmount();
    expect(document.getElementsByTagName('iframe').length).toBe(0);
  });
});
