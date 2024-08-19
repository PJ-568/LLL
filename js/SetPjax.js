(function() {
    let pjax;

    function initPjax() {
        try {
            const Pjax = window.Pjax || function() {};
            pjax = new Pjax({
                selectors: [
                    "head meta",
                    "head title",
                    ".pjax-reload"
                ],
                cacheBust: false
            });
        } catch (e) {
            console.warn('PJAX 出错：' + e);
        }
    }

    document.addEventListener('DOMContentLoaded', () => initPjax());
}());
