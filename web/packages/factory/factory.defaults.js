Factory.define('bill', Query.bills, {
  "bill_resolution_type": "bill",
  "bill_type": "senate_bill",
  "bill_type_label": "S.",
  "congress": 112,
  "current_status": "enacted_signed",
  "current_status_date": "2013-01-15",
  "current_status_description": "This bill was enacted after being signed by the President on January 15, 2013.",
  "current_status_label": "Enacted — Signed by the President",
  "display_number": "S. 2318",
  "docs_house_gov_postdate": null,
  "id": 251764,
  "introduced_date": "2012-04-19",
  "is_alive": false,
  "is_current": false,
  "link": "https://www.govtrack.us/congress/bills/112/s2318",
  "lock_title": false,
  "major_actions": [
    [
      "datetime.datetime(2012, 4, 19, 0, 0)",
      2,
      "Read twice and referred to the Committee on Foreign Relations.",
      "<action datetime=\"2012-04-19\" state=\"REFERRED\">\n      <text>Read twice and referred to the Committee on Foreign Relations.</text>\n    </action>\n    "
    ],
    [
      "datetime.datetime(2012, 9, 19, 0, 0)",
      3,
      "Committee on Foreign Relations. Ordered to be reported with an amendment in the nature of a substitute favorably.",
      "<calendar datetime=\"2012-09-19\" state=\"REPORTED\">\n      <text>Committee on Foreign Relations. Ordered to be reported with an amendment in the nature of a substitute favorably.</text>\n    </calendar>\n    "
    ],
    [
      "datetime.datetime(2012, 12, 19, 0, 0)",
      5,
      "Passed Senate with an amendment by Voice Vote.",
      "<vote how=\"by Voice Vote\" type=\"vote\" datetime=\"2012-12-19\" where=\"s\" result=\"pass\" state=\"PASS_OVER:SENATE\">\n      <text>Passed Senate with an amendment by Voice Vote.</text>\n      <reference ref=\"CR S8230-8231\" label=\"consideration\"/>\n      <reference ref=\"CR S8230-8231\" label=\"text as passed\"/>\n    </vote>\n    "
    ],
    [
      "datetime.datetime(2013, 1, 1, 23, 15)",
      9,
      "On motion to suspend the rules and pass the bill Agreed to by voice vote.",
      "<vote how=\"by voice vote\" type=\"vote2\" datetime=\"2013-01-01T23:15:00-05:00\" where=\"h\" result=\"pass\" state=\"PASSED:BILL\">\n      <text>On motion to suspend the rules and pass the bill Agreed to by voice vote.</text>\n      <reference ref=\"CR 12/30/2012 H7461\" label=\"text\"/>\n    </vote>\n    "
    ],
    [
      "datetime.datetime(2013, 1, 15, 0, 0)",
      28,
      "Signed by President.",
      "<signed datetime=\"2013-01-15\" state=\"ENACTED:SIGNED\">\n      <text>Signed by President.</text>\n    </signed>\n    "
    ]
  ],
  "noun": "bill",
  "number": 2318,
  "senate_floor_schedule_postdate": null,
  "sliplawnum": 283,
  "sliplawpubpriv": "PUB",
  "source": "thomas-congproj",
  "source_link": null,
  "sponsor": {
    "bioguideid": "K000148",
    "birthday": "1943-12-11",
    "cspanid": 1485,
    "firstname": "John",
    "gender": "male",
    "gender_label": "Male",
    "id": 300060,
    "lastname": "Kerry",
    "link": "https://www.govtrack.us/congress/members/john_kerry/300060",
    "middlename": "Forbes",
    "name": "Sen. John Kerry [D-MA, 1985-2013]",
    "namemod": "",
    "nickname": "",
    "osid": "N00000245",
    "pvsid": "53306",
    "sortname": "Kerry, John (Sen.) [D-MA, 1985-2013]",
    "twitterid": null,
    "youtubeid": null
  },
  "sponsor_role": {
    "caucus": null,
    "congress_numbers": [
      111,
      112,
      113
    ],
    "current": false,
    "description": "Senator from Massachusetts",
    "district": null,
    "enddate": "2013-02-01",
    "extra": {
      "address": "218 RUSSELL SENATE OFFICE BUILDING WASHINGTON DC 20510",
      "contact_form": "http://www.kerry.senate.gov/contact/",
      "fax": "202-224-8525",
      "office": "218 Russell Senate Office Building"
    },
    "id": 4125,
    "leadership_title": null,
    "party": "Democrat",
    "person": 300060,
    "phone": "202-224-2742",
    "role_type": "senator",
    "role_type_label": "Senator",
    "senator_class": "class2",
    "senator_class_label": "Class 2",
    "senator_rank": "senior",
    "senator_rank_label": "Senior",
    "startdate": "2009-01-06",
    "state": "MA",
    "title": "Sen.",
    "title_long": "Senator",
    "website": "http://www.kerry.senate.gov"
  },
  "thomas_link": "http://thomas.loc.gov/cgi-bin/bdquery/z?d112:s2318:",
  "title": "S. 2318 (112th): Department of State Rewards Program Update and Technical Corrections Act of 2012",
  "title_without_number": "Department of State Rewards Program Update and Technical Corrections Act of 2012",
  "titles": [
    [
      "short",
      "introduced",
      "Department of State Rewards Program Update and Technical Corrections Act of 2012"
    ],
    [
      "short",
      "passed house",
      "Department of State Rewards Program Update and Technical Corrections Act of 2012"
    ],
    [
      "short",
      "reported to senate",
      "Department of State Rewards Program Update and Technical Corrections Act of 2012"
    ],
    [
      "short",
      "passed senate",
      "Department of State Rewards Program Update and Technical Corrections Act of 2012"
    ],
    [
      "short",
      "enacted",
      "Department of State Rewards Program Update and Technical Corrections Act of 2012"
    ],
    [
      "official",
      "introduced",
      "A bill to authorize the Secretary of State to pay a reward to combat transnational organized crime and for information concerning foreign nationals wanted by international criminal tribunals, and for other purposes."
    ]
  ]
});

