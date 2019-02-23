import ResizableBox from './src/ResizableBox'

const Component = {}

Component.installed = false

Component.install = function(Vue, option) {
    Vue.component(ResizableBox.name, ResizableBox)
    Vue.component(`Vue${ResizableBox.name}`, ResizableBox)
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Component)
}

export default Component