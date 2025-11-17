export default function PrivacyPolicyPage() {
  return (
    <div className="px-5 w-full max-w-5xl mx-auto pt-20 md:pt-36 pb-5 space-y-6">
      <div>
        <h1 id="privacy-policy" className="text-2xl lg:text-4xl font-semibold">
          Privacy Policy
        </h1>
        <p>
          <em>Last updated: August 8, 2025</em>
        </p>
        <p>
          puttr. (“we”, “our”, or “us”) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard your
          information when you use our mobile application (“App”).
        </p>
      </div>
      <div>
        <h2
          id="1-information-we-collect"
          className="text-xl lg:text-2xl font-semibold"
        >
          1. Information We Collect
        </h2>
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-8">
          <li>
            <strong>Personal Information</strong>: Your name, email address,
            username, profile picture, and golf-related statistics.
          </li>
          <li>
            <strong>Authentication Data</strong>: If you sign in using Apple,
            Google, or email/password.
          </li>
          <li>
            <strong>Usage Data</strong>: Information about how you interact with
            the app, including crash logs and usage analytics via Firebase and
            Google Analytics.
          </li>
          <li>
            <strong>Device Information</strong>: Such as model, operating
            system, and unique identifiers.
          </li>
        </ul>
      </div>
      <div>
        <h2
          id="2-how-we-use-your-information"
          className="text-xl lg:text-2xl font-semibold"
        >
          2. How We Use Your Information
        </h2>
        <p>We use your information to:</p>
        <ul className="list-disc pl-8">
          <li>Provide and personalize the app experience</li>
          <li>Authenticate users and manage accounts</li>
          <li>Analyze usage and improve performance</li>
          <li>Communicate with users for support or feature updates</li>
          <li>Enforce our Terms of Service</li>
        </ul>
      </div>
      <div>
        <h2
          id="3-third-party-services"
          className="text-xl lg:text-2xl font-semibold"
        >
          3. Third-Party Services
        </h2>
        <p>We use the following services that may process your data:</p>
        <ul className="list-disc pl-8">
          <li>
            <strong>Firebase (Google LLC)</strong> – for authentication,
            database, analytics, remote config, crash reporting, and hosting.
          </li>
          <li>
            <strong>Google Analytics</strong> – for app usage and performance
            tracking.
          </li>
        </ul>
        <p>
          These third parties may store and process data outside the EU. All
          services comply with GDPR and standard data protection clauses.
        </p>
      </div>
      <div>
        <h2 id="4-location-data" className="text-xl lg:text-2xl font-semibold">
          4. Location Data
        </h2>
        <p>
          We currently do <strong>not collect</strong> location data. In the
          future, we may request access to your location (e.g., to show nearby
          golf courses). We will always ask for your consent before doing so.
        </p>
      </div>
      <div>
        <h2 id="5-data-retention" className="text-xl lg:text-2xl font-semibold">
          5. Data Retention
        </h2>
        <p>
          We retain your data as long as your account is active or as needed to
          provide services. You may delete your account at any time from within
          the app or by contacting us.
        </p>
      </div>
      <div>
        <h2
          id="6-your-rights-under-gdpr"
          className="text-xl lg:text-2xl font-semibold"
        >
          6. Your Rights (Under GDPR)
        </h2>
        <p>As an EU resident, you have the right to:</p>
        <ul>
          <li>Access and receive a copy of your data</li>
          <li>Correct or delete your data</li>
          <li>Withdraw consent or object to processing</li>
          <li>File a complaint with your local data protection authority</li>
        </ul>
        <p>
          To exercise any of these rights, email us at{" "}
          <strong>puttr.official@gmail.com</strong>.
        </p>
      </div>
      <div>
        <h2 id="7-data-security" className="text-xl lg:text-2xl font-semibold">
          7. Data Security
        </h2>
        <p>
          We implement appropriate technical and organizational safeguards to
          protect your data from unauthorized access, loss, or misuse.
        </p>
      </div>
      <div>
        <h2
          id="8-childrens-privacy"
          className="text-xl lg:text-2xl font-semibold"
        >
          8. Children’s Privacy
        </h2>
        <p>
          puttr. is not specifically intended for children under 13. We do not
          knowingly collect data from children.
        </p>
      </div>
      <div>
        <h2 id="9-contact-us" className="text-xl lg:text-2xl font-semibold">
          9. Contact Us
        </h2>
        <p>If you have questions or concerns, contact us at:</p>
        <p>
          <strong>puttr.</strong>
          <br />
          Yannick Alexander Lawler
          <br />
          Vienna, Austria
          <br />
          <strong>Email:</strong> puttr.official@gmail.com
        </p>
      </div>
    </div>
  );
}
