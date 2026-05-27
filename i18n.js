// i18n.js — YorunoBrowser landing page translations
// To add a language: add a key to `translations` with all the same keys as "en".
// SUPPORTED_LANGS order determines the switcher button order.

const translations = {
  en: {
    // Navbar
    nav_features: "Features",
    nav_screenshots: "Screenshots",
    nav_demo: "Interactive Demo",
    nav_plans: "Pricing Plans",
    nav_install: "Install",
    nav_cta: "Get It Now",

    // Hero
    hero_badge: "The Best One-Handed iOS Browser",
    hero_h1_1: "Make your night browsing",
    hero_h1_2: "More comfortable & free.",
    hero_desc: "YorunoBrowser is a premium browser and feature-packed file manager fine-tuned for ultimate one-handed operation on iOS. Equipped with a powerful ad blocker, universal media downloader, true forced dark mode, and a clever stealth sensor to protect your privacy instantly.",
    hero_tag_ad: "Ad Blocker Included",
    hero_tag_dl: "HLS/MP4 Downloader",
    hero_tag_stealth: "Instant Proximity Stealth",
    hero_tag_conv: "Fast File Converter",
    hero_tag_dark: "Ultimate Dark Mode",
    hero_tag_viewer: "Powerful File Viewer",
    hero_btn_install: "Install via AltStore",
    hero_btn_demo: "Try Interactive Demo",

    // Features section
    feat_heading: "Why Choose YorunoBrowser?",
    feat_sub: "It is far more than just a browser. It is everything you need to explore and consume media smoothly, seamlessly, and securely late at night.",
    feat1_title: "One-Handed & Gesture UI",
    feat1_desc: "Every main button and URL bar sits right at the bottom for easy reach. Built-in bottom page padding lets you scroll past the display edge comfortably. Customize edge-swipes to navigate backward, forward, or close tabs with effortless gestures.",
    feat2_title: "Universal Media Downloader",
    feat2_desc: "Download HLS (m3u8), MP4 videos, PDFs, and batches of images with a single tap.",
    feat3_title: "True Forced Dark Mode",
    feat3_desc: "Instantly transform bright white sites into deeply elegant dark themes. Powered by a smart pre-render engine that blocks blinding white splash screens and avoids unnatural image color inversions.",
    feat4_title: "In-App Media Re-encoder",
    feat4_desc: "Convert and fine-tune your downloaded media directly inside the app. Adjust audio pitch, modify resolution parameters (0.1x to 1.0x), and compress files to optimize local storage.",
    feat5_title: "Instant Proximity Stealth",
    feat5_desc: "Surfing private stuff when someone suddenly walks into your room? Simply wave your hand over the front camera sensor to instantly mask the active view and pull up a safe page like Wikipedia.",
    feat6_title: "Explorer, Grid & YoruTube",
    feat6_desc: "Switch smoothly between a desktop-grade list layout and a highly fluid thumbnail grid. Stream unencoded raw .ts segments natively with an optimized one-tap video engine.",
    feat6_note: "If you notice anomalies with .ts durations, please report the Where / When / What / How details on GitHub or via our form.",

    // Screenshots section
    ss_label: "SCREENSHOTS",
    ss_heading: "Real In-App UI",
    ss_sub: "BrowserTop includes extra scroll padding (PaddingForOneHand) so your thumb can scroll comfortably without reaching.",
    ss1_cap: "Scroll padding enabled",
    ss2_cap: "Comfortable thumb zone",
    ss3_cap: "My Page",
    ss4_cap: "No guesswork descriptions",
    ss5_cap: "Plan comparison & usage history",
    demo01_label: "DEMO01",
    demo01_heading: "Downloader Flow Demo",
    demo01_desc: "Tap DL → select file → confirm filename/type → execute.",
    demo01_scroll: "Scroll horizontally",
    step1: "Step 1", step1_cap: "Open DL",
    step2: "Step 2", step2_cap: "Pick target",
    step3: "Step 3", step3_cap: "Confirm",
    step4: "Step 4", step4_cap: "Execute",
    step5: "Step 5", step5_cap: "Progress",
    step6: "Step 6", step6_cap: "Finished",
    step7: "Step 7", step7_cap: "History",

    // Interactive Demo section
    idemo_label: "INTERACTIVE DEMO",
    idemo_heading: "Experience YorunoBrowser Live",
    idemo_sub: "Test drive some of our unique core features right inside your current browser web window!",
    tab_stealth: "🚀 Proximity Stealth",
    tab_dark: "🌙 Dark Mode Tweak",
    tab_player: "🎬 25% Time Skip",

    // Stealth demo
    stealth_desc_html: "Is someone walking into your room out of nowhere? In the mobile app, just cover the top area of your phone.<br><strong class=\"text-slate-200\">PC:</strong> hover the button below. &nbsp;<strong class=\"text-slate-200\">Mobile:</strong> tap to toggle stealth mode.",
    stealth_title_private: "㊙ Viewing Secret Private Content...",
    stealth_badge_private: "PRIVATE",
    stealth_video_name: "Super_Secret_Video.mp4",
    stealth_video_cap: "Enjoying top secret media content securely...",
    stealth_url_private: "URL: https://secret-contents.xyz/video1",
    stealth_secure: "Secure Mode Active",
    stealth_title_wiki: "🔍 Information Technology - Wikipedia",
    stealth_wiki_enc: "The Free Encyclopedia",
    stealth_wiki_heading: "Information Technology (IT)",
    stealth_wiki_body: "Information technology (IT) is the set of practices and disciplines concerned with computing, data management, and processing, serving as the core foundation of modern engineering...",
    stealth_url_wiki: "URL: https://en.wikipedia.org/wiki/Information_technology",
    stealth_btn_default: "Cover Sensor Here (Hover / Tap to Toggle)",
    stealth_btn_active: "Tap Again to Reveal Content",

    // Dark mode demo
    dark_desc_html: "Ever opened a web browser in the middle of the night and yelled because of a flashing white page?<br>With YorunoBrowser, forced dark mode takes effect before rendering, keeping assets intact without eerie inversions.",
    dark_label_off: "Default View (Bright)",
    dark_label_on: "Yoruno Forced Dark View",
    dark_blog_name: "A Regular Informative Blog",
    dark_blog_type: "Standard Web",
    dark_content_title: "Blinding White Nighttime Content",
    dark_content_text: "Standard forced filters usually invert every element on screen, transforming standard illustrations into weird and spooky negative colors...",
    dark_card_title: "Cute Cat Asset Icon",
    dark_card_sub_off: "(Should NOT be color-inverted)",
    dark_card_sub_on: "(Colors stay intact without inversion!)",

    // Player demo
    player_desc_html: "Ever browsed in bed and struggled to drag the tiny progress slider at the edge with your thumb?<br>Our instant quarter-jump keys make skipping through long videos effortless with just one hand.",
    player_seek_hint: "Try moving the seek bar slider track above",
    player_jump_btn: "Jump to 25%",
    player_passed: "Video past 25%. Jump button hidden dynamically.",
    player_restart: "Restart Video",
    player_hint: "Button appears only when position is under 25%",

    // Subscription section
    sub_label: "PREMIUM EXCLUSIVE",
    sub_heading: "Personalized Icons & Themes",
    sub_desc: "Unlock full custom app icon sets and bespoke accent color layouts with our Premium or Supporter tiers. Customize your home screen experience to fit your exact style.",
    icon_loop: "Auto-cycling preview loop active",
    icon_nena_desc: "Default variant theme icon asset",
    icon_nena_blue_desc: "Bespoke blue color theme structural design",
    icon_nena_club_desc: "Deep neon club aesthetics design layout look",
    icon_sea001_desc: "Clean coastal seaside premium style profile",
    ci_title: "Custom Home Icons",
    ci_tier: "Premium / Supporter Only",
    ci_desc: "Personalize your home screen app display configurations with bespoke icon artwork variants including nena, nenaBlue, nenaClub, and sea001.",
    more_coming: "+ More Coming",
    ct_title: "Bespoke Accent Themes",
    ct_tier: "Premium / Supporter Only",
    ct_desc: "Tweak app-wide accent markers to match your mood. Toggle beautifully deep custom variations of violet, dark cyan, pink, and emerald green.",
    colors_label: "6+ colors available (updated regularly)",
    unlock_title: "Unlock with Premium Tier",
    unlock_desc: "From $20/mo • Custom Assets, Themes, and Private Discord DM Perks",
    view_plans: "View Plans",

    // Why Standard section
    why_label: "WHY $1 / MONTH",
    why_heading: "Why Only $1 / Month is Absolute Value",
    why_sub: "Instead of worrying about a daily download limit, explore with zero boundaries.",
    reality_title: "The Reality of Modern Web Media Streams",
    reality_desc: "When you tap a media stream link on video sites, multiple cryptic assets often populate. Knowing which link holds the actual high-res video varies across sites.",
    reality_note_html: "In many scenarios, options labeled \"Unknown HD\" are the correct ones. No software can predict this perfectly; <strong class=\"text-slate-400\">users discover it through brief trial and error.</strong> For example, picking HLS right after starting playback works best on Pornhub, while TokyoMotion requires selecting \"Unknown HD/SD\". Learning these site behaviors is part of the fun!",
    free_label: "FREE TIER",
    free_title: "10 Downloads / Day Limit",
    free_desc: "If a media node provides 5 stream candidates, testing two wrong nodes leaves you with few daily chances, adding unnecessary stress to your browsing experience.",
    free_warning: "If you miss the right track, you have to wait until tomorrow",
    std_label: "$1 / MONTH",
    std_title: "Infinite Unlimited Access",
    std_desc: "Test every stream asset link freely with zero worry. Zero stress, maximum convenience, and instant access to the files you want.",
    std_benefit: "Test everything seamlessly to lock down the correct file path",
    why_closing: "Why stress over daily limitations when you can clear all boundaries for just $1?",
    compare_label: "Let's look at standard industry pricing scales...",
    compare_ai_label: "Standard ChatGPT / Claude Pro Plans",
    compare_yoruno_label: "YorunoBrowser Standard Tier",
    compare_desc_html: "Get an enhanced browsing experience for just <span class=\"text-purple-300 font-bold\">1/20th the price</span> of a monthly AI subscription.",
    compare_sub: "Think about it: if your regular AI tools cost $20, this premium layout sits at a tiny fraction of that amount.",
    choose_standard: "Choose Standard Plan",

    // Plans section
    plans_label: "PRICING PLANS",
    plans_heading: "Pick a Plan That Fits Your Flow",
    plans_desc: "Enjoy up to 10 daily media downloads for free, or support development via Patreon to unlock infinite downloads and advanced file converter layouts.",
    table_tier: "Tier Plan",
    table_price: "Pricing Matrix",
    table_dl: "Media Downloads",
    table_conv: "File Convert & Re-encode",
    table_themes: "Custom Themes / Icons",
    table_discord: "Discord VIP Access Perks",
    t_free: "Free",
    t_standard: "Standard",
    t_pro: "Pro",
    t_premium: "Premium",
    t_supporter: "Supporter",
    dl_limited: "10 DLs / Day Limit",
    dl_unlimited: "Unlimited (Inf)",
    conv_unlocked: "Unlocked (O)",
    theme_color_icon: "Color / Icon Customization",
    discord_vip: "Direct VIP DM Channel Support",
    note1: "* Media downloader does not bypass DRM (Digital Rights Management) encryptions on streaming structures.",
    note2: "* Media extraction dependencies depend on external site layouts and may vary over time.",
    note3: "* Subscriptions run through Patreon securely. Check billing ledger allocations inside your app's built-in parameters page smoothly.",

    // Download section
    inst_label: "INSTALLATION",
    inst_heading: "Deploy Natively to Your iOS Device",
    inst_desc: "YorunoBrowser code targets open-source public spaces on GitHub. Sideload via AltStore or your preferred iOS package management tools seamlessly.",
    pal_badge: "Recommended for JP & EU",
    pal_title: "AltStore PAL",
    pal_desc: "For users on iOS 17.4+ within supported marketplace ecosystems. Install, sync, and process version updates cleanly with single-tap store mechanics.",
    pal_guide_btn: "View Installation Guide Steps",
    pal_step1: "1. Open Safari on iOS, navigate to the official AltStore PAL marketplace link, register, and install the store app hub.",
    pal_step2: "2. Open the AltStore PAL app on your phone, then add the official YorunoBrowser GitHub Repository URL link into your active sources panel.",
    pal_step3: "3. Find YorunoBrowser in the app listings and tap install to set everything up natively!",
    pal_cta: "Open AltStore PAL Registration Page",
    srv_badge: "Global Route • Computer Needed",
    srv_title: "AltServer (AltStore Free)",
    srv_desc: "Deploy your app safely from any global location for free using a Windows or macOS desktop environment over local Wi-Fi or tether links.",
    srv_guide_btn: "View Installation Guide Steps",
    srv_step1: "1. Download and open the AltServer tool client framework components natively inside a Windows or macOS system configuration.",
    srv_step2: "2. Attach your iPhone via USB cable, locate AltServer in your system menu bar tray, and run \"Install AltStore\" onto your targeted phone target.",
    srv_step3: "3. Grab our latest stable IPA release package binary from the official GitHub workspace, launch AltStore on mobile, and click the \"+\" button under My Apps to build it locally.",
    srv_cta: "Download AltServer (Free)",
    gh_title: "Official GitHub Workspace",
    gh_desc: "Track public engineering milestones, code tweaks, issue diagnostics pipelines, and feature update roadmaps (including the upcoming YoruTube module integrations).",
    gh_cta: "Open GitHub Official Repository",

    // Footer
    footer_copy: "© 2026 YorunoBrowser. Developed under the night sky. All rights reserved.",
    footer_patreon: "Support on Patreon",
    footer_plans: "Pricing Plans",
    footer_github: "GitHub",
  },

  ja: {
    // Navbar
    nav_features: "機能",
    nav_screenshots: "スクリーンショット",
    nav_demo: "インタラクティブデモ",
    nav_plans: "料金プラン",
    nav_install: "インストール",
    nav_cta: "今すぐ入手",

    // Hero
    hero_badge: "最高の片手操作iOSブラウザ",
    hero_h1_1: "深夜のブラウジングを",
    hero_h1_2: "より快適に、より自由に。",
    hero_desc: "YorunoBrowserは、iOS向けに片手操作を徹底的に追求したプレミアムブラウザ兼多機能ファイルマネージャーです。強力な広告ブロッカー、万能メディアダウンローダー、真の強制ダークモード、そして瞬時にプライバシーを守るステルスセンサーを搭載しています。",
    hero_tag_ad: "広告ブロッカー搭載",
    hero_tag_dl: "HLS/MP4ダウンローダー",
    hero_tag_stealth: "即時近接ステルス",
    hero_tag_conv: "高速ファイル変換",
    hero_tag_dark: "究極のダークモード",
    hero_tag_viewer: "強力なファイルビューア",
    hero_btn_install: "AltStoreでインストール",
    hero_btn_demo: "インタラクティブデモを試す",

    // Features section
    feat_heading: "YorunoBrowserを選ぶ理由",
    feat_sub: "単なるブラウザをはるかに超えた存在です。深夜に滑らかに、シームレスに、安全にメディアを楽しむために必要なすべてが揃っています。",
    feat1_title: "片手操作＆ジェスチャーUI",
    feat1_desc: "すべての主要ボタンとURLバーは操作しやすい画面下部に配置されています。内蔵のボトムパディングで、親指だけで画面端まで快適にスクロールできます。エッジスワイプで前後の移動やタブのクローズを直感的に操作できます。",
    feat2_title: "万能メディアダウンローダー",
    feat2_desc: "HLS（m3u8）、MP4動画、PDF、画像のバッチダウンロードをワンタップで実行できます。",
    feat3_title: "真の強制ダークモード",
    feat3_desc: "眩しい白いサイトを瞬時に洗練されたダークテーマに変換します。レンダリング前に作動するスマートなプリレンダリングエンジンが、白いスプラッシュ画面をブロックし、不自然な色反転を回避します。",
    feat4_title: "アプリ内メディア再エンコーダー",
    feat4_desc: "ダウンロードしたメディアをアプリ内で直接変換・調整できます。音声ピッチの変更、解像度パラメータ（0.1x〜1.0x）の調整、ローカルストレージ最適化のためのファイル圧縮が可能です。",
    feat5_title: "即時近接ステルス",
    feat5_desc: "プライベートなコンテンツを閲覧中に誰かが突然部屋に入ってきたら？フロントカメラセンサーに手をかざすだけで、画面を瞬時にWikipediaなどの安全なページに切り替えます。",
    feat6_title: "エクスプローラー、グリッド＆YoruTube",
    feat6_desc: "デスクトップ級のリスト表示と流れるようなサムネイルグリッドをスムーズに切り替えられます。最適化されたワンタップ動画エンジンで、生の.tsセグメントをネイティブにストリーミングできます。",
    feat6_note: ".tsの再生時間に異常を発見した場合は、いつ・どこで・何が・どのように起きたかをGitHubまたはフォームから報告してください。",

    // Screenshots section
    ss_label: "スクリーンショット",
    ss_heading: "実際のアプリUI",
    ss_sub: "BrowserTopには片手操作用の追加スクロールパディング（PaddingForOneHand）が含まれており、親指を伸ばさずに快適にスクロールできます。",
    ss1_cap: "スクロールパディング有効",
    ss2_cap: "親指の快適ゾーン",
    ss3_cap: "マイページ",
    ss4_cap: "わかりやすい説明付き",
    ss5_cap: "プラン比較と使用履歴",
    demo01_label: "DEMO01",
    demo01_heading: "ダウンローダーフローデモ",
    demo01_desc: "DLをタップ → ファイルを選択 → ファイル名/種類を確認 → 実行。",
    demo01_scroll: "横にスクロール",
    step1: "ステップ1", step1_cap: "DLを開く",
    step2: "ステップ2", step2_cap: "対象を選択",
    step3: "ステップ3", step3_cap: "確認",
    step4: "ステップ4", step4_cap: "実行",
    step5: "ステップ5", step5_cap: "進行中",
    step6: "ステップ6", step6_cap: "完了",
    step7: "ステップ7", step7_cap: "履歴",

    // Interactive Demo section
    idemo_label: "インタラクティブデモ",
    idemo_heading: "YorunoBrowserを今すぐ体験",
    idemo_sub: "ユニークなコア機能を、今使っているブラウザの中で直接試せます！",
    tab_stealth: "🚀 近接ステルス",
    tab_dark: "🌙 ダークモード",
    tab_player: "🎬 25%スキップ",

    // Stealth demo
    stealth_desc_html: "誰かが突然部屋に入ってきたら？アプリでは、スマホの上部に手をかざすだけです。<br><strong class=\"text-slate-200\">PC：</strong>ボタンにホバー。&nbsp;<strong class=\"text-slate-200\">モバイル：</strong>タップでステルス切替。",
    stealth_title_private: "㊙ 秘密のコンテンツを閲覧中...",
    stealth_badge_private: "プライベート",
    stealth_video_name: "Super_Secret_Video.mp4",
    stealth_video_cap: "トップシークレットなコンテンツを安全に楽しんでいます...",
    stealth_url_private: "URL: https://secret-contents.xyz/video1",
    stealth_secure: "セキュアモード有効",
    stealth_title_wiki: "🔍 情報技術 - Wikipedia",
    stealth_wiki_enc: "フリー百科事典",
    stealth_wiki_heading: "情報技術（IT）",
    stealth_wiki_body: "情報技術（IT）とは、コンピューティング、データ管理、情報処理に関する実践と学問の総体であり、現代のエンジニアリングの根幹をなすものです...",
    stealth_url_wiki: "URL: https://ja.wikipedia.org/wiki/情報技術",
    stealth_btn_default: "センサーをカバー（ホバー / タップで切替）",
    stealth_btn_active: "もう一度タップして元に戻す",

    // Dark mode demo
    dark_desc_html: "深夜にブラウザを開いて、真っ白な画面に目が焼けた経験は？<br>YorunoBrowserの強制ダークモードはレンダリング前に作動し、画像の色を自然なまま保ちます。",
    dark_label_off: "通常表示（明るい）",
    dark_label_on: "Yoruno強制ダーク表示",
    dark_blog_name: "普通の情報ブログ",
    dark_blog_type: "一般的なウェブ",
    dark_content_title: "深夜に目を焼く白いコンテンツ",
    dark_content_text: "通常の強制フィルターは画面上のすべての要素を反転させ、普通のイラストを不気味なネガティブカラーに変えてしまいます...",
    dark_card_title: "かわいいネコのアイコン",
    dark_card_sub_off: "（色反転されるべきではない）",
    dark_card_sub_on: "（色反転なしで元のまま保持！）",

    // Player demo
    player_desc_html: "寝転びながらブラウジングして、画面端の小さなシークバーを親指で動かすのに苦労したことは？<br>瞬時にクォータージャンプできるキーで、片手だけで長い動画を楽々スキップできます。",
    player_seek_hint: "上のシークバーを動かしてみてください",
    player_jump_btn: "25%にジャンプ",
    player_passed: "動画が25%を超えました。ボタンは動的に非表示。",
    player_restart: "動画を最初から",
    player_hint: "ボタンは25%未満の時のみ表示されます",

    // Subscription section
    sub_label: "プレミアム限定",
    sub_heading: "カスタムアイコン＆テーマ",
    sub_desc: "PremiumまたはSupporterティアで、完全カスタムアイコンセットとオリジナルアクセントカラーレイアウトを解放できます。ホーム画面を自分のスタイルに合わせてカスタマイズしましょう。",
    icon_loop: "自動サイクルプレビュー中",
    icon_nena_desc: "デフォルトバリアントテーマアイコン",
    icon_nena_blue_desc: "オリジナルブルーカラーテーマデザイン",
    icon_nena_club_desc: "ディープネオンクラブ美学デザイン",
    icon_sea001_desc: "クリーンな海辺プレミアムスタイル",
    ci_title: "カスタムホームアイコン",
    ci_tier: "Premium / Supporter限定",
    ci_desc: "nena、nenaBlue、nenaClub、sea001など、オリジナルアイコンアートワークでホーム画面をパーソナライズできます。",
    more_coming: "+ さらに追加予定",
    ct_title: "オリジナルアクセントテーマ",
    ct_tier: "Premium / Supporter限定",
    ct_desc: "気分に合わせてアプリ全体のアクセントカラーを調整できます。バイオレット、ダークシアン、ピンク、エメラルドグリーンなど、美しいカスタムバリエーションを切り替えられます。",
    colors_label: "6色以上（定期更新）",
    unlock_title: "Premiumティアで解放",
    unlock_desc: "$20/月〜・カスタムアセット、テーマ、Discord DMプライベートサポート",
    view_plans: "プランを見る",

    // Why Standard section
    why_label: "なぜ$1 / 月なのか",
    why_heading: "なぜ月わずか$1が絶対的な価値なのか",
    why_sub: "1日のダウンロード制限を気にするのをやめて、制限なく探索しましょう。",
    reality_title: "現代のウェブメディアストリームの現実",
    reality_desc: "動画サイトでメディアストリームリンクをタップすると、複数の謎めいたアセットが表示されます。どのリンクが実際の高画質動画なのかは、サイトによって異なります。",
    reality_note_html: "多くの場合、「Unknown HD」と表示されたオプションが正解です。どのソフトウェアも完璧には予測できないため、<strong class=\"text-slate-400\">ユーザーが試行錯誤で発見していきます。</strong>例えば、Pornhubでは再生開始直後にHLSを選ぶのがベストで、TokyoMotionでは「Unknown HD/SD」を選ぶ必要があります。サイトごとの挙動を覚えるのも楽しみのひとつです！",
    free_label: "無料プラン",
    free_title: "1日10ダウンロード制限",
    free_desc: "メディアノードが5つのストリーム候補を提供している場合、2つ間違えると残りのチャンスが少なくなり、不必要なストレスが生じます。",
    free_warning: "正しいトラックを見つけられなければ、翌日まで待つ必要があります",
    std_label: "$1 / 月",
    std_title: "無制限アクセス",
    std_desc: "すべてのストリームリンクをストレスなく自由に試せます。ゼロストレス、最大の利便性、欲しいファイルへの即時アクセス。",
    std_benefit: "すべてをシームレスに試して、正しいファイルパスを確定しましょう",
    why_closing: "たった$1で全ての制限をなくせるのに、なぜ日々の制限にストレスを感じる必要があるでしょうか？",
    compare_label: "標準的な業界価格と比較してみましょう...",
    compare_ai_label: "標準 ChatGPT / Claude Pro プラン",
    compare_yoruno_label: "YorunoBrowser スタンダードプラン",
    compare_desc_html: "月額AIサブスクリプションのわずか<span class=\"text-purple-300 font-bold\">1/20の価格</span>で、強化されたブラウジング体験を。",
    compare_sub: "月額$20のAIツールを使っているなら、このプレミアムレイアウトはその何分の一にもなりません。",
    choose_standard: "Standardプランを選ぶ",

    // Plans section
    plans_label: "料金プラン",
    plans_heading: "あなたのスタイルに合ったプランを選ぼう",
    plans_desc: "無料で1日最大10回のメディアダウンロードを楽しむか、Patreonでサポートして無制限ダウンロードと高度なファイル変換レイアウトを解放しましょう。",
    table_tier: "ティアプラン",
    table_price: "価格",
    table_dl: "メディアダウンロード",
    table_conv: "ファイル変換・再エンコード",
    table_themes: "カスタムテーマ / アイコン",
    table_discord: "Discord VIPアクセス",
    t_free: "無料",
    t_standard: "スタンダード",
    t_pro: "プロ",
    t_premium: "プレミアム",
    t_supporter: "サポーター",
    dl_limited: "10回/日制限",
    dl_unlimited: "無制限",
    conv_unlocked: "解放済み",
    theme_color_icon: "カラー / アイコンカスタマイズ",
    discord_vip: "VIP DMチャンネルサポート",
    note1: "※メディアダウンローダーはストリーミング構造のDRM（デジタル著作権管理）暗号化を回避しません。",
    note2: "※メディア抽出の依存関係は外部サイトのレイアウトに依存し、時間とともに変動する場合があります。",
    note3: "※サブスクリプションはPatreonを通じて安全に処理されます。アプリ内の請求ページで使用状況を確認できます。",

    // Download section
    inst_label: "インストール方法",
    inst_heading: "iOSデバイスにネイティブインストール",
    inst_desc: "YorunoBrowserはGitHub上のオープンソースプロジェクトです。AltStoreや他のiOSパッケージ管理ツールでサイドロードできます。",
    pal_badge: "JP & EU向け推奨",
    pal_title: "AltStore PAL",
    pal_desc: "iOS 17.4以降のサポートされたマーケットプレイスエコシステムのユーザー向け。ワンタップのストア機能でインストール・同期・アップデートをスムーズに行えます。",
    pal_guide_btn: "インストールガイドを見る",
    pal_step1: "1. iOSのSafariで公式AltStore PALマーケットプレイスにアクセスし、登録してストアアプリをインストールしてください。",
    pal_step2: "2. スマホでAltStore PALアプリを開き、YorunoBrowserの公式GitHubリポジトリURLをソースパネルに追加してください。",
    pal_step3: "3. アプリ一覧でYorunoBrowserを見つけ、インストールをタップしてセットアップを完了させてください！",
    pal_cta: "AltStore PAL登録ページを開く",
    srv_badge: "グローバル対応 • PC必要",
    srv_title: "AltServer（AltStore無料版）",
    srv_desc: "WindowsまたはmacOSのデスクトップ環境から、ローカルWi-Fiやテザリング経由で無料・安全にアプリをデプロイできます。",
    srv_guide_btn: "インストールガイドを見る",
    srv_step1: "1. WindowsまたはmacOSにAltServerツールをダウンロードしてインストールしてください。",
    srv_step2: "2. iPhoneをUSBケーブルで接続し、システムメニューバーのAltServerから「Install AltStore」を実行してください。",
    srv_step3: "3. 公式GitHubから最新の安定版IPAをダウンロードし、モバイルでAltStoreを起動して「+」ボタンからインストールしてください。",
    srv_cta: "AltServerをダウンロード（無料）",
    gh_title: "公式GitHubワークスペース",
    gh_desc: "公開エンジニアリングマイルストーン、コード変更、イシュー管理、機能更新ロードマップ（YoruTubeモジュールの追加予定含む）を追跡できます。",
    gh_cta: "公式GitHubリポジトリを開く",

    // Footer
    footer_copy: "© 2026 YorunoBrowser. 夜空の下で開発されました。All rights reserved.",
    footer_patreon: "Patreonでサポート",
    footer_plans: "料金プラン",
    footer_github: "GitHub",
  },
};

const SUPPORTED_LANGS = Object.keys(translations);

// Lang labels shown in the switcher button
const LANG_LABELS = { en: "EN", ja: "JA" };

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = "en";
  const t = translations[lang];
  document.documentElement.lang = lang;
  localStorage.setItem("yoruno_lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const v = t[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("lang-active", btn.dataset.lang === lang);
  });
}

function buildLangSwitcher() {
  const container = document.getElementById("lang-switcher");
  if (!container) return;
  SUPPORTED_LANGS.forEach((lang, i) => {
    if (i > 0) {
      const sep = document.createElement("span");
      sep.textContent = "|";
      sep.className = "text-slate-700 select-none";
      container.appendChild(sep);
    }
    const btn = document.createElement("button");
    btn.textContent = LANG_LABELS[lang] || lang.toUpperCase();
    btn.className = "lang-btn px-2 py-0.5 rounded transition-colors hover:text-white";
    btn.dataset.lang = lang;
    btn.onclick = () => setLanguage(lang);
    container.appendChild(btn);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildLangSwitcher();
  const saved = localStorage.getItem("yoruno_lang");
  const browser = (navigator.language || "en").split("-")[0];
  const lang = SUPPORTED_LANGS.includes(saved) ? saved
             : SUPPORTED_LANGS.includes(browser) ? browser : "en";
  setLanguage(lang);
});
