import CreatePost from '@/components/CreatePost.vue';
import EditPost from '@/components/EditPost.vue';
import Posts from '@/components/Posts.vue';
 
export const routes = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'create',
        path: '/create',
        component: CreatePost,
        props: true
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditPost,
        props: true
    },
    {
        name:'posts',
        path:'/posts',
        component: Posts,
        props: true
    }
];