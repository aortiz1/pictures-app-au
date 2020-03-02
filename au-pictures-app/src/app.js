export class App {
  configureRouter(config, router){
    config.title = 'MY IG';
    config.map([
      { route:['','home'], name:'home', moduleId: './home', nav: true, title: 'Home' },
      { route: 'me', name: 'me', moduleId: './me', nav:true, title:'Me' }
    ]);

    this.router = router;
  }
}
