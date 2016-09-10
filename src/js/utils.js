'use strict';

function hasClass(el, cls) {
  return el.className && new RegExp('(\\s|^)' +
    cls + '(\\s|$)').test(el.className);
}

function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
}

function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}

module.exports = {
  addClass: addClass,
  hasClass: hasClass,
  removeClass: removeClass
};
