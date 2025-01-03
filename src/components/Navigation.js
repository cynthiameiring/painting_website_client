import React, { Component } from "react";
import { connect } from "react-redux";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toggleMenu } from "../actions/menu";

class Navigation extends Component {
    state = {
        menuItems: ["Artworks", "Process", "Downloads", "Contact", "About"],
        menuOpen: false,
        activePage: "",
        socials: [
            {
                name: "instagram",
                icon: "/media/Icons/instagram.png",
                url: "https://www.instagram.com/cynthia_meiring_studio"
            },
            {
                name: "youtube",
                icon: "/media/Icons/youtube.png",
                url: "https://www.youtube.com/channel/UC7MrD_YgKrcwKgEYPHzOc-A"
            },
            {
                name: "facebook",
                icon: "/media/Icons/facebook.png",
                url: "https://www.facebook.com/CynthiaMeiringStudio"
            },
        ]
    };

    componentDidMount() {
        const newsletterBanner = document.querySelector(".js-newsletterBanner");
        window.addEventListener('scroll', hideBannerOnScroll);

        function hideBannerOnScroll() {
            if (window.scrollY > 100) {
                newsletterBanner.classList.add("u-hidden");
            } else if (window.scrollY < 40) {
                newsletterBanner.classList.remove("u-hidden");
            }
        }
    }

    handleClick() {
        this.props.toggleMenu(!this.state.menuOpen);
        this.setState({
            menuOpen: !this.state.menuOpen,
        });
    }

    render() {
        return (
            <header className="u-width--100  u-sticky  u-sticky--safari  u-top--0  u-bg--white--white-smoke  u-box-shadow--1  z-index--hamburger">
                <div style={{ letterSpacing: "1px", backgroundColor: "#dfdfdf" }} className="js-newsletterBanner  u-width--100  u-weight--400  u-size--10  u-size--9@sm  u-padding--y4  u-text--center">
                    <a className="u-black" href="/#newsletter-banner">
                        Subscribe to the newsletter (no spam, I promise)
                    </a>
                </div>

                {/* Desktop view */}
                <div className="u-hidden  u-block@lg">
                    <div className="u-flex@lg  u-flex--justify--between  u-padding--y4  u-padding--x6">
                        <nav
                            className="u-width--33  u-flex  u-flex--items--center"
                            data-component="navigation--main"
                        >
                            <ol className="o-list-reset  u-flex  u-flex--row">
                                {this.state.menuItems.map((item, index) => (
                                    <li
                                        className="o-list-reset__item"
                                        data-component="navigation--main-item"
                                        key={index}
                                    >
                                        <NavLink
                                            activeClassName="v-border--nav--active"
                                            className={(index !== 0 ? "u-margin--l4  u-margin--l6@xl  " : "") + "u-inline-block  u-no-decoration  u-size--8  u-black  v-border--nav  u-weight--500"}
                                            to={"/" + item.toLowerCase()}
                                            onClick={() =>
                                                this.setState({ activePage: item.toLowerCase() })
                                            }
                                        >
                                            {item}
                                        </NavLink>
                                    </li>
                                ))}
                            </ol>
                        </nav>

                        <Link className="u-flex  u-flex--justify--center  u-width--33" to="/"
                              onClick={() =>
                                  this.setState({ activePage: '' })
                              }>
                            <img src="/media/Logo/Logo-black-bold.png" className="_height--logo" alt="logo" />
                        </Link>
                        <div className="u-width--33  u-flex  u-flex--items--center  u-flex--justify--end">
                            {this.state.socials.map((social, index) => (
                                <a
                                    className=""
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={index}
                                >
                                    <img
                                        src={social.icon}
                                        alt={social.name + "icon"}
                                        className="u-margin--l5"
                                        width="24"
                                        height="24"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile view */}
                <div className="u-hidden@lg  u-width--100  u-height--100  u-flex  u-padding--4">
                    <div
                        className="u-flex  u-width--33  u-flex--shrink--0  z-index--hamburger  u-flex--items--center  u-pointer  u-padding--x4@sm"
                        onClick={() => this.handleClick()}
                    >
                        <HamburgerMenu
                            isOpen={this.state.menuOpen}
                            menuClicked={() => {}}
                            width={18}
                            height={15}
                            strokeWidth={2}
                            rotate={0}
                            color="black"
                            borderRadius={0}
                            animationDuration={0.5}
                        />
                        <span className="u-size--6  u-black  u-weight--700  u-margin--l3">
                            {this.state.menuOpen ? "Close" : "Menu"}
                        </span>
                    </div>

                    <nav
                        className={
                            "c-menu--mobile  u-absolute  u-right--0  u-top--0" +
                            (this.state.menuOpen ? "  open" : "")
                        }
                    >
                        <ol className="o-list-reset">
                            {this.state.menuItems.map((item, index) => (
                                <li
                                    className="o-list-reset__item"
                                    data-component="navigation--main-item"
                                    key={index}
                                >
                                    <Link
                                        to={"/" + item.toLocaleLowerCase()}
                                        className="u-padding--y2  u-inline-block  u-no-decoration  u-size--7  u-size--6@sm  u-size--5@md  u-black u-weight--700 has-hover-propagation"
                                        onClick={() => this.handleClick()}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </nav>

                    <Link className="u-flex  u-flex--justify--center  u-width--33" to="/"
                          onClick={() =>
                              this.setState({ activePage: '' })
                          }>
                        <img src="/media/Logo/Logo-black-bold.png" className="_height--logo" alt="logo" />
                    </Link>

                    <div className="u-width--33  u-flex  u-flex--items--center  u-flex--justify--end">
                        {this.state.socials.map((social, index) => (
                            <a
                                className=""
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                            >
                                <img
                                    src={social.icon}
                                    alt={social.name + "icon"}
                                    className="u-margin--l4"
                                    width="22"
                                    height="22"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuOpen: state.menuOpen,
    };
};

export default connect(mapStateToProps, {
    toggleMenu,
})(Navigation);
