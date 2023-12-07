function fullScreenHeight() {
    // Fixed 100vh problem for mobile responsive
    const documentHeight = () => {
        const doc = document.documentElement;
        doc.style.setProperty("--doc-height", `${document.defaultView.innerHeight}px`);
    };
    document.defaultView.addEventListener("resize", documentHeight);
    documentHeight();
}

export default fullScreenHeight