import Image from "next/image"

export default function Introduction() {
    return (
        <div className="container-fluid mt-5">
            <div className="row mt-3">
                <div className="col-md-7 mx-auto">
                    <div
                        className="card"
                        style={{
                            border: "none"
                        }}
                    >
                        <div className="row no-gutters">
                            <div className="col-auto">
                                <Image
                                    src="https://secure.gravatar.com/avatar/c2acbea3e046c1b8cf7358d8526eda63?s=150"
                                    width={150}
                                    height={150}
                                    className="img-fluid rounded-circle"
                                    alt=""
                                />
                            </div>
                            <div className="col">
                                <div className="card-block px-2">
                                    <p className="card-text">
                                        Hi, I am Samgan, I know the adds are bit annoying but i hope you
                                        understand. Talking about me, I excel at solving complex problems
                                        involving logic and step by step breakdown of the problem. Besides, to
                                        develop complex algorithms, I specialize in problem framing, systems
                                        design, and product development strategy. Sometimes I also enjoy public
                                        speaking.
                                    </p>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://twitter.com/msamgank"
                                        className=""
                                    >
                                        <Image src="/icons/twitter.png" width={40} height={40} alt="twitter" />
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://www.linkedin.com/in/mohd-samgan-khan/"
                                        className="ms-3"
                                    >
                                        <Image
                                            src="/icons/linkedin.png"
                                            width={40}
                                            height={40}
                                            alt="linkedin"
                                        />
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://github.com/msamgan"
                                        className="ms-3"
                                    >
                                        <Image src="/icons/github.png" width={40} height={40} alt="github" />
                                    </a>
                                    <a href="https://ko-fi.com/D1D21691Y" rel="noreferrer" target="_blank" className="ms-3">
                                        <Image
                                            height="40"
                                            width="160"
                                            style="border:0px;height:36px;"
                                            src="https://cdn.ko-fi.com/cdn/kofi1.png?v=3"
                                            border="0"
                                            alt="Buy Me a Coffee at ko-fi.com"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
