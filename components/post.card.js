import Link from "next/link"
import Tags from "./tags"

export default function PostCard() {
    return (
        <div className="">
            <div className="card shadow-lg rounded mt-3">
                <div className="card-body">
                    <div className="card-text">
                        <Tags></Tags>
                        <h2>
                            <Link href={`/post`}>How to Add Laravel Pint to VS Code Formatter</Link>
                        </h2>
                        <p>
                            I have been using the unsatisfactory formatters from a long time. All of them have
                            one thing but lack other. Laravel Pint is one who has it all, combining it with
                            vscode is like proving you laravel project a super power.
                        </p>
                        <span className="text-muted">Reading Time: 2 minutes</span>
                        {" | "}
                        <span className="text-muted">June 24, 2022</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
