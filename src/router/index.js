import index from "@/components/index";
import find from "@/components/find";
import watch from "@/components/watch";

const routers = [
    {
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/find',
        name: 'find',
        component: find
    }, {
        path: '/watch',
        name: 'watch',
        component: watch
    }, {
        path: '*',
        redirect: '/'
    }
]

export default routers