Factory.define('member', Query.members, {
  "caucus": null,
  "congress_numbers": [
    113,
    114,
    115
  ],
  "current": true,
  "description": "Senior Senator from Massachusetts",
  "district": null,
  "enddate": "2019-01-03",
  "extra": {
    "address": "317 Hart Senate Office Building Washington DC 20510",
    "contact_form": "http://www.warren.senate.gov/?p=email_senator#thisForm",
    "office": "317 Hart Senate Office Building",
    "rss_url": "http://www.warren.senate.gov/rss/?p=hot_topic"
  },
  "id": 43109,
  "leadership_title": null,
  "party": "Democrat",
  "person": {
    "bioguideid": "W000817",
    "birthday": "1949-06-22",
    "cspanid": 1023023,
    "firstname": "Elizabeth",
    "gender": "female",
    "gender_label": "Female",
    "id": 412542,
    "lastname": "Warren",
    "link": "https://www.govtrack.us/congress/members/elizabeth_warren/412542",
    "middlename": "",
    "name": "Sen. Elizabeth Warren [D-MA]",
    "namemod": "",
    "nickname": "",
    "osid": "N00033492",
    "pvsid": "141272",
    "sortname": "Warren, Elizabeth (Sen.) [D-MA]",
    "twitterid": "SenWarren",
    "youtubeid": "senelizabethwarren"
  },
  "phone": "202-224-4543",
  "role_type": "senator",
  "role_type_label": "Senator",
  "senator_class": "class1",
  "senator_class_label": "Class 1",
  "senator_rank": "senior",
  "senator_rank_label": "Senior",
  "startdate": "2013-01-03",
  "state": "MA",
  "title": "Sen.",
  "title_long": "Senator",
  "website": "http://www.warren.senate.gov"
});
