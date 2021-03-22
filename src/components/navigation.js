import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation">
    <a href="https://www.anvilpowered.org/">Documentation</a>
    <b>|</b>
    <a href="https://discord.com/invite/6gR2YH3">Discord</a>
    <b>|</b>
    <Link to={"/temp"}>Github</Link>
    <ThemeChanger/>
  </nav>
)
