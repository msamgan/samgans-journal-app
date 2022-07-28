import Footer from "../components/footer"
import Introduction from "../components/introduction"
import Layout from "../components/layout"
import PostList from "../components/post.list"
import Separator from "../components/separator"

export default function Home() {
    return (
        <Layout>
            <Introduction />
            <Separator />
            <div className="posts">
                <PostList></PostList>
                <PostList></PostList>
                <PostList></PostList>
                <PostList></PostList>
            </div>
            <Footer></Footer>
        </Layout>
    )
}
