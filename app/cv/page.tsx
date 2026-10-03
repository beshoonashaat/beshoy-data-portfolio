import Link from 'next/link';

export default function CVPage() {
  return (
    <main className="cvPage">
      <div className="cvSheet">
        <div className="cvTop">
          <div>
            <span className="kicker">CURRICULUM VITAE</span>
            <h1>Beshoy Nashaat</h1>
            <p>Data Science · Data Engineering · Machine Learning</p>
          </div>
          <Link href="/">← Back to portfolio</Link>
        </div>

        <section>
          <h2>Profile</h2>
          <p>
            Data Science undergraduate focused on Data Engineering, Machine Learning and
            Analytics, with hands-on work in Python, SQL, ETL, data modeling, optimization,
            dashboards and information retrieval.
          </p>
        </section>

        <section>
          <h2>Education</h2>
          <h3>Badr University in Assiut</h3>
          <p>Data Science · 2023—2027 · School of AI &amp; Data Management</p>
        </section>

        <section>
          <h2>Selected Projects</h2>
          <div className="cvProject"><b>Tanseek</b><span>Constraint-based timetable and room allocation using Python, OR-Tools and FastAPI.</span></div>
          <div className="cvProject"><b>Café Sales</b><span>Power BI dashboard supported by a data cleaning and transformation pipeline.</span></div>
          <div className="cvProject"><b>Heart Disease ML</b><span>Logistic Regression with K-Means and PCA exploration using Scikit-learn.</span></div>
          <div className="cvProject"><b>PubMed IR</b><span>TF-IDF and inverted-index search across 1,000+ research articles.</span></div>
        </section>

        <section>
          <h2>Skills</h2>
          <p>Python · SQL · ETL · Data Cleaning · Data Modeling · Machine Learning · Scikit-learn · NumPy · NLP · PCA · Clustering · Power BI · DAX · Power Query · FastAPI · Git &amp; GitHub</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>beshoo.nashaat10@gmail.com · Asyut, Egypt</p>
          <p>
            <a href="https://github.com/beshoonashaat">GitHub</a> ·{' '}
            <a href="https://www.linkedin.com/in/beshoy-nashaat-19640620b/">LinkedIn</a> ·{' '}
            <a href="https://www.behance.net/beshoonashaat10">Behance</a>
          </p>
        </section>
      </div>
    </main>
  );
}
