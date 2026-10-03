// Builds Mounika_Sampangi_Business_Analyst_Pearson.docx (ATS-friendly, single column, US Letter)
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat,
  TabStopType, BorderStyle, ExternalHyperlink,
} = require('docx');

const FONT = 'Calibri';
const INK = '1F2937';
const ACCENT = '1F3A5F';
const RIGHT_TAB = 10800; // 7.5" text width

const run = (text, o = {}) => new TextRun({ text, font: FONT, size: o.size || 20, bold: o.bold, italics: o.italics, color: o.color || INK });

const section = (title) => new Paragraph({
  spacing: { before: 140, after: 60 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: ACCENT, space: 1 } },
  children: [run(title.toUpperCase(), { bold: true, size: 21, color: ACCENT })],
});

const bullet = (text) => new Paragraph({
  numbering: { reference: 'bullets', level: 0 },
  spacing: { after: 30, line: 250 },
  children: [run(text)],
});

const roleLine = (title, dates) => new Paragraph({
  spacing: { before: 90, after: 0 },
  tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
  children: [run(title, { bold: true, size: 21 }), run('\t' + dates, { bold: true })],
});

const orgLine = (org, loc) => new Paragraph({
  spacing: { after: 30 },
  tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
  children: [run(org, { italics: true }), run('\t' + loc, { italics: true })],
});

const labeled = (label, text) => new Paragraph({
  spacing: { after: 30, line: 250 },
  children: [run(label + ': ', { bold: true }), run(text)],
});

const link = (text, url) => new ExternalHyperlink({ link: url, children: [run(text, { size: 19, color: ACCENT })] });

const children = [
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 20 },
    children: [run('MOUNIKA SAMPANGI', { bold: true, size: 34, color: ACCENT })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 20 },
    children: [run('Business Analyst  |  Requirements, Process Improvement & BI Reporting', { bold: true, size: 21 })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 60 },
    children: [
      run('Phoenix, AZ (Remote)  |  [Phone]  |  ', { size: 19 }),
      link('mounika.sampangi3x@gmail.com', 'mailto:mounika.sampangi3x@gmail.com'),
      run('  |  ', { size: 19 }),
      link('linkedin.com/in/mounikasampangi', 'https://www.linkedin.com/in/mounikasampangi/'),
      run('  |  ', { size: 19 }),
      link('Portfolio', 'https://mounikasampangi.github.io/mounikasampangi/'),
    ] }),

  section('Professional Summary'),
  new Paragraph({ spacing: { after: 40, line: 255 }, children: [run(
    'Business Analyst with 2+ years turning stakeholder needs into data, reporting, and BI solutions across logistics and EdTech. Elicit requirements ' +
    'from sales, operations, and leadership, define business rules and KPIs, and partner with technical teams to deliver Power BI dashboards and automated ' +
    'reporting that drive pricing and operational decisions. M.S. in Business Analytics (4.0 GPA) with IIBA CBDA training.'
  )] }),

  section('Core Competencies'),
  new Paragraph({ spacing: { after: 40, line: 255 }, children: [run(
    'Requirements Elicitation & Analysis  •  Stakeholder Management  •  Business Rules Documentation  •  Business Process Improvement  •  ' +
    'KPI Definition  •  Data Validation  •  BI & Data Visualization  •  ETL/ELT & Data Warehousing Concepts'
  )] }),

  section('Professional Experience'),
  roleLine('Supply Chain Logistics Analyst', 'Mar 2026 – Present'),
  orgLine('Fresh Freight', 'Scottsdale, AZ'),
  bullet('Led requirements gathering with sales, operations, and leadership for an Inventory Load Risk Board, defining business rules that score loads on aging, coverage, customer, and service-failure risk across multiple live data sources.'),
  bullet('Defined and documented a cost-basis pricing methodology for RFP bids, combining live market rates with forward rate forecasts to set a defensible cost floor and markup across 1,000+ lanes.'),
  bullet('Built a repeatable Power BI reporting framework integrating TMS and Excel data through Power Query, tracking KPIs across 500+ weekly transactions and feeding 8+ executive dashboards and KPI scorecards.'),
  bullet('Automated 10+ recurring operational and financial reports with Python, APIs, and GitHub Actions, cutting manual reporting time by ~80%; own daily, weekly, and monthly refreshes and data validation.'),
  bullet('Designed a Lane Profitability Tracker and rep scorecards (net operating profit, service risk) that show leadership win/loss trends and pricing opportunities by lane.'),
  bullet('Analyzed spot-market vs. contracted rate data (Rate Per Mile, linehaul cost) to flag cost-overrun risk on active loads and recommend actions to sales and operations.'),
  bullet('Found a process improvement that automated the marketing team\'s quarterly customer reports (Python, public APIs) and documented it for team-wide adoption; automated manual Excel workflows by modifying VBA macros.'),

  roleLine('Data Analyst Extern', 'Dec 2025 – Feb 2026'),
  orgLine('Beats by Dr. Dre', 'Remote'),
  bullet('Analyzed customer feedback with NLP (Gemini AI) and translated findings into marketing and product recommendations, contributing to a 12% increase in marketing ROI and a 5% reduction in churn.'),
  bullet('Recommended data-collection process improvements that raised data integrity by 20%.'),

  roleLine('Graduate Teaching Assistant', 'Jan 2025 – Dec 2025'),
  orgLine('Northern Arizona University, W. A. Franke College of Business', 'Flagstaff, AZ'),
  bullet('Supported course assessment through grading, exam proctoring, and office hours; analyzed student performance and engagement data to identify learning trends and improve course effectiveness.'),

  roleLine('Data Analyst', 'Jan 2022 – Dec 2023'),
  orgLine("BYJU'S (EdTech)", 'Hyderabad, India'),
  bullet('Partnered with data engineers to build ELT pipelines in Databricks, integrating multi-source campaign and operational data into reporting-ready datasets.'),
  bullet('Built Adobe Analytics data models and self-service dashboards tracking conversion, cost per acquisition, and click-through rate for sales, marketing, and operations teams.'),
  bullet('Ran A/B tests across customer segments and presented a paid-demo strategy to non-technical leaders that lifted lead qualification by 25%.'),

  section('Education'),
  new Paragraph({ spacing: { before: 40, after: 0 }, tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
    children: [run('M.S., Business Analytics', { bold: true }), run(' – Northern Arizona University (GPA 4.0/4.0)'), run('\tDec 2025')] }),
  new Paragraph({ spacing: { after: 30 }, tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
    children: [run('Integrated M.S., Mathematics', { bold: true }), run(' – National Institute of Technology, Agartala (GPA 3.5/4.0)'), run('\tMay 2022')] }),

  section('Certifications & Training'),
  new Paragraph({ spacing: { after: 30, line: 250 }, children: [run(
    'Business Data Analytics – IIBA CBDA Exam Prep (14 IIBA PDUs)  •  Power BI for Business Intelligence'
  )] }),

  section('Technical Skills'),
  labeled('BI & Visualization', 'Power BI (DAX, Power Query/M), Tableau, Looker Studio, Adobe Analytics, Advanced Excel (VBA)'),
  labeled('Data & Databases', 'SQL, SQL Server, Azure SQL, Snowflake, Amazon Redshift, Databricks, TMS data'),
  labeled('Programming & Automation', 'Python (Pandas), R, API integration, GitHub Actions'),
];

const doc = new Document({
  creator: 'Mounika Sampangi',
  title: 'Mounika Sampangi – Business Analyst Resume',
  styles: { default: { document: { run: { font: FONT, size: 20 } } } },
  numbering: { config: [{ reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
    style: { paragraph: { indent: { left: 300, hanging: 220 } } } }] }] },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 620, bottom: 620, left: 720, right: 720 } } },
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  const out = path.join(__dirname, 'Mounika_Sampangi_Business_Analyst_Pearson.docx');
  fs.writeFileSync(out, buf);
  console.log('wrote', out);
});
