
import { lazy, Suspense } from "react";
import HomeTestimonial from '../components/HomeTestimonial';

const Hero = lazy(() => import('../components/Hero'));
const Services = lazy(() => import('../components/Services'));
const Industries = lazy(() => import('../components/Industries'));
const GlobalImpact = lazy(() => import('../components/GlobalImpact'));
const Insights = lazy(() => import('../components/Insights'));
const Careers = lazy(() => import('../components/Careers'));
const About = lazy(() => import('../components/About'));
const Contact = lazy(() => import('../components/Contact'));

const Home = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Hero />
            <Services />
            <Industries />
            <GlobalImpact />
            <Insights />
            <Careers />
            <About />
            <HomeTestimonial />
            <Contact />
        </Suspense>
    );
};

export default Home;
