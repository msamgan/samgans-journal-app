import Link from "next/link"

export default function Tags() {
    return (
        <p>
            <Link href="/">
                <a className="">#code-quality</a>
            </Link>
            <Link href="/">
                <a className="ms-2">#vscode</a>
            </Link>
        </p>
    )
}
