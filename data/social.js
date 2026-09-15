/* =========================================================
   SalimGPT
   File: data/social.js
   Purpose: Official Social Platform Configuration
   ---------------------------------------------------------
   IMPORTANT:
   - Real profile URLs are intentionally left blank.
   - Add only verified official SalimGPT profile URLs.
   - Do not invent usernames or links.
   ========================================================= */

(function () {
  "use strict";


  /* =======================================================
     01. SOCIAL DATA
     ======================================================= */

  const socialPlatforms = [


    /* =====================================================
       YOUTUBE
       ===================================================== */

    {
      id: "youtube",

      name:
        "YouTube",

      label:
        "SalimGPT on YouTube",

      description:
        "Watch SalimGPT's main research-based English documentaries, new releases, and full-length videos.",

      url: "",

      username: "",

      icon:
        "../assets/social/youtube.svg",

      brandColor:
        "#ff0000",

      type:
        "video",

      primary:
        true,

      order:
        1,

      status:
        "active"
    },


    /* =====================================================
       FACEBOOK
       ===================================================== */

    {
      id: "facebook",

      name:
        "Facebook",

      label:
        "SalimGPT on Facebook",

      description:
        "Follow SalimGPT documentary updates, selected videos, visual posts, and information about new releases.",

      url: "",

      username: "",

      icon:
        "../assets/social/facebook.svg",

      brandColor:
        "#1877f2",

      type:
        "social",

      primary:
        true,

      order:
        2,

      status:
        "active"
    },


    /* =====================================================
       INSTAGRAM
       ===================================================== */

    {
      id: "instagram",

      name:
        "Instagram",

      label:
        "SalimGPT on Instagram",

      description:
        "Explore SalimGPT visual storytelling, documentary highlights, short-form content, and creative updates.",

      url: "",

      username: "",

      icon:
        "../assets/social/instagram.svg",

      brandColor:
        "#e4405f",

      type:
        "social",

      primary:
        true,

      order:
        3,

      status:
        "active"
    },


    /* =====================================================
       THREADS
       ===================================================== */

    {
      id: "threads",

      name:
        "Threads",

      label:
        "SalimGPT on Threads",

      description:
        "Follow short updates about research, documentary topics, new work, and SalimGPT developments.",

      url: "",

      username: "",

      icon:
        "../assets/social/threads.svg",

      brandColor:
        "#111111",

      type:
        "social",

      primary:
        false,

      order:
        4,

      status:
        "active"
    },


    /* =====================================================
       TIKTOK
       ===================================================== */

    {
      id: "tiktok",

      name:
        "TikTok",

      label:
        "SalimGPT on TikTok",

      description:
        "Watch SalimGPT short documentary clips, concise explanations, and selected visual content.",

      url: "",

      username: "",

      icon:
        "../assets/social/tiktok.svg",

      brandColor:
        "#111111",

      type:
        "short-video",

      primary:
        true,

      order:
        5,

      status:
        "active"
    }

  ];


  /* =======================================================
     02. SOCIAL PAGE CONFIGURATION
     ======================================================= */

  const socialConfig = {

    title:
      "Social Network",

    subtitle:
      "Official SalimGPT Platforms",

    description:
      "Follow SalimGPT's research-based documentaries, new releases, visual storytelling, and important updates across social platforms.",

    banner:
      "../assets/social/social-banner.webp",

    warning:
      "Follow only official profiles and links confirmed by SalimGPT.",

    verificationNote:
      "Before adding any link here, it should be verified as an official SalimGPT account.",

    externalLinkTarget:
      "_blank",

    externalLinkRel:
      "noopener noreferrer"
  };


  /* =======================================================
     03. HELPERS
     ======================================================= */

  function cleanText(value) {
    if (
      value === undefined ||
      value === null
    ) {
      return "";
    }

    return String(value).trim();
  }


  function hasValidUrl(value) {
    const url =
      cleanText(value);


    if (!url) {
      return false;
    }


    try {
      const parsed =
        new URL(url);


      return (
        parsed.protocol === "https:" ||
        parsed.protocol === "http:"
      );

    } catch (error) {
      return false;
    }
  }


  function getPlatformById(id) {
    const normalizedId =
      cleanText(id)
        .toLowerCase();


    return (
      socialPlatforms.find(
        (platform) =>
          platform.id === normalizedId
      ) || null
    );
  }


  function getActivePlatforms() {
    return socialPlatforms
      .filter(
        (platform) =>
          platform.status === "active"
      )
      .sort(
        (a, b) =>
          a.order - b.order
      );
  }


  function getLinkedPlatforms() {
    return getActivePlatforms()
      .filter(
        (platform) =>
          hasValidUrl(platform.url)
      );
  }


  function getPrimaryPlatforms() {
    return getActivePlatforms()
      .filter(
        (platform) =>
          platform.primary === true
      );
  }


  /* =======================================================
     04. FREEZE DATA
     ======================================================= */

  function deepFreeze(value) {
    if (
      !value ||
      typeof value !== "object" ||
      Object.isFrozen(value)
    ) {
      return value;
    }


    Object.keys(value).forEach(
      (key) => {
        deepFreeze(
          value[key]
        );
      }
    );


    return Object.freeze(value);
  }


  /* =======================================================
     05. GLOBAL EXPORT
     ======================================================= */

  window.SALIMGPT_SOCIAL =
    deepFreeze({
      config:
        socialConfig,

      platforms:
        socialPlatforms
    });


  /*
    Compatibility alias.
  */

  window.salimgptSocial =
    window.SALIMGPT_SOCIAL;


  /* =======================================================
     06. PUBLIC HELPERS
     ======================================================= */

  window.SALIMGPT_SOCIAL_HELPERS =
    Object.freeze({

      getPlatformById,

      getActivePlatforms,

      getLinkedPlatforms,

      getPrimaryPlatforms,

      hasValidUrl

    });


  /* =======================================================
     07. READY EVENT
     ======================================================= */

  document.dispatchEvent(
    new CustomEvent(
      "salimgpt:socialDataReady",
      {
        detail: {
          social:
            window.SALIMGPT_SOCIAL,

          activeCount:
            getActivePlatforms().length,

          linkedCount:
            getLinkedPlatforms().length
        }
      }
    )
  );

})();