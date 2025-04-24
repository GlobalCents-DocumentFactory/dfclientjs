declare var opr: any;
declare var InstallTrigger: any;
declare var safari: any;

export class ZQuery {
  static ElementHeight(el?: Element): number {
    if (!el) return 0;
    let point = ZQuery.offset(el);
    return ZQuery.height() - (point ? point.y : 0);
  }

  static getNearestAncestor(
    htmlElementNode: HTMLElement | null,
    elemtype: string,
  ) {
    while (htmlElementNode) {
      htmlElementNode = htmlElementNode.parentElement;
      if (
        htmlElementNode &&
        htmlElementNode.tagName.toLowerCase() === elemtype
      ) {
        return htmlElementNode;
      }
    }
    return undefined;
  }

  static widthe() {
    let container = document.getElementsByClassName('cs-properties-wrapper')[0];
    let s = getComputedStyle(
      document.getElementsByClassName('cs-properties-wrapper')[0],
    );

    return +s.width;
  }

  static heighte() {
    let container = document.getElementsByClassName('cs-properties-wrapper')[0];
    let s = getComputedStyle(container);
    return +s.height;
  }

  static width() {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth ||
      0
    );
  }

  static height() {
    return (
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight ||
      0
    );
  }

  static extend(...args: any[]) {
    for (let i = 1; i < arguments.length; i++)
      for (let key in arguments[i])
        if (arguments[i].hasOwnProperty(key))
          arguments[0][key] = arguments[i][key];
    return arguments[0];
  }

  static offset(elem: Element): { x: number; y: number } | null {
    let box;
    if (!elem || !elem.ownerDocument) {
      return null;
    }
    try {
      box = elem.getBoundingClientRect();
    } catch (e) {}

    let doc = elem.ownerDocument;
    let docElem = doc.documentElement;

    if (!box) {
      return { x: 0, y: 0 };
    }

    let body = doc.body;
    let win = window;
    let clientTop = docElem.clientTop || body.clientTop || 0;
    let clientLeft = docElem.clientLeft || body.clientLeft || 0;
    let scrollTop = win.pageYOffset || docElem.scrollTop || body.scrollTop;
    let scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft;
    let top = box.top + scrollTop - clientTop;
    let left = box.left + scrollLeft - clientLeft;

    let rect = elem.getBoundingClientRect();
    let coords = {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft,
    };

    return { x: left, y: top };
  }

  // Opera 8.0+
  static isOpera() {
    return (
      (!!(<any>window).opr && !!opr.addons) ||
      !!(<any>window).opera ||
      navigator.userAgent.indexOf(' OPR/') >= 0
    );
  }

  // Firefox 1.0+
  static isFirefox() {
    return typeof InstallTrigger !== 'undefined';
  }

  // Safari 3.0+ "[object HTMLElementConstructor]"
  static isSafari() {
    return (
      /constructor/i.test((<any>window).HTMLElement) ||
      (function (p) {
        return p.toString() === '[object SafariRemoteNotification]';
      })(!(<any>window)['safari'] || safari.pushNotification)
    );
  }

  // Internet Explorer 6-11
  static isIE() {
    return /*@cc_on!@*/ false || !!(<any>document).documentMode;
  }

  // Edge 20+
  static isEdge() {
    return !ZQuery.isIE() && !!(<any>window).StyleMedia;
  }

  // Chrome 1+
  static isChrome() {
    return !!(<any>window).chrome && !!(<any>window).chrome.webstore;
  }

  // Blink engine detection
  static isBlink() {
    return (ZQuery.isChrome() || ZQuery.isOpera()) && !!(<any>window).CSS;
  }

  static isNullOrEmpty(obj: any) {
    return obj === null || obj === undefined || obj === '';
  }

  static TrySetSize(elem: any, width: number, height: number): void {
    var wstr: string = width + 'px';
    var hstr: string = height + 'px';
    try {
      elem.style.width = wstr;
      elem.style.height = hstr;
    } catch (e) {}
    try {
      elem.width = width;
      elem.height = height;
    } catch (e) {}
  }

  static parseQueryString(query: string) {
    let parts = query.split('&');
    let params = Object.create(null);
    for (let i = 0, ii = parts.length; i < ii; ++i) {
      let param = parts[i].split('=');
      let key = param[0].toLowerCase();
      let value = param.length > 1 ? param[1] : null;
      if (value) params[decodeURIComponent(key)] = decodeURIComponent(value);
    }
    return params;
  }

  static hasClass(el: any, selector: string) {
    var className = ' ' + selector + ' ';
    for (var i = 0, l = el.length; i < l; i++) {
      if (
        (' ' + el[i].className + ' ')
          .replace(/[\n\t\r]/g, ' ')
          .indexOf(className) > -1
      ) {
        return true;
      }
    }

    return false;
  }

  static guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return (
      s4() +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      s4() +
      s4()
    );
  }
}
