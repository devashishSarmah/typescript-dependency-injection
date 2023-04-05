// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class UserService {
  sayHi() {
    console.log('Hi!');
  }
}

class Component {
  constructor(private user: UserService) {}
}

// "Angular" DI

class Injector {
  private _container = new Map();

  constructor(private _providers: any[] = []) {
    this._providers.forEach((service) =>
      this._container.set(service, new service())
    );
  }

  get(service: any) {
    const serviceInstance = this._container.get(service);
    if (!serviceInstance) {
      throw Error('No Provider found');
    }

    return serviceInstance;
  }
}

// Somewhere in application

const injector = new Injector([UserService]);

const component = new Component(injector.get(UserService));
