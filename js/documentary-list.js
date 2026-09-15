/* =========================================================
   SalimGPT
   File: js/documentary-list.js
   Purpose: Automatic Homepage Documentary Listing
   ---------------------------------------------------------
   AUTOMATION RULES:

   1. Documentary data comes from the generated data file.
   2. The homepage updates automatically when a new
      documentary is added.
   3. The newest documentary appears first.
   4. The thumbnail primarily uses the real YouTube thumbnail.
   5. Clicking the thumbnail opens the documentary article.
   6. YouTube has a separate button.
   7. No fake YouTube ID or URL is generated.
   8. If the YouTube thumbnail fails, hqdefault is tried first,
      followed by the uploaded local documentary image.
   9. Local documentary image fallback support:
      JPG / JPEG / PNG / WebP
   10. Homepage icons are self-contained and size-safe.
   ========================================================= */

(function () {
  "use strict";


  /* =======================================================
     01. ELEMENTS
     ======================================================= */

  const documentaryGrid =
    document.getElementById("documentaryGrid");

  const documentaryCount =
    document.getElementById("documentaryCount");

  const searchEmptyState =
    document.getElementById("searchEmptyState");


  /*
    Prevent errors if this script is loaded
    on a page other than the homepage.
  */

  if (!documentaryGrid) {
    return;
  }


  /* =======================================================
     02. CONSTANTS
     ======================================================= */

  const YOUTUBE_IMAGE_BASE =
    "https://i.ytimg.com/vi/";

  const YOUTUBE_WATCH_BASE =
    "https://www.youtube.com/watch?v=";


  /*
    Keep the same priority as the image formats
    supported by build.js.
  */

  const LOCAL_IMAGE_EXTENSIONS = [
    "jpg",
    "jpeg",
    "png",
    "webp"
  ];


  /* =======================================================
     03. BASIC HELPERS
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


  function escapeHTML(value) {

    return cleanText(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function formatNumber(value) {

    const number =
      Number(value);


    if (
      Number.isNaN(number)
    ) {
      return String(value);
    }


    try {

      return new Intl.NumberFormat(
        "en-US"
      ).format(number);

    } catch (error) {

      return String(value);
    }
  }


  /* =======================================================
     04. READ GENERATED DOCUMENTARY DATA
     ======================================================= */

  function getDocumentaryData() {

    /*
      Primary generated source:

      window.SALIMGPT_DOCUMENTARIES

      Legacy fallbacks are retained.
    */

    const possibleSources = [
      window.SALIMGPT_DOCUMENTARIES,
      window.salimgptDocumentaries,
      window.documentaries
    ];


    for (
      const source of possibleSources
    ) {

      if (
        Array.isArray(source)
      ) {
        return source;
      }
    }


    return [];
  }


  /* =======================================================
     05. YOUTUBE ID EXTRACTION
     ======================================================= */

  function extractYouTubeId(value) {

    const input =
      cleanText(value);


    if (!input) {
      return "";
    }


    /*
      Direct YouTube video ID.
    */

    if (
      /^[A-Za-z0-9_-]{11}$/.test(
        input
      )
    ) {
      return input;
    }


    try {

      const url =
        new URL(input);


      const hostname =
        url.hostname
          .replace(/^www\./, "")
          .toLowerCase();


      /*
        youtu.be/VIDEO_ID
      */

      if (
        hostname === "youtu.be"
      ) {

        const id =
          url.pathname
            .split("/")
            .filter(Boolean)[0] || "";


        return /^[A-Za-z0-9_-]{11}$/.test(
          id
        )
          ? id
          : "";
      }


      /*
        youtube.com formats
      */

      if (
        hostname === "youtube.com" ||
        hostname === "m.youtube.com" ||
        hostname === "music.youtube.com"
      ) {

        const watchId =
          url.searchParams.get("v");


        if (
          watchId &&
          /^[A-Za-z0-9_-]{11}$/.test(
            watchId
          )
        ) {
          return watchId;
        }


        const parts =
          url.pathname
            .split("/")
            .filter(Boolean);


        const type =
          parts[0];

        const id =
          parts[1];


        if (
          ["shorts", "embed", "live"]
            .includes(type) &&
          id &&
          /^[A-Za-z0-9_-]{11}$/.test(
            id
          )
        ) {
          return id;
        }
      }

    } catch (error) {

      const match =
        input.match(
          /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/|live\/))([A-Za-z0-9_-]{11})/
        );


      if (
        match &&
        match[1]
      ) {
        return match[1];
      }
    }


    return "";
  }


  /* =======================================================
     06. DOCUMENTARY FIELD HELPERS
     ======================================================= */

  function getTitle(item) {

    return cleanText(
      item.title ||
      item.name ||
      ""
    );
  }


  function getDescription(item) {

    return cleanText(
      item.description ||
      item.excerpt ||
      item.summary ||
      ""
    );
  }


  function getSlug(item) {

    return cleanText(
      item.slug ||
      ""
    )
      .replace(/^\/+/, "")
      .replace(/\/+$/, "");
  }


  function getDate(item) {

    return cleanText(
      item.date ||
      item.publishedAt ||
      item.publishDate ||
      ""
    );
  }


  function getYouTubeId(item) {

    return extractYouTubeId(
      item.youtubeId ||
      item.videoId ||
      item.youtube ||
      item.youtubeUrl ||
      item.videoUrl ||
      ""
    );
  }


  function getYouTubeUrl(item) {

    const explicitUrl =
      cleanText(
        item.youtubeUrl ||
        item.videoUrl ||
        item.youtube ||
        ""
      );


    /*
      Use the explicit URL when it contains
      a valid real YouTube video ID.
    */

    if (
      explicitUrl &&
      extractYouTubeId(
        explicitUrl
      )
    ) {
      return explicitUrl;
    }


    const videoId =
      getYouTubeId(item);


    if (!videoId) {
      return "";
    }


    return (
      `${YOUTUBE_WATCH_BASE}${videoId}`
    );
  }


  function getArticleUrl(item) {

    const explicitUrl =
      cleanText(
        item.articleUrl ||
        item.article ||
        item.path ||
        item.url ||
        ""
      );


    if (explicitUrl) {
      return explicitUrl;
    }


    const slug =
      getSlug(item);


    if (!slug) {
      return "";
    }


    return (
      `documentaries/${encodeURIComponent(slug)}/`
    );
  }


  /* =======================================================
     07. THUMBNAIL HELPERS
     ======================================================= */

  function getExplicitThumbnail(item) {

    return cleanText(
      item.thumbnail ||
      item.thumbnailUrl ||
      ""
    );
  }


  function getYouTubeMaxres(item) {

    const videoId =
      getYouTubeId(item);


    if (!videoId) {
      return "";
    }


    return (
      `${YOUTUBE_IMAGE_BASE}` +
      `${videoId}/maxresdefault.jpg`
    );
  }


  function getYouTubeHQ(item) {

    const videoId =
      getYouTubeId(item);


    if (!videoId) {
      return "";
    }


    return (
      `${YOUTUBE_IMAGE_BASE}` +
      `${videoId}/hqdefault.jpg`
    );
  }


  /*
    Possible local thumbnail URLs.

    Priority:
    .jpg
    .jpeg
    .png
    .webp
  */

  function getLocalThumbnailCandidates(
    item
  ) {

    const slug =
      getSlug(item);


    if (!slug) {
      return [];
    }


    return LOCAL_IMAGE_EXTENSIONS.map(
      (extension) => {

        return (
          `assets/documentaries/` +
          `${encodeURIComponent(slug)}/` +
          `${encodeURIComponent(slug)}-1.` +
          `${extension}`
        );

      }
    );
  }


  function getLocalThumbnail(item) {

    const candidates =
      getLocalThumbnailCandidates(
        item
      );


    return (
      candidates[0] ||
      ""
    );
  }


  function getPrimaryThumbnail(item) {

    /*
      Priority:

      1. build.js generated thumbnail
      2. Real YouTube maxres thumbnail
      3. Local documentary image
    */

    const explicitThumbnail =
      getExplicitThumbnail(item);


    if (
      explicitThumbnail
    ) {
      return explicitThumbnail;
    }


    const youtubeThumbnail =
      getYouTubeMaxres(item);


    if (
      youtubeThumbnail
    ) {
      return youtubeThumbnail;
    }


    return (
      getLocalThumbnail(item)
    );
  }


  /* =======================================================
     08. DATE HANDLING
     ======================================================= */

  function parseDate(value) {

    const input =
      cleanText(value);


    if (!input) {
      return 0;
    }


    const timestamp =
      Date.parse(input);


    return Number.isNaN(
      timestamp
    )
      ? 0
      : timestamp;
  }


  function formatDate(value) {

    const input =
      cleanText(value);


    if (!input) {
      return "";
    }


    const timestamp =
      parseDate(input);


    if (!timestamp) {
      return input;
    }


    const date =
      new Date(timestamp);


    try {

      return new Intl.DateTimeFormat(
        "en-US",
        {
          day:
            "numeric",

          month:
            "long",

          year:
            "numeric",

          timeZone:
            "UTC"
        }
      ).format(date);

    } catch (error) {

      return input;
    }
  }


  /* =======================================================
     09. SORT — NEWEST FIRST
     ======================================================= */

  function sortDocumentaries(items) {

    return [...items].sort(
      (a, b) => {

        const dateA =
          parseDate(
            getDate(a)
          );

        const dateB =
          parseDate(
            getDate(b)
          );


        /*
          Newest publication first.
        */

        if (
          dateA !== dateB
        ) {

          return (
            dateB - dateA
          );
        }


        /*
          If dates are identical,
          use generated order.
        */

        const orderA =
          Number(
            a.order || 0
          );

        const orderB =
          Number(
            b.order || 0
          );


        return (
          orderB - orderA
        );
      }
    );
  }


  /* =======================================================
     10. SAFE SELF-CONTAINED ICONS
     ======================================================= */

  /*
    IMPORTANT:

    SVG width, height, fill, and stroke
    are defined directly here.

    This prevents the browser from falling back
    to the default 300 × 150 SVG size
    if CSS fails to load or is affected by cache.

    This prevents the giant black icon problem.
  */

  const icons = {

    article: `
      <svg
        class="documentary-action-icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        focusable="false"
        style="
          width:18px;
          height:18px;
          min-width:18px;
          max-width:18px;
          min-height:18px;
          max-height:18px;
          flex:0 0 18px;
          display:block;
          fill:none;
          stroke:currentColor;
        "
      >
        <path
          d="M6 3.75h8.2L18 7.55v12.7H6z"
          fill="none"
          stroke="currentColor"
        ></path>

        <path
          d="M14 3.75V8h4"
          fill="none"
          stroke="currentColor"
        ></path>

        <path
          d="M9 12h6M9 15.5h5"
          fill="none"
          stroke="currentColor"
        ></path>
      </svg>
    `,


    youtube: `
      <svg
        class="documentary-action-icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        focusable="false"
        style="
          width:18px;
          height:18px;
          min-width:18px;
          max-width:18px;
          min-height:18px;
          max-height:18px;
          flex:0 0 18px;
          display:block;
          fill:none;
          stroke:currentColor;
        "
      >
        <rect
          x="3.5"
          y="6"
          width="17"
          height="12"
          rx="3.5"
          fill="none"
          stroke="currentColor"
        ></rect>

        <path
          d="M10 9.25 15 12l-5 2.75z"
          fill="none"
          stroke="currentColor"
        ></path>
      </svg>
    `,


    calendar: `
      <svg
        class="documentary-calendar-icon"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        focusable="false"
        style="
          width:16px;
          height:16px;
          min-width:16px;
          max-width:16px;
          min-height:16px;
          max-height:16px;
          flex:0 0 16px;
          display:block;
          fill:none;
          stroke:currentColor;
        "
      >
        <rect
          x="4"
          y="5.5"
          width="16"
          height="14.5"
          rx="2.5"
          fill="none"
          stroke="currentColor"
        ></rect>

        <path
          d="M8 3.5v4M16 3.5v4M4 10h16"
          fill="none"
          stroke="currentColor"
        ></path>
      </svg>
    `

  };


  /* =======================================================
     11. BUILD THUMBNAIL
     ======================================================= */

  function createThumbnailMarkup(item) {

    const title =
      getTitle(item);

    const articleUrl =
      getArticleUrl(item);

    const primaryThumbnail =
      getPrimaryThumbnail(item);

    const youtubeHQ =
      getYouTubeHQ(item);

    const localThumbnails =
      getLocalThumbnailCandidates(
        item
      );


    const encodedLocalFallbacks =
      encodeURIComponent(
        JSON.stringify(
          localThumbnails
        )
      );


    const imageMarkup = `
      <img
        class="documentary-thumbnail-image"
        src="${escapeHTML(primaryThumbnail)}"
        alt="Thumbnail for the ${escapeHTML(title)} documentary"
        loading="lazy"
        decoding="async"
        ${
          youtubeHQ
            ? `data-youtube-fallback="${escapeHTML(youtubeHQ)}"`
            : ""
        }
        ${
          localThumbnails.length
            ? `data-local-fallbacks="${escapeHTML(encodedLocalFallbacks)}"`
            : ""
        }
      >
    `;


    /*
      Use a non-clickable image
      if there is no article URL.
    */

    if (!articleUrl) {

      return `
        <div
          class="documentary-thumb documentary-thumbnail"
        >

          ${imageMarkup}

        </div>
      `;
    }


    /*
      Thumbnail click opens
      the documentary article.
    */

    return `
      <a
        class="documentary-thumb documentary-thumbnail"
        href="${escapeHTML(articleUrl)}"
        aria-label="Read the full ${escapeHTML(title)} documentary"
      >

        ${imageMarkup}

        <span
          class="documentary-thumb-label"
          aria-hidden="true"
        >
          Full Documentary
        </span>

      </a>
    `;
  }


  /* =======================================================
     12. BUILD BUTTONS
     ======================================================= */

  function createButtonsMarkup(item) {

    const articleUrl =
      getArticleUrl(item);

    const youtubeUrl =
      getYouTubeUrl(item);


    let markup =
      "";


    /*
      Primary action:
      Full documentary article.
    */

    if (
      articleUrl
    ) {

      markup += `
        <a
          class="documentary-button read read-documentary"
          href="${escapeHTML(articleUrl)}"
        >

          ${icons.article}

          <span>
            Read Full Documentary
          </span>

        </a>
      `;
    }


    /*
      Secondary action:
      Real YouTube URL only.
    */

    if (
      youtubeUrl
    ) {

      markup += `
        <a
          class="documentary-button watch watch-documentary"
          href="${escapeHTML(youtubeUrl)}"
          target="_blank"
          rel="noopener noreferrer"
        >

          ${icons.youtube}

          <span>
            Watch on YouTube
          </span>

        </a>
      `;
    }


    if (
      !markup
    ) {
      return "";
    }


    return `
      <div class="documentary-actions">
        ${markup}
      </div>
    `;
  }


  /* =======================================================
     13. CREATE DOCUMENTARY CARD
     ======================================================= */

  function createDocumentaryCard(
    item,
    index
  ) {

    const title =
      getTitle(item);

    const description =
      getDescription(item);

    const date =
      getDate(item);

    const formattedDate =
      formatDate(date);

    const slug =
      getSlug(item);

    const youtubeId =
      getYouTubeId(item);

    const articleUrl =
      getArticleUrl(item);


    const article =
      document.createElement(
        "article"
      );


    article.className =
      "documentary-card";


    article.setAttribute(
      "data-documentary-card",
      ""
    );


    article.dataset.title =
      title;

    article.dataset.description =
      description;

    article.dataset.searchText =
      `${title} ${description}`.trim();


    if (
      slug
    ) {

      article.dataset.slug =
        slug;
    }


    if (
      date
    ) {

      article.dataset.date =
        date;
    }


    if (
      youtubeId
    ) {

      article.dataset.youtubeId =
        youtubeId;
    }


    if (
      articleUrl
    ) {

      article.dataset.articleUrl =
        articleUrl;
    }


    article.style.setProperty(
      "--card-index",
      String(index)
    );


    const dateMarkup =
      formattedDate
        ? `
          <div class="documentary-meta">

            <span class="documentary-date">

              ${icons.calendar}

              <time datetime="${escapeHTML(date)}">
                ${escapeHTML(formattedDate)}
              </time>

            </span>

          </div>
        `
        : "";


    const descriptionMarkup =
      description
        ? `
          <p
            class="documentary-description documentary-excerpt"
          >
            ${escapeHTML(description)}
          </p>
        `
        : "";


    article.innerHTML = `

      ${createThumbnailMarkup(item)}

      <div
        class="documentary-card-content documentary-content"
      >

        ${dateMarkup}

        ${
          articleUrl
            ? `
              <h2 class="documentary-title">
                <a href="${escapeHTML(articleUrl)}">
                  ${escapeHTML(title)}
                </a>
              </h2>
            `
            : `
              <h2 class="documentary-title">
                ${escapeHTML(title)}
              </h2>
            `
        }

        ${descriptionMarkup}

        ${createButtonsMarkup(item)}

      </div>
    `;


    return article;
  }


  /* =======================================================
     14. LOCAL FALLBACK HELPERS
     ======================================================= */

  function readLocalFallbacks(
    image
  ) {

    const encoded =
      cleanText(
        image.dataset.localFallbacks
      );


    if (
      !encoded
    ) {
      return [];
    }


    try {

      const decoded =
        decodeURIComponent(
          encoded
        );


      const parsed =
        JSON.parse(
          decoded
        );


      if (
        !Array.isArray(parsed)
      ) {
        return [];
      }


      return parsed
        .map(cleanText)
        .filter(Boolean);

    } catch (error) {

      return [];
    }
  }


  function resolveUrl(value) {

    const input =
      cleanText(value);


    if (
      !input
    ) {
      return "";
    }


    try {

      return new URL(
        input,
        document.baseURI
      ).href;

    } catch (error) {

      return input;
    }
  }


  function useNextLocalFallback(
    image
  ) {

    const fallbacks =
      readLocalFallbacks(
        image
      );


    if (
      !fallbacks.length
    ) {
      return false;
    }


    let index =
      Number(
        image.dataset.localFallbackIndex ||
        0
      );


    const currentUrl =
      resolveUrl(
        image.src
      );


    while (
      index <
      fallbacks.length
    ) {

      const candidate =
        fallbacks[index];


      index += 1;


      /*
        Continue from this position
        on the next error event.
      */

      image.dataset.localFallbackIndex =
        String(index);


      if (
        !candidate
      ) {
        continue;
      }


      const candidateUrl =
        resolveUrl(
          candidate
        );


      /*
        Do not retry
        the same failed URL.
      */

      if (
        candidateUrl ===
        currentUrl
      ) {
        continue;
      }


      image.src =
        candidate;


      return true;
    }


    return false;
  }


  /* =======================================================
     15. THUMBNAIL FALLBACK SYSTEM
     ======================================================= */

  function bindThumbnailFallbacks() {

    const images =
      documentaryGrid.querySelectorAll(
        ".documentary-thumbnail-image"
      );


    images.forEach(
      (image) => {

        image.addEventListener(
          "error",
          function handleImageError() {

            const youtubeFallback =
              cleanText(
                image.dataset.youtubeFallback
              );


            /*
              STEP 1:
              maxresdefault → hqdefault
            */

            if (
              youtubeFallback &&
              image.dataset.youtubeFallbackUsed !==
                "true"
            ) {

              image.dataset.youtubeFallbackUsed =
                "true";


              const currentUrl =
                resolveUrl(
                  image.src
                );


              const fallbackUrl =
                resolveUrl(
                  youtubeFallback
                );


              if (
                fallbackUrl &&
                fallbackUrl !==
                  currentUrl
              ) {

                image.src =
                  youtubeFallback;

                return;
              }
            }


            /*
              STEP 2:
              If YouTube fails,
              use a local documentary image.

              Sequence:
              jpg
              jpeg
              png
              webp
            */

            if (
              useNextLocalFallback(
                image
              )
            ) {
              return;
            }


            /*
              STEP 3:
              Hide the image if
              all real sources fail.
            */

            image.hidden =
              true;


            const thumbnailContainer =
              image.closest(
                ".documentary-thumbnail"
              );


            if (
              thumbnailContainer
            ) {

              thumbnailContainer.classList.add(
                "thumbnail-unavailable"
              );
            }

          }
        );

      }
    );
  }


  /* =======================================================
     16. UPDATE DOCUMENTARY COUNT
     ======================================================= */

  function updateCount(total) {

    if (
      !documentaryCount
    ) {
      return;
    }


    const count =
      formatNumber(total);


    documentaryCount.textContent =
      total === 1
        ? `${count} documentary`
        : `${count} documentaries`;
  }


  /* =======================================================
     17. EMPTY STATE
     ======================================================= */

  function renderNoDataState() {

    documentaryGrid.innerHTML = `
      <div
        class="documentary-data-empty"
        role="status"
      >

        <strong>
          No documentaries have been published yet
        </strong>

        <p>
          When a new documentary is published,
          the latest one will automatically
          appear here first.
        </p>

      </div>
    `;


    updateCount(0);


    if (
      searchEmptyState
    ) {

      searchEmptyState.hidden =
        true;
    }
  }


  /* =======================================================
     18. VALIDATE PUBLISHED DOCUMENTARY
     ======================================================= */

  function isValidDocumentary(item) {

    if (
      !item ||
      typeof item !==
        "object"
    ) {
      return false;
    }


    /*
      Minimum requirements:
      title + slug
    */

    if (
      !getTitle(item) ||
      !getSlug(item)
    ) {
      return false;
    }


    /*
      Do not show drafts
      on the homepage.
    */

    if (
      cleanText(
        item.status
      ).toLowerCase() ===
      "draft"
    ) {
      return false;
    }


    if (
      item.published === false
    ) {
      return false;
    }


    return true;
  }


  /* =======================================================
     19. RENDER DOCUMENTARIES
     ======================================================= */

  function renderDocumentaries() {

    const rawData =
      getDocumentaryData();


    if (
      !rawData.length
    ) {

      renderNoDataState();


      document.dispatchEvent(
        new CustomEvent(
          "salimgpt:documentariesRendered",
          {
            detail: {
              totalCount:
                0
            }
          }
        )
      );


      return;
    }


    /*
      Remove draft and invalid items.
    */

    const validItems =
      rawData.filter(
        isValidDocumentary
      );


    if (
      !validItems.length
    ) {

      renderNoDataState();


      document.dispatchEvent(
        new CustomEvent(
          "salimgpt:documentariesRendered",
          {
            detail: {
              totalCount:
                0
            }
          }
        )
      );


      return;
    }


    /*
      Newest first.
    */

    const sortedItems =
      sortDocumentaries(
        validItems
      );


    const fragment =
      document.createDocumentFragment();


    sortedItems.forEach(
      (
        item,
        index
      ) => {

        fragment.appendChild(
          createDocumentaryCard(
            item,
            index
          )
        );

      }
    );


    documentaryGrid.replaceChildren(
      fragment
    );


    updateCount(
      sortedItems.length
    );


    bindThumbnailFallbacks();


    if (
      searchEmptyState
    ) {

      searchEmptyState.hidden =
        true;
    }


    /*
      Event used by search.js / home.js.
    */

    document.dispatchEvent(
      new CustomEvent(
        "salimgpt:documentariesRendered",
        {
          detail: {
            totalCount:
              sortedItems.length
          }
        }
      )
    );
  }


  /* =======================================================
     20. PUBLIC REFRESH EVENT
     ======================================================= */

  document.addEventListener(
    "salimgpt:refreshDocumentaries",
    renderDocumentaries
  );


  /* =======================================================
     21. INITIALIZE
     ======================================================= */

  function initialize() {

    renderDocumentaries();
  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initialize,
      {
        once:
          true
      }
    );

  } else {

    initialize();
  }

})();
