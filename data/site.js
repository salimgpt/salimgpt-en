/* =========================================================
   SalimGPT
   File: data/site.js
   Purpose: Central Site / Brand Configuration
   ========================================================= */

(function () {
  "use strict";


  /* =======================================================
     01. SITE CONFIGURATION
     ======================================================= */

  const site = {

    /* -----------------------------------------------------
       Brand
       ----------------------------------------------------- */

    brand: {
      name: "SalimGPT",
      nameFirst: "Salim",
      nameAccent: "GPT",

      tagline:
        "From research to stories, from stories to knowledge.",

      englishTagline:
        "Research-Based Documentary Media",

      type:
        "Research-Based English Documentary Media",

      shortDescription:
        "English documentary media built through research, fact-checking, context, and original presentation.",

      fullDescription:
        "SalimGPT is an independent research-based English documentary media initiative that explains history, society, science, technology, human civilization, mysteries, and important contemporary topics through research, fact-checking, original scripts, and distinctive visual presentation."
    },


    /* -----------------------------------------------------
       Founder / Director
       ----------------------------------------------------- */

    founder: {
      name:
        "Mohammad Salim",

      role:
        "Founder & Director",

      roleBn:
        "Founder & Director",

      responsibilities: [
        "Topic selection",
        "Research",
        "Fact-checking",
        "Script development",
        "Editorial interpretation",
        "Visual planning",
        "AI-assisted visual production",
        "Video editing",
        "Final review",
        "Publication"
      ]
    },


    /* -----------------------------------------------------
       Project / Launch
       ----------------------------------------------------- */

    project: {
      launchDate:
        "2025-12-02",

      launchDateBn:
        "December 2, 2025",

      language:
        "en-US",

      visibleLanguage:
        "English",

      country:
        "Bangladesh",

      projectSlug:
        "salimgpt-en",

      productionUrl:
        ""
    },


    /* -----------------------------------------------------
       Documentary Scope
       ----------------------------------------------------- */

    documentary: {
      primaryLanguage:
        "English",

      topics: [
        "History",
        "Society",
        "Science",
        "Technology",
        "Human Civilization",
        "Mystery",
        "Investigative Topics",
        "Historical and Social Events"
      ],

      productionModel:
        "Human-led, AI-assisted",

      writtenArchive:
        true,

      youtubeEmbedByDefault:
        false,

      youtubeThumbnailFromVideoId:
        true
    },


    /* -----------------------------------------------------
       Research Principles
       ----------------------------------------------------- */

    research: {
      principles: [
        "Do not determine the final conclusion before completing the research",
        "Cross-check important information with multiple sources whenever possible",
        "Treat information gathering and fact-checking as separate stages",
        "Verify dates, timelines, and historical context",
        "Maintain a clear distinction between factual information and editorial interpretation",
        "Make corrections when necessary if new and stronger evidence becomes available"
      ],

      possibleSourceTypes: [
        "Books",
        "Research papers",
        "Government documents",
        "Institutional documents",
        "International reports",
        "Historical archives",
        "Reliable news reports",
        "Relevant web sources"
      ]
    },


    /* -----------------------------------------------------
       Originality
       ----------------------------------------------------- */

    originality: {
      statement:
        "SalimGPT does not copy another creator's video, audio, script, or complete creative presentation verbatim and publish it as its own work.",

      script:
        "After understanding and comparing information found through research and determining the necessary context, scripts are created in original language and narrative structure.",

      video:
        "Republishing another creator's complete video or sequence of scenes verbatim is not part of SalimGPT's production model.",

      audio:
        "Another person's narration or voice recording is not directly used as SalimGPT's own narration.",

      editing:
        "The pacing, scene progression, visual rhythm, and overall presentation of each documentary are created according to SalimGPT's own creative direction."
    },


    /* -----------------------------------------------------
       AI Policy Summary
       ----------------------------------------------------- */

    ai: {
      model:
        "Human-led, AI-assisted",

      finalEditorialControl:
        "Human",

      visuals:
        true,

      syntheticVoice:
        true,

      researchAssistance:
        true,

      writingAssistance:
        true,

      finalReviewByHuman:
        true,

      visualStatement:
        "AI-generated or AI-assisted images, illustrative scenes, and contextually relevant visuals may be created, modified, or edited when necessary.",

      voiceStatement:
        "AI-generated or synthetic voice may be used for documentary narration.",

      editorialStatement:
        "AI is a production and research-assistance tool; final editorial decisions about which information is accepted, how it is interpreted, and what is published remain human decisions."
    },


    /* -----------------------------------------------------
       Visual / Footage Principles
       ----------------------------------------------------- */

    visualMedia: {
      possibleTypes: [
        "Original visuals",
        "AI-generated visuals",
        "AI-assisted visuals",
        "Public-domain material",
        "Licensed material",
        "Lawfully usable archival material",
        "Explanatory graphics",
        "Maps",
        "Illustrative reconstruction"
      ],

      transformation:
        "Visual material may be adapted to the documentary narrative through cropping, framing, timing, composition, movement, visual treatment, and editing when necessary.",

      illustrativeUse:
        "Where direct real-world footage is unavailable, illustrative or conceptual visuals may be used to help audiences understand the subject.",

      transparency:
        "AI-generated or illustrative visuals should not be misleadingly presented as genuine archival camera footage when they are not."
    },


    /* -----------------------------------------------------
       Editorial Principles
       ----------------------------------------------------- */

    editorial: {
      principles: [
        "Evidence-led explanation",
        "Context before conclusion",
        "Independent editorial judgment",
        "Clear distinction between fact and interpretation",
        "Human final review",
        "Correction when necessary"
      ],

      neutralityStatement:
        "Editorial neutrality does not mean artificially giving equal weight to every claim; it means presenting a subject according to the available evidence, sources, and context.",

      editorialQuote:
        "Let the information go where the evidence leads."
    },


    /* -----------------------------------------------------
       Trust / Correction
       ----------------------------------------------------- */

    trust: {
      infallibilityClaim:
        false,

      correctionPolicy:
        "SalimGPT does not claim to be free from error. If important information is shown to be incorrect, corrections may be made when necessary.",

      misinformationPolicy:
        "Knowingly publishing false or misleading information is not part of SalimGPT's editorial policy."
    },


    /* -----------------------------------------------------
       Brand Independence
       ----------------------------------------------------- */

    independence: {
      independent:
        true,

      openAIAffiliation:
        false,

      disclaimer:
        "SalimGPT is an independent documentary media initiative. Although its name includes “GPT,” it is not an official product, service, approved media organization, affiliate, or partner of OpenAI or ChatGPT."
    },


    /* -----------------------------------------------------
       Legal / Copyright Summary
       ----------------------------------------------------- */

    legal: {
      copyrightOwner:
        "SalimGPT",

      director:
        "Mohammad Salim",

      reuploadPermission:
        false,

      fullScriptCopyPermission:
        false,

      fullVideoCopyPermission:
        false,

      attributionRequiredWhenApplicable:
        true
    },


    /* -----------------------------------------------------
       Local Asset Paths
       Paths are relative to project root.
       ----------------------------------------------------- */

    assets: {
      logo:
        "assets/brand/logo.svg",

      wordmark:
        "assets/brand/wordmark.svg",

      banner:
        "assets/brand/banner.webp",

      defaultOg:
        "assets/brand/default-og.webp",

      favicon:
        "favicon.svg",

      manifest:
        "manifest.webmanifest"
    },


    /* -----------------------------------------------------
       Internal Page Paths
       Root-relative inside the project structure.
       Consumers should resolve these from the page depth.
       ----------------------------------------------------- */

    pages: {
      home:
        "",

      about:
        "about/",

      director:
        "director/",

      originality:
        "originality/",

      productionProcess:
        "production-process/",

      studio:
        "studio/",

      visualMedia:
        "visual-media/",

      factChecking:
        "fact-checking/",

      aiPolicy:
        "ai-policy/",

      editorialPolicy:
        "editorial-policy/",

      ownershipCopyright:
        "ownership-copyright/",

      contentUse:
        "content-use/",

      faq:
        "faq/",

      social:
        "social/",

      contact:
        "contact/",

      privacy:
        "legal/privacy/",

      terms:
        "legal/terms/",

      disclaimer:
        "legal/disclaimer/"
    },


    /* -----------------------------------------------------
       Social Platforms
       Actual profile URLs will be added only after
       official URLs are supplied.
       ----------------------------------------------------- */

    socialPlatforms: [
      {
        id: "youtube",
        name: "YouTube",
        url: ""
      },
      {
        id: "facebook",
        name: "Facebook",
        url: ""
      },
      {
        id: "instagram",
        name: "Instagram",
        url: ""
      },
      {
        id: "threads",
        name: "Threads",
        url: ""
      },
      {
        id: "tiktok",
        name: "TikTok",
        url: ""
      }
    ]

  };


  /* =======================================================
     02. FREEZE CONFIG
     ======================================================= */

  function deepFreeze(object) {
    if (
      !object ||
      typeof object !== "object" ||
      Object.isFrozen(object)
    ) {
      return object;
    }


    Object.keys(object).forEach(
      (key) => {
        deepFreeze(
          object[key]
        );
      }
    );


    return Object.freeze(object);
  }


  /* =======================================================
     03. GLOBAL EXPORT
     ======================================================= */

  window.SALIMGPT_SITE =
    deepFreeze(site);


  /*
    Lightweight alias for future scripts.
  */

  window.salimgptSite =
    window.SALIMGPT_SITE;


  /* =======================================================
     04. READY EVENT
     ======================================================= */

  document.dispatchEvent(
    new CustomEvent(
      "salimgpt:siteDataReady",
      {
        detail: {
          site:
            window.SALIMGPT_SITE
        }
      }
    )
  );

})();
