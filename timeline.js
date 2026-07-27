(() => {
  const tabs = [...document.querySelectorAll("[data-timeline-tab]")];
  const panels = [...document.querySelectorAll("[data-timeline-panel]")];
  const previousButton = document.querySelector("[data-timeline-previous]");
  const nextButton = document.querySelector("[data-timeline-next]");

  const explorer = document.querySelector(".timeline-explorer");

  if (!tabs.length || tabs.length !== panels.length || !explorer) return;

  let activeIndex = 0;

  const setActive = (index, moveFocus = false) => {
    activeIndex = Math.max(0, Math.min(index, tabs.length - 1));

    tabs.forEach((tab, tabIndex) => {
      const isActive = tabIndex === activeIndex;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel, panelIndex) => {
      const isActive = panelIndex === activeIndex;
      panel.hidden = !isActive;
      panel.classList.toggle("is-active", isActive);
    });

    explorer.style.setProperty(
      "--timeline-progress",
      tabs.length > 1 ? String(activeIndex / (tabs.length - 1)) : "0"
    );

    if (previousButton) previousButton.disabled = activeIndex === 0;
    if (nextButton) nextButton.disabled = activeIndex === tabs.length - 1;

    const chapter = tabs[activeIndex].dataset.timelineTab;
    if (chapter && history.replaceState) {
      history.replaceState(null, "", `#${chapter}`);
    }

    if (moveFocus) tabs[activeIndex].focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => setActive(index));

    tab.addEventListener("keydown", (event) => {
      const keyActions = {
        ArrowDown: Math.min(index + 1, tabs.length - 1),
        ArrowRight: Math.min(index + 1, tabs.length - 1),
        ArrowUp: Math.max(index - 1, 0),
        ArrowLeft: Math.max(index - 1, 0),
        Home: 0,
        End: tabs.length - 1,
      };

      if (Object.hasOwn(keyActions, event.key)) {
        event.preventDefault();
        setActive(keyActions[event.key], true);
      }
    });
  });

  previousButton?.addEventListener("click", () => setActive(activeIndex - 1));
  nextButton?.addEventListener("click", () => setActive(activeIndex + 1));

  const requestedChapter = window.location.hash.slice(1);
  const requestedIndex = tabs.findIndex(
    (tab) => tab.dataset.timelineTab === requestedChapter
  );

  setActive(requestedIndex >= 0 ? requestedIndex : 0);
})();