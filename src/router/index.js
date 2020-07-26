import index from "@/components/index";
import find from "@/components/find";

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
        path: '*',
        redirect: '/'
    }
]

export default routers
