import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Analytics } from "./components/Analytics";
import { Report } from "./components/Report";
import { TrafficSources } from "./components/TrafficSources";
import { Idea } from "./components/Idea";
import { GetStarted } from "./components/GetStarted";
import { Footer } from "../components/Footer";

export const Home = () => {
    return <Layout>
        <Header />
        <Analytics />
        <Report />
        <TrafficSources />
        <Idea />
        <GetStarted />
        <Footer />
    </Layout>
}