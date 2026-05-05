'use client';

export default function Experience() {
  return (
    <section className="w-full bg-white">
      <div className="experience-section">
        <div className="experience-header">
          <p className="eyebrow">Experience</p>
          <h2>Experience</h2>
        </div>

        <div className="experience-grid">
        <article className="experience-card">
          <div className="company-top">
            <div className="logo-wrapper">
              <SaintJohnsLogo />
            </div>
            <div>
              <a className="company-link" href="https://www.saintjohnsresort.com" target="_blank" rel="noreferrer noopener">
                Saint John's Resort
              </a>
              <p className="company-location">Plymouth, MI</p>
            </div>
          </div>

          <h3>Player Service Associate</h3>
          <ul>
            <li>Provided high-level customer service to members and guests</li>
            <li>Maintained and organized golf carts, bag drop, and staging areas</li>
            <li>Ensured smooth daily operations in a fast-paced environment</li>
          </ul>
        </article>

        <article className="experience-card">
          <div className="company-top">
            <div className="logo-wrapper meadowbrook-logo">
              <MeadowbrookLogo />
            </div>
            <div>
              <a className="company-link" href="https://meadowbrookcountryclub.com" target="_blank" rel="noreferrer noopener">
                Meadowbrook Country Club
              </a>
              <p className="company-location">Northville, MI</p>
            </div>
          </div>

          <h3>Honor Caddy</h3>
          <ul>
            <li>Assisted members during rounds, managing equipment and pace of play</li>
            <li>Delivered professional service and was one of the youngest caddies to achieve Honor Caddy status</li>
          </ul>
        </article>
      </div>

      <style jsx>{`
        .experience-section {
          width: 100%;
          max-width: 920px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }

        .experience-header {
          text-align: left;
          margin-bottom: 2rem;
        }

        .eyebrow {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }

        h2 {
          font-size: 2rem;
          margin: 0;
          color: #111827;
        }

        .experience-header p {
          margin: 0.75rem 0 0;
          color: #4b5563;
          line-height: 1.75;
          max-width: 640px;
        }

        .experience-grid {
          display: grid;
          gap: 1.5rem;
        }

        .experience-card {
          background: #ffffff;
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 1.25rem;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.05);
          padding: 1.75rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .experience-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 28px 60px rgba(15, 23, 42, 0.08);
        }

        .company-top {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: 1rem;
          background: #f8fafc;
          flex-shrink: 0;
          box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.05);
        }

        .meadowbrook-logo {
          background: linear-gradient(180deg, #eef2ff 0%, #eef1ff 100%);
        }

        .company-link {
          display: inline-block;
          font-size: 1rem;
          font-weight: 700;
          color: #111827;
          text-decoration: none;
        }

        .company-link:hover {
          color: #2563eb;
        }

        .company-location {
          margin: 0.25rem 0 0;
          color: #6b7280;
          font-size: 0.95rem;
        }

        h3 {
          margin: 0 0 1rem;
          font-size: 1.2rem;
          color: #111827;
        }

        ul {
          margin: 0;
          padding-left: 1.2rem;
          list-style-type: disc;
          color: #374151;
          line-height: 1.8;
        }

        li {
          margin-bottom: 0.75rem;
        }

        .company-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        @media (min-width: 768px) {
          .experience-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
      </div>
    </section>
  );
}

function SaintJohnsLogo() {
  return (
    <img
      src="/logos/cardinal.png"
      alt="Saint John's Resort Logo"
      className="company-logo-img"
    />
  );
}

function MeadowbrookLogo() {
  return (
    <img
      src="/logos/meadowbrook.png"
      alt="Meadowbrook Country Club Logo"
      className="company-logo-img"
    />
  );
}
