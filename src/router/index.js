import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Product from '../views/Product.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import Testimonial from '../views/Testimonial.vue'
import Cart from '../views/Cart.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            reload: true // Custom meta field
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/testimonial',
        name: 'Testimonial',
        component: Testimonial
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// Add navigation guard to force reload for Home route
router.beforeEach((to, from, next) => {
    if (to.name === 'Home' && from.name && to.name === from.name) {
        // Force reload when navigating to Home from Home
        window.location.reload()
    } else {
        next()
    }
})

export default router