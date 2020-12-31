class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            /* 閾値 */
            threshold: 0,
            once: true
        };
        /*　引数で渡されたoptionsとdefaultOptionsをマージする */
        this.options = Object.assign(defaultOptions, options);
        this.cb = cb;
        /* 配列の中の要素はこのように指定できる */
        this.once = this.options.once;
        this._init();
    }

    /* 複雑な初期化処理は分離して記述する */
    _init() {
        const callback = function(entries, observer) {
            entries.forEach(entry => {
                /* isIntersectiongのスペルミス注意 */
                if(entry.isIntersecting) {

                    // this.cb(entry.target, true);
                    this.cb(entry.target, entry.isIntersecting);
                    if(this.once) {
                    /*　監視を終了する */
                    observer.unobserve(entry.target);
                    }

                } else {   
                    // this.cb(entry.target, false);   
                    this.cb(entry.target, entry.isIntersecting);   
                }
            });
        };

        /* 渡されたthisがwindowを参照してしまうので、バインドしてscrollObserverを参照するようにする */
        // ※IntersectionObserverはwindowのメソッドなので 
        this.io = new IntersectionObserver(callback.bind(this), this.options);

        /* polyfillの設定(IntersectionObserverのように比較的新しいメソッドは対応していないブラウザがあることが多いので
           、対応できるように設定する) */
        /* index.htmlで読み込んでいるscroll-polyfillを発動させる */
        this.io.POLL_INTERVAL = 100;　// 100msごとにスクロールの動作を監視

        /* 配列を回してobserveメソッドで監視する */
        this.els.forEach(el => this.io.observe(el));
    }

    destroy() {
        this.io.disconnect();
    }
}