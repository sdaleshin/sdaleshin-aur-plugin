import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import {autoinject} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration): void {
  // config.globalResources([
  //   PLATFORM.moduleName('./elements/hello-world')
  // ]);
}

@autoinject
export class UtilsClass {
  prepareString(str: string){
    return 'PPP ' + str
  }
}

@autoinject
export class MainClass {
  utils: UtilsClass;

  constructor(utils: UtilsClass) {
    this.utils = utils
  }

  greet(name: string){
    return this.utils.prepareString(`Hello ${name} from class`)
  }
}
