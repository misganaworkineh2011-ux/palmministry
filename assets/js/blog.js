function revealElements(root) {
  if (!root) return;
  root.querySelectorAll('.reveal').forEach(el => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
    observer.observe(el);
  });
}

function initBlogListing() {
  const featuredEl = document.getElementById('blog-featured');
  const gridEl = document.getElementById('blog-grid');
  const filtersEl = document.getElementById('blog-filters');
  if (!gridEl) return;

  let activeCategory = 'all';

  function render() {
    const lang = getBlogLang();
    const filtered = activeCategory === 'all'
      ? blogPosts
      : blogPosts.filter(p => p.category === activeCategory);

    const featured = blogPosts.find(p => p.featured) || blogPosts[0];
    const rest = filtered.filter(p => p.slug !== featured.slug || activeCategory !== 'all');

    if (featuredEl && activeCategory === 'all') {
      featuredEl.innerHTML = renderFeaturedPost(featured, lang);
      featuredEl.style.display = 'block';
    } else if (featuredEl) {
      featuredEl.style.display = 'none';
    }

    const postsToShow = activeCategory === 'all' ? rest : filtered;
    gridEl.innerHTML = postsToShow.map((post, i) =>
      renderBlogCard(post, lang, i)
    ).join('');

    revealElements(featuredEl);
    revealElements(gridEl);
  }

  if (filtersEl) {
    filtersEl.innerHTML = blogCategories.map(cat => `
      <button class="blog-filter-btn ${cat.id === 'all' ? 'active' : ''}" data-category="${cat.id}">
        ${cat.label[getBlogLang()]}
      </button>
    `).join('');

    filtersEl.addEventListener('click', e => {
      const btn = e.target.closest('.blog-filter-btn');
      if (!btn) return;
      activeCategory = btn.dataset.category;
      filtersEl.querySelectorAll('.blog-filter-btn').forEach(b =>
        b.classList.toggle('active', b === btn)
      );
      render();
    });
  }

  render();

  window.addEventListener('palm-lang-change', render);
}

function initLatestPosts() {
  const container = document.getElementById('latest-posts-grid');
  if (!container) return;

  function render() {
    const lang = getBlogLang();
    const latest = [...blogPosts]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
    container.innerHTML = latest.map((post, i) =>
      renderBlogCard(post, lang, i, true)
    ).join('');
    revealElements(container);
  }

  render();
  window.addEventListener('palm-lang-change', render);
}

function initRelatedPosts() {
  const container = document.getElementById('related-posts');
  const slug = document.body.dataset.postSlug;
  if (!container || !slug) return;

  function render() {
    const lang = getBlogLang();
    const related = getRelatedPosts(slug, 3);
    container.innerHTML = related.map((post, i) =>
      renderBlogCard(post, lang, i, true)
    ).join('');
    revealElements(container);
  }

  render();
  window.addEventListener('palm-lang-change', render);
}

function renderFeaturedPost(post, lang) {
  const base = getBlogBasePath();
  return `
    <a href="${base}blog/${post.slug}.html" class="blog-featured reveal">
      <div class="blog-featured-image">
        <img src="${post.image}" alt="">
        <span class="blog-category">${post.categoryLabel[lang]}</span>
      </div>
      <div class="blog-featured-content">
        <span class="blog-meta">${formatBlogDate(post.date, lang)} · ${post.readTime[lang]}</span>
        <h2>${post.title[lang]}</h2>
        <p>${post.excerpt[lang]}</p>
        <span class="blog-read-more">${lang === 'am' ? 'ተጨማሪ ያንብቡ' : 'Read Article'} →</span>
      </div>
    </a>
  `;
}

function renderBlogCard(post, lang, index, compact) {
  const base = getBlogBasePath();
  const delay = !compact && index < 4 ? ` reveal-delay-${index + 1}` : '';
  const reveal = compact ? '' : ' reveal';
  return `
    <a href="${base}blog/${post.slug}.html" class="blog-card${reveal}${delay}${compact ? ' blog-card-compact' : ''}">
      <div class="blog-card-image">
        <img src="${post.image}" alt="" loading="lazy">
        <span class="blog-category">${post.categoryLabel[lang]}</span>
      </div>
      <div class="blog-card-body">
        <span class="blog-meta">${formatBlogDate(post.date, lang)} · ${post.readTime[lang]}</span>
        <h3>${post.title[lang]}</h3>
        <p>${post.excerpt[lang]}</p>
        <span class="blog-read-more">${lang === 'am' ? 'ተጨማሪ' : 'Read More'} →</span>
      </div>
    </a>
  `;
}

function getBlogBasePath() {
  const path = window.location.pathname;
  if (path.includes('/blog/')) return '../';
  return '';
}

document.addEventListener('DOMContentLoaded', () => {
  initBlogListing();
  initLatestPosts();
  initRelatedPosts();
});
