import Nav from "./nav"
import Search from "./search"

export default function Layout({ children }) {
    return (
        <div>
            <Nav></Nav>
            <Search></Search>
            {children}
        </div>
    )
}
