import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Pakistan Archive',
  description: 'Privacy policy for Pakistan Archive. Learn how we handle your data.',
};

export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2025';

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-news-gray mb-6">
        <Link href="/" className="hover:text-news-accent">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-news-dark">Privacy Policy</span>
      </nav>

      <div className="grid lg:grid-cols-4 gap-8">
        <main className="lg:col-span-3">
          <div className="border-b-2 border-news-dark pb-4 mb-8">
            <h1 className="text-4xl font-serif font-bold text-news-dark">Privacy Policy</h1>
            <p className="text-news-gray mt-2 text-sm">Last updated: {lastUpdated}</p>
          </div>

          <div className="article-content bg-white border border-news-border p-8 space-y-4">
            <h2 id="overview">Overview</h2>
            <p>
              Pakistan Archive (the "Site") is committed to protecting your privacy. This Privacy Policy 
              explains what information we collect, how we use it, and your rights in relation to it.
              By using this Site, you agree to the terms of this Privacy Policy.
            </p>

            <h2 id="information">Information We Collect</h2>
            <p>
              <strong>Information you provide.</strong> When you use our Contact form, we collect your name, 
              email address, and message content. This information is used solely to respond to your inquiry.
            </p>
            <p>
              <strong>Automatic information.</strong> Like most websites, we may collect standard web log 
              information, including your IP address, browser type, and the pages you visit. We use this 
              information to understand how visitors use our site and to improve the user experience.
            </p>
            <p>
              <strong>Search queries.</strong> When you use our search feature, your search queries may be 
              processed to fetch results from the Wikipedia API. These queries are not stored on our servers.
            </p>

            <h2 id="usage">How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To respond to your messages submitted via the Contact form</li>
              <li>To improve the Site's content and functionality</li>
              <li>To monitor for technical errors and security issues</li>
              <li>To analyze aggregate user behavior to understand content popularity</li>
            </ul>

            <h2 id="third-party">Third-Party Services</h2>
            <p>
              Pakistan Archive uses the <strong>Wikipedia API</strong> to fetch content. When you search 
              using the Wikipedia option, your query is sent to Wikipedia's servers. Please review 
              <a href="https://meta.wikimedia.org/wiki/Privacy_policy" target="_blank" rel="noopener noreferrer"
                className="text-news-accent hover:underline"> Wikipedia's Privacy Policy</a> for their practices.
            </p>
            <p>
              Images on this site are sourced from <strong>Wikimedia Commons</strong> and are hosted on 
              Wikimedia's servers. Your request to load these images is made directly to Wikimedia.
            </p>

            <h2 id="cookies">Cookies</h2>
            <p>
              Pakistan Archive uses minimal cookies necessary for the Site to function correctly 
              (e.g., session management by Next.js). We do not use advertising cookies or third-party 
              tracking cookies.
            </p>

            <h2 id="rights">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of any personal data you have 
              submitted to us via the Contact form by emailing us at{' '}
              <span className="text-news-accent">info@pakistanarchive.com</span>.
            </p>

            <h2 id="content-license">Content License</h2>
            <p>
              Text content sourced from Wikipedia is used under the 
              <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer"
                className="text-news-accent hover:underline"> Creative Commons Attribution-ShareAlike 3.0</a> license.
              Original content on this site is copyright © Pakistan Archive.
            </p>

            <h2 id="changes">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The date at the top of this page 
              reflects when it was last revised. Continued use of the Site constitutes acceptance of 
              any updated policy.
            </p>

            <h2 id="contact-us">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please{' '}
              <Link href="/contact" className="text-news-accent hover:underline">contact us</Link>.
            </p>
          </div>
        </main>

        <aside className="lg:col-span-1">
          <div className="bg-white border border-news-border p-4 sticky top-4">
            <h3 className="font-serif font-bold border-b border-news-border pb-2 mb-4">Contents</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#overview" className="text-news-accent hover:underline">1 Overview</a></li>
              <li><a href="#information" className="text-news-accent hover:underline">2 Information We Collect</a></li>
              <li><a href="#usage" className="text-news-accent hover:underline">3 How We Use It</a></li>
              <li><a href="#third-party" className="text-news-accent hover:underline">4 Third-Party Services</a></li>
              <li><a href="#cookies" className="text-news-accent hover:underline">5 Cookies</a></li>
              <li><a href="#rights" className="text-news-accent hover:underline">6 Your Rights</a></li>
              <li><a href="#content-license" className="text-news-accent hover:underline">7 Content License</a></li>
              <li><a href="#changes" className="text-news-accent hover:underline">8 Changes</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
