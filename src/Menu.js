import React from "react";
import { Link } from "react-router";
import { withPhenomicApi, query } from "@phenomic/preset-react-app/lib/client";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    console.log("menu props", props);
    this.state = {
      closed: true
    };
    this.MenuToggler = this.MenuToggler.bind(this);
  }

  MenuToggler() {
    this.setState({ closed: !this.state.closed });
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps, this.props);
    if (this.props.postName !== nextProps.postName) {
      this.setState({ closed: true });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.isLoading !== nextProps.isLoading ||
      this.state.closed !== nextState.closed
    );
  }

  render() {
    const { isLoading, posts } = this.props;
    return (
      <div>
        {!isLoading && (
          <nav
            id="menu"
            className={this.state.closed ? "menu" : "menu menu--opened"}
          >
            <ul className="menu-list">
              <li className="menu-item">
                <a className="menu-link" href="/">
                  Forsiden
                </a>
              </li>
              {posts &&
                posts.node &&
                posts.node.list &&
                posts.node.list.map(post => (
                  <li className="menu-item" key={post.id}>
                    <Link className="menu-link" to={`/blog/${post.id}/`}>
                      {post.title || post.id}
                    </Link>
                  </li>
                ))}
              <li className="menu-item">
                <a className="menu-link" href="/postlist/">
                  Alle indlæg
                </a>
              </li>
            </ul>
            <div className="menu-handle" onClick={this.MenuToggler}>
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 137.28 226.82"
              >
                <title>angle</title>
                <polygon
                  points="23.87 226.82 0 202.96 89.55 113.41 0 23.87 23.87 0 137.28 113.41 23.87 226.82"
                  style={{ fill: "#231f20" }}
                />
              </svg>
            </div>
          </nav>
        )}
      </div>
    );
  }
}

const MenuContainer = withPhenomicApi(Menu, props => ({
  posts: query({ path: "posts", limit: 12 })
}));

export { MenuContainer, Menu };
