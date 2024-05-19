import { useEffect, useState } from "react"
import ScrollAnimation from "react-animate-on-scroll";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Analytics } from "./components/Analytics";
import { Report } from "./components/Report";
import { TrafficSources } from "./components/TrafficSources";
import { Idea } from "./components/Idea";
import { GetStarted } from "./components/GetStarted";
import { Footer } from "../components/Footer";

export const Home = () => {
    const [thereIsScroll, setThereIsScroll] = useState(false);

    useEffect(() => {
        const handleScrolling = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.clientHeight;
            
            if (windowHeight === documentHeight) {
                setThereIsScroll(false);
            } else {
                setThereIsScroll(true);
            }
        }

        handleScrolling();
        window.addEventListener("scroll", handleScrolling);

        return () => {
            window.addEventListener("scroll", handleScrolling);
        }
    }, []);

    console.log("there is scroll ", thereIsScroll);
    return <Layout>
        <Header />
        {thereIsScroll ? (
            <ScrollAnimation animateIn="fadeInDown">
                <Analytics />
            </ScrollAnimation>
        ) : (
            <Analytics />
        )}
        {thereIsScroll ? (
            <ScrollAnimation animateIn="fadeInDown">
                <Report />
            </ScrollAnimation>
        ) : (
            <Report />
        )}
        {thereIsScroll ? (
            <ScrollAnimation animateIn="fadeInDown">
                <TrafficSources />
            </ScrollAnimation>
        ) : (
            <TrafficSources />
        )}
        {thereIsScroll ? (
            <ScrollAnimation animateIn="fadeInDown">
                <Idea />
            </ScrollAnimation>
        ) : (
            <Idea />
        )}
        {thereIsScroll ? (
            <ScrollAnimation animateIn="fadeInDown">
                <GetStarted />
            </ScrollAnimation>
        ) : (
            <GetStarted />
        )}
        {thereIsScroll ? (
            <ScrollAnimation animateIn="fadeInDown">
                <Footer />
            </ScrollAnimation>
        ) : (
            <Footer />
        )}    
    </Layout>
}