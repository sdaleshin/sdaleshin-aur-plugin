import {autoinject} from "aurelia-framework";
import {MainClass} from "resources";

@autoinject
export class App {
  public message = 'from Aurelia!';

  constructor(private main: MainClass) {
    this.message = this.main.greet('User')
  }

  clicked(): void {
    // eslint-disable-next-line no-alert
    alert('A primary button click or a touch');
  }
}
