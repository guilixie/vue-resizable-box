require(['vue', 'vue-resizable-box'], function(Vue, VueResizableBox) {
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

    Vue.use(VueResizableBox);

    new Vue({
        data: function() {
            return {
                option: option,
                option1: option1
            }
        },
        template: '<vue-resizable-box :option="option">\
          <div slot="left">left-content</div>\
          <div slot="center" class="box-all">\
            <vue-resizable-box :option="option1" mode="vertical"></vue-resizable-box>\
          </div>\
          <div slot="right">right-content</div>\
        </vue-resizable-box>'
    }).$mount('#main');

});