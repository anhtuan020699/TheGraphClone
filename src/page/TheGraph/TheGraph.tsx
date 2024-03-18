import React, { useEffect, useRef, useState } from "react";
import { ecosystemData, explorerData } from "./theGrapdata";
import "./TheGraph.scss";

enum Name {
  explore,
  started,
}
const TheGraph = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHoveredExplore, setIsHoveredExplore] = useState(false);
  const [isHoveredStarted, setIsHoveredStarted] = useState(false);
  const [text, setText] = useState(" Access the world’s blockchain data");
  // Xử lý khi di chuột vào phần tử
  const handleMouseEnter = (name: Name) => {
    if (name === Name.explore) {
      setIsHoveredExplore(true);
      setText("Discover thousands of open APIs");
    }
    if (name === Name.started) {
      setIsHoveredStarted(true);
      setText("Build unstoppable applications");
    }
  };

  // Xử lý khi di chuột ra khỏi phần tử
  const handleMouseLeave = (name: Name) => {
    if (name === Name.explore) {
      setIsHoveredExplore(false);
    }
    if (name === Name.started) {
      setIsHoveredStarted(false);
    }
    setText("Access the world’s blockchain data");
  };
  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnded = () => {
      setIsVideoPlaying(false);
    };

    if (video) {
      video.addEventListener("ended", handleVideoEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleVideoEnded);
      }
    };
  }, []);

  return (
    <div className="TheGraph-wrapper">
      <div className="TheGraph-wrapper-content">
        {isVideoPlaying ? (
          <div className="video-container">
            <video ref={videoRef} autoPlay muted>
              <source
                src="https://thegraph.com/_next/static/media/hero.f472f960.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        ) : (
          <div className="image-background">
            <img
              src="https://thegraph.com/_next/static/media/hero-end.0206e1f3.jpg"
              alt="Background"
            />
            <div className="image-background-content">
              <div
                className={`text ${isHoveredExplore ? "explore-hover" : ""}  ${
                  isHoveredStarted ? "started-hover" : ""
                }`}
              >
                {text}
              </div>
              <div className="image-background-group-button">
                <div
                  className="button explore"
                  onMouseEnter={() => handleMouseEnter(Name.explore)}
                  onMouseLeave={() => handleMouseLeave(Name.explore)}
                >
                  Explore Data
                </div>
                <div
                  className="button started"
                  onMouseEnter={() => handleMouseEnter(Name.started)}
                  onMouseLeave={() => handleMouseLeave(Name.started)}
                >
                  Get Started
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <section className="container">
        <div className="Describe row">
          <div className="item col-xl-4 col-md-12">
            <div className="lable">Build faster</div>
            <div className="sub-label">100% less servers</div>
            <div className="content">
              Create groundbreaking applications without needing to run your own
              data server, build indexing infrastructure, or parse through raw
              data.
            </div>
          </div>
          <div className="item col-xl-4 col-md-12">
            <div className="lable">Build faster</div>
            <div className="sub-label">100% less servers</div>
            <div className="content">
              Create groundbreaking applications without needing to run your own
              data server, build indexing infrastructure, or parse through raw
              data.
            </div>
          </div>
          <div className="item col-xl-4 col-md-12">
            <div className="lable">Build faster</div>
            <div className="sub-label">100% less servers</div>
            <div className="content">
              Create groundbreaking applications without needing to run your own
              data server, build indexing infrastructure, or parse through raw
              data.
            </div>
          </div>
        </div>
        <hr className="hr container"></hr>
      </section>
      <section className="container">
        <div className="powered-by-subgraphs">
          <div className="row powered-by-subgraphs-content">
            <div className="col-xl-7 col-md-12">
              <h2 className="row subgraphs-lable">Web3</h2>
              <h2 className="row subgraphs-lable"> Powered by subgraphs</h2>
              <div className="row subgraphs-sub-lable">
                Tens of thousands of developers rely on The Graph to create
                best-in-class user experiences. Explore a rich ecosystem of
                community-created subgraphs or build your own with The Graph.
              </div>
              <div className="row Describe">
                <div className="Describe-items col-xl-4">
                  <div className="describe-lable">
                    200+ <br></br>Indexer Nodes
                  </div>
                  <div className="describe-sub-lable">
                    <p>On The Graph Network</p>
                  </div>
                </div>
                <div className="Describe-items col-xl-4">
                  <div className="describe-lable">
                    200+ <br></br>Indexer Nodes
                  </div>
                  <div className="describe-sub-lable">
                    <p>On The Graph Network</p>
                  </div>
                </div>
                <div className="Describe-items col-xl-4">
                  <div className="describe-lable">
                    200+ <br></br>Indexer Nodes
                  </div>
                  <div className="describe-sub-lable">
                    <p>On The Graph Network</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-1"></div>
            <div className="col-xl-4 explorer col-md-12">
              <div className="row">
                {explorerData.map((elm) => {
                  return <ExplorerItem data={elm} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="supported-networks">
          <div className="title">Supported Networks</div>
          <div className="sub-title">
            Anyone can use subgraphs to power applications across 40+ networks
            and counting.
          </div>
          <div className="coin-wrapper">
            <CoinIcon />
            <CoinIcon />
            <CoinIcon />
            <CoinIcon />
            <CoinIcon />
            <CoinIcon />
            <CoinIcon />
            <CoinIcon />
          </div>
          <div className="view-all-networks">
            View all networks
            <NextIcon />
          </div>
          <div className="view-all-networks-sub">
            On The Graph Network &amp; hosted service
          </div>
        </div>
      </section>
      <hr className="hr container"></hr>
      <section className="container">
        <div className="Join-the-ecosystem ">
          <div className="lable">Join the ecosystem</div>
          <div className="sub-lable">Transform the internet</div>
          <div className="text-content">
            The Graph ecosystem welcomes you — regardless of where you are in
            the world, what your level of technical expertise is, or your
            familiarity with blockchains. Learn about all the roles in which you
            can choose to participate!
          </div>
          <div className="row">
            {ecosystemData.map((elm) => {
              return (
                <div className="col-xl-4 col-md-6">
                  <div className="ecosystem-item">
                    <img src={elm.src} alt="" width={80} />
                    <div className="name">
                      {elm.name} <NextIcon />
                    </div>
                    <div className="sub-name">{elm.subName}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="container">
        <div className="Learn-more">
          <div className="title">Learn more</div>
          <div className="sub-title">
            The Graph enables innovators of all backgrounds to plug into a
            collaborative ecosystem. Learn more about how The Graph community
            can serve you.
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-12">
              <div className="row">
                <div className="header-title">BLOG</div>
              </div>
              <LearnMoreItem />
              <LearnMoreItem />
              <LearnMoreItem />
            </div>
            <div className="col-xl-4 col-md-12">
              <div className="row">
                <div className="header-title">DOCS</div>
              </div>
              <LearnMoreItem />
              <LearnMoreItem />
              <LearnMoreItem />
            </div>
            <div className="col-xl-4 col-md-12">
              <div className="header-title"> VIDEOS</div>
              <LearnMoreItem />
              <LearnMoreItem />
              <LearnMoreItem />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheGraph;
function CoinIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 16 16" width={32}>
      <path
        fill="#ffffffa3"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.3688 8.81011L7.68341 14L4 8.81011L7.68341 10.985L11.3688 8.81011ZM7.68341 2L11.3668 8.11174L7.68341 10.2887L4 8.11174L7.68341 2Z"
      ></path>
    </svg>
  );
}
interface ImageSrc {
  src: string;
}

interface ExplorerItem {
  name: string;
  srcs: ImageSrc[];
}

interface ExplorerProps {
  data: ExplorerItem;
}

const ExplorerItem: React.FC<ExplorerProps> = ({ data }) => {
  return (
    <div className="col-xl-4 explorer-wrapper col-md-6">
      <div className="grid-container-explorer">
        {data.srcs.map((image, index) => (
          <img key={index} src={image.src} alt="" width={55} height={55} />
        ))}
      </div>
      <div className="explorer-footer">
        {data.name} <NextIcon />{" "}
      </div>
    </div>
  );
};
function NextIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 16 16"
      width={16}
      className="next-icon"
    >
      <path
        fill="#ffffffa3"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3612 7.52782L7.42059 2.66776L8.09941 2L13.8594 7.66612C14.0469 7.85052 14.0469 8.14948 13.8594 8.33388L8.09941 14L7.42059 13.3322L12.3612 8.47218H2V7.52782H12.3612Z"
      ></path>
    </svg>
  );
}

const LearnMoreItem = () => {
  return (
    <div className="row">
      <div className="Learn-more-item">
        <div className="left">
          <img
            src="https://thegraph.com/_next/static/media/blog-intro-to-web3.72ed0790.jpg"
            alt=""
            width={64}
          />
          <div className="Learn-more-item-content">
            <div className="name">Intro to web3 and The Graph</div>
            <div className="sub-name">
              {" "}
              The Graph Foundation · 6 minute read
            </div>
          </div>
        </div>
        <div className="right">
          <NextIcon />
        </div>
      </div>
    </div>
  );
};
