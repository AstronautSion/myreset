;(function($, window, document, undefined){

    'use strict'

    if('undefined' === typeof window.AstPub){
        var AstPub = window.AstPub = {
            Init : function(){
                var AstObj = window.AstObj = {
                    html       : $('html'),
                    body       : $('body'),
                    wrapper    : $('#warpper'),
                    header     : $('#header'),
                    gnb        : $('#gnb'),
                    container  : $('#container'),
                    footer     : $('#footer')
                };
            }
        };
        var AstSbj = window.AstSbj = {};
    }
    $(document).on({
        'ready' : function(){
            AstPub.Init();
        }
    });
    $(window).on({
		'load' : function(){
			AstSbj.left = $(window).scrollLeft();
			AstSbj.top = $(window).scrollTop();
			AstSbj.width = $(window).outerWidth();
			AstSbj.height = $(window).outerHeight();
		},
		'scroll' : function(){
			AstSbj.liveLeft = $(window).scrollLeft();
            AstSbj.liveTop = $(window).scrollTop();
		},
		'resize' : function(){
			AstSbj.liveWidth = $(window).outerWidth() || $(window).outerWidth();
            AstSbj.liveHeight = $(window).outerHeight() || $(window).outerHeight();
		}
	});
     
    AstPub.UI = {
        consoleHelp : function(){
            console.log('AstObj: \n',AstObj);
            console.log('AstSbj: \n',AstSbj);
            console.log('Ast.UI: \n', AstPub.UI);
        }
    };
    
})(jQuery, window, document);