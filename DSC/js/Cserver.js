const tabs = findDoms(".custom-nav-tabs .nav-link");
const tabContent = findDoms(".tab-content .tab-pane");

// 服务分类切换
tabs.forEach((tab, index) => {
  tab.addEventListener("click", function (e) {
    e.preventDefault();
    tabs.forEach((tab) => tab.parentElement.classList.remove("active"));
    tabContent.forEach((content) => content.classList.remove("active"));
    tab.parentElement.classList.add("active");
    tabContent[index].classList.add("active");
  });
});
