
/****************************************************************************
 * Peskyfox                                                                 *
 * "Aquila non capit muscas"                                                *
 * priority: remove annoyances                                              *
 * version: 137                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 * credit: Some prefs are reproduced and adapted from the arkenfox project  *
 * credit urL: https://github.com/arkenfox/user.js                          *
 ***************************************************************************/

/****************************************************************************
 * SECTION: MOZILLA UI                                                      *
****************************************************************************/

// PREF: Mozilla VPN
user_pref("browser.privatebrowsing.vpnpromourl", "");

// PREF: disable about:addons' Recommendations pane (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false); // HIDDEN

// PREF: disable recommendations in about:addons' Extensions and Themes panes
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// PREF: Personalized Extension Recommendations in about:addons and AMO
user_pref("browser.discovery.enabled", false);

// PREF: disable Firefox from asking to set as the default browser
user_pref("browser.shell.checkDefaultBrowser", false);

// PREF: disable Extension Recommendations (CFR: "Contextual Feature Recommender")
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// PREF: hide "More from Mozilla" in Settings
user_pref("browser.preferences.moreFromMozilla", false);

// PREF: tab and about:config warnings
user_pref("browser.aboutConfig.showWarning", false);

// PREF: disable welcome notices
user_pref("browser.aboutwelcome.enabled", false); // disable Intro screens

// PREF: new profile switcher
user_pref("browser.profiles.enabled", true);

// PREF: use native title bar buttons [LINUX]
user_pref("widget.gtk.non-native-titlebar-buttons.enabled", true);

/****************************************************************************
 * SECTION: THEME ADJUSTMENTS                                              *
****************************************************************************/

// PREF: enable Firefox to use userChome, userContent, etc.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// PREF: add compact mode back to options
user_pref("browser.compactmode.show", true);

// PREF: preferred color scheme for websites
user_pref("layout.css.prefers-color-scheme.content-override", 0);

/****************************************************************************
 * SECTION: COOKIE BANNER HANDLING                                         *
****************************************************************************/

// PREF: Cookie Banner handling
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

/****************************************************************************
 * SECTION: FULLSCREEN NOTICE                                               *
****************************************************************************/

// PREF: remove fullscreen delay
user_pref("full-screen-api.transition-duration.enter", "0 0"); // default=200 200
user_pref("full-screen-api.transition-duration.leave", "0 0"); // default=200 200

// PREF: disable fullscreen notice
user_pref("full-screen-api.warning.delay", -1); // default=500
user_pref("full-screen-api.warning.timeout", 0); // default=3000

/****************************************************************************
 * SECTION: URL BAR                                                         *
****************************************************************************/

// PREF: minimize URL bar suggestions (bookmarks, history, open tabs)
// Dropdown options in the URL bar:
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", true); // DEFAULT
user_pref("browser.urlbar.suggest.clipboard", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.unitConversion.enabled", true);

// PREF: disable dropdown suggestions with empty query
user_pref("browser.urlbar.suggest.topsites", false);

// PREF: disable urlbar trending search suggestions [FF118+]
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.suggest.trending", false);

// PREF: disable tab-to-search [FF85+]
user_pref("browser.urlbar.suggest.engines", false);

// PREF: Adaptive History Autofill
user_pref("browser.urlbar.autoFill", true); // [DEFAULT]
user_pref("browser.urlbar.autoFill.adaptiveHistory.enabled", false);

/****************************************************************************
 * SECTION: NEW TAB PAGE                                                    *
****************************************************************************/

// PREF: Pinned Shortcuts on New Tab
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Shortcuts > Sponsored shortcuts [FF83+]
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Sponsored Stories [FF58+]  

// PREF: clear default topsites
user_pref("browser.newtabpage.activity-stream.default.sites", "");

/******************************************************************************
 * SECTION: POCKET                                                            *
******************************************************************************/

// PREF: Disable built-in Pocket extension
user_pref("extensions.pocket.enabled", false);

/******************************************************************************
 * SECTION: DOWNLOADS                                 *
******************************************************************************/

// PREF: always ask how to handle new mimetypes [FF101+]
user_pref("browser.download.always_ask_before_handling_new_types", true);

// PREF: disable adding downloads to the system's "recent documents" list 
user_pref("browser.download.manager.addToRecentDocs", false);

/****************************************************************************
 * SECTION: PDF                                                             *
****************************************************************************/

// PREF: open PDFs inline (FF103+)
user_pref("browser.download.open_pdf_attachments_inline", true);

/****************************************************************************
 * SECTION: TAB BEHAVIOR                                                    *
****************************************************************************/

// PREF: determines whether pages normally meant to open in a new window (such as
user_pref("browser.tabs.loadDivertedInBackground", true);

// PREF: restore "View image info" on right-click
user_pref("browser.menu.showViewImageInfo", true);

// PREF: show all matches in Findbar
user_pref("findbar.highlightAll", true);

// PREF: do not select the space next to a word when selecting a word
user_pref("layout.word_select.eat_space_to_next_word", false);

// PREF: controls if a double-click word selection also deletes one adjacent whitespace
user_pref("editor.word_select.delete_space_after_doubleclick_selection", true);

// PREF: do not hide the pointer while typing [LINUX]
user_pref("widget.gtk.hide-pointer-while-typing.enabled", false);

/****************************************************************************
 * SECTION: ACCESSIBILITY AND USABILITY                                     *
 ****************************************************************************/

// PREF: Spell Checker underline styles [HIDDEN]
// [1] https://kb.mozillazine.org/Ui.SpellCheckerUnderlineStyle#Possible_values_and_their_effects
user_pref("ui.SpellCheckerUnderlineStyle", 3);

/****************************************************************************
 * SECTION: BOOKMARK MANAGEMENT                                             *
 ****************************************************************************/

// PREF: limit the number of bookmark backups Firefox keeps
user_pref("browser.bookmarks.max_backups", 5);

/****************************************************************************
 * SECTION: DEVELOPER TOOLS                                                 *
 ****************************************************************************/

// PREF: wrap long lines of text when using source / debugger
user_pref("view_source.wrap_long_lines", true);
user_pref("devtools.debugger.ui.editor-wrapping", true);

/****************************************************************************
 * SECTION: IMAGE AND MEDIA HANDLING                                        *
 ****************************************************************************/

// PREF: JPEG XL image format [NIGHTLY]
user_pref("image.jxl.enabled", true);


/****************************************************************************
 * Securefox                                                                *
 * "Natura non contristatur"                                                *     
 * priority: provide sensible security and privacy                          *
 * version: 137                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 * credit: Most prefs are reproduced and adapted from the arkenfox project  *
 * credit urL: https://github.com/arkenfox/user.js                          *
****************************************************************************/

/****************************************************************************
 * SECTION: TRACKING PROTECTION                                             *
****************************************************************************/

// PREF: Enhanced Tracking Protection (ETP)
user_pref("browser.contentblocking.category", "strict"); // [HIDDEN]

// PREF: State Partitioning [Dynamic First-Party Isolation (dFPI), Total Cookie Protection (TCP)]
user_pref("network.cookie.cookieBehavior.optInPartitioning", true); // [ETP FF132+]

// PREF: SameSite Cookies
user_pref("network.cookie.sameSite.laxByDefault", true);
user_pref("network.cookie.sameSite.noneRequiresSecure", true); // [DEFAULT FF131+]
user_pref("network.cookie.sameSite.schemeful", true);

// PREF: battery status tracking
user_pref("dom.battery.enabled", false);

// PREF: remove temp files opened from non-PB windows with an external application
user_pref("browser.download.start_downloads_in_tmp_dir", true); // [FF102+]
user_pref("browser.helperApps.deleteTempFileOnExit", true);

// PREF: disable UITour backend
user_pref("browser.uitour.enabled", false);

// PREF: Global Privacy Control (GPC) [FF118+]
user_pref("privacy.globalprivacycontrol.enabled", true);

/****************************************************************************
 * SECTION: OSCP & CERTS / HPKP (HTTP Public Key Pinning)                   *
****************************************************************************/

// PREF: disable OCSP fetching to confirm current validity of certificates
user_pref("security.OCSP.enabled", 0);

// PREF: CRLite
user_pref("security.pki.crlite_mode", 2);

/****************************************************************************
 * SECTION: SSL (Secure Sockets Layer) / TLS (Transport Layer Security)    *
****************************************************************************/

// PREF: display warning on the padlock for "broken security"
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// PREF: require safe negotiation
user_pref("security.ssl.require_safe_negotiation", true);

// PREF: display advanced information on Insecure Connection warning pages
user_pref("browser.xul.error_pages.expert_bad_cert", true);

// PREF: disable 0-RTT (round-trip time) to improve TLS 1.3 security [FF51+]
user_pref("security.tls.enable_0rtt_data", false);

/****************************************************************************
 * SECTION: DISK AVOIDANCE                                                  *
****************************************************************************/

// PREF: set media cache in Private Browsing to in-memory
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);

// PREF: minimum interval (in ms) between session save operations
user_pref("browser.sessionstore.interval", 180000); // 1 minute; default=15000 (15s); 900000=15 min; 1800000=30 min

// PREF: store extra session data when crashing or restarting to install updates
user_pref("browser.sessionstore.privacy_level", 2);

// PREF: disable page thumbnails capturing
user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]

/******************************************************************************
 * SECTION: SANITIZE HISTORY                                                  *
******************************************************************************/

// PREF: purge session icon in Private Browsing windows
user_pref("browser.privatebrowsing.resetPBM.enabled", true);

/******************************************************************************
 * SECTION: SHUTDOWN & SANITIZING                                             *
******************************************************************************/

// PREF: set History section to show all options
user_pref("privacy.history.custom", true);

// PREF: clear browsing data on shutdown, while respecting site exceptions
user_pref("privacy.sanitize.sanitizeOnShutdown", true);

// PREF: set Session Restore to clear on shutdown [FF34+]
user_pref("privacy.clearOnShutdown.openWindows", true);

// PREF: sanitize on shutdown: respects allow site exceptions | v2 migration [FF128+]
user_pref("privacy.clearOnShutdown.cookies", true); // Cookies
user_pref("privacy.clearOnShutdown.offlineApps", true); // Site Data
user_pref("privacy.clearOnShutdown.sessions", true);  // Active Logins [DEFAULT]
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true); // Cookies, Site Data, Active Logins [FF128+]

/******************************************************************************
 * SECTION: SEARCH / URL BAR                                                 *
******************************************************************************/

// PREF: trim HTTPS from the URL bar [FF119+]
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);

// PREF: enable seperate search engine for Private Windows
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);

// PREF: enable option to add custom search engine
user_pref("browser.urlbar.update2.engineAliasRefresh", true); // HIDDEN

// PREF: disable live search suggestions (Google, Bing, etc.)
user_pref("browser.search.suggest.enabled", false);

// PREF: disable Firefox Suggest
user_pref("browser.urlbar.quicksuggest.enabled", false); // controls whether the UI is shown
user_pref("browser.urlbar.groupLabels.enabled", false);

// PREF: disable search and form history
user_pref("browser.formfill.enable", false);

// PREF: enforce Punycode for Internationalized Domain Names to eliminate possible spoofing
user_pref("network.IDN_show_punycode", true);

/******************************************************************************
 * SECTION: HTTPS-ONLY MODE                              *
******************************************************************************/

// PREF: enable HTTPS-only Mode
user_pref("dom.security.https_only_mode_pbm", true); // Private Browsing windows only
user_pref("dom.security.https_only_mode", true); // Normal + Private Browsing windows

// PREF: offer suggestion for HTTPS site when available
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

/******************************************************************************
 * SECTION: DNS-over-HTTPS                                                    *
******************************************************************************/

// PREF: lower max attempts to use DoH
user_pref("network.trr.max-fails", 5); // default=15

// PREF: assorted options
user_pref("network.trr.confirmationNS", "skip"); // skip undesired DOH test connection

/******************************************************************************
 * SECTION: PROXY / SOCKS / IPv6                           *
******************************************************************************/

// PREF: disable IPv6
user_pref("network.dns.disableIPv6", true);

// PREF: set the proxy server to do any DNS lookups when using SOCKS
user_pref("network.proxy.socks_remote_dns", true);

// PREF: disable using UNC (Uniform Naming Convention) paths [FF61+]
user_pref("network.file.disable_unc_paths", true); // [HIDDEN PREF]

// PREF: disable GIO as a potential proxy bypass vector
user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF] [DEFAULT FF118+]

// PREF: disable check for proxies
user_pref("network.notify.checkForProxies", false);

/******************************************************************************
 * SECTION: PASSWORDS                                                        *
******************************************************************************/

// PREF: disable formless login capture for Password Manager [FF51+]
user_pref("signon.formlessCapture.enabled", false);

// PREF: disable capturing credentials in private browsing
user_pref("signon.privateBrowsingCapture.enabled", false);

// PREF: disable Firefox built-in password generator
user_pref("signon.generation.enabled", false);

// PREF: disable Firefox Relay
user_pref("signon.firefoxRelay.feature", "");

// PREF: disable websites autocomplete
user_pref("signon.storeWhenAutocompleteOff", false);

// PREF: limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources [FF41+]
user_pref("network.auth.subresource-http-auth-allow", 1);

// PREF: prevent password truncation when submitting form data
user_pref("editor.truncate_user_pastes", false);

/******************************************************************************
 * SECTION: MIXED CONTENT + CROSS-SITE                                       *
******************************************************************************/

// PREF: block insecure passive content (images) on HTTPS pages
user_pref("security.mixed_content.block_display_content", true);

// PREF: allow PDFs to load javascript
user_pref("pdfjs.enableScripting", false);

// PREF: disable middle click on new tab button opening URLs or searches using clipboard [FF115+]
user_pref("browser.tabs.searchclipboardfor.middleclick", false);

/****************************************************************************
 * SECTION: EXTENSIONS                                                      *
****************************************************************************/

// PREF: limit allowed extension directories
user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]

// PREF: skip 3rd party panel when installing recommended addons [FF82+]
user_pref("extensions.postDownloadThirdPartyPrompt", false);

// PREF: disable webextension restrictions on Mozilla domains [FF60+]
user_pref("extensions.webextensions.restrictedDomains", "");

/******************************************************************************
 * SECTION: HEADERS / REFERERS                                               *
******************************************************************************/

// PREF: control the amount of cross-origin information to send
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/******************************************************************************
 * SECTION: CONTAINERS                                                       *
******************************************************************************/

// PREF: enable Container Tabs and its UI setting [FF50+]
user_pref("privacy.userContext.ui.enabled", true);

/******************************************************************************
 * SECTION: SAFE BROWSING (SB)                                               *
******************************************************************************/

// PREF: disable SB checks for downloads (remote)
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/******************************************************************************
 * SECTION: MOZILLA                                                   *
******************************************************************************/

// PREF: default permission for Web Notifications
user_pref("permissions.default.desktop-notification", 2);
   
// PREF: default permission for Location Requests
user_pref("permissions.default.geo", 2);

// PREF: use alternative geolocation service instead of Google
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");

// PREF: disable using the OS's geolocation service
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]

// PREF: disable search engine updates (e.g. OpenSearch)
user_pref("browser.search.update", false);

// PREF: remove special permissions for certain mozilla domains [FF35+]
user_pref("permissions.manager.defaultsUrl", "");

/******************************************************************************
 * SECTION: TELEMETRY                                                   *
******************************************************************************/

// PREF: disable new data submission [FF41+]
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// PREF: disable Health Reports
user_pref("datareporting.healthreport.uploadEnabled", false);

// PREF: disable telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);

// PREF: disable Telemetry Coverage
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");

// PREF: disable Firefox Home (Activity Stream) telemetry 
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/******************************************************************************
 * SECTION: EXPERIMENTS                                                      *
******************************************************************************/

// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to install and run studies
user_pref("app.shield.optoutstudies.enabled", false);

// PREF: disable Normandy/Shield [FF60+]
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/******************************************************************************
 * SECTION: CRASH REPORTS                                                    *
******************************************************************************/

// PREF: disable crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

/******************************************************************************
 * SECTION: DETECTION                                                        *
******************************************************************************/

// PREF: disable Captive Portal detection
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);

// PREF: disable Network Connectivity checks
user_pref("network.connectivity-service.enabled", false);
