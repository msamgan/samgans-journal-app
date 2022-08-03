import Footer from "../components/footer"
import Introduction from "../components/introduction"
import Layout from "../components/layout"
import PostList from "../components/post.list"
import Search from "../components/search"
import Separator from "../components/separator"

export default function Home() {
    return (
        <Layout>
            <Search></Search>
            <Introduction />
            <Separator />
            <div className="posts">
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-md-8 col-sm-12 mx-auto">
                            <PostList></PostList>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
