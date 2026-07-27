// Champaign County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-27

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The county Auditor's online parcel/property records portal.
export const AUDITOR_VENDOR = "Champaign County Auditor Property Search";

export const LINKS = [
  // ---------- Government ----------
  { name: "Champaign County, Ohio", category: "Government", subcategory: "County", url: "https://www.co.champaign.oh.us/", description: "Official county portal in Urbana linking commissioners, engineer, treasurer, EMA and the courts." },
  { name: "Champaign County Auditor", category: "Government", subcategory: "Auditor", url: "https://auditor.co.champaign.oh.us/", description: "Property record search, parcel maps and real estate tax data for Champaign County." },
  { name: "Champaign County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/champaign/", description: "Voter registration and absentee ballots at 1512 S. US Hwy 68 in Urbana." },
  { name: "Champaign County Sheriff's Office", category: "Government", subcategory: "Public Safety", url: "https://www.champaignohiosheriff.com/", description: "Patrol, jail and civil divisions serving Urbana and rural Champaign County." },
  { name: "City of Urbana", category: "Government", subcategory: "City", url: "https://www.urbanaohio.com/", description: "County-seat city hall site covering utilities, permits and Melvin Miller Park." },
  { name: "Village of Mechanicsburg", category: "Government", subcategory: "Village", url: "https://www.mechanicsburgvillage.com/", description: "Village council news, utility billing and school links for eastern Champaign County." },
  { name: "Village of St. Paris", category: "Government", subcategory: "Village", url: "https://www.stparisohio.org/", description: "Official village site near Kiser Lake, with council, utilities and local school info." },
  { name: "Village of North Lewisburg", category: "Government", subcategory: "Village", url: "https://www.northlewisburg.com/", description: "Village hall information for the Triad community in northeast Champaign County." },
  // ---------- Education ----------
  { name: "Champaign County Library", category: "Education", subcategory: "Library", url: "https://www.champaigncountylibrary.org/", description: "Main library at 1060 Scioto St. in Urbana, with county branches and local history files." },
  { name: "Urbana City Schools", category: "Education", subcategory: "K-12", url: "https://www.urbanacityschools.org/", description: "District site for Urbana Elementary, Junior High and Urbana High School Hillclimbers." },
  { name: "Graham Local Schools", category: "Education", subcategory: "K-12", url: "https://www.grahamlocalschools.org/", description: "St. Paris district serving Graham Falcons from elementary through high school." },
  { name: "Mechanicsburg Exempted Village Schools", category: "Education", subcategory: "K-12", url: "https://www.mcburg.org/", description: "PK-12 district on one village campus, home of the Mechanicsburg Indians." },
  { name: "Triad Local Schools", category: "Education", subcategory: "K-12", url: "https://www.triadk12.org/", description: "North Lewisburg district serving Triad Cardinals in northeastern Champaign County." },
  { name: "West Liberty-Salem Local Schools", category: "Education", subcategory: "K-12", url: "https://www.wlstigers.org/", description: "West Liberty district for the WL-S Tigers, spanning elementary through high school." },
  { name: "Ohio Hi-Point Career Center", category: "Education", subcategory: "Career-Tech", url: "https://www.ohiohipoint.com/", description: "Bellefontaine career-tech center offering trades programs to Champaign County districts." },
  // ---------- Health ----------
  { name: "Champaign Health District", category: "Health", subcategory: "Public Health", url: "https://www.champaignhd.com/", description: "County health department in Urbana handling immunizations, septic permits and vital records." },
  { name: "Mercy Health – Urbana Hospital", category: "Health", subcategory: "Hospital", url: "https://www.mercy.com/locations/hospitals/springfield/urbana-hospital", description: "Community hospital at 904 Scioto St. in Urbana with an ER, sleep center and GeroPsych unit." },
  { name: "Memorial Primary Care – Urbana", category: "Health", subcategory: "Clinic", url: "http://memorialohio.com/memorial-primary-care-urbana", description: "Memorial Health primary care clinic serving Urbana and western Champaign County patients." },
  // ---------- Business & Economy ----------
  { name: "Champaign County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.champaignohio.com/", description: "Member directory and business advocacy from 127 W. Court St. in downtown Urbana." },
  { name: "Champaign Economic Partnership (CEP)", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.cepohio.com/", description: "County development group on N. Main St., Urbana, with site selection and incentive data." },
  // ---------- Community & Social ----------
  { name: "OhioMeansJobs Champaign County", category: "Community & Social", subcategory: "Workforce", url: "https://www.champaigndjfs.org/omjcc.html", description: "Job & Family Services career center on S. US Hwy 68 with resume help and job search." },
  { name: "OSU Extension – Champaign County", category: "Community & Social", subcategory: "Extension", url: "https://champaign.osu.edu/", description: "Ohio State Extension office in Urbana running 4-H, agriculture and family programs." },
  { name: "Champaign County Historical Society Museum", category: "Community & Social", subcategory: "History", url: "https://www.champaigncountyhistoricalmuseum.org/", description: "Museum at 809 E. Lawn Ave., Urbana, preserving county artifacts, archives and markers." },
  // ---------- Recreation & Tourism ----------
  { name: "Kiser Lake State Park", category: "Recreation & Tourism", subcategory: "Parks", url: "https://ohiodnr.gov/wps/portal/gov/odnr/go-and-do/plan-a-visit/find-a-property/kiser-lake-state-park", description: "ODNR page for the 531-acre no-motor lake park near St. Paris, with camping and fishing." },
  { name: "Cedar Bog Nature Preserve", category: "Recreation & Tourism", subcategory: "Nature Preserve", url: "https://www.cedarbognp.org/", description: "National Natural Landmark boardwalk south of Urbana known for rare plants and butterflies." },
  { name: "Simon Kenton Trail", category: "Recreation & Tourism", subcategory: "Trails", url: "https://www.simonkentonpathfinders.org/", description: "Volunteers maintaining the paved rail-trail running through Urbana toward Bellefontaine." },
  // ---------- News & Media ----------
  { name: "Urbana Daily Citizen", category: "News & Media", subcategory: "Newspaper", url: "https://www.urbanacitizen.com/", description: "Newspaper of record for county-seat Urbana, with local news, sports and obituaries." },
  { name: "Urbana Daily Digital", category: "News & Media", subcategory: "Local News", url: "https://urbana.ohiodailydigital.com/", description: "Digital-only outlet covering Urbana news, jobs, events and a local community podcast." },
];
