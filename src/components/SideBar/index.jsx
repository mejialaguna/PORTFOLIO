import "./index.scss";

export function SideBar() {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation_checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="navigation_button">
        <span className="navigation_icon">&nbsp;</span>
      </label>
      <div className="navigation_background">&nbsp;</div>
      <nav className="navigation_nav">
        <ul className="navigation_list">
          <li className="navigation_item">
            <a href="/" className="navigation_link">
              01 about
            </a>
          </li>
          <li className="navigation_item">
            <a href="/" className="navigation_link">
              02 your
            </a>
          </li>
          <li className="navigation_item">
            <a href="/" className="navigation_link">
              03 popular
            </a>
          </li>
          <li className="navigation_item">
            <a href="/" className="navigation_link">
              04 stories
            </a>
          </li>
          <li className="navigation_item">
            <a href="/" className="navigation_link">
              05 now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
