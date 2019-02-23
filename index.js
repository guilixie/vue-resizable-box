import ResizableBox from './src/ResizableBox'

const Component = {}

Component.installed = false

Component.install = function(Vue, option) {
    if (Component.installed) return

    Vue.component(ResizableBox.name, ResizableBox)
    Vue.component(`Vue${ResizableBox.name}`, ResizableBox)

    Component.installed = true
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Component)
}

export default Component