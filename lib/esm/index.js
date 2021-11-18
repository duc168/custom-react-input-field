import React, { useState } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var classnames$1 = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames$1));

var classnames = classnames$1.exports;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".styles-module_iconContainer___pGfF {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.styles-module_iconContainer___pGfF svg {\n  fill: currentColor;\n  width: 100%;\n  height: 100%;\n}";
var styles$1 = {"iconContainer":"styles-module_iconContainer___pGfF"};
styleInject(css_248z$1);

var IconWrapper = function (props) { return (React.createElement("span", __assign({}, props, { className: styles$1.iconContainer + " " + (props.className || ''), style: __assign({ width: props.width, height: props.height }, (props.style || {})) }), props.children)); };

var IconEyeSlash = function (props) { return (React.createElement(IconWrapper, __assign({}, props, { width: props.width || 15, height: props.height || 15 }),
    React.createElement("svg", { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "eye-slash", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512" },
        React.createElement("path", { fill: "currentColor", d: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z", className: "" })))); };

var IconEye = function (props) { return (React.createElement(IconWrapper, __assign({}, props, { width: props.width || 15, height: props.height || 15 }),
    React.createElement("svg", { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "eye", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" },
        React.createElement("path", { fill: "currentColor", d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z", className: "" })))); };

var css_248z = ".styles-module_container__3mo2R {\n  position: relative;\n  display: block;\n}\n.styles-module_container__3mo2R .styles-module_label__s2_pQ {\n  position: relative;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 26px;\n  color: #222;\n  position: absolute;\n  top: 50%;\n  margin-bottom: 0;\n  left: 15px;\n  transform: translateY(-50%);\n  transition: all 0.4s cubic-bezier(0.33, 1, 0.68, 1);\n  pointer-events: none;\n  z-index: 2;\n}\n.styles-module_container__3mo2R .styles-module_label__s2_pQ .styles-module_required__2AKdc {\n  color: red;\n}\n.styles-module_container__3mo2R .styles-module_input__3AyV1 {\n  position: relative;\n  border-radius: 0;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  border: 1px solid #ddd;\n  width: 100%;\n  min-height: calc(3rem - 20px);\n  color: #222;\n  box-shadow: none !important;\n  outline: none !important;\n  padding: 20px 15px 0px;\n  background: #fff;\n  transition: border-color 0.3s cubic-bezier(0.33, 1, 0.68, 1);\n}\n.styles-module_container__3mo2R .styles-module_textarea__26jyK {\n  position: relative;\n  border-radius: 0;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 19px;\n  border: 1px solid #ddd;\n  width: 100%;\n  min-height: calc(3rem - 20px);\n  color: #222;\n  box-shadow: none !important;\n  outline: none !important;\n  padding: 20px 15px 0px;\n  background: #fff;\n  transition: border-color 0.3s cubic-bezier(0.33, 1, 0.68, 1);\n}\n.styles-module_container__3mo2R.styles-module_hasValue__2Shek .styles-module_label__s2_pQ {\n  top: 0;\n  transform: translateY(7px);\n  font-size: 11px;\n  line-height: 15px;\n  color: #555;\n  background-color: #fff;\n  width: 100%;\n}\n.styles-module_container__3mo2R.styles-module_hasValue__2Shek .styles-module_iconPassword__2CAJd {\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translate(25px, calc(-50%));\n}\n.styles-module_container__3mo2R.styles-module_isFocus__A6nig .styles-module_label__s2_pQ {\n  top: 0;\n  transform: translateY(7px);\n  font-size: 11px;\n  line-height: 15px;\n  color: #555;\n  background-color: #fff;\n  width: 100%;\n}\n.styles-module_container__3mo2R.styles-module_isFocus__A6nig .styles-module_input__3AyV1 {\n  border-color: #1174dc;\n}\n.styles-module_container__3mo2R.styles-module_isTextArea__294sw {\n  position: relative;\n}\n.styles-module_container__3mo2R.styles-module_isTextArea__294sw .styles-module_label__s2_pQ {\n  top: 2rem;\n}\n.styles-module_container__3mo2R.styles-module_isTextArea__294sw.styles-module_hasValue__2Shek .styles-module_label__s2_pQ {\n  top: 0;\n  transform: translateY(7px);\n  font-size: 11px;\n  line-height: 15px;\n  color: #555;\n  background-color: #fff;\n  width: 100%;\n}\n.styles-module_container__3mo2R.styles-module_isTextArea__294sw.styles-module_hasValue__2Shek .styles-module_label__s2_pQ {\n  padding-top: 4px;\n  transform: translateY(1px);\n  width: calc(100% - 30px);\n}\n.styles-module_container__3mo2R.styles-module_isTextArea__294sw.styles-module_isFocus__A6nig .styles-module_label__s2_pQ {\n  top: 0;\n  transform: translateY(7px);\n  font-size: 11px;\n  line-height: 15px;\n  color: #555;\n  background-color: #fff;\n  width: 100%;\n}\n.styles-module_container__3mo2R.styles-module_isTextArea__294sw.styles-module_isFocus__A6nig .styles-module_label__s2_pQ {\n  padding-top: 4px;\n  transform: translateY(1px);\n  width: calc(100%);\n}\n.styles-module_container__3mo2R.styles-module_isTextArea__294sw .styles-module_textarea__26jyK {\n  position: relative;\n}\n.styles-module_container__3mo2R.styles-module_isTextArea__294sw .styles-module_textarea__26jyK::-webkit-scrollbar {\n  width: 4px;\n}\n.styles-module_container__3mo2R.styles-module_isTextArea__294sw .styles-module_textarea__26jyK::-webkit-scrollbar-track {\n  background: transparent;\n}\n.styles-module_container__3mo2R.styles-module_isTextArea__294sw .styles-module_textarea__26jyK::-webkit-scrollbar-thumb {\n  background: #ddd;\n  border-radius: 3px;\n  height: 50px;\n}\n.styles-module_container__3mo2R.styles-module_isTextArea__294sw .styles-module_textarea__26jyK::-webkit-scrollbar-thumb:hover {\n  background: #ddd;\n}\n.styles-module_container__3mo2R .styles-module_iconPassword__2CAJd {\n  display: none;\n}\n.styles-module_container__3mo2R:hover .styles-module_input__3AyV1 {\n  border-color: #1174dc;\n}";
var styles = {"container":"styles-module_container__3mo2R","label":"styles-module_label__s2_pQ","required":"styles-module_required__2AKdc","input":"styles-module_input__3AyV1","textarea":"styles-module_textarea__26jyK","hasValue":"styles-module_hasValue__2Shek","iconPassword":"styles-module_iconPassword__2CAJd","isFocus":"styles-module_isFocus__A6nig","isTextArea":"styles-module_isTextArea__294sw"};
styleInject(css_248z);

var InputField = function (allProps, ref) {
    var _a;
    var label = allProps.label; allProps.placeholder; var _b = allProps.type, type = _b === void 0 ? 'text' : _b, _c = allProps.rows, rows = _c === void 0 ? 1 : _c, onChange = allProps.onChange, value = allProps.value, disabled = allProps.disabled, required = allProps.required, readOnly = allProps.readOnly, className = allProps.className, name = allProps.name, onClickContainer = allProps.onClickContainer, icon = allProps.icon, containerClassName = allProps.containerClassName, labelStyle = allProps.labelStyle, inputStyle = allProps.inputStyle, textareaStyle = allProps.textareaStyle, props = __rest(allProps, ["label", "placeholder", "type", "rows", "onChange", "value", "disabled", "required", "readOnly", "className", "name", "onClickContainer", "icon", "containerClassName", "labelStyle", "inputStyle", "textareaStyle"]);
    var elementRef = ref || React.createRef();
    var _d = useState(false), isFocusing = _d[0], setIsFocusing = _d[1];
    var _e = useState(false), isShowingPassword = _e[0], setIsShowingPassword = _e[1];
    var onFocus = function (event) {
        setIsFocusing(true);
        if (typeof props.onFocus === 'function') {
            props.onFocus(event);
        }
    };
    var onBlur = function (event) {
        setIsFocusing(false);
        if (typeof props.onBlur === 'function') {
            props.onBlur(event);
        }
    };
    var renderIconComponent = function () {
        if (icon) {
            return icon;
        }
        if (type === 'password') {
            var IconComp = isShowingPassword ? IconEyeSlash : IconEye;
            return (React.createElement(IconComp, { className: styles.iconPassword, width: 14, height: 14, onMouseUp: function () { return setIsShowingPassword(false); }, onMouseDown: function () { return setIsShowingPassword(true); }, onTouchStart: function () { return setIsShowingPassword(true); }, onTouchEnd: function () { return setIsShowingPassword(false); } }));
        }
        return null;
    };
    var currentValue = (_a = value === null || value === void 0 ? void 0 : value.toString()) !== null && _a !== void 0 ? _a : "";
    return (React.createElement("label", { className: classnames([
            styles.container,
            disabled ? styles.isDisabled : '',
            currentValue.length > 0 ? styles.hasValue : '',
            readOnly ? styles.isReadOnly : '',
            isFocusing ? styles.isFocus : '',
            rows > 1 ? styles.isTextArea : '',
            className,
            containerClassName !== null && containerClassName !== void 0 ? containerClassName : '',
        ]), onClick: onClickContainer, htmlFor: name },
        React.createElement("div", { className: "" + styles.label, style: labelStyle },
            label,
            " ",
            required && React.createElement("span", { className: styles.required }, "*")),
        rows === 1 ? (React.createElement("input", __assign({}, props, { ref: elementRef, placeholder: '', type: isShowingPassword ? 'text' : type, onChange: onChange, onFocus: onFocus, onBlur: onBlur, value: value, name: name, readOnly: readOnly, disabled: disabled, className: "" + styles.input, style: inputStyle }))) : (React.createElement("textarea", __assign({}, props, { ref: elementRef, name: name, placeholder: '', rows: rows, onChange: onChange, onFocus: onFocus, onBlur: onBlur, value: value, disabled: disabled, className: "" + styles.textarea, style: textareaStyle }))),
        renderIconComponent()));
};
var Input = React.forwardRef(InputField);

// import DatePickerComponent from './DatePicker'

export { Input as default };
//# sourceMappingURL=index.js.map
