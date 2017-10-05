import { core } from './core';

export const /** @type {?} */ cSubModule = 'C';

console.log(`${cSubModule} submodule with no dependencies apart from core`);
console.log(`Core version - ${ core.version }`);
