declare namespace Polymer {


  /**
   * Sets the global rootPath property used by `Polymer.ElementMixin` and
   * available via `Polymer.rootPath`.
   */
  function setRootPath(path: string): any;


  /**
   * Sets the global sanitizeDOMValue available via `Polymer.sanitizeDOMValue`.
   */
  function setSanitizeDOMValue(newSanitizeDOMValue: ((p0: any, p1: string, p2: string, p3: Node|null) => any)|undefined): any;


  /**
   * Sets `passiveTouchGestures` globally for all elements using Polymer Gestures.
   */
  function setPassiveTouchGestures(usePassive: boolean): any;
}
