require(['Vue', 'ResizableBox'], function(Vue, ResizableBox) {

    var option = {
        left: {
            size: 1,
            buttons: [{
                direction: 'right'
            }]
        },
        center: {
            size: 2,
            buttons: [{
                direction: 'left'
            }, {
                direction: 'right'
            }]
        },
        right: {
            size: 1,
            buttons: [{
                direction: 'left'
            }]
        }
    };

    var option1 = {
        top: {
            size: 1,
            buttons: [{
                direction: 'down'
            }]
        },
        center: {
            size: 1,
            buttons: [{
                direction: 'up'
            }, {
                direction: 'down'
            }]
        },
        bottom: {
            size: 1,
            buttons: [{
                direction: 'up'
            }]
        }
    };

    Vue.use(ResizableBox);

    new Vue({
        data: function() {
            return {
                option: option,
                option1: option1
            }
        },
        template: '<resizable-box :option="option">\
          <div slot="left">left-content</div>\
          <div slot="center" class="box-all">\
            <resizable-box :option="option1" mode="vertical"></resizable-box>\
          </div>\
          <div slot="right">right-content</div>\
        </resizable-box>'
    }).$mount('#main');

});