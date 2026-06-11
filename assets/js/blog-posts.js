const blogPosts = [
  {
    slug: 'breaking-the-shame-culture',
    category: 'advocacy',
    categoryLabel: { en: 'Advocacy', am: 'ጥበቃ' },
    date: '2026-05-15',
    readTime: { en: '6 min read', am: '6 ደቂቃ' },
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    featured: true,
    title: {
      en: 'Breaking the Shame Culture: Why Silence Enables Institutional Harm',
      am: 'የድርበት ثقافት መሰበሰብ፡ ስለምን silence institutional harmን ያቆጣጠራል'
    },
    excerpt: {
      en: 'Shame has long been used to silence victims of institutional abuse. PALM explores how honest dialogue and trauma-informed care can dismantle harmful silence in religious communities.',
      am: 'Shame ለinstitutional abuse victims silence ለማድረግ ተጠቅሟል። PALM honest dialogue እና trauma-informed care harmful silenceን እንዴት dismantle እንደሚችል ይ探索።'
    },
    author: { en: 'PALM Editorial Team', am: 'PALM Editorial Team' }
  },
  {
    slug: 'transformational-leadership-ethiopia',
    category: 'leadership',
    categoryLabel: { en: 'Leadership', am: 'አመራር' },
    date: '2026-04-28',
    readTime: { en: '8 min read', am: '8 ደቂቃ' },
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80',
    featured: false,
    title: {
      en: 'Transformational Leadership: Equipping Pastors for Structural Justice',
      am: 'Transformational Leadership፡ Pastorsን structural justice ለመገንባት equip ማድረግ'
    },
    excerpt: {
      en: 'Managing institutions is not enough. Religious leaders must become active advocates for justice, peace, and the structural health of their communities.',
      am: 'Institutions manage ማድረግ በቂ አይደለም። Religious leaders active advocates መሆን አለባቸው።'
    },
    author: { en: 'Dr. Samuel T.', am: 'Dr. Samuel T.' }
  },
  {
    slug: 'green-legacy-creation-care',
    category: 'creation-care',
    categoryLabel: { en: 'Creation Care', am: 'ፍጥረት እንክብካቤ' },
    date: '2026-04-10',
    readTime: { en: '5 min read', am: '5 ደቂቃ' },
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80',
    featured: false,
    title: {
      en: 'Faith & the Green Legacy: Tree Planting as Peacebuilding',
      am: 'Faith & Green Legacy፡ Tree Planting እንደ Peacebuilding'
    },
    excerpt: {
      en: 'Resource-driven conflicts often stem from environmental neglect. PALM connects faith with stewardship through large-scale tree planting aligned with Ethiopia\'s Green Legacy initiative.',
      am: 'Resource-driven conflicts often environmental neglect መነሻ ናቸው። PALM faithን stewardship ጋር tree planting በማገናኘት connects ያደርጋል።'
    },
    author: { en: 'PALM Creation Care Team', am: 'PALM Creation Care Team' }
  },
  {
    slug: 'peace-football-youth-engagement',
    category: 'youth',
    categoryLabel: { en: 'Youth', am: 'ወጣቶች' },
    date: '2026-03-22',
    readTime: { en: '4 min read', am: '4 ደቂቃ' },
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80',
    featured: false,
    title: {
      en: 'How the PALM Peace Football Team Builds Community Across Divides',
      am: 'PALM Peace Football Team across divides community እንዴት build እንደሚችል'
    },
    excerpt: {
      en: 'Sports transcend tribal and cultural boundaries. Discover how PALM uses football to instill leadership, teamwork, and peace among Addis Ababa youth.',
      am: 'Sports tribal/cultural boundaries transcends ያደርጋሉ። PALM football leadership, teamwork, peace እንዴት instills ይወቁ።'
    },
    author: { en: 'Coach Daniel M.', am: 'Coach Daniel M.' }
  },
  {
    slug: 'peace-missionaries-community-reconciliation',
    category: 'peace',
    categoryLabel: { en: 'Peace', am: 'ሰላም' },
    date: '2026-03-08',
    readTime: { en: '7 min read', am: '7 ደቂቃ' },
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1200&q=80',
    featured: false,
    title: {
      en: 'Peace Missionaries on the Front Lines of Community Reconciliation',
      am: 'Peace Missionaries በCommunity Reconciliation front lines ላይ'
    },
    excerpt: {
      en: 'When tribal friction threatens communities, trained peace ambassadors step in. A firsthand look at PALM\'s deployment model and gospel-centered mediation.',
      am: 'Tribal friction communitiesን threaten ሲያደርግ trained peace ambassadors step in ያደርጋሉ። PALM deployment model firsthand look።'
    },
    author: { en: 'PALM Missions Team', am: 'PALM Missions Team' }
  },
  {
    slug: 'palm-college-future-of-leadership-education',
    category: 'leadership',
    categoryLabel: { en: 'Leadership', am: 'አመራር' },
    date: '2026-02-14',
    readTime: { en: '5 min read', am: '5 ደቂቃ' },
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80',
    featured: false,
    title: {
      en: 'The Palm College: Building Ethiopia\'s Future in Peace & Leadership Studies',
      am: 'The Palm College፡ Ethiopia\'s Future in Peace & Leadership Studies መገንባት'
    },
    excerpt: {
      en: 'In alignment with Article 9, PALM is laying groundwork for an accredited higher education institution offering advanced certifications in peace and leadership.',
      am: 'Article 9 ጋር aligned PALM accredited higher education institution groundwork እያ lay ነው።'
    },
    author: { en: 'PALM Board of Directors', am: 'PALM Board of Directors' }
  }
];

const blogCategories = [
  { id: 'all', label: { en: 'All Posts', am: 'ሁሉም' } },
  { id: 'advocacy', label: { en: 'Advocacy', am: 'ጥበቃ' } },
  { id: 'leadership', label: { en: 'Leadership', am: 'አመራር' } },
  { id: 'peace', label: { en: 'Peace', am: 'ሰላም' } },
  { id: 'creation-care', label: { en: 'Creation Care', am: 'ፍጥረት እንክብካቤ' } },
  { id: 'youth', label: { en: 'Youth', am: 'ወጣቶች' } }
];

function getBlogLang() {
  return localStorage.getItem('palm-lang') || 'en';
}

function formatBlogDate(dateStr, lang) {
  const date = new Date(dateStr + 'T12:00:00');
  return date.toLocaleDateString(lang === 'am' ? 'am-ET' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

function getPostBySlug(slug) {
  return blogPosts.find(p => p.slug === slug);
}

function getRelatedPosts(currentSlug, limit = 3) {
  const current = getPostBySlug(currentSlug);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts
    .filter(p => p.slug !== currentSlug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}
