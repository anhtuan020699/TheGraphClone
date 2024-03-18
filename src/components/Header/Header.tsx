import React, { useState, useEffect, useRef, MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";

interface MenuItemContentProps {
  name: string;
  subName?: string;
}

const MenuItemContent: React.FC<MenuItemContentProps> = ({ name, subName }) => {
  return (
    <div className="content-wrapper">
      <div className="content-inner">
        <div className="menu-label">{name}</div>
        <div className="menu-sub-label">{subName}</div>
      </div>
    </div>
  );
};

interface RouterItem {
  name: string;
  subName?: string;
  path: string;
  onClick?: () => void;
}

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("");

  const location = useLocation();
  useEffect(() => {
    const pathname = location.pathname;
    setActiveTab(pathname);
  }, [location]);

  const [isShow, setIsShow] = useState(false);
  const isMobile = window.innerWidth < 768;

  const handleShowMenu = () => {
    if (isMobile) {
      setIsShow(true);
    }
  };

  const ref = useRef<any>();
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const router: RouterItem[] = [
    {
      name: "The Graph",
      path: "/",
      onClick: () => navigate("/"),
    },
    {
      name: "Products",
      path: "/products",
      onClick: () => setShowMenu(!showMenu),
    },
    {
      name: "blog",
      path: "/blog",
      onClick: () => navigate("/blog"),
    },
    {
      name: "docs",
      path: "/docs",
      onClick: () => navigate("/docs"),
    },
  ];
  const routerProduct: RouterItem[] = [
    {
      name: "Graph Explorer",
      path: "/",
      subName: "Explore subgraphs and interact with the protocol.",
    },
    {
      name: "Graph Explorer",
      path: "/",
      subName: "Explore subgraphs and interact with the protocol.",
    },
    {
      name: "Graph Explorer",
      path: "/",
      subName: "Explore subgraphs and interact with the protocol.",
    },
  ];
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos === 0) {
        setShow(false);
      } else {
        setShow(true);
      }

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`header  ${visible ? "show" : "hide"} ${
        visible && show ? "boder-heder  " : ""
      }`}
    >
      <div className="menu container">
        <div className="menu-left">
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 16 16"
            width={32}
            height={32}
            className="logo-icon"
            onClick={handleShowMenu}
          >
            <path
              fill="#ffffffa3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.1462 10.5611C12.4236 10.8372 12.4488 11.2693 12.2219 11.5738L12.1462 11.661L9.02112 14.7722C8.716 15.0759 8.2214 15.0759 7.91629 14.7722C7.63891 14.496 7.6137 14.064 7.84064 13.7595L7.91629 13.6723L11.0414 10.5611C11.3465 10.2573 11.8411 10.2573 12.1462 10.5611ZM7.6875 1C10.2763 1 12.375 3.08934 12.375 5.66665C12.375 8.24396 10.2763 10.3333 7.6875 10.3333C5.09867 10.3333 3 8.24396 3 5.66665C3 3.08934 5.09867 1 7.6875 1ZM7.6875 2.55555C5.96165 2.55555 4.5625 3.94838 4.5625 5.66665C4.5625 7.38492 5.96165 8.77775 7.6875 8.77775C9.41345 8.77775 10.8125 7.38492 10.8125 5.66665C10.8125 3.94838 9.41345 2.55555 7.6875 2.55555ZM13.1563 1C13.5878 1 13.9375 1.34816 13.9375 1.77778C13.9375 2.20739 13.5878 2.55555 13.1563 2.55555C12.7248 2.55555 12.3751 2.20739 12.3751 1.77778C12.3751 1.34816 12.7248 1 13.1563 1Z"
            ></path>
          </svg>

          {router.map((elm) => (
            <div
              key={elm.name}
              ref={elm.name === "Products" ? ref : null}
              onClick={elm.onClick}
              className={`menu-item ${elm.path === activeTab ? "active" : ""} `}
            >
              {elm.name}{" "}
              {elm.name === "Products" &&
                (!showMenu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                    />
                  </svg>
                ))}
              {elm.name === "Products" && showMenu && (
                <div className="menu-item-content">
                  {routerProduct.map((elm) => (
                    <MenuItemContent
                      key={elm.name}
                      name={elm.name}
                      subName={elm.subName}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="change-language">
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 16 16"
            width={20}
            height={20}
          >
            <path
              fill="#ffffffa3"
              d="M8 1C5.71875 1 3.69408 2.10417 2.41504 3.8H2.4V3.81914C1.52497 4.98768 1 6.43227 1 8C1 11.8577 4.1423 15 8 15C11.8577 15 15 11.8577 15 8C15 4.1423 11.8577 1 8 1ZM10.1 2.80879C12.1546 3.63715 13.6 5.64285 13.6 8C13.6 9.42342 13.0696 10.7161 12.2 11.7023V10.8H10.1V8H5.9V6.6H7.3V4.5H10.1V2.80879ZM2.54492 6.74492L3.8 8L5.9 10.1V12.2H7.3V13.5521C4.53204 13.2088 2.4 10.8635 2.4 8C2.4 7.56753 2.45287 7.14882 2.54492 6.74492Z"
            ></path>
          </svg>
          English
        </div>
      </div>

      <div
        className={`overlay ${isShow ? "" : "d-none"}`}
        onClick={() => setIsShow(false)}
      ></div>
      <div className={`menu-mobile ${isShow ? "open-menu" : ""}`}>
        <div className="menu-mobile-container">
          {router.map((elm) => {
            return (
              <div
                className={`menu-mobile-item ${
                  elm.path === activeTab ? "active" : ""
                } `}
                onClick={elm.onClick}
              >
                {elm.name}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};
export default Header;
