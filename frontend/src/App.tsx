import { createRouter, RouterProvider, createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-cream texture-bg">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  ),
});

const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: About });
const menuRoute = createRoute({ getParentRoute: () => rootRoute, path: '/menu', component: Menu });
const galleryRoute = createRoute({ getParentRoute: () => rootRoute, path: '/gallery', component: Gallery });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: Contact });

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, menuRoute, galleryRoute, contactRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
