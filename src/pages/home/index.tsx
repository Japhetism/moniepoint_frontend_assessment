import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Analytics } from "./components/Analytics";
import { Strategic } from "./components/Strategic";
import { Efficiency } from "./components/efficiency";
import { Idea } from "./components/Idea";
import { GetStarted } from "./components/GetStarted";
import { Footer } from "../components/Footer";

export const Home = () => {
    return <Layout>
        <Header />
        <Analytics />
        <Strategic />
        <Efficiency />
        <Idea />
        <GetStarted />
        <Footer />
    </Layout>
}