import { core } from './core';
import { ABdependency } from './ab-dependency';

export const /** @type {?} */ aSubModule = 'A';

console.log(`${aSubModule} submodule`);
console.log(`Core version - ${ core.version }`);
console.log(ABdependency);
