(function (global, document) {
    'use strict';

    function els(selector, context) {
        if (typeof selector !== 'string' || selector.trim().length === 0) { return null; }
        context = !context ? document : context.nodeType === 1 ? context : el(String(context));
        return Array.prototype.slice.call(context.querySelectorAll(selector));
    }

    function el(selector, context) {
        if (typeof selector !== 'string' || selector.trim().length === 0) { return null; }
        context = !context ? document : context.nodeType === 1 ? context : el(String(context));
        return Array.prototype.slice.call(context.querySelector(selector));
    }

    function hide(selector){ //변수 (배열) 
        if(typeof selector !== 'string' || selector.trim().length === 0){return null;}

    }

    /* -----------------------------------------------------
     * JavaScript 헬퍼 함수 */

    function mixin() {
        var mixin_obj = {};
        for (var i = 0, l = arguments.length; i < l; ++i) {
            var o = arguments[i];
            for (var key in o) {
                var value = o[key];
                if (o.hasOwnProperty(key)) {
                    mixin_obj[key] = value;
                }
            }
        }
        return mixin_obj;
    };
    
    function keyDowns (els, callback) {
        els.forEach(function (el) {
            el.addEventListener('keydown', function () { 
                callback(); 
            });
        });
    }



    /* 메서드 설정 함수  */
    function defineProp(value, descripter) {
        descripter = mixin({
            configurable: false,
            writable: false,
            enumerable: true,
        }, (descripter || {}));
        descripter.value = value;
        console.log(descripter);
        return descripter;
    }

     /* -----------------------------------------------------
      * 네임스페이스 객체 생성 및 메서드 설정 */

    Object.defineProperty(global, '__', {
        value: {}
    });

    Object.defineProperties(global.__, {
        // DOM
        els             : defineProp(els),
        el              : defineProp(el),
        // JavaScript
        mixin           : defineProp(mixin),
        keyDowns        : defineProp(keyDowns),

    });

    // Object.preventExtensions(global.y9);
    // Object.seal(global.y9);
    // Object.freeze(global.y9);

})(window, window.document);
