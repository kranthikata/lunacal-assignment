import { Component, createRef } from "react";
import { v4 } from "uuid";
import ToolTip from "./components/ToolTip";
import TabsBar from "./components/TabsBar";
import GallerySlides from "./components/GallerySlides";

const tabsList = [
  {
    tabId: "ABOUTME",
    tabText: "About Me",
    content:
      "Hello Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...",
  },
  {
    tabId: "EXPERIENCE",
    tabText: "Experience",
    content:
      "I am A experience Web Developer Looking for best opportunity to develop my career and showcase my skills.",
  },
  {
    tabId: "RECOMMENDED",
    tabText: "Recommended",
    content: "Recommended by so and so person.",
  },
];

class App extends Component {
  state = {
    imagesList: [
      {
        id: v4(),
        imageUrl:
          "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=455&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: v4(),
        imageUrl:
          "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=455&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: v4(),
        imageUrl:
          "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=455&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: v4(),
        imageUrl:
          "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=455&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    activeTab: tabsList[0].tabId,
  };

  containerRef = createRef();
  fileInputRef = createRef();

  handleScrollLeft = () => {
    if (this.containerRef.current) {
      this.containerRef.current.scrollBy({
        left: -300, // Adjust this value based on how far you want to scroll
        behavior: "smooth",
      });
    }
  };

  handleScrollRight = () => {
    if (this.containerRef.current) {
      this.containerRef.current.scrollBy({
        left: 300, // Adjust this value based on how far you want to scroll
        behavior: "smooth",
      });
    }
  };

  handleAddImageClick = () => {
    if (this.fileInputRef.current) {
      this.fileInputRef.current.click();
    }
  };

  handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImage = {
          id: v4(),
          imageUrl: reader.result,
        };
        this.setState((prevState) => ({
          imagesList: [...prevState.imagesList, newImage],
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  onChangeTab = (id) => {
    this.setState({ activeTab: id });
  };

  render() {
    const { imagesList, activeTab } = this.state;
    const tabDetails = tabsList.find((eachTab) => eachTab.tabId === activeTab);
    const { content } = tabDetails;
    return (
      <div className="w-screen h-screen flex bg-gradient-to-b from-gradientStart to-gradientEnd">
        {/* Left Half */}
        <div className="md:w-1/2 h-full hidden md:block">{/* Left Half */}</div>

        {/* Right Half */}
        <div className="w-full md:w-1/2 h-full flex flex-col items-center">
          {/*Widget One */}
          <div className="bg-customBg shadow-custom flex w-[83%] h-[35vh] rounded-2xl mt-[8%] pt-[20px] pl-[12px] pb-[20px] pr-[13px]">
            {/* Container Content */}
            <ToolTip />
            <div className="w-full h-full">
              <div className="w-[93%] h-[25%] bg-tabBarBg flex p-1 rounded-xl mb-[20px]">
                <div className="flex w-full justify-between">
                  {tabsList.map((eachTab) => (
                    <TabsBar
                      key={eachTab.id}
                      tabsDetails={eachTab}
                      onChangeTab={this.onChangeTab}
                      activeTab={activeTab}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full overflow-auto h-[68%] custom-scrollbar">
                <div className="w-[94%] h-full md:text-base lg:text-lg xl:text-xl font-jakarta">
                  <p className="text-contentTextColor">{content}</p>
                </div>
              </div>
            </div>
          </div>
          {/*Horizontal Line */}
          <div className="w-[70.83%] h-[2px] bg-gradient shadow-custom-dark mt-[3%]">
            {/* Horizontal Line */}
          </div>

          {/* Widget Two*/}
          <div className="bg-customBg shadow-custom flex w-[83%] h-[35vh] mt-[3%] rounded-2xl pl-[13px] pt-[20px] pb-[20px] pr-[48px]">
            {/* Container Content */}
            <ToolTip />
            <div className="w-[93%] flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <button className="bg-tabBarBg font-poppins text-white h-[50px] w-[20.69%] rounded-2xl">
                  Gallery
                </button>
                <div className="sm:w-[60%] lg:w-[55%] flex items-center justify-around">
                  <button
                    className="h-[40px] shadow-combined font-poppins text-white bg-white-3 w-[40%] rounded-3xl text-xs md:text-sm lg:text-base"
                    onClick={this.handleAddImageClick}
                  >
                    + ADD IMAGE
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={this.fileInputRef}
                    onChange={this.handleAddImage}
                  />
                  <button
                    className="h-[45px] w-[45px] shadow-combined2 bg-button-gradient border-red-300 flex items-center justify-center rounded-3xl"
                    onClick={this.handleScrollLeft}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-arrowColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                      />
                    </svg>
                  </button>
                  <button
                    className="h-[45px] w-[45px] shadow-combined2 bg-button-gradient border-red-300 flex items-center justify-center rounded-3xl"
                    onClick={this.handleScrollRight}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-arrowColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="h-[68%] flex overflow-auto scrollbar-hide"
                ref={this.containerRef}
              >
                <GallerySlides imagesList={imagesList} />
              </div>
            </div>
          </div>
          {/*Horizontal Line */}
          <div className="w-[70.83%] h-[2px] bg-gradient shadow-custom-dark mt-[3%]">
            {/* Horizontal Line */}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
