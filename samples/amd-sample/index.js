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
            <template #left><div>left-content</div></template>\
            <template #center class="box-all">\
              <vue-resizable-box :option="option1" mode="vertical"></vue-resizable-box>\
            </template>\
            <template #right><div>right-content</div></template>\
          </vue-resizable-box>'
    }).$mount('#main');

});
