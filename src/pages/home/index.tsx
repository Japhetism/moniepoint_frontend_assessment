import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Analytics } from "./components/Analytics";
import { Strategic } from "./components/Strategic";
import { Efficiency } from "./components/efficiency";
import { Data } from "./components/Data";

export const Home = () => {
    return <Layout>
        <Header />
        <Analytics />
        <Strategic />
        <Efficiency />
        <Data />
    </Layout>
}