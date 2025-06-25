import React from "react"
import "./style.css"
const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center ">
        <div>
            <div className=" mt-md-0 m-3">
                <h5 >Paradise</h5>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0 "/>

            <div className=" mb-md-0 mb-3 ">
                <ul className="list-unstyled d-flex gap-3 listItems text-uppercase">
                    <li><a href="#!" >home</a></li>
                    <li><a href="#!" >products</a></li>
                    <li><a href="#!" >categories</a></li>
                    <li><a href="#!" >contact</a></li>
                </ul>
            </div>

        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2025 Copyright:
        <a href="https://abdulrhman-ashraf.netlify.app/"> Abdulirhman Ashraf</a>
    </div>

</footer>

export default Footer