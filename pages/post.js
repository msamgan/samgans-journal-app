import Image from "next/image"
import Layout from "../components/layout"
import PostList from "../components/post.list"
import Separator from "../components/separator"
import Tags from "../components/tags"

export default function Post() {
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row mt-4">
                    <div className="col-md-8 col-sm-12 mx-auto">
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <Image
                                src="https://codebysamgan.com/storage/wink/images/xa19lohQg0rGXAb8J6k5AV7SdL11y8HRcgaGNQ04.png"
                                alt="post"
                                width={800}
                                height={400}
                            />
                        </div>
                        <Tags />
                        <h1>How to Add Laravel Pint to VS Code Formatter</h1>
                        <p>June 24, 2022 | 1232 views</p>
                        <Separator />
                        <div className="row">
                            <div className="col-md-4">
                                <div
                                    style={{
                                        position: "sticky",
                                        top: 20
                                    }}
                                >
                                    <h2>Table of Content</h2>
                                    <ol>
                                        <li>
                                            <a href="#what-is-laravel-pint">What is laravel pint</a>
                                        </li>
                                        <li>
                                            <a href="#installation">Installation</a>
                                        </li>
                                        <li>
                                            <a href="#general-usage">General Usage</a>
                                        </li>
                                        <li>
                                            <a href="#configuration">Configuration</a>
                                        </li>
                                        <li>
                                            <a href="#binding-laravel-pint-with-vs-code">
                                                Binding laravel pint with VS Code
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#creating-vs-code-task-for-laravel-pint">
                                                Creating VS Code task for laravel pint
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#adding-keybinding-keyboard-shortcut-to-run-laravel-pint">
                                                Adding KeyBinding (Keyboard Shortcut) to Run laravel pint
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#the-extension">The Extension</a>
                                        </li>
                                        <li>
                                            <a href="#conclusion">Conclusion</a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h2>What is laravel pint</h2>
                                <p>as in the definition by the official repository,</p>
                                <p>
                                    Laravel Pint is an opinionated PHP code style fixer for minimalists. Pint is
                                    built on top of PHP-CS-Fixer and makes it simple to ensure that your code
                                    style stays clean and consistent. -- laravel/pint and as per me, Pint is the
                                    so far most sophisticated code formatter i have ever user in the reference
                                    of PHP. You can find more details about laravel/pint here.
                                </p>
                                <p>
                                    Laravel Pint is an opinionated PHP code style fixer for minimalists. Pint is
                                    built on top of PHP-CS-Fixer and makes it simple to ensure that your code
                                    style stays clean and consistent. -- laravel/pint and as per me, Pint is the
                                    so far most sophisticated code formatter i have ever user in the reference
                                    of PHP. You can find more details about laravel/pint here.
                                </p>
                            </div>
                        </div>
                        <Separator />
                        <PostList></PostList>
                    </div>
                </div>
               
            </div>
        </Layout>
    )
}
