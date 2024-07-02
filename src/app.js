export class App {
  routes = [{ path: '', view: null }];

  constructor() {
    window.addEventListener('hashchange', this.route.bind(this));
    this.route();
  }

  route() {
    const view = this.routes.find(r => r.path == location.hash).view;
  }
}

new App();
