import Introduction from "../components/introduction"
import Layout from "../components/layout"

export default function Home() {
    return (
        <Layout>
            <div className="container-fluid">
                <Introduction />
            </div>
        </Layout>
    )
}
