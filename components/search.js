import { useState } from "react"

export default function Search() {
    const [search, setSearch] = useState("")

    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-8 mx-auto">
                    <div className="input-group">
                        <input
                            className="form-control border"
                            type="search"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            id="search-input"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
