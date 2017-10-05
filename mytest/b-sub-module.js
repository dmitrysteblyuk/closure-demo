import { core } from './core';
import { ABdependency } from './ab-dependency';

export const /** @type {?} */ bSubModule = 'B';

console.log(`${bSubModule} submodule`);
console.log(`Core version - ${ core.version }`);
console.log(ABdependency);
