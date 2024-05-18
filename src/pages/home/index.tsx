import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Analytics } from "./components/Analytics";
import { Strategic } from "./components/Strategic";

export const Home = () => {
    return <Layout>
        <Header />
        <Analytics />
        <Strategic />
    </Layout>
}