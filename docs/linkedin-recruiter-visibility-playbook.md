# LinkedIn Recruiter Visibility: A Research-Backed Playbook

*Compiled September 2026. Tailored to a Supply Chain & Logistics Analyst profile (SQL · Python · Power BI).*

This playbook pulls together LinkedIn's own published engineering research, peer-reviewed studies, LinkedIn Talent Solutions data, and independent industry analyses. Each claim is tagged with how much you can trust it:

- **[A] Strong:** peer-reviewed research, or LinkedIn engineering papers describing the production system.
- **[B] Medium:** LinkedIn's first-party data (Talent Blog, Help Center), or large independent datasets.
- **[C] Weak:** widely repeated marketing statistics or small, non-peer-reviewed studies. They point the right way, but don't trust the exact numbers.

---

## 1. How recruiters actually find you (the mechanics)

To get more recruiter reach-outs, you have to understand the system that picks which profiles a recruiter sees.

### 1.1 Recruiter is a retrieve-then-rank search engine [A]
LinkedIn's published talent-search papers (SIGIR/CIKM 2018, KDD 2019) describe two stages:
1. **Retrieval** pulls a candidate set that matches the query and filters (title, skills, location, years of experience, and so on).
2. **Ranking** orders that set with ML models trained on **recruiter actions**: who they open, save, and InMail, and **who accepts InMails**.

Recruiter also personalizes results. A multi-armed bandit learns which skill groups a given recruiter prefers during a search session.

**What this means for you:** first you have to *match* the query (keywords and structured fields). Then you have to look like someone recruiters engage with *and who replies*. Accepting or politely answering InMails is itself a ranking signal.

Sources: [AI behind LinkedIn Recruiter search](https://www.linkedin.com/blog/engineering/recommendations/ai-behind-linkedin-recruiter-search-and-recommendation-systems) · [Talent Search & Recommendation at LinkedIn (SIGIR'18)](https://www.researchgate.net/publication/326135674_Talent_Search_and_Recommendation_Systems_at_LinkedIn_Practical_Challenges_and_Lessons_Learned) · [Personalized Expertise Search at LinkedIn](https://arxiv.org/pdf/1602.04572) · [Fairness-Aware Ranking in LinkedIn Talent Search (KDD'19)](https://arxiv.org/pdf/1905.01989)

### 1.2 Since 2025–26, search is semantic and LLM-driven [A]
- Recruiters now type natural-language requests into **Hiring Assistant / AI-assisted search**, for example "supply chain analyst, Power BI, freight pricing, Phoenix." The AI turns that into filters and a semantic query.
- LinkedIn's **MUSE** system (Member Understanding Semantic Embeddings) embeds all 1.3B+ profiles with a fine-tuned LLM. It retrieves candidates by *meaning*, not only by exact keywords. LLM-as-judge labels train it to predict "does this member *qualify* for this request." In A/B tests it increased highly relevant candidates and InMail accepts.
- **360Brew**, a 150B-parameter decoder-only model, now handles many ranking tasks across LinkedIn, including the feed. It reads your profile and posts **as text**.

**What this means for you:** the model reads your profile like a person would. Clear, specific, evidence-rich text ("built Power BI dashboards tracking on-time %, cost per mile across 3,000 loads/week") gives it much more to work with than a list of buzzwords. Keywords still matter for the filter stage, but **qualification evidence** is what the semantic ranker scores.

Sources: [Semantic search for LinkedIn's Hiring Assistant (LinkedIn Engineering)](https://www.linkedin.com/blog/engineering/ai/semantic-search-for-ai-agents-at-scale-retrieval-and-ranking-for-linkedins-hiring-assistant) · [360Brew paper (arXiv 2501.16450)](https://arxiv.org/abs/2501.16450) · [Hierarchical memory for LinkedIn's Hiring Agent (arXiv)](https://arxiv.org/pdf/2604.26197) · [Semantic job search SLMs (arXiv)](https://arxiv.org/pdf/2510.22101) · [LinkedIn AI-assisted search](https://business.linkedin.com/talent-solutions/ai-assisted-search-and-projects)

### 1.3 "Spotlights" push certain candidates to the top [B]
Recruiter shows filter tabs called **Spotlights**, and LinkedIn reports recruiters get about **2× the response rate** from candidates surfaced this way. You can get into every one of them:

| Spotlight | How you get in |
|---|---|
| **Open to work / Open to hearing from recruiters** | Turn on *Open to Work*. The recruiter-only setting is enough. |
| **More likely to respond** | Stay active: log in, post or comment, and reply to InMails. |
| **Interested in your company** | Follow target companies, click **"I'm interested"** on their Life/About page, and engage with their posts. |
| **Past applicants / Company connections** | Apply to that company, and connect with its employees. |

Sources: [Spotlights in Recruiter (LinkedIn Help)](https://www.linkedin.com/help/recruiter/answer/a414283) · [Spotlight candidates open to new opportunities (LinkedIn Talent Blog)](https://www.linkedin.com/business/talent/blog/product-tips/spotlight-candidates-on-linkedin-who-are-open-to-new-opportunities)

### 1.4 What recruiter InMail data says [B]
LinkedIn's analysis of tens of millions of recruiter InMails (2021–22) found:
- Candidates who **follow the company** are **81%** more likely to respond.
- Candidates **connected to someone at the company** are **46%** more likely to accept.
- **Open to Work** candidates are about **35%** more likely to respond, and a separate LinkedIn figure says they get about **40% more InMails**.

Recruiters *know* this and use it to decide whom to message. Following companies, connecting with their employees, and turning on Open to Work all make you a "safe bet" to contact.

Sources: [InMail response rate data (LinkedIn Talent Blog)](https://www.linkedin.com/business/talent/blog/talent-strategy/these-inmails-get-best-response-rates) · [InMail rates by industry/function](https://www.linkedin.com/business/talent/blog/talent-engagement/how-inmail-response-rates-compare-across-industries-and-functions) · [Recruiters who focus on skills see better InMail rates](https://www.linkedin.com/business/talent/blog/talent-acquisition/recruiters-who-focus-on-skills-see-better-inmail-rates)

### 1.5 Skills are now a primary matching axis [B]
LinkedIn's Economic Graph research found that searching by **skills** instead of **job titles** grows eligible talent pools about **6×**. Recruiter and Hiring Assistant increasingly match skills from job posts against the skills on your profile. LinkedIn has long said that listing **5+ skills** makes you far more discoverable. The "31×" figure is an old marketing number [C], but the direction holds.

Sources: [LinkedIn Skills-Based Hiring Report, March 2025 (PDF)](https://economicgraph.linkedin.com/content/dam/me/economicgraph/en-us/PDF/skills-based-hiring-march-2025.pdf) · [Skills-First report](https://economicgraph.linkedin.com/research/skills-first-report)

### 1.6 Your network is a hiring channel, and mid-strength ties matter most [A]
In *Science* (2022), Rajkumar, Saint-Jacques, Bojinov, Brynjolfsson, and Aral ran randomized experiments on LinkedIn's "People You May Know" with **20M+ users over 5 years** (2B new ties, 600K job changes). **Weaker ties led to more job mobility than strong ones.** The relationship was an *inverted U*: moderately weak ties (acquaintances you share some mutual connections with) helped most. Near-strangers and very close friends helped less. The effect was strongest in digital and tech industries.

Separately, referred candidates are hired at much higher rates. Pinpoint's analysis of 4.5M applications found referrals were about **7× more likely to be hired**, and up to **11× in logistics and supply chain** [B/C].

Sources: [A causal test of the strength of weak ties (Science)](https://www.science.org/doi/10.1126/science.abl4476) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/36107999/) · [Science News summary](https://www.sciencenews.org/article/linkedin-job-search-weak-ties-relatiosnhips-social-science) · [Referral hiring and network structure (arXiv)](https://arxiv.org/pdf/2201.06020) · [Pinpoint referral data](https://www.pinpointhq.com/insights/referrals-are-7x-more-likely-to-be-hired-than-job-board-candidates) · [Employee referrals & Recruiter top sources of hire (LinkedIn)](https://www.linkedin.com/business/talent/blog/product-tips/employee-referrals-and-linkedin-recruiter-top-sources-of-hire)

### 1.7 How human recruiters judge a profile [A/C]
- Recruiters use LinkedIn to judge **person-job fit and person-organization fit**, and they spontaneously infer personality from profiles (Roulin & Bangerter, 2013; Roulin & Levashina, 2019, *Personnel Psychology*). Profiles with more detail, recommendations, and a professional photo got higher hireability ratings in these studies [A].
- **Self-presentation signals** such as endorsements, recommendations, and completeness predicted hiring recommendations (Chiang & Suen, 2015, *Computers in Human Behavior*) [A].
- Eye-tracking (TheLadders, 2018; n=30, not peer-reviewed) found an initial skim of about **7 seconds**, focused on **name → current title and company → previous title → dates → education** [C]. On LinkedIn, the equivalent is **photo, headline, current role, and the About section's first lines**.

Sources: [Roulin & Bangerter 2013](https://econtent.hogrefe.com/doi/abs/10.1027/1866-5888/a000094?journalCode=pps) · [LinkedIn as a selection method (Roulin & Levashina 2019)](https://onlinelibrary.wiley.com/doi/10.1111/peps.12296) · [Self-presentation & hiring recommendations (Chiang & Suen 2015)](https://www.sciencedirect.com/science/article/pii/S0747563215001156) · [Personality perception from LinkedIn profiles](https://www.sciencedirect.com/org/science/article/pii/S0268394617000151) · [LinkedIn profiles across occupations](https://www.researchgate.net/publication/265857039_LinkedIn_and_Recruitment_How_Profiles_Differ_Across_Occupations) · [Social media content and hiring ratings (IJSA 2025)](https://onlinelibrary.wiley.com/doi/10.1111/ijsa.12502) · [TheLadders eye-tracking study (PDF)](https://www.theladders.com/static/images/basicSite/pdfs/TheLadders-EyeTracking-StudyC2.pdf)

### 1.8 How the feed works now (for content visibility) [B/C]
- Ranking moved to LLM-based models (360Brew) that judge **topic relevance and expertise**. Posting consistently on one topic builds "authority" in that topic.
- **Dwell time** (how long people read) and **meaningful comments** outweigh likes. Comments are reported at roughly 2× the weight of a like.
- The **first 60 minutes** of engagement shape how far a post spreads.
- **External links** in the post body cut reach by about 60% in independent tests. Put links in the first comment, or skip them.
- Average organic reach fell sharply in 2025 (van der Blom: views −50%). **Educational posts** did 3–5× better than other types.

Sources: [360Brew](https://arxiv.org/abs/2501.16450) · [Hootsuite: LinkedIn algorithm 2026](https://blog.hootsuite.com/linkedin-algorithm/) · [van der Blom Algorithm InSights 2025](https://www.linkedin.com/posts/richardvanderblom_chapter-1-algorithm-insights-report-2025-activity-7322514599126130688-Q895) · [Dataslayer: what works in 2026](https://www.dataslayer.ai/blog/linkedin-algorithm-february-2026-whats-working-now) · [AuthoredUp algorithm data](https://authoredup.com/blog/linkedin-algorithm) · [ByteByteGo: how LinkedIn feed uses LLMs](https://blog.bytebytego.com/p/how-linkedin-feed-uses-llms-to-serve)

---

## 2. The playbook: what to do, in priority order

### Step 1: Fix your settings (15 minutes, biggest effect per minute)
- [ ] **Open to Work → "Recruiters only"** (private). This puts you in the Open-to-Work spotlight without a public green banner. Fill in **all fields**:
  - **Job titles (up to 5):** Supply Chain Analyst · Logistics Analyst · Supply Chain Data Analyst · Business Intelligence Analyst · Pricing/Freight Analyst.
  - **Locations:** your city, plus "Remote," plus any metro areas you'd relocate to.
  - **Start date, job types, workplace (on-site/hybrid/remote).**
  - **Public vs. private:** a public banner mainly helps if you're unemployed or in a high-volume market [B/C]. Since you're employed, keep it **private**.
- [ ] **Settings → Visibility → Profile viewing:** public profile visible. Let people see your name when you view their profile, because recruiters often look back at who viewed them.
- [ ] **Location:** use a real city, not just the country. Recruiters filter by radius.
- [ ] **Custom URL:** `linkedin.com/in/mounikasampangi` ✅ (already done).
- [ ] **Creator mode is gone:** a **Follow** button and profile topics still help. Add 3–5 topic hashtags if the option is offered.

### Step 2: Build the profile for both the search engine and the 7-second skim
**Photo and banner** [C for the exact numbers, but consistent across studies]
- Professional headshot, face filling about 60% of the frame, plain background. LinkedIn's long-cited figures are "up to 21× more views, 9× more connection requests."
- Banner: a simple graphic that states your value, e.g. *"Supply chain analytics · Freight pricing · Automated Power BI reporting."*

**Headline (220 chars).** This is the field that most affects search matching and click-through. Use **the exact titles recruiters search**, then proof, then tools:
> Supply Chain & Logistics Analyst | Freight Pricing, Rate-per-Mile & Capacity Analytics | SQL · Python · Power BI | Automated Executive Reporting | MS Business Analytics (4.0)

**About section.** Written for the semantic model *and* a human:
- The first 2–3 lines show above "see more." Say who you are, what problems you solve, and one quantified outcome.
- Then 3–5 **evidence bullets** using the pattern *action + metric + business result*.
- Name the **domain nouns** a semantic ranker links to your field: TMS, load profitability, on-time performance, cost per mile, lane analysis, carrier scorecards, RFP/bid analysis, capacity, demand forecasting, S&OP.
- End with a call to action: *"Open to Supply Chain / Logistics / BI Analyst roles (remote or [city]). Email: …"*

**Experience.** This is what gets retrieved and ranked.
- Use the **standard title** people search for. If your internal title is odd, write it as "Supply Chain Logistics Analyst (Internal: X)."
- 3–6 bullets per role, with **numbers** (loads, lanes, $ saved, hours automated, report refresh time cut from X to Y).
- **Add skills to each role** (LinkedIn lets you link skills to experience entries). This ties skills to evidence, which skill-based matching rewards.

**Skills (up to 100; pin the top 3).**
- Add **30–50 relevant skills**, using LinkedIn's standard skill names (pick from the autocomplete). Core: *Supply Chain Analytics, Logistics, Transportation Management Systems (TMS), Freight, Power BI, SQL, Python, Data Analysis, Forecasting, Business Intelligence, Data Visualization, Microsoft Excel, Power Query, DAX, Snowflake, Azure, Databricks, A/B Testing, Predictive Modeling, Stakeholder Management.*
- **Pin** the 3 most tied to the roles you want (e.g. Supply Chain Analytics · Power BI · SQL).
- Get **endorsements** on your top skills from coworkers, and take **LinkedIn skill assessments / verified skills** where offered.

**Featured section.** Recruiters click it, and it's proof.
- Portfolio site, the Diesel Price Outlook dashboard, and the Truck Availability Tracker, each with a thumbnail and one line on the business result.

**Recommendations.** Aim for 3–5 from managers or stakeholders who mention specific outcomes. Research on hireability ratings supports this [A].

**Certifications and education:** add them, e.g. PL-300 Power BI, APICS/ASCM CSCP or CPIM, and your MS Business Analytics. Certifications are a filter field in Recruiter.

### Step 3: Get into the "interested in your company" pool
1. Make a list of **30–50 target companies**: 3PLs, brokers, shippers, retailers, and CPG firms with strong supply chain analytics teams.
2. **Follow every company page** (+81% InMail response, and Recruiter spotlights it).
3. Click **"I'm interested"** on each company's Life/Jobs page. It privately tells that company's recruiters you're open.
4. **Like and comment** on their posts now and then. This counts as engaging with their talent brand.
5. Set **job alerts** for your titles at those companies. Apply early (the first 24–72 hours), and you'll then appear under "past applicants."

### Step 4: Build your network on purpose (weak-tie strategy)
Based on the *Science* weak-ties study and the referral data:
- **Who to connect with:**
  - Recruiters and talent acquisition partners who hire supply chain and analytics roles.
  - Supply chain and analytics **hiring managers** at target companies.
  - Alumni (Northern Arizona University) working in logistics.
  - Peers in freight, logistics, and BI communities.
  - These are the moderately weak ties that carry job information.
- **Aim for 500+ connections**, then keep growing by **10–25 relevant connections per week**. More 1st- and 2nd-degree connections at a company means you show up in "company connections" and under the "connected to someone at the company" signal (+46% InMail acceptance).
- **Always add a short note** to requests. Example:
  > *"Hi [Name], I'm a supply chain analyst working on freight pricing and Power BI reporting. I follow [Company]'s logistics work and would love to connect."*
- For **referrals**, get to know someone first (comment on their posts, ask one specific question), then ask. Referrals are the highest-converting channel, especially in logistics.

### Step 5: Post content that builds topic authority (2–3 times a week)
The LLM-ranked feed rewards **consistent expertise in one niche**, and recruiters look at your Activity section.
- **Pick 2–3 pillars:**
  1. Freight market data (diesel, capacity, rates), taken from your auto-updating projects.
  2. How-tos on Power BI, SQL, and Python for logistics.
  3. Lessons from operations analytics.
- **Formats that hold readers longest:**
  - Document/carousel posts (PDF slides), e.g. "5 KPIs every freight broker dashboard needs."
  - A chart plus 150–300 words of insight.
  - Short native videos walking through a dashboard.
- **Hook** in the first 2 lines, end with a **question** to invite comments, and put **links in the first comment**.
- **Stay online for the first 60 minutes** and reply to every comment.
- **Comment on other people's posts** 15–20 minutes a day (recruiters, supply chain leaders, analytics creators). Write thoughtful 2–3 sentence comments. A good comment gets seen by people outside your network and counts as activity for the "more likely to respond" spotlight.
- Think about a **weekly freight-data newsletter** built from your diesel and truck-availability pipelines. LinkedIn newsletters notify subscribers directly, and nothing else you can post shows your skills so clearly.

### Step 6: Stay "responsive" in the ranking system
- **Reply to every recruiter InMail within 24–48 hours**, even with "not right now, but please keep me in mind for X roles." Recruiter rankers learn from InMail acceptance, and the "more likely to respond" spotlight rewards recent activity [A/B].
- Log in and do something on LinkedIn **most days**, even 10 minutes.
- Refresh your profile now and then (new project, new skill, updated headline). Updates create activity signals, and the semantic index picks up changes on its daily refresh [A].

### Step 7: Measure it like an analyst
Track weekly in a simple sheet:
- **Search appearances** (Profile → Analytics), and *who* searched: which companies and titles.
- **Profile views**, **recruiter InMails received**, **connection acceptance rate**, **post impressions**.
- Run **one change at a time** for 2–3 weeks (e.g. a new headline) and compare search appearances before and after. The keywords shown under "Search appearances" tell you what recruiters are typing.

---

## 3. 30-day action plan

| Week | Actions |
|---|---|
| **1** | Settings (Open to Work, recruiters only, all fields). New headline, About, banner, photo. Add 30–50 skills and pin the top 3. Rewrite experience bullets with metrics and link skills to roles. Build the Featured section. |
| **2** | Build a list of 30–50 target companies. Follow them all and click "I'm interested." Send 25 personalized connection requests (recruiters, hiring managers, alumni). Ask 2–3 people for recommendations. |
| **3** | Publish 2–3 posts (one data carousel from your freight projects). Comment daily on 5+ posts. Send 25 more connection requests. Set job alerts and apply early to 3–5 roles, with a referral where you can. |
| **4** | Keep posting 2–3 times a week and comment daily. Review Search Appearances keywords and adjust the headline and skills. Start a newsletter if posts are getting traction. Follow up with 2nd-degree contacts at target companies about referrals. |

---

## 4. Myths and caveats
- **"Profiles with photos get 21× more views" / "complete profiles get 40× more opportunities."** These are old LinkedIn marketing figures with unpublished methods [C]. The direction is supported; don't treat the multipliers as exact.
- **Keyword stuffing** (repeating "supply chain" 40 times) works less well now. The LLM ranker scores meaning and evidence, and spammy text can hurt how humans read you.
- **The public #OpenToWork banner** is debated. Some recruiters see it as a sign of desperation, while LinkedIn's data shows more InMails. The private, recruiters-only setting gets you the search benefit with no downside. Note that LinkedIn hides this setting from recruiters at your *current* company, but doesn't guarantee it.
- **Engagement pods, automation tools, and bulk scraping tools** break LinkedIn's terms and are increasingly detected. They can get you restricted.
- **Fairness re-ranking** [A]: LinkedIn Recruiter re-ranks results to keep representation balanced. You can't game it, and you don't need to.

---

## 5. Bibliography (primary and research sources)
1. Rajkumar, K., Saint-Jacques, G., Bojinov, I., Brynjolfsson, E., & Aral, S. (2022). *A causal test of the strength of weak ties.* **Science**, 377(6612), 1304–1310. https://www.science.org/doi/10.1126/science.abl4476
2. Firooz, H., et al. (2025). *360Brew: A Decoder-only Foundation Model for Personalized Ranking and Recommendation.* arXiv:2501.16450. https://arxiv.org/abs/2501.16450
3. Geyik, S. C., Ambler, S., & Kenthapadi, K. (2019). *Fairness-Aware Ranking in Search & Recommendation Systems with Application to LinkedIn Talent Search.* **KDD '19**. https://arxiv.org/pdf/1905.01989
4. Geyik, S. C., et al. (2018). *Talent Search and Recommendation Systems at LinkedIn: Practical Challenges and Lessons Learned.* **SIGIR '18**. https://www.researchgate.net/publication/326135674
5. Ha-Thuc, V., et al. (2016). *Personalized Expertise Search at LinkedIn.* arXiv:1602.04572. https://arxiv.org/pdf/1602.04572
6. LinkedIn Engineering (2025/26). *Semantic Search for AI Agents at Scale: Retrieval and Ranking for LinkedIn's Hiring Assistant.* https://www.linkedin.com/blog/engineering/ai/semantic-search-for-ai-agents-at-scale-retrieval-and-ranking-for-linkedins-hiring-assistant
7. LinkedIn Engineering. *AI Behind LinkedIn Recruiter Search and Recommendation Systems.* https://www.linkedin.com/blog/engineering/recommendations/ai-behind-linkedin-recruiter-search-and-recommendation-systems
8. Xu, Z., et al. (2026). *Hierarchical Long-Term Semantic Memory for LinkedIn's Hiring Agent.* arXiv:2604.26197. https://arxiv.org/pdf/2604.26197
9. *Scaling Up Efficient Small Language Models Serving and Deployment for Semantic Job Search* (LinkedIn). arXiv:2510.22101. https://arxiv.org/pdf/2510.22101
10. Shen, J., et al. (2024). *Learning to Retrieve for Job Matching* (LinkedIn). arXiv:2402.13435. https://arxiv.org/html/2402.13435v1
11. Roulin, N., & Bangerter, A. (2013). *Social networking websites in personnel selection: A signaling perspective.* **Journal of Personnel Psychology**, 12, 143–151. https://econtent.hogrefe.com/doi/abs/10.1027/1866-5888/a000094
12. Roulin, N., & Levashina, J. (2019). *LinkedIn as a new selection method: Psychometric properties and assessment approach.* **Personnel Psychology**. https://onlinelibrary.wiley.com/doi/10.1111/peps.12296
13. Chiang, J. K.-H., & Suen, H.-Y. (2015). *Self-presentation and hiring recommendations in online communities: Lessons from LinkedIn.* **Computers in Human Behavior**, 48. https://www.sciencedirect.com/science/article/pii/S0747563215001156
14. Hartwell, C. J., et al. (2025). *Social media profiling: The influence of personal and professional social media content on hiring ratings.* **IJSA**. https://onlinelibrary.wiley.com/doi/10.1111/ijsa.12502
15. *Referral Hiring and Social Network Structure.* arXiv:2201.06020. https://arxiv.org/pdf/2201.06020
16. LinkedIn Economic Graph (2025). *Skills-Based Hiring.* https://economicgraph.linkedin.com/content/dam/me/economicgraph/en-us/PDF/skills-based-hiring-march-2025.pdf
17. LinkedIn Talent Blog. *How to Improve Your InMail Response Rate, According to LinkedIn Data.* https://www.linkedin.com/business/talent/blog/talent-strategy/these-inmails-get-best-response-rates
18. LinkedIn Help. *Spotlights in Recruiter and Jobs.* https://www.linkedin.com/help/recruiter/answer/a414283
19. LinkedIn Help. *View candidates who are open to work in Recruiter.* https://www.linkedin.com/help/recruiter/answer/a419131
20. van der Blom, R. (2025). *Algorithm InSights Report 2025.* https://www.linkedin.com/posts/richardvanderblom_chapter-1-algorithm-insights-report-2025-activity-7322514599126130688-Q895
21. TheLadders (2018). *Eye-Tracking Study.* https://www.theladders.com/static/images/basicSite/pdfs/TheLadders-EyeTracking-StudyC2.pdf
22. Pinpoint. *Referrals are 7× more likely to be hired.* https://www.pinpointhq.com/insights/referrals-are-7x-more-likely-to-be-hired-than-job-board-candidates
