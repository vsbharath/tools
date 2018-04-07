/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {Document} from './document';
import {Feature, ScannedFeature} from './feature';

/**
 * A ScannedFeature that needs to resolve other Features to build its final
 * representation.
 */
export interface Resolvable extends ScannedFeature {
  resolve(document: Document): Feature|undefined;
}

export function isResolvable(x: any): x is Resolvable {
  return x.resolve && typeof x.resolve === 'function';
}
