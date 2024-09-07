const TabsBar = (props) => {
  const { tabsDetails, onChangeTab, activeTab } = props;
  const { tabText, tabId } = tabsDetails;
  const onClickButton = () => {
    onChangeTab(tabId);
  };
  const textColor =
    activeTab === tabId
      ? "text-white bg-active-btn shadow-combined3"
      : "text-tabTextColor custom-transition-btn";

  return (
    <button
      onClick={onClickButton}
      className={`w-[33%] h-full font-poppins flex items-center justify-center rounded-xl text-xs md:text-sm lg:text-base xl:text-lg p-1 ${textColor}`}
    >
      {tabText}
    </button>
  );
};
export default TabsBar;
