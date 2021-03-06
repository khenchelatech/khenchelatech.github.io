(this.webpackJsonparabic_test = this.webpackJsonparabic_test || []).push([
    [0], {
        12: function(e, t, n) {},
        13: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(0),
                a = n.n(o),
                i = n(6),
                r = n.n(i),
                s = n(1),
                l = n(2),
                c = n(3),
                p = n(4),
                d = new function e() {
                    var t = this;
                    Object(s.a)(this, e), this.setItem = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = arguments.length > 1 ? arguments[1] : void 0;
                        t.localStore ? window.localStorage.setItem(e, n) : t.appStore[e] = n
                    }, this.getItem = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return t.localStore ? window.localStorage.getItem(e) : t.appStore[e]
                    }, this.deleteItem = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        t.localStore ? window.localStorage.removeItem(e) : delete t.appStore[e]
                    }, this.localStore = !("undefined" === typeof window.localStorage), this.appStore = {}
                },
                u = {
                    LANG: window.covid_lang ? window.covid_lang : "ar"
                },
                h = {
                    en: {
                        answer_no: "No",
                        answer_region_no: "I haven't been to any of the regions mentioned above",
                        answer_unknown: "I don't know",
                        answer_yes: "Yes",
                        app_root_all_rights_reserved: "All rights reserved.",
                        app_root_data_privacy_link: "Privacy Policy",
                        app_root_faq_link: "FAQ",
                        app_root_imprint_link: "Imprint",
                        app_root_legal_link: "Legal",
                        button_continue: "Continue to questions",
                        button_delete_qr_code: "Fill out new questionnaire",
                        button_show_code: "Display previous QR code",
                        button_start_now: "Start questionnaire",
                        cookie_bar_accept: "Accept",
                        cookie_bar_data_privacy: "privacy policy",
                        cookie_bar_reject: "Reject",
                        cookie_bar_text: 'With your consent, D4L data4life will analyze your use of the CovApp to improve the CovApp for all users. If you consent to the transmission of analysis data, please click on "Accept". You can use the CovApp without giving consent to analyze your use of the CovApp. For further information, please visit the ',
                        cookie_bar_text_dnt: 'To offer you a better browsing experience, we use cookies. We respect your "Do not track" browser setting, analyzing is deactivated.',
                        data_privacy_content: '<strong>CovApp - Data Protection Notice (Status: 20.3.2020)</strong>\n\n<strong>1. Data Controller</strong>\n\nThe CovApp is a joint project of Charit\xe9 - Universit\xe4tsmedizin Berlin (responsible for the provision and hosting of the CovApp) and the non-profit D4L data4life gGmbH.\n\nThe organisation responsible for the processing of personal data is\n\nCharit\xe9 - University Medicine Berlin\nCharit\xe9platz 1\n10117 Berlin\nGermany\nPhone: <a href="tel:+493045050">+49 (0) 30 450 50</a>\nwebsite: <a href="https://www.charite.de/" target="_blank">www.charite.de</a>\n\nIf you have any questions regarding the processing of your personal data, as well as your rights regarding data protection, please contact\n\ntelephone: <a href="tel:+4930450580016">+49 (0) 30 450 580 016</a>\ne-mail: <a href="mailto:datenschutz@charite.de">datenschutz(at)charite.de</a>\n\n<strong>2. Which data is collected and how is it processed?</strong>\n\nThe CovApp is used to ask questions about current symptoms, your last trips and possible contacts. These data are not attributed by name.\n\nThe CovApp is a web application. The following data is automatically transferred to the Charit\xe9\'s web server, which is operated by D4L data4life gGmbH as a processor on behalf of the Charit\xe9, with a computer center in Frankfurt at the subcontractor Amazon Web Services (AWS):\n\n- IP address of the device used for the retrieval\n- web address (URL) of the page from which the file was requested (referrer)\n- date and time of the request\n- data volume transferred\n- description of the type of web browser used\n\nThe above-mentioned data is not stored after the app has been used, so that no conclusion can be drawn as to the identity of the user.\n\nThe answers to the questions answered in the app and the recommendations for action are stored exclusively locally on the terminal device you use (smartphone, tablet or PC). This data will - if you wish - be summarized in a QR code. You can show this QR code when being tested for Covid-19, at a doctor\'s or hospital to facilitate the collection of the necessary anamnesis data.\n\nYou can delete the data stored by CovApp on your terminal device at any time by clicking "Delete answers" at the end of the questionnaire. \n\n<strong>3. For what purposes and on what legal basis are the data processed?</strong>\n\nThe CovApp is intended to make it easier for users to assess for themselves whether there is a need for further clarification regarding a Covid-19 infection and offers concrete recommendations for action. The app thus serves to combat the current Covid-19 pandemic. The legal basis of the processing is Article 6.1. lit. d) and e), Art. 9. 2 c), h), i) of the General Data Protection Regulation in conjunction with \xa7 14.1.3 of the Berlin Data Protection Act.\n\nIn all other respects, the Charit\xe9\'s data protection declaration applies, available at <a href="https://www.charite.de/service/datenschutz/" target="_blank">https://www.charite.de/service/datenschutz/</a>',
                        data_privacy_headline: "Privacy policy",
                        disclaimer_headline: "Disclaimer",
                        disclaimer_paragraph_1: "Usage of this app <strong>does not substitute medical treatment </strong> by a physician or clinical diagnostics. The CovApp serves to improve the procedures at the Charit\xe9 examination centre and other outpatient clinics in connection with the novel Coronavirus SARS-CoV-2. \nIf you currently feel seriously ill, please immediately contact a physician.",
                        disclaimer_paragraph_2: "This website uses cookies, which are necessary for the function of the website. Personal data is not stored and no conclusions regarding the identity of the user can be made.",
                        disclaimer_sub_headline_1: "Remarks regarding usage of cookies",
                        faq_content: '<strong>(1/8) The Coronavirus</strong>\nThe scientific term for the new Coronavirus is \u201eSARS-CoV-2\u201c. This virus can cause a respiratory disease. The name of this disease is called \u201eCOVID-19\u201c. Because the infectious disease COVID-19 has already spread across countries and continents, it is referred to as a pandemic.\n\n<strong>(2/8) The transmission</strong>\nThe new Coronavirus is transmitted via droplet infection. It can directly be transferred between humans, when droplets containing the virus get into the respiratory system after they are absorbed via the lining of the mouth and nose or via the conjunctiva of the eye. But an indirect infection is also possible, when droplets are transmitted via the hands to the mucosa of mouth, nose and eyes. Symptoms occur 5 to 6, at most 14 days, after infection.\u2028\n\n<strong>(3/8) Symptoms</strong>\nAfter an infection with the Coronavirus, the disease runs a mild course and is not life-threatening for most people. This extends to pregnant women and children. There can be flu-like symptoms, such as a dry cough, fatigue and fever. Furthermore, some patients suffer from a sore throat, headaches, limb pain and chills. Currently it\u2019s been assumed that 4 in 5 cases run a mild course. Though in some patients the infection can have a serious course, causing respiratory distress and bilateral pneumonia. This mostly affects elderly persons or people with chronic diseases such as cardiovascular diseases, chronic lung disease, diabetes, high blood pressure or cancer. Those severe cases have to be treated in intensive care in a hospital. If you feel sick, take a Coronavirus-Test (link App)\n\n<strong>(4/8) Solidarity</strong>\nAlthough there is a very good healthcare system available in Germany, it is not prepared for a rapid increase in intensive care patients. But if it is possible to prolong an increase in severe cases, treatment of infected patients will continue to be available. This can only be done if every citizen practices social distancing. As a precautionary measure, especially for the elderly generation and the chronically ill, everyone should take the situation seriously and avoid social contact as much as possible. But please, provide for elderly and chronically ill relatives or neighbors and living alone or persons in need with food and daily life essentials. Be considerate and attentive for their needs and worries. Communicate with each other - but stay 2 meters apart. Act in solidarity.\n\n<strong>(5/8) Protection</strong>\nTo slow down the spreading of the virus, avoid direct contact, for example when meeting someone. Wash your hands regularly und thoroughly, at least 20 seconds with soap and water. Keep as much distance as possible when coughing or sneezing - turn away from other people. Sneeze into a sleeve or a tissue, which you throw into a bin immediately. Don\u2019t share something you touched with your mouth, like a glass or a bottle, with someone else. Stay at home.\n\n<strong>(6/8) Therapy</strong>\nThe therapy of the infection depends on the severity of the disease. Mild cases don\u2019t have to be treated and can get well at home. Severe pneumonia has to be treated, for example with oxygen treatment, fluid substitution or antibiotics to treat bacterial co-infections. This mostly has to be done in a hospital.\n\n<strong>(7/8) Vaccination</strong>\nResearchers are currently working on developing a vaccine. Right now there is no vaccination available which protects against the new Coronavirus.\n\n<strong>(8/8) Stay informed:</strong>\nThe Ministry of Health regularly updates the information on the Coronavirus:\n<a href="https://www.bundesgesundheitsministerium.de/coronavirus.html" target="_blank">https://www.bundesgesundheitsministerium.de/coronavirus.html</a>\n\nCharit\xe9 researcher Prof. Dr. Christian Drosten keeps you up-to-date on the NDR podcast:\n<a href="https://www.ndr.de/nachrichten/info/Corona-Podcast-Alle-Folgen-in-der-Uebersicht,podcastcoronavirus134.html" target="_blank">https://www.ndr.de/nachrichten/info/Corona-Podcast-Alle-Folgen-in-der-Uebersicht,podcastcoronavirus134.html</a>',
                        faq_headline: "FAQ Coronavirus",
                        found_code: "A QR code was found",
                        imprint_content: '<strong>Provider </strong>\nCharit\xe9 \u2013 Universit\xe4tsmedizin Berlin\nPostal address: Charit\xe9platz 1, 10117 Berlin \nDie Charit\xe9 \u2013 Universit\xe4tsmedizin Berlin is a public-law institution. It is legally represented by the chairman of the board.\n\n<strong>Contact</strong>\nSend an email to <a href="mailto:covapp@charite.de">covapp@charite.de</a> for any praise, notes or criticism\nInternet: <a href="https://www.charite.de" target="_blank">https://www.charite.de</a>\n\n<strong>Responsible person in terms of media law </strong>\nProf. Dr. Heyo K. Kroemer, The Chairman of the Board of Charit\xe9 \u2013 Universit\xe4tsmedizin Berlin \n\n<strong>Regulatory authority </strong>\nThe Governing Mayor of Berlin \u2013 Senate Chancellery Higher Education and Research \nContact: <a href="https://www.berlin.de/rbmskzl/" target="_blank">https://www.berlin.de/rbmskzl/</a>\n\nSenate Chancellery Health, Care and Equality\n<a href="https://www.berlin.de/sen/gpg/" target="_blank">https://www.berlin.de/sen/gpg/</a>\n\nSales tax number \u2013 Identification number: DE 228847810',
                        imprint_headline: "Imprint",
                        input_date_error: "Invalid date. Please try again.",
                        input_date_error_future: "The date must not be in the future.",
                        input_date_help: "Ensure to enter a full date in the DD.MM.YYYY format that isn\u2019t in the future. For example, 09.03.2020",
                        input_date_label: "Please enter the date",
                        input_date_placeholder: "DD.MM.YYYY",
                        legal_first_paragraph: "<p><strong>Legal notice</strong></p><p>Disclaimer</p><p><strong>General notice </strong></p><p>The use of this app does not replace medical treatment. If you are currently feeling seriously ill, please seek medical treatment immediately. The digital application is not an application that provides diagnostic services. The application serves to simplify the procedures in care.</p><p><strong>Liability for contents </strong></p><p>As a service provider, we are responsible for our own contents according to \xa7 7 (1) TMG (German Telemedia Act). According to \xa7\xa7 8 to 10 TMG, we, as a service provider, are not obligated to monitor third party information transmitted or stored. Obligations to remove or block the use of information according to general laws remain unaffected.</p><p><strong>Liability for links </strong></p><p>Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the sites is always responsible for the contents of the linked sites. </p><p><strong>Copyright</strong></p><p>The contents and works created by the service provider on these pages are subject to German copyright law. The reproduction, editing, distribution and any kind of use outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use. Insofar as the operator did not create the content on this site, the copyrights of third parties are respected. In particular, content of third parties is marked as such. Nevertheless, should you become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such contents immediately.</p>",
                        legal_headline: "Legal",
                        q01_option0: "Under 40",
                        q01_option1: "40-50",
                        q01_option2: "51-60",
                        q01_option3: "61-70",
                        q01_option4: "71-80",
                        q01_option5: "Over 80",
                        q01_text: "How old are you?",
                        q02_option0: "Living alone",
                        q02_option1: "Living together with family, in a shared flat, or in a supervised community facility",
                        q02_text: "What is your current living situation?",
                        q03_option0: "In the medical field",
                        q03_option1: "In a community facility (school, day care center, university, home etc.)",
                        q03_option2: "No, in none of the above",
                        q03_text: "Do you work in one of the following areas?",
                        q04_text: "Do you smoke?",
                        q05_text: "Have you been traveling in the past 4 weeks? (within Germany or abroad)",
                        q06_text: "Have you been in the county Heinsberg (North Rhine-Westphalia)?",
                        q07_text: "Have you been outside Germany in the last 4 weeks?",
                        q08_option0: "Italy",
                        q08_option1: "Iran",
                        q08_option2: "China",
                        q08_option3: "South Korea",
                        q08_option4: "France",
                        q08_option5: "Austria",
                        q08_option6: "Spain",
                        q08_option7: "USA",
                        q08_option8: "I haven't been to any of the countries above",
                        q08_text: "Have you been to one of the following countries?",
                        q09_option0: "South Tyrol (corresponds to the province of Bolzano) in the Trentino-South Tyrol region",
                        q09_option1: "Emilia-Romagna region",
                        q09_option2: "Lombardy region",
                        q09_option3: "City of Vo in the province of Padua in the Veneto region",
                        q09_text: "Italy: Have you been to one of the following regions?",
                        q10_option0: "Qom province",
                        q10_option1: "Tehran",
                        q10_text: "Iran: Have you been to one of the following regions?",
                        q11_option0: "Hubei Province (including Wuhan City)",
                        q11_text: "China: Have you been to one of the following regions?",
                        q12_option0: "Gyeongsangbuk-do Province (North Gyeongsang)",
                        q12_text: "South Korea: Have you been to one of the following regions?",
                        q13_option0: "Grand Est region (this region includes Alsace, Lorraine and Champagne-Ardenne)",
                        q13_text: "France: Have you been to one of the following regions?",
                        q14_option0: "State of Tyrol",
                        q14_text: "Austria: Have you been to one of the following regions?",
                        q15_option0: "Madrid",
                        q15_text: "Spain: Have you been to one of the following regions?",
                        q16_option0: "State of New York",
                        q16_option1: "State of Washington",
                        q16_option2: "State of California",
                        q16_text: "USA: Have you been to one of the following regions?",
                        q17_text: "On which day did you return from your trip?",
                        q18_comment: "Close contact with a confirmed case means:\n<ul><li>Face-to-face contact for longer than 15 minutes</li><li>Direct, physical contact (touching, shaking hands, kissing)</li><li>Being within 2 meters of the person for more than 15 minutes.</li><li>Contact with or exchange of body fluids</li><li>Living in the same apartment</li></ul>",
                        q18_text: "Have you had close contact with a confirmed case?",
                        q19_comment: "A suspected case is a person who currently has fever, cough, or problems breathing and who had contact with a verified case or who has been in a region with frequent cases of Coronavirus infections.\n\nClose contact with a suspected case means:\n<ul><li>Face-to-face contact for longer than 15 minutes</li><li>Direct, physical contact (touching, shaking hands, kissing)</li><li>Being within 2 meters of the person for more than 15 minutes.</li><li>Contact with or exchange of body fluids</li><li>Living in the same apartment</li></ul>",
                        q19_text: "Have you had close contact with a suspected case?",
                        q20_text: "What day was the last contact?",
                        q21_text: "Have you had a fever (over 38 \xb0C) in the past 24 hours?",
                        q22_text: "Have you had a fever (over 38 \xb0C) in the past 4 days?",
                        q23_option0: "Under 38 \xb0C",
                        q23_option1: "38 \xb0C",
                        q23_option2: "39 \xb0C",
                        q23_option3: "40 \xb0C",
                        q23_option4: "41 \xb0C",
                        q23_option5: "42 \xb0C",
                        q23_option6: "More than 42 \xb0C",
                        q23_option7: "I don't know",
                        q23_text: "What was the highest temperature, approx.?",
                        q24_text: "Do you have chills?",
                        q25_text: "Do you feel tired or weak?",
                        q26_text: "Do you have limb pain?",
                        q27_text: "Do you have a persistent cough?",
                        q28_text: "Are you sniffling?",
                        q29_text: "Do you have diarrhea?",
                        q30_text: "Do you have a sore throat?",
                        q31_text: "Do you have a headache?",
                        q32_text: "Are you out of breath faster than usual?",
                        q33_text: "Since when have you had the symptoms?",
                        q34_text: "Do you have a chronic lung disease?",
                        q35_text: "Do you have diabetes?",
                        q36_text: "Do you have heart disease?",
                        q37_text: "Do you have obesity?",
                        q38_text: "Are you pregnant?",
                        q39_text: "Are you currently taking steroids?",
                        q40_comment: "You take or get immunosuppresives after an organ transplant, in the therapy of an autoimmune disease, or during chemotherapy.",
                        q40_text: "Are you currently taking immunosuppressants?",
                        q41_text: "Have you been vaccinated against flu between October 2019 and today?",
                        q42_text: "On which day did you return from your trip?",
                        qr_code_button_reset: "Delete answers",
                        qr_code_headline: "Your personal summary",
                        qr_code_hide_answers: "Hide answers",
                        qr_code_paragraph: "Below, you find a summary of your answers as a table and as a QR code.\n\nPlease save the following QR code and the summary of your answers if you received the recommendation to present yourself at a testing site. If possible, print the summary and, if applicable, show it at the testing site.\n\nIf you need to leave home: Please keep a distance of at least 2 meters from other people, do not touch anything, and try to contain coughing and sneezing without affecting others.",
                        qr_code_print: "Print",
                        qr_code_show_answers: "Show answers",
                        questionnaire_button_generate_qr: "Complete questionnaire",
                        questionnaire_button_next: "Next",
                        recommendation_risk_high_additonal_info: "<strong>Charit\xe9 Virchow Wedding</strong>\nMittelallee 1 \nOpen daily 8 AM to 4 PM  \n\n<strong>Vivantes Clinic Prenzlauer Berg </strong>\nDiesterwegstra\xdfe \nMon-Fri 10 AM to 7 PM, Sat/Sun 10 AM to 5 PM\n\n<strong>Vivantes Wenckebach Clinic Tempelhof </strong>\nAlbrechtstra\xdfe \nMon-Fri 10 AM to 7 PM, Sat/Sun 10 AM to 5 PM\n\n<strong>Evangelisches Krankenhaus K\xf6nigin Elisabeth Herzberge (KEH)</strong>\nHerzbergstra\xdfe 79, 10365 Berlin \nMon-Fri 10 AM to 7 PM, Sat/Sun 10 AM to 5 PM\n\n<strong>DRK Kliniken Berlin Westend</strong>\nSpandauer Damm 130, 14050 Berlin \nMon-Fri 9 AM to 3 PM\n\n<strong>Coronavirus outpatient clinic Havelh\xf6he Community Hospital, building 16</strong>\nHaus 16, Kladower Damm 221, Spandau \nTesting site: Mon-Fri 9 AM to 5 PM, Hotline: Mon-Fri 8 AM to 6 PM and Sat/Sun 9 AM to 3:30 PM",
                        recommendation_risk_high_emoji_label: "Red circle",
                        recommendation_risk_high_headline: "Get in touch",
                        recommendation_risk_high_hide_info: "Hide testing sites",
                        recommendation_risk_high_show_info: "Show testing sites",
                        recommendation_risk_high_text: '<p>You seem to be in the risk group. \n\nIf you would like, please contact the hotline of the Senate Department for Health (Tel: <a href="tel:+493090282828">030/9028 28 28</a>) or visit one of the following testing sites.</p><p>If you need to leave home: Please keep a distance of at least 2 meters from other people, do not touch anything, and try to contain coughing and sneezing without affecting others.\nPlease avoid contact to other people and stay at home, if possible.</p>',
                        recommendation_risk_low_emoji_label: "Yellow circle",
                        recommendation_risk_low_headline: "Be aware of exposure and hand hygiene",
                        recommendation_risk_low_text: '<p><strong>You have been in a RKI risk region or have been in contact with a person infected with the Corona virus or a suspected case. Please stay at home and avoid unnecessary contact to other persons.</strong>\n\nIf you develop further or stronger symptoms in the next couple of days or if you feel unsure, please call your general practitioner or call the hotline of the Senate Department for Health (<a href="tel:+493090282828">030/9028 28 28</a>). If you are from Berlin, you can make an appointment at the Charit\xe9 Corona video consultation by using the following link: <a href="https://bit.ly/2U07tCq" target="_blank">https://bit.ly/2U07tCq</a>.\n\nPlease avoid contact to other people and stay at home, if possible. If you need to leave home: Please keep a distance of at least 2 meters to other persons, do not touch anything and try to <a href="https://www.infektionsschutz.de/hygienetipps/hygiene-beim-husten-und-niesen/" target="_blank">correctly</a> cough and sneeze without affecting other persons.</p>',
                        recommendation_risk_medium_emoji_label: "Orange circle",
                        recommendation_risk_medium_headline: "Stay at home and get healthy",
                        recommendation_risk_medium_text: '<p>Since you haven\'t been to any of the declared RKI risk areas and did not have any contact to a diagnosed case (or suspected case), there is no recommendation to test for the Coronavirus now. <strong>If you develop further or stronger symptoms (of a cold), please call your general practitioner or the emergency medical service (<a href="tel:+49116117">+49 116 117</a>) or make an appointment using the KRY app: <a href="https://bit.ly/2QuCZGo" target="_blank">https://bit.ly/2QuCZGo</a>.</strong>If you need to leave home: Please keep a distance of at least 2 meters to other people, do not touch anything, and try to contain your cough or sneeze without affecting others.</p>',
                        recommendation_risk_slight_emoji_label: "Green circle",
                        recommendation_risk_slight_headline: "Please stay at home",
                        recommendation_risk_slight_text: "<p>Currently, you don't need to do anything, because:</p><ul><li>You didn't have contact to a verified case</li><li>You haven't been in a risk region defined by the RKI in the last 14 days</li><li>You don't have symptoms</li></ul><p>Please carefully consider <a href=\"https://www.infektionsschutz.de/haendewaschen.html\">hand hygiene</a>.</p><p>If you develop symptoms of a cold in the next couple of days, please contact the hotline of the Senate Department for Health (Tel. 030/9028  28 28) or one of the Coronavirus ambulances.</p>",
                        start_headline: "Recommendations and information regarding Coronavirus",
                        start_legal_paragraph: "<strong>This application is not an application that provides diagnostic services. The application serves to simplify the procedures in care.</strong>",
                        start_paragraph_1_option_1: "Contacts to services in Berlin",
                        start_paragraph_1_option_2: "Decision support for doctor's visit",
                        start_paragraph_1_option_3: "Information to reduce your risk",
                        start_paragraph_1_option_4: "Optimize the patient flow",
                        start_paragraph_2: '<p>The CovApp is software developed by Charit\xe9 in cooperation with Data4Life. You can use it to get recommendations for action in just a few minutes. The app asks you several questions including symptoms, travel history, and potential contacts. Besides recommendations for action, relevant contacts, and structured results, the purpose of the app is to optimize patient flow into testing sites, ambulances, and clinics. Please note that this app does not provide diagnostic services.</p> \n<p>In this way, the CovApp can help you to better assess your medical condition, provide recommendations regarding doctor\u2019s visits or Coronavirus testing, and summarize relevant medical information for future doctor\u2019s consultation. </p><p><strong>How can I use the CovApp? </strong></p>\n<p><strong>1. Start the survey by clicking "Start questionnaire"</strong></p><p>The survey contains questions regarding your current symptoms, travel, and contact history.  \nCompleting the survey takes approximately 5 minutes. Please try to answer the questions as precisely as possible.</p>\n<p><strong>2. Survey and recommendations</strong></p><p>At the end of the survey, the CovApp summarizes your answers and provides you with an recommendation for action, for instance: <ul><li>Advice to contact the public hotline for Coronavirus</li><li>Advice to contact your general practitioner</li><li>Advice on social distancing</li></ul></p>\n<p><strong>3. Preparation for doctor\u2019s visit</strong></p><p>When you\'re given the advice for a doctor\u2019s visit or a visit to one of the Coronavirus testing sites, please bring the QR code or print the summary presented. Some Coronavirus testing sites (like the Charit\xe9) can scan the code so that your answers are made directly available to our medical staff and can be used for your consultation. This helps to speed up the process of the medical interview. \nIf visiting your local physician or any other Coronavirus testing site, please print the summary provided and bring it along to your consultation.</p>',
                        start_paragraph_3: "<p>The survey is evaluated anonymously, and all information will be processed on your device (for example, your smartphone). None of your answers will be forwarded to us, our server or any other third party. </p>",
                        start_paragraph_4: "<p>The use of this app does not qualify as medical treatment. If you currently feel seriously ill, please seek medical help.</p>",
                        start_sub_headline_1: "Prepare your doctor's visit",
                        start_sub_headline_2: "What is the CovApp?",
                        start_sub_headline_3: "Which data will be transmitted through the internet?",
                        start_sub_headline_4: "If in doubt, see a doctor!"
                    },
                    ar: {
                        answer_no: "\u0644\u0627",
                        answer_region_no: " \u0644\u0645 \u0623\u0630\u0647\u0628 \u0625\u0644\u0649 \u0623\u064a \u0645\u0646 \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u0645\u0630\u0643\u0648\u0631\u0629 \u0623\u0639\u0644\u0627\u0647",
                        answer_unknown: " \u063a\u064a\u0631 \u0645\u0639\u0631\u0648\u0641",
                        answer_yes: "\u0646\u0639\u0645",
                        app_root_all_rights_reserved: " \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.",
                        button_continue: " \u0645\u062a\u0627\u0628\u0639\u0629",
                        button_start_now: " \u0628\u062f\u0627\u064a\u0629 \u0627\u0644\u0641\u062d\u0635",
                        cookie_bar_accept: "\u0642\u0628\u0648\u0644",
                        cookie_bar_reject: " \u0631\u0641\u0636",
                        input_date_error: " \u062a\u0627\u0631\u064a\u062e \u063a\u064a\u0631 \u0635\u0627\u0644\u062d. \u064a\u0631\u062c\u0649 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649.",
                        input_date_label: " \u0627\u0644\u0631\u062c\u0627\u0621 \u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u062a\u0627\u0631\u064a\u062e",
                        input_date_placeholder: "\u0627\u0644\u064a\u0648\u0645.\u0627\u0644\u0634\u0647\u0631.\u0627\u0644\u0633\u0646\u0629",
                        q01_option0: "\u0623\u0635\u063a\u0631 \u0645\u0646 40",
                        q01_option1: "40-50",
                        q01_option2: "51-60",
                        q01_option3: "61-70",
                        q01_option4: "71-80",
                        q01_option5: "\u0623\u0643\u0628\u0631 \u0645\u0646 80",
                        q01_text: " \u0643\u0645 \u0639\u0645\u0631\u0643\u061f",
                        q02_option0: "\u0623\u0639\u064a\u0634 \u0628\u0645\u0641\u0631\u062f\u064a",
                        q02_option1: " \u0623\u0639\u064a\u0634 \u0645\u0639 \u0627\u0644\u0639\u0627\u0626\u0644\u0629 \u0641\u064a \u0634\u0642\u0629 \u0645\u0634\u062a\u0631\u0643\u0629 \u0623\u0648 \u0641\u064a \u0645\u0646\u0634\u0623\u0629 \u0645\u062c\u062a\u0645\u0639\u064a\u0629 \u062a\u062d\u062a \u0627\u0644\u0625\u0634\u0631\u0627\u0641",
                        q02_text: " \u0645\u0627 \u0647\u0648 \u0648\u0636\u0639\u0643 \u0627\u0644\u0645\u0639\u064a\u0634\u064a \u0627\u0644\u062d\u0627\u0644\u064a\u061f",
                        q03_option0: " \u0641\u064a \u0627\u0644\u0645\u062c\u0627\u0644 \u0627\u0644\u0637\u0628\u064a",
                        q03_option1: " \u0641\u064a \u0645\u0646\u0634\u0623\u0629 \u0645\u062c\u062a\u0645\u0639\u064a\u0629 (\u0645\u062f\u0631\u0633\u0629 \u060c \u0645\u0631\u0643\u0632 \u0631\u0639\u0627\u064a\u0629 \u0646\u0647\u0627\u0631\u064a\u0629 \u060c \u062c\u0627\u0645\u0639\u0629 \u060c \u0645\u0646\u0632\u0644 \u0648\u0645\u0627 \u0625\u0644\u0649 \u0630\u0644\u0643)",
                        q03_option2: " \u0644\u0627 \u060c \u0641\u064a \u0623\u064a \u0645\u0645\u0627 \u0633\u0628\u0642.",
                        q03_text: " \u0647\u0644 \u062a\u0639\u0645\u0644 \u0641\u064a \u0623\u062d\u062f \u0627\u0644\u0645\u062c\u0627\u0644\u0627\u062a \u0627\u0644\u062a\u0627\u0644\u064a\u0629\u061f",
                        q04_text: " \u0647\u0644 \u062a\u062f\u062e\u0646\u061f",
                        q05_text: " \u0647\u0644 \u0643\u0646\u062a \u0645\u0633\u0627\u0641\u0631\u064b\u0627 \u062e\u0644\u0627\u0644 \u0627\u0644\u0623\u0633\u0627\u0628\u064a\u0639 \u0627\u0644\u0623\u0631\u0628\u0639\u0629 \u0627\u0644\u0645\u0627\u0636\u064a\u0629\u061f (\u062f\u0627\u062e\u0644 \u0628\u0644\u062f\u0643 \u0623\u0648 \u062e\u0627\u0631\u062c\u0647\u0627)",
                        q06_text: " \u0647\u0644 \u0643\u0646\u062a \u0641\u064a \u0634\u0645\u0627\u0644 \u0627\u0644\u0631\u0627\u064a\u0646 - \u0648\u0633\u062a\u0641\u0627\u0644\u064a\u0627\u061f",
                        q07_text: " \u0647\u0644 \u0643\u0646\u062a \u062e\u0627\u0631\u062c \u0628\u0644\u062f\u0643 \u0641\u064a \u0627\u0644\u0623\u0633\u0627\u0628\u064a\u0639 \u0627\u0644\u0623\u0631\u0628\u0639\u0629 \u0627\u0644\u0645\u0627\u0636\u064a\u0629\u061f",
                        q08_option0: "\u0625\u064a\u0637\u0627\u0644\u064a\u0627",
                        q08_option1: "\u0625\u064a\u0631\u0627\u0646",
                        q08_option2: "\u0627\u0644\u0635\u064a\u0646",
                        q08_option3: "\u0643\u0648\u0631\u064a\u0627 \u0627\u0644\u062c\u0646\u0648\u0628\u064a\u0629",
                        q08_option4: "\u0641\u0631\u0646\u0633\u0627",
                        q08_option5: "\u0627\u0644\u0646\u0645\u0633\u0627",
                        q08_option6: "\u0625\u0633\u0628\u0627\u0646\u064a\u0627",
                        q08_option7: "\u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629",
                        q08_option8: " \u0644\u0645 \u0623\u0630\u0647\u0628 \u0625\u0644\u0649 \u0623\u064a \u0645\u0646 \u0627\u0644\u0628\u0644\u062f\u0627\u0646 \u0627\u0644\u0645\u0630\u0643\u0648\u0631\u0629 \u0623\u0639\u0644\u0627\u0647",
                        q08_text: " \u0647\u0644 \u0632\u0631\u062a \u0623\u062d\u062f \u0627\u0644\u0628\u0644\u062f\u0627\u0646 \u0627\u0644\u062a\u0627\u0644\u064a\u0629\u061f",
                        q09_option0: " \u062c\u0646\u0648\u0628 \u0627\u0644\u062a\u064a\u0631\u0648\u0644 (\u064a\u0642\u0627\u0628\u0644 \u0645\u0642\u0627\u0637\u0639\u0629 \u0628\u0648\u0644\u0632\u0627\u0646\u0648) \u0641\u064a \u0645\u0646\u0637\u0642\u0629 \u062a\u0631\u064a\u0646\u062a\u064a\u0646\u0648-\u062c\u0646\u0648\u0628 \u0627\u0644\u062a\u064a\u0631\u0648\u0644",
                        q09_option1: " \u0645\u0646\u0637\u0642\u0629 \u0625\u0645\u064a\u0644\u064a\u0627 \u0631\u0648\u0645\u0627\u0646\u064a\u0627",
                        q09_option2: " \u0645\u0646\u0637\u0642\u0629 \u0644\u0648\u0645\u0628\u0627\u0631\u062f\u064a",
                        q09_option3: " \u0645\u062f\u064a\u0646\u0629 \u0641\u0648 \u0641\u064a \u0645\u0642\u0627\u0637\u0639\u0629 \u0628\u0627\u062f\u0648\u0641\u0627 \u0641\u064a \u0645\u0646\u0637\u0642\u0629 \u0641\u064a\u0646\u064a\u062a\u0648",
                        q09_text: " \u0625\u064a\u0637\u0627\u0644\u064a\u0627: \u0647\u0644 \u0632\u0631\u062a \u0625\u062d\u062f\u0649 \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062a\u0627\u0644\u064a\u0629\u061f",
                        q10_option0: " \u0645\u062d\u0627\u0641\u0638\u0629 \u0642\u0645",
                        q10_option1: "\u0637\u0647\u0631\u0627\u0646",
                        q10_text: " \u0625\u064a\u0631\u0627\u0646: \u0647\u0644 \u0632\u0631\u062a \u0625\u062d\u062f\u0649 \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062a\u0627\u0644\u064a\u0629\u061f",
                        q11_option0: " \u0645\u0642\u0627\u0637\u0639\u0629 \u0647\u0648\u0628\u064a (\u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0645\u062f\u064a\u0646\u0629 \u0648\u0648\u0647\u0627\u0646)",
                        q11_text: " \u0627\u0644\u0635\u064a\u0646: \u0647\u0644 \u0632\u0631\u062a \u0625\u062d\u062f\u0649 \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062a\u0627\u0644\u064a\u0629\u061f",
                        q12_option0: " \u0645\u0642\u0627\u0637\u0639\u0629 \u062c\u064a\u0648\u0646\u062c \u0633\u0627\u0646\u062c \u0628\u0648\u0643 \u062f\u0648 (\u0634\u0645\u0627\u0644 \u062c\u064a\u0648\u0646\u062c \u0633\u0627\u0646\u062c)",
                        q12_text: " \u0643\u0648\u0631\u064a\u0627 \u0627\u0644\u062c\u0646\u0648\u0628\u064a\u0629: \u0647\u0644 \u0632\u0631\u062a \u0625\u062d\u062f\u0649 \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062a\u0627\u0644\u064a\u0629\u061f",
                        q13_option0: " \u0645\u0646\u0637\u0642\u0629 \u063a\u0631\u0627\u0646\u062f \u0625\u064a\u0633\u062a (\u062a\u0634\u0645\u0644 \u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0623\u0644\u0632\u0627\u0633 \u0648\u0627\u0644\u0644\u0648\u0631\u064a\u0646 \u0648\u0627\u0644\u0634\u0627\u0645\u0628\u0627\u064a\u0646 - \u0623\u0631\u062f\u064a\u0646)",
                        q13_text: " \u0641\u0631\u0646\u0633\u0627: \u0647\u0644 \u0632\u0631\u062a \u0625\u062d\u062f\u0649 \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062a\u0627\u0644\u064a\u0629\u061f",
                        q14_option0: " \u0645\u0642\u0627\u0637\u0639\u0629 \u062a\u064a\u0631\u0648\u0644",
                        q14_text: " \u0627\u0644\u0646\u0645\u0633\u0627: \u0647\u0644 \u0632\u0631\u062a \u0625\u062d\u062f\u0649 \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062a\u0627\u0644\u064a\u0629\u061f",
                        q15_option0: "\u0645\u062f\u0631\u064a\u062f",
                        q15_text: " \u0625\u0633\u0628\u0627\u0646\u064a\u0627: \u0647\u0644 \u0632\u0631\u062a \u0625\u062d\u062f\u0649 \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062a\u0627\u0644\u064a\u0629\u061f",
                        q16_option0: " \u0648\u0644\u0627\u064a\u0629 \u0646\u064a\u0648\u064a\u0648\u0631\u0643",
                        q16_option1: " \u0648\u0644\u0627\u064a\u0629 \u0648\u0627\u0634\u0646\u0637\u0646",
                        q16_option2: " \u0648\u0644\u0627\u064a\u0629 \u0643\u0627\u0644\u064a\u0641\u0648\u0631\u0646\u064a\u0627",
                        q16_text: " \u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0623\u0645\u0631\u064a\u0643\u064a\u0629: \u0647\u0644 \u0632\u0631\u062a \u0625\u062d\u062f\u0649 \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062a\u0627\u0644\u064a\u0629\u061f",
                        q17_text: " \u0647\u0644 \u0639\u062f\u062a \u062e\u0644\u0627\u0644 \u0627\u0644\u0640 14 \u064a\u0648\u0645\u064b\u0627 \u0627\u0644\u0645\u0627\u0636\u064a\u0629\u061f",
                        q18_comment: " \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0627\u0644\u0648\u062b\u064a\u0642 \u0645\u0639 \u062d\u0627\u0644\u0629 \u0645\u0624\u0643\u062f\u0629 \u064a\u0639\u0646\u064a: <br> <br>- \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0648\u062c\u0647\u064b\u0627 \u0644\u0648\u062c\u0647 \u0644\u0623\u0643\u062b\u0631 \u0645\u0646 15 \u062f\u0642\u064a\u0642\u0629<br>- \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0627\u0644\u062c\u0633\u062f\u064a \u0627\u0644\u0645\u0628\u0627\u0634\u0631(\u0627\u0644\u0644\u0645\u0633 \u060c \u0627\u0644\u0645\u0635\u0627\u0641\u062d\u0629 \u060c \u0627\u0644\u062a\u0642\u0628\u064a\u0644) <br>- \u0639\u0644\u0649 \u0628\u064f\u0639\u062f \u0645\u062a\u0631\u064a\u0646 \u0627\u0644\u0634\u062e\u0635 \u0644\u0623\u0643\u062b\u0631 \u0645\u0646 15 \u062f\u0642\u064a\u0642\u0629. <br>- \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0645\u0639 \u0623\u0648 \u062a\u0628\u0627\u062f\u0644 \u0633\u0648\u0627\u0626\u0644 \u0627\u0644\u062c\u0633\u0645 <br>- \u0627\u0644\u0639\u064a\u0634 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0634\u0642\u0629",
                        q18_text: " \u0647\u0644 \u0643\u0627\u0646 \u0644\u062f\u064a\u0643 \u0627\u062a\u0635\u0627\u0644 \u0648\u062b\u064a\u0642 \u0628\u062d\u0627\u0644\u0629 \u0645\u0624\u0643\u062f\u0629\u061f",
                        q19_comment: " \u0627\u0644\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0634\u062a\u0628\u0647 \u0628\u0647\u0627 \u0647\u064a \u0634\u062e\u0635 \u064a\u0639\u0627\u0646\u064a \u062d\u0627\u0644\u064a\u064b\u0627 \u0645\u0646 \u062d\u0645\u0649 \u0623\u0648 \u0633\u0639\u0627\u0644 \u0623\u0648 \u0645\u0634\u0627\u0643\u0644 \u0641\u064a \u0627\u0644\u062a\u0646\u0641\u0633 \u0648\u0643\u0627\u0646 \u0644\u062f\u064a\u0647 \u0627\u062a\u0635\u0627\u0644 \u0645\u0639 \u062d\u0627\u0644\u0629 \u062a\u0645 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646\u0647\u0627 \u0623\u0648 \u0643\u0627\u0646 \u0641\u064a \u0645\u0646\u0637\u0642\u0629 \u0628\u0647\u0627 \u062d\u0627\u0644\u0627\u062a \u0645\u062a\u0643\u0631\u0631\u0629 \u0645\u0646 \u062d\u0627\u0644\u0627\u062a \u0627\u0644\u0625\u0635\u0627\u0628\u0629 \u0628\u0641\u064a\u0631\u0648\u0633\u0627\u062a \u0643\u0648\u0631\u0648\u0646\u0627.<br/> \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0627\u0644\u0648\u062b\u064a\u0642 \u0645\u0639 \u062d\u0627\u0644\u0629 \u0645\u0634\u062a\u0628\u0647 \u0641\u064a\u0647\u0627 \u064a\u0639\u0646\u064a: <br/><br>- \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0648\u062c\u0647\u0627 \u0644\u0648\u062c\u0647 \u0644\u0623\u0643\u062b\u0631 \u0645\u0646 15 \u062f\u0642\u064a\u0642\u0629<br>- \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0627\u0644\u062c\u0633\u062f\u064a \u0627\u0644\u0645\u0628\u0627\u0634\u0631(\u0627\u0644\u0644\u0645\u0633 \u060c \u0627\u0644\u0645\u0635\u0627\u0641\u062d\u0629 \u060c \u0627\u0644\u062a\u0642\u0628\u064a\u0644) <br>- \u0639\u0644\u0649 \u0628\u064f\u0639\u062f \u0645\u062a\u0631\u064a\u0646 \u0645\u0646 \u0627\u0644\u0634\u062e\u0635 \u0644\u0623\u0643\u062b\u0631 \u0645\u0646 15 \u062f\u0642\u064a\u0642\u0629. <br>- \u0627\u062a\u0635\u0627\u0644 \u0623\u0648 \u062a\u0628\u0627\u062f\u0644 \u0633\u0648\u0627\u0626\u0644 \u0627\u0644\u062c\u0633\u0645<br>- \u0627\u0644\u0639\u064a\u0634 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u0634\u0642\u0629 ",
                        q19_text: " \u0647\u0644 \u0643\u0627\u0646 \u0644\u062f\u064a\u0643 \u0627\u062a\u0635\u0627\u0644 \u0648\u062b\u064a\u0642 \u0628\u062d\u0627\u0644\u0629 \u0645\u0634\u0628\u0648\u0647\u0629\u061f ",
                        q20_text: " \u0647\u0644 \u0643\u0627\u0646 \u0644\u062f\u064a\u0643 \u0623\u064a \u0627\u062a\u0635\u0627\u0644 \u062e\u0644\u0627\u0644 \u0627\u0644\u0640 14 \u064a\u0648\u0645\u064b\u0627 \u0627\u0644\u0645\u0627\u0636\u064a\u0629\u061f ",
                        q21_text: " \u0647\u0644 \u0639\u0627\u0646\u064a\u062a \u0645\u0646 \u0627\u0644\u062d\u0645\u0649 (\u0641\u0648\u0642 38 \u062f\u0631\u062c\u0629 \u0645\u0626\u0648\u064a\u0629) \u062e\u0644\u0627\u0644 \u0627\u0644\u0640 24 \u0633\u0627\u0639\u0629 \u0627\u0644\u0645\u0627\u0636\u064a\u0629\u061f ",
                        q22_text: " \u0647\u0644 \u0639\u0627\u0646\u064a\u062a \u0645\u0646 \u062d\u0645\u0649 (\u0623\u0643\u062b\u0631 \u0645\u0646 38 \u062f\u0631\u062c\u0629 \u0645\u0626\u0648\u064a\u0629) \u062e\u0644\u0627\u0644 \u0627\u0644\u0623\u064a\u0627\u0645 \u0627\u0644\u0623\u0631\u0628\u0639\u0629 \u0627\u0644\u0645\u0627\u0636\u064a\u0629\u061f ",
                        q23_option0: "< 38 \u062f\u0631\u062c\u0629 \u0645\u0626\u0648\u064a\u0629",
                        q23_option1: "38 \u062f\u0631\u062c\u0629 \u0645\u0626\u0648\u064a\u0629",
                        q23_option2: "39 \u062f\u0631\u062c\u0629 \u0645\u0626\u0648\u064a\u0629",
                        q23_option3: "40 \u062f\u0631\u062c\u0629 \u0645\u0626\u0648\u064a\u0629",
                        q23_option4: "41 \u062f\u0631\u062c\u0629 \u0645\u0626\u0648\u064a\u0629",
                        q23_option5: "42 \u062f\u0631\u062c\u0629 \u0645\u0626\u0648\u064a\u0629",
                        q23_option6: "> 42 \u062f\u0631\u062c\u0629 \u0645\u0626\u0648\u064a\u0629",
                        q23_option7: "\u0644\u0627 \u0623\u0639\u0631\u0641",
                        q23_text: " \u0645\u0627 \u0647\u064a \u0623\u0639\u0644\u0649 \u062f\u0631\u062c\u0629 \u062d\u0631\u0627\u0631\u0629 \u062a\u0642\u0631\u064a\u0628\u064b\u0627\u061f ",
                        q24_text: " \u0647\u0644 \u0644\u062f\u064a\u0643 \u0642\u0634\u0639\u0631\u064a\u0631\u0629\u061f ",
                        q25_text: " \u0647\u0644 \u062a\u0634\u0639\u0631 \u0628\u0627\u0644\u062a\u0639\u0628 \u0623\u0648 \u0627\u0644\u0636\u0639\u0641\u061f ",
                        q26_text: " \u0647\u0644 \u0644\u062f\u064a\u0643 \u0623\u0644\u0645 \u0641\u064a \u0627\u0644\u0623\u0637\u0631\u0627\u0641\u061f ",
                        q27_text: " \u0647\u0644 \u0644\u062f\u064a\u0643 \u0633\u0639\u0627\u0644 \u0645\u0633\u062a\u0645\u0631\u061f ",
                        q28_text: " \u0647\u0644  \u0644\u062f\u064a\u0643 \u0635\u0639\u0648\u0628\u0629 \u0641\u064a \u0627\u0644\u062a\u0646\u0641\u0633\u061f ",
                        q29_text: " \u0647\u0644 \u0644\u062f\u064a\u0643 \u0625\u0633\u0647\u0627\u0644\u061f ",
                        q30_text: " \u0647\u0644 \u0644\u062f\u064a\u0643 \u0627\u0644\u062a\u0647\u0627\u0628 \u0641\u064a \u0627\u0644\u062d\u0644\u0642\u061f ",
                        q31_text: " \u0647\u0644 \u0623\u0635\u0628\u062a \u0628\u0635\u062f\u0627\u0639\u061f ",
                        q32_text: " \u0647\u0644 \u062a\u0634\u0639\u0631 \u0628\u0636\u064a\u0642 \u0641\u064a \u0627\u0644\u062a\u0646\u0641\u0633 \u0628\u0634\u0643\u0644 \u0623\u0633\u0631\u0639 \u0645\u0646 \u0627\u0644\u0645\u0639\u062a\u0627\u062f\u061f ",
                        q33_text: " \u0647\u0644 \u0638\u0647\u0631\u062a \u0627\u0644\u0623\u0639\u0631\u0627\u0636 \u0641\u064a \u0627\u0644\u0640 14 \u064a\u0648\u0645\u064b\u0627 \u0627\u0644\u0645\u0627\u0636\u064a\u0629\u061f",
                        q34_text: " \u0647\u0644 \u062a\u0639\u0627\u0646\u064a \u0645\u0646 \u0623\u0645\u0631\u0627\u0636 \u0631\u0626\u0648\u064a\u0629 \u0645\u0632\u0645\u0646\u0629\u061f",
                        q35_text: " \u0647\u0644 \u062a\u0639\u0627\u0646\u064a \u0645\u0646 \u0645\u0631\u0636 \u0627\u0644\u0633\u0643\u0631\u064a\u061f",
                        q36_text: " \u0647\u0644 \u062a\u0639\u0627\u0646\u064a \u0645\u0646 \u0645\u0631\u0636 \u0641\u064a \u0627\u0644\u0642\u0644\u0628\u061f",
                        q37_text: " \u0647\u0644 \u062a\u0639\u0627\u0646\u064a \u0645\u0646 \u0627\u0644\u0628\u062f\u0627\u0646\u0629\u061f",
                        q38_text: " \u0647\u0644 \u0623\u0646\u062a \u062d\u0627\u0645\u0644\u061f",
                        q39_text: " \u0647\u0644 \u062a\u062a\u0646\u0627\u0648\u0644 \u062d\u0627\u0644\u064a\u064b\u0627 \u0627\u0644\u0645\u0646\u0634\u0637\u0627\u062a\u061f",
                        q40_comment: " \u0623\u0646\u062a \u062a\u0639\u0627\u0646\u064a \u0645\u0646 \u0643\u0628\u062a \u0627\u0644\u0645\u0646\u0627\u0639\u0629 \u0628\u0639\u062f \u0639\u0645\u0644\u064a\u0629 \u0632\u0631\u0639 \u0639\u0636\u0648 \u060c \u0623\u062b\u0646\u0627\u0621 \u0639\u0644\u0627\u062c \u0645\u0631\u0636 \u0627\u0644\u0645\u0646\u0627\u0639\u0629 \u0627\u0644\u0630\u0627\u062a\u064a\u0629 \u0623\u0648 \u0627\u0644\u0639\u0644\u0627\u062c \u0627\u0644\u0643\u064a\u0645\u064a\u0627\u0626\u064a.",
                        q40_text: " \u0647\u0644 \u062a\u062a\u0646\u0627\u0648\u0644 \u062d\u0627\u0644\u064a\u064b\u0627 \u0645\u062b\u0628\u0637\u0627\u062a \u0627\u0644\u0645\u0646\u0627\u0639\u0629\u061f",
                        q41_text: " \u0647\u0644 \u062a\u0645 \u062a\u0644\u0642\u064a\u062d\u0643 \u0636\u062f \u0627\u0644\u0623\u0646\u0641\u0644\u0648\u0646\u0632\u0627 \u0628\u064a\u0646 \u0623\u0643\u062a\u0648\u0628\u0631 2019 \u0648\u0627\u0644\u064a\u0648\u0645\u061f",
                        q42_text: " \u0647\u0644 \u0639\u062f\u062a \u0641\u064a \u0627\u0644\u0640 14 \u064a\u0648\u0645\u064b\u0627 \u0627\u0644\u0645\u0627\u0636\u064a\u0629\u061f",
                        qr_code_button_reset: " \u062d\u0630\u0641 \u0627\u0644\u0625\u062c\u0627\u0628\u0627\u062a",
                        qr_code_headline: " \u0645\u0644\u062e\u0635\u0643 \u0627\u0644\u0634\u062e\u0635\u064a",
                        qr_code_hide_answers: " \u0625\u062e\u0641\u0627\u0621 \u0627\u0644\u0625\u062c\u0627\u0628\u0627\u062a",
                        qr_code_paragraph: " \u0627\u0644\u0631\u062c\u0627\u0621 \u062d\u0641\u0638 \u0631\u0645\u0632 \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0627\u0644\u0633\u0631\u064a\u0639\u0629 \u0627\u0644\u062a\u0627\u0644\u064a \u0648\u0645\u0644\u062e\u0635 \u0625\u062c\u0627\u0628\u0627\u062a\u0643. \u0625\u0646 \u0623\u0645\u0643\u0646 \u060c \u064a\u0631\u062c\u0649 \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0645\u0644\u062e\u0635 \u0648\u0639\u0631\u0636\u0647 \u0625\u0646 \u0623\u0645\u0643\u0646 \u0639\u0644\u0649 \u0637\u0628\u064a\u0628\u0643 \u0627\u0644\u0639\u0627\u0645 \u0623\u0648 \u0641\u064a \u0645\u0648\u0642\u0639 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631.\n\nIf \u0625\u0630\u0627 \u0643\u0646\u062a \u0628\u062d\u0627\u062c\u0629 \u0625\u0644\u0649 \u0645\u063a\u0627\u062f\u0631\u0629 \u0627\u0644\u0645\u0646\u0632\u0644: \u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u062d\u062a\u0641\u0627\u0638 \u0628\u0645\u0633\u0627\u0641\u0629 \u0644\u0627 \u062a\u0642\u0644 \u0639\u0646 \u0628\u0639\u062f \u0645\u062a\u0631\u064a\u0646 \u0639\u0646 \u0627\u0644\u0622\u062e\u0631\u064a\u0646 \u060c \u0644\u0627 \u062a\u0644\u0645\u0633 \u0623\u064a \u0634\u064a\u0621 \u0648\u062d\u0627\u0648\u0644 \u0627\u062d\u062a\u0648\u0627\u0621 \u0627\u0644\u0633\u0639\u0627\u0644 \u0623\u0648 \u0627\u0644\u0639\u0637\u0633 \u062f\u0648\u0646 \u0627\u0644\u062a\u0623\u062b\u064a\u0631 \u0639\u0644\u0649 \u0627\u0644\u0622\u062e\u0631\u064a\u0646.",
                        qr_code_print: " \u0637\u0628\u0627\u0639\u0629",
                        qr_code_show_answers: " \u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0625\u062c\u0627\u0628\u0627\u062a",
                        questionnaire_button_generate_qr: " \u0625\u0646\u0634\u0627\u0621 \u0631\u0645\u0632 \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0627\u0644\u0633\u0631\u064a\u0639\u0629",
                        questionnaire_button_next: "\u0627\u0644\u062a\u0627\u0644\u064a",
                        recommendation_risk_high_additonal_info: "\u0646\u0646\u0635\u062d\u0643 \u0628\u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u0646\u0627\u064a\u0629 \u0627\u0644\u0635\u062d\u064a\u0629 \u0627\u0644\u0645\u0648\u062c\u0648\u062f\u0629 \u0641\u064a \u0645\u0646\u0637\u0642\u062a\u0643 \u0648\u0630\u0643\u0631 \u0627\u0644\u0642\u0635\u0629 \u0627\u0644\u0645\u0631\u0636\u064a\u0629 \u0644\u0644\u0648\u0635\u0648\u0644 \u0644\u0646\u062a\u064a\u062c\u0629 \u0645\u062d\u062f\u062f\u0629 \u0623\u0643\u062b\u0631",
                        recommendation_risk_high_emoji_label: "\u0627\u0644\u062f\u0627\u0626\u0631\u0629 \u0627\u0644\u062d\u0645\u0631\u0627\u0621!",
                        recommendation_risk_high_headline: "\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0644\u0649 \u0623\u0631\u0642\u0627\u0645 \u0645\u0646\u0637\u0642\u062a\u0643 \u0627\u0644\u0645\u062d\u062f\u062f\u0629",
                        recommendation_risk_high_hide_info: "\u0625\u062e\u0641\u0627\u0621 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631",
                        recommendation_risk_high_show_info: "\u0625\u0638\u0647\u0627\u0631 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631",
                        recommendation_risk_high_text: "<p>\u064a\u0628\u062f\u0648 \u0623\u0646\u0643 \u0641\u064a \u062f\u0627\u0626\u0631\u0629 \u0627\u0644\u0646\u0627\u0633 \u0627\u0644\u0645\u0639\u0631\u0636\u064a\u0646 \u0644\u0644\u062e\u0637\u0648\u0631\u0629 \u0627\u0644\u0645\u0639\u064a\u0646\u0629. \n\u0644\u0631\u0628\u0645\u0627 \u064a\u062c\u0628 \u0639\u0644\u064a\u0643 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0627\u0644\u062e\u0637 \u0627\u0644\u0633\u0627\u062e\u0646 \u0627\u0644\u0645\u0648\u062c\u0648\u062f \u0641\u064a \u0645\u0646\u0637\u0642\u062a\u0643 \u0644\u0644\u062e\u0636\u0648\u0639 \u0644\u0641\u062d\u0635 \u0645\u062d\u062f\u062f .</p><p>\u0625\u0630\u0627 \u0643\u0646\u062a \u062a\u0648\u062f \u0627\u0644\u062e\u0631\u0648\u062c \u0645\u0646 \u0645\u0646\u0632\u0644\u0643 \u062f\u0639 \u0645\u0633\u0627\u0641\u0629 2 \u0645\u062a\u0631 \u0628\u064a\u0646\u0643 \u0648\u0628\u064a\u0646 \u0627\u0644\u0623\u0634\u062e\u0627\u0635 \u0627\u0644\u0645\u0642\u0627\u0628\u0644\u064a\u0646 \u0648\u062d\u0627\u0648\u0644 \u0643\u0628\u062d \u0627\u0644\u0633\u0639\u0627\u0644.\u062d\u0627\u0648\u0644 \u0623\u0646 \u062a\u0628\u0642\u0649 \u0641\u064a \u0627\u0644\u0645\u0646\u0632\u0644 \u0648\u062a\u062c\u0646\u0628 \u0645\u062e\u0627\u0644\u0637\u0629 \u0627\u0644\u0622\u062e\u0631\u064a\u0646.</p>",
                        recommendation_risk_low_emoji_label: "\u0627\u0644\u062f\u0627\u0626\u0631\u0629 \u0627\u0644\u0635\u0641\u0631\u0627\u0621",
                        recommendation_risk_low_headline: "\u0643\u0646 \u0639\u0644\u0649 \u062d\u0630\u0631 \u0639\u0646\u062f \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0627\u0644\u0622\u062e\u0631\u064a\u0646\u060c \u0644\u0627\u062a\u0644\u0645\u0633 \u0623\u064a \u0634\u064a\u0621\u060c \u062d\u0627\u0641\u0638 \u0639\u0644\u0649 \u0646\u0638\u0627\u0641\u0629 \u0627\u0644\u064a\u062f\u064a\u0646",
                        recommendation_risk_low_text: '<p><\u0642\u0648\u064a>\u0644\u0642\u062f \u0643\u0646\u062a \u0641\u064a \u0645\u0646\u0637\u0642\u0629 \u062e\u0637\u0631 \u0623\u0648 \u0631\u0628\u0645\u0627 \u0643\u0646\u062a \u0639\u0644\u0649 \u0627\u062a\u0635\u0627\u0644 \u0628\u0634\u062e\u0635 \u0645\u0635\u0627\u0628 \u060c \u064a\u0631\u062c\u0649 \u0627\u0644\u0628\u0642\u0627\u0621 \u0641\u064a \u0627\u0644\u0645\u0646\u0632\u0644 \u0648\u062a\u062c\u0646\u0628 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u063a\u064a\u0631 \u0627\u0644\u0636\u0631\u0648\u0631\u064a \u0645\u0639 \u0627\u0644\u0622\u062e\u0631\u064a\u0646.</strong>\n\u0648\u0644\u0643\u0646 \u0645\u0633\u062a\u0642\u0628\u0644\u0627, \u0625\u0630\u0627 \u062a\u0631\u0627\u062c\u0639\u062a \u062d\u0627\u0644\u062a\u0643 \u0627\u0644\u0635\u062d\u064a\u0629 \u0641\u064a \u0627\u0644\u0623\u064a\u0627\u0645 \u0627\u0644\u0642\u0644\u064a\u0644\u0629 \u0627\u0644\u0645\u0642\u0628\u0644\u0629 \u0641\u0639\u0644\u064a\u0643 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0641\u0648\u0631\u0627 \u0628\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0637\u0628\u064a \u0627\u0644\u0630\u064a \u062a\u062a\u0628\u0639 \u0644\u0647.\n\n\u0645\u0646 \u0641\u0636\u0644\u0643 \u062a\u062c\u0646\u0628 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u0644\u0622\u062e\u0631\u064a\u0646 \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0641\u062a\u0631\u0629 \u0648\u0644\u0627 \u062a\u0644\u0645\u0633 \u0623\u064a \u0634\u064a\u0621" target="_blank">correctly</a> \u0627\u0644\u0633\u0639\u0627\u0644 \u0648\u0627\u0644\u0639\u0637\u0633 \u064a\u062c\u0628 \u0623\u0644\u0627 \u064a\u0643\u0648\u0646 \u0628\u062c\u0647\u0629 \u0623\u064a \u0634\u062e\u0635 \u064a\u062c\u0644\u0633 \u0645\u0642\u0627\u0628\u0644\u0643.</p>',
                        recommendation_risk_medium_emoji_label: "\u0627\u0644\u062f\u0627\u0626\u0631\u0629 \u0627\u0644\u0628\u0631\u062a\u0642\u0627\u0644\u064a\u0629",
                        recommendation_risk_medium_headline: "\u0627\u0628\u0642 \u0641\u064a \u0627\u0644\u0645\u0646\u0632\u0644 \u0648\u0627\u0639\u062a\u0646\u064a \u0628\u0635\u062d\u062a\u0643",
                        recommendation_risk_medium_text: "<p>\u0628\u0645\u0627 \u0623\u0646\u0643 \u0644\u0645 \u062a\u0643\u0646 \u0641\u064a \u0645\u0646\u0637\u0642\u0629 \u0645\u0635\u0646\u0641\u0629 \u0643\u062e\u0637\u0631\u0629 \u0648\u0644\u0645 \u062a\u062a\u0635\u0644 \u0628\u0623\u0634\u062e\u0627\u0635 \u062b\u0628\u062a\u062a \u0625\u0635\u0627\u0628\u062a\u0647\u0645 (\u0623\u0648 \u062d\u062a\u0649 \u062d\u0627\u0644\u0627\u062a \u0645\u0634\u062a\u0628\u0647 \u0628\u0625\u0635\u0627\u0628\u062a\u0647\u0627), \u0644\u064a\u0633\u062a \u0647\u0646\u0627\u0643 \u0623\u064a\u0629 \u0646\u0635\u0627\u0626\u062d \u0636\u0631\u0648\u0631\u064a\u0629 \u0644\u0643 \u0641\u064a \u0627\u0644\u0648\u0642\u062a \u0627\u0644\u062d\u0627\u0644\u064a. <strong>\u0648\u0644\u0643\u0646 \u0641\u064a \u062d\u0627\u0644 \u0637\u0631\u0623 \u062a\u063a\u064a\u064a\u0631 \u0639\u0644\u0649 \u0648\u0636\u0639\u0643 \u0627\u0644\u0635\u062d\u064a \u0648\u0623\u062d\u0633\u0633\u062a \u0628\u0625\u062d\u062f\u0649 \u0627\u0644\u0623\u2018\u0631\u0627\u0636 \u0639\u0644\u064a\u0643 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0645\u0639 \u0637\u0628\u064a\u0628\u0643 \u0627\u0644\u062e\u0627\u0635 \u0623\u0648 \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0639\u0646\u0643.</strong>\u0625\u0630\u0627 \u062e\u0631\u062c\u062a \u0645\u0646 \u0627\u0644\u0645\u0646\u0632\u0644 \u0644\u0627 \u062a\u0642\u0645 \u0623\u064a \u0627\u062a\u0635\u0627\u0644 \u0628\u0627\u0644\u0646\u0627\u0633 \u0627\u0644\u0622\u062e\u0631\u064a\u0646 \u0648\u062a\u062c\u0646\u0628 \u0627\u0644\u0639\u0637\u0633 \u0623\u0648 \u0627\u0644\u0633\u0639\u0627\u0644 \u0628\u0627\u0644\u0642\u0631\u0628 \u0645\u0646 \u063a\u064a\u0631\u0643.</p>",
                        recommendation_risk_slight_emoji_label: "\u0627\u0644\u062f\u0627\u0626\u0631\u0629 \u0627\u0644\u062e\u0636\u0631\u0627\u0621",
                        recommendation_risk_slight_headline: "\u0645\u0646 \u0641\u0636\u0644\u0643 \u0627\u0628\u0642 \u0641\u064a \u0627\u0644\u0645\u0646\u0632\u0644",
                        recommendation_risk_slight_text: '<p>\u0641\u064a \u0627\u0644\u0648\u0642\u062a \u0627\u0644\u062d\u0627\u0644\u064a \u0623\u0646\u062a \u0644\u0633\u062a \u0628\u062d\u0627\u062c\u0629 \u0644\u0623\u064a \u0645\u0633\u0627\u0639\u062f\u0629 \u0637\u0628\u064a\u0629:</p><ul><li>\u0644\u0645 \u062a\u0642\u0645 \u0628\u0627\u062a\u0635\u0627\u0644 \u0645\u0639 \u0623\u0634\u062e\u0627\u0635 \u0645\u0635\u0627\u0628\u064a\u0646</li><li>\u0644\u0645 \u062a\u0643\u0646 \u0641\u064a \u0627\u0644\u0645\u0646\u0627\u0637\u0642 \u0627\u0644\u062a\u064a \u062a\u0639\u062a\u0628\u0631 \u062e\u0637\u0631\u0629 \u0646 \u062d\u064a\u062b \u062a\u0641\u0634\u064a \u0627\u0644\u0627\u0646\u062a\u0634\u0627\u0631</li><li>\u0644\u064a\u0633\u062a \u0644\u062f\u064a\u0643 \u0623\u064a\u0629 \u0623\u0639\u0631\u0627\u0636</li></ul><p>\u0645\u0646 \u0641\u0636\u0644\u0643 \u0642\u0645 \u0628\u0627\u062d\u062a\u064a\u0627\u0637\u0627\u062a\u0643 \u0627\u0644\u0645\u0639\u062a\u0627\u062f\u0629 <a href="\u0646\u0638\u0627\u0641\u0629 \u0627\u0644\u064a\u062f\u064a\u0646.</p><p>\u0625\u0630\u0627 \u0638\u0647\u0631\u062a \u0639\u0644\u064a\u0643 \u0627\u0644\u0623\u0639\u0631\u0627\u0636 \u062e\u0644\u0627\u0644 \u0627\u0644\u0623\u064a\u0627\u0645 \u0627\u0644\u0642\u0644\u064a\u0644\u0629 \u0627\u0644\u0645\u0642\u0628\u0644\u0629, \u0627\u062a\u0635\u0644 \u0628\u0645\u0631\u0627\u0643\u0632 \u0627\u0644\u062f\u0639\u0645 \u0627\u0644\u0635\u062d\u064a \u0627\u0644\u0645\u062e\u0635\u0635\u0629 \u0641\u064a \u0628\u0644\u062f\u0643.</p>',
                        start_headline: " \u062a\u0648\u0635\u064a\u0627\u062a \u0648\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u062a\u062a\u0639\u0644\u0642 \u0628\u0641\u064a\u0631\u0648\u0633 \u0643\u0648\u0631\u0648\u0646\u0627",
                        start_legal_paragraph: "<strong> \u0647\u0630\u0627 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0644\u064a\u0633 \u062a\u0637\u0628\u064a\u0642\u064b\u0627 \u064a\u0642\u062f\u0645 \u062e\u062f\u0645\u0627\u062a \u062a\u0634\u062e\u064a\u0635\u064a\u0629. \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u064a\u0639\u0645\u0644 \u0639\u0644\u0649 \u062a\u0628\u0633\u064a\u0637 \u0627\u0644\u0625\u062c\u0631\u0627\u0621\u0627\u062a \u0627\u0644\u0645\u062a\u0628\u0639\u0629. </strong>",
                        start_paragraph_1_option_1: " \u062c\u0647\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0641\u064a \u0628\u0631\u0644\u064a\u0646",
                        start_paragraph_1_option_2: " \u0627\u0644\u062a\u0634\u062c\u064a\u0639 \u0639\u0644\u0649 \u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0637\u0628\u064a\u0628",
                        start_paragraph_1_option_3: "\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0644\u062a\u0642\u0644\u064a\u0644 \u0627\u0644\u0645\u062e\u0627\u0637\u0631",
                        start_paragraph_1_option_4: "\u062a\u062d\u0633\u064a\u0646 \u0645\u0633\u062a\u0648\u0649 \u062e\u062f\u0645\u0629 \u0627\u0644\u0645\u0631\u064a\u0636",
                        start_paragraph_2: '<p> \u0625\u0646  \u0644\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0628\u0627\u0644\u0643\u0634\u0641 \u0639\u0646 \u0643\u0648\u0631\u0648\u0646\u0627CovApp \u0647\u0648 \u0628\u0631\u0646\u0627\u0645\u062c \u062a\u0645 \u062a\u0637\u0648\u064a\u0631\u0647 \u0628\u0648\u0627\u0633\u0637\u0629 Charit\xc3\xa9 \u0628\u0627\u0644\u062a\u0639\u0627\u0648\u0646 \u0645\u0639 Data4life. \u064a\u0645\u0643\u0646\u0643 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0647 \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u062a\u0648\u0635\u064a\u0627\u062a \u0644\u0644\u0639\u0645\u0644 \u0641\u064a \u0628\u0636\u0639 \u062f\u0642\u0627\u0626\u0642 \u0641\u0642\u0637. \u0633\u064a\u0633\u0623\u0644\u0643 \u0627\u0644\u0628\u0631\u0646\u0627\u0645\u062c \u0639\u062f\u0629 \u0623\u0633\u0626\u0644\u0629 \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0627\u0644\u0623\u0639\u0631\u0627\u0636 \u0648\u0633\u062c\u0644 \u0627\u0644\u0633\u0641\u0631 \u0648\u062c\u0647\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0627\u0644\u0645\u062d\u062a\u0645\u0644\u0629. \u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u062a\u0648\u0635\u064a\u0627\u062a \u0627\u0644\u0639\u0645\u0644 \u0648\u062c\u0647\u0627\u062a \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0630\u0627\u062a \u0627\u0644\u0635\u0644\u0629 \u0648\u0627\u0644\u0646\u062a\u0627\u0626\u062c \u0627\u0644\u0645\u0646\u0638\u0645\u0629 \u060c \u0641\u0625\u0646 \u0627\u0644\u063a\u0631\u0636 \u0645\u0646 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0647\u0648 \u062a\u062d\u0633\u064a\u0646 \u062a\u062f\u0641\u0642 \u0627\u0644\u0645\u0631\u0636\u0649 \u0625\u0644\u0649 \u0645\u0648\u0627\u0642\u0639 \u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631 \u0648\u0633\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0625\u0633\u0639\u0627\u0641 \u0648\u0627\u0644\u0639\u064a\u0627\u062f\u0627\u062a. \u064a\u0631\u062c\u0649 \u0645\u0644\u0627\u062d\u0638\u0629 \u0623\u0646 \u0647\u0630\u0627 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0644\u0627 \u064a\u0648\u0641\u0631 \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062a\u0634\u062e\u064a\u0635.</p> \n<p> \u0628\u0647\u0630\u0647 \u0627\u0644\u0637\u0631\u064a\u0642\u0629 \u060c \u064a\u0645\u0643\u0646 \u0623\u0646 \u064a\u0633\u0627\u0639\u062f\u0643 CovApp \u0639\u0644\u0649 \u062a\u0642\u064a\u064a\u0645 \u062d\u0627\u0644\u062a\u0643 \u0627\u0644\u0637\u0628\u064a\u0629 \u0628\u0634\u0643\u0644 \u0623\u0641\u0636\u0644 \u060c \u0648\u062a\u0642\u062f\u064a\u0645 \u062a\u0648\u0635\u064a\u0627\u062a \u0628\u0634\u0623\u0646 \u0632\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0637\u0628\u064a\u0628 \u0623\u0648 \u0627\u062e\u062a\u0628\u0627\u0631 \u0641\u064a\u0631\u0648\u0633 \u0643\u0648\u0631\u0648\u0646\u0627 \u0648\u062a\u0644\u062e\u064a\u0635 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0637\u0628\u064a\u0629 \u0630\u0627\u062a \u0627\u0644\u0635\u0644\u0629 \u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0627\u0644\u0637\u0628\u064a\u0628 \u0641\u064a \u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0644. </p><p><strong> \u0643\u064a\u0641 \u064a\u0645\u0643\u0646\u0646\u064a \u0627\u0633\u062a\u062e\u062f\u0627\u0645 CovApp? </strong></p>\n<p><strong>1. \u0627\u0628\u062f\u0623 \u0627\u0644\u0627\u0633\u062a\u0637\u0644\u0627\u0639 \u0628\u0627\u0644\u0646\u0642\u0631 \u0641\u0648\u0642 "\u0628\u062f\u0621 \u0627\u0644\u0627\u0633\u062a\u0628\u064a\u0627\u0646".</strong></p><p>\u064a\u062d\u062a\u0648\u064a \u0627\u0644\u0627\u0633\u062a\u0637\u0644\u0627\u0639 \u0639\u0644\u0649 \u0623\u0633\u0626\u0644\u0629 \u062a\u062a\u0639\u0644\u0642 \u0628\u0627\u0644\u0623\u0639\u0631\u0627\u0636 \u0627\u0644\u062d\u0627\u0644\u064a\u0629 \u0648\u0633\u062c\u0644 \u0627\u0644\u0633\u0641\u0631 \u0648\u0627\u0644\u0627\u062a\u0635\u0627\u0644.   \u0633\u064a\u0633\u062a\u063a\u0631\u0642 \u0625\u0643\u0645\u0627\u0644 \u0627\u0644\u0627\u0633\u0646\u0637\u0644\u0627\u0639 \u062d\u0648\u0627\u0644\u064a 5 \u062f\u0642\u0627\u0626\u0642. \u064a\u0631\u062c\u0649 \u0645\u062d\u0627\u0648\u0644\u0629 \u0627\u0644\u0625\u062c\u0627\u0628\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0628\u0623\u0643\u0628\u0631 \u0642\u062f\u0631 \u0645\u0645\u0643\u0646 \u0645\u0646 \u0627\u0644\u062f\u0642\u0629. </p>\n<p><strong>2.\u0627\u0644\u0627\u0633\u062a\u0637\u0644\u0627\u0639 \u0648\u0627\u0644\u062a\u0648\u0635\u064a\u0627\u062a.</strong></p><p> \u0641\u064a \u0646\u0647\u0627\u064a\u0629 \u0627\u0644\u0627\u0633\u062a\u0637\u0644\u0627\u0639 \u060c \u064a\u0644\u062e\u0635 CovApp \u0625\u062c\u0627\u0628\u0627\u062a\u0643 \u0648\u064a\u0642\u062f\u0645 \u0644\u0643 \u062a\u0648\u0635\u064a\u0629 \u0644\u0644\u0639\u0645\u0644 \u060c \u0639\u0644\u0649 \u0633\u0628\u064a\u0644 \u0627\u0644\u0645\u062b\u0627\u0644 <ul><li>\u0646\u0635\u064a\u062d\u0629 \u0644\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0627\u0644\u062e\u0637 \u0627\u0644\u0633\u0627\u062e\u0646 \u0644\u0643\u0644 \u0645\u0627 \u064a\u062a\u063a\u0644\u0642 \u0628\u0627\u0644\u0641\u064a\u0631\u0648\u0633 \u0627\u0644\u062a\u0627\u062c\u064a </li><li>\u0646\u0635\u064a\u062d\u0629 \u0644\u0644\u0627\u062a\u0635\u0627\u0644 \u0628\u0637\u0628\u064a\u0628\u0643 \u0627\u0644\u0639\u0627\u0645 </li><li>\u0627\u0644\u062a\u0642\u0644\u064a\u0644 \u0645\u0646 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a </li></ul></p>\n<p><strong>3. \u0627\u0644\u062a\u062d\u0636\u064a\u0631 \u0644\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0645\u0631\u064a\u0636</strong></p><p>\u0639\u0646\u062f \u062a\u0642\u062f\u064a\u0645 \u0627\u0644\u0645\u0634\u0648\u0631\u0629 \u0644\u0632\u064a\u0627\u0631\u0629 \u0627\u0644\u0637\u0628\u064a\u0628 \u0627\u0648 \u0632\u064a\u0627\u0631\u0629 \u0623\u062d\u062f \u0645\u0648\u0627\u0642\u0639 \u0627\u062e\u062a\u0628\u0627\u0631 \u0641\u064a\u0631\u0648\u0633 \u0643\u0648\u0631\u0648\u0646\u0627\u060c \u064a\u0631\u062c\u0649 \u0625\u062d\u0636\u0627\u0631 \u0631\u0645\u0632 \u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0627\u0644\u0633\u0631\u064a\u0639\u0629 \u0623\u0648 \u0637\u0628\u0627\u0639\u0629 \u0645\u0644\u062e\u0635\u0643 \u0627\u0644\u0634\u062e\u0635\u064a.\u064a\u0645\u0643\u0646 \u0644\u0628\u0639\u0636 \u0645\u0648\u0627\u0642\u0639 \u0627\u062e\u062a\u0628\u0627\u0631 \u0641\u064a\u0631\u0648\u0633 \u0643\u0648\u0631\u0648\u0646\u0627\u0645\u0633\u062d \u0627\u0644\u0631\u0645\u0632 \u062d\u062a\u0649 \u064a\u062a\u0645 \u062a\u0648\u0641\u064a\u0631 \u0625\u062c\u0627\u0628\u0627\u062a\u0643 \u0645\u0628\u0627\u0634\u0631\u0629 \u0625\u0644\u0649 \u0627\u0644\u0637\u0627\u0642\u0645 \u0627\u0644\u0637\u0628\u064a \u0644\u062f\u064a\u0646\u0627\u0648\u064a\u0645\u0643\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645\u0647\u0627 \u0644\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643.\u0647\u0630\u0627 \u064a\u0633\u0627\u0639\u062f \u0639\u0644\u0649 \u062a\u0633\u0631\u064a\u0639 \u0639\u0645\u0644\u064a\u0629 \u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629 \u0627\u0644\u0637\u0628\u064a\u0629. \nIf \u0641\u064a \u062d\u0627\u0644\u0629 \u0632\u064a\u0627\u0631\u0629 \u0637\u0628\u064a\u0628\u0643 \u0627\u0644\u0645\u062d\u0644\u064a \u0623\u0648 \u0623\u064a \u0645\u0648\u0642\u0639 \u0622\u062e\u0631 \u0644\u0627\u062e\u062a\u0628\u0627\u0631 Coronavirus \u060c \u064a\u0631\u062c\u0649 \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0645\u0644\u062e\u0635 \u0627\u0644\u0645\u0642\u062f\u0645 \u0648\u0625\u062d\u0636\u0627\u0631\u0647 \u0625\u0644\u0649 \u0627\u0633\u062a\u0634\u0627\u0631\u062a\u0643.</p>',
                        start_paragraph_3: "<p>\u064a\u062a\u0645 \u062a\u0642\u064a\u064a\u0645 \u0627\u0644\u0627\u0633\u062a\u0637\u0644\u0627\u0639 \u0628\u0634\u0643\u0644 \u0645\u062c\u0647\u0648\u0644\u060c \u0648\u0633\u062a\u062a\u0645 \u0645\u0639\u0627\u0644\u062c\u0629 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0639\u0644\u0649 \u062c\u0647\u0627\u0632\u0643(\u0645\u062b\u0644 \u0647\u0627\u062a\u0641\u0643 \u0627\u0644\u0630\u0643\u064a). \u0648\u0644\u0646 \u064a\u062a\u0645 \u0625\u0639\u0627\u062f\u0629 \u062a\u0648\u062c\u064a\u0647 \u0623\u064a \u0645\u0646 \u0625\u062c\u0627\u0628\u0627\u062a\u0643 \u0625\u0644\u064a\u0646\u0627 \u0623\u0648 \u0625\u0644\u0649 \u0645\u062e\u062f\u0645 \u0634\u0628\u0643\u062a\u0646\u0627\u0623\u0648 \u0623\u064a \u0637\u0631\u0641 \u062b\u0627\u0644\u062b \u0622\u062e\u0631. </p>",
                        start_paragraph_4: "<p>\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0647\u0630\u0627 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u063a\u064a\u0631 \u0645\u0624\u0647\u0644 \u0644\u0639\u0644\u0627\u062c \u0637\u0628\u064a. \u0625\u0630\u0627 \u0643\u0646\u062a \u062a\u0634\u0639\u0631 \u062d\u0627\u0644\u064a\u0627 \u0628\u0645\u0631\u0636 \u062e\u0637\u064a\u0631\u060c \u0641\u064a\u0631\u062c\u0649 \u0637\u0644\u0628 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629 \u0627\u0644\u0637\u0628\u064a\u0629. </p>",
                        start_sub_headline_1: " \u0627\u0633\u062a\u0639\u062f \u0644\u0632\u064a\u0627\u0631\u0629 \u0637\u0628\u064a\u0628\u0643",
                        start_sub_headline_2: "\u0645\u0627 \u0647\u0648 CovApp?",
                        start_sub_headline_3: " \u0645\u0627 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062a\u064a \u0633\u064a\u062a\u0645 \u0625\u0631\u0633\u0627\u0644\u0647\u0627 \u0639\u0628\u0631 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",
                        start_sub_headline_4: " \u0625\u0630\u0627 \u0643\u0646\u062a \u0641\u064a \u0634\u0643 \u060c \u0627\u0633\u062a\u0634\u0631 \u0627\u0644\u0637\u0628\u064a\u0628!",
                        input_date_help: "\u064a\u062c\u0628 \u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0633\u0646\u0629.\u0634\u0647\u0631.\u064a\u0648 \u0645 \u0645\u062b\u0627\u0644: 01.03.2020",
                        welcome_text: "...\20\u0645\u0631\u062D\u0628\u0627\20\u0628\u0643\20\u0641\u064A\20\u062A\u0637\u0628\u064A\u0642\20\u0627\u0644\u0643\u0627\u0634\u0641\20\u0639\u0644\u0649\20\u0627\u062D\u062A\u0645\u0644\u0644\u064A\u062A\u0629\20\u0627\u0635\u0627\u0628\u062A\u0643\20\u0628\u0641\u064A\u0631\u0648\u0633\20\u0643\u0648\u0631\u0648\u0646\u0627\20\u064A\u0631\u062C\u0649\20\u0645\u0634\u0627\u0631\u0643\u0629\20\u0623\u0633\u0626\u0644\u0629\20\u0627\u0644\u062A\u0642\u064A\u064A\u0645\20\u0627\u0644\u0623\u0648\u0644\u064A\20\u0644\u0627\u062D\u062A\u0645\u0627\u0644\u064A\u0629\20\u0625\u0635\u0627\u0628\u062A\u0643\20\u0628\u0641\u064A\u0631\u0648\u0633\20\u0643\u0648\u0631\u0648\u0646\u0627\20\u0643\u0644\20\u0627\u0644\u062D\u0642\u0648\u0642\20\u0645\u062D\u0641\u0648\u0636\u0629\20\u0644\u062F\u0649\20@KhenchelaDesign7"
                    }
                },
                _ = u.LANG || "en",
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return h[_] && h[_][e] ? h[_][e] : e
                },
                g = function(e) {
                    Object(p.a)(n, e);
                    var t = Object(c.a)(n);

                    function n() {
                        return Object(s.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(l.a)(n, [{
                        key: "render",
                        value: function() {
                            return a.a.createElement("div", {
                                className: "covid__text--welcome"
                            }, a.a.createElement("p", {
                                style: {
                                    margin: "20px 0"
                                }
                            }, this.props.text), a.a.createElement("button", {
                                onClick: this.props.onStart,
                                className: "covid__btn start"
                            }, m("button_start_now")))
                        }
                    }]), n
                }(a.a.Component);
            g.defaultProps = {
                onStart: function() {},
                text: m("welcome_text")
            };
            var y = function(e) {
                Object(p.a)(n, e);
                var t = Object(c.a)(n);

                function n(e) {
                    var o;
                    return Object(s.a)(this, n), (o = t.call(this, e)).onFormChange = function(e) {
                        o.setState({
                            answer: e.target.value,
                            btnDisabled: !1
                        })
                    }, o.onInputChange = function(e) {
                        var t = e.target.value.split("-").join(".");
                        o.setState({
                            answer: t,
                            dateError: o.validateDate(t),
                            btnDisabled: o.validateDate(t)
                        })
                    }, o.validateDate = function(e) {
                        var t = e.split(".");
                        return 3 !== t.length || (t[0].length < 4 || parseInt(t[0], 10) > 2020 || parseInt(t[0], 10) < 1990 || (t[1].length < 2 || parseInt(t[1], 10) > 12 || (t[2].length < 2 || parseInt(t[2], 10) > 31)))
                    }, o.onSubmit = function(e) {
                        e.preventDefault(), o.props.onAddAnswer(o.props.question, o.state.answer)
                    }, o.state = {
                        btnDisabled: !0,
                        dateError: !1,
                        answer: ""
                    }, o.input = a.a.createRef(), o
                }
                return Object(l.a)(n, [{
                    key: "componentWillReceiveProps",
                    value: function(e) {
                        e.question.id !== this.props.question.id && this.setState({
                            btnDisabled: !0,
                            answer: "",
                            dateError: !1
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props.question;
                        return a.a.createElement("div", {
                            className: "covid__question"
                        }, a.a.createElement("form", {
                            method: "GET",
                            action: "#",
                            onSubmit: this.onSubmit
                        }, a.a.createElement("div", {
                            className: "question--header"
                        }, a.a.createElement("div", {
                            className: "btn--back"
                        }, a.a.createElement("button", {
                            onClick: this.props.onBack,
                            type: "button",
                            className: "covid__btnback"
                        })), a.a.createElement("div", {
                            className: "question__title"
                        }, m(t.text))), a.a.createElement("div", {
                            className: "covid__progress",
                            style: {
                                width: "".concat(this.props.progress, "%")
                            }
                        }), a.a.createElement("div", {
                            className: "answers__container"
                        }, t.comment && a.a.createElement("p", {
                            className: "covid__comment",
                            dangerouslySetInnerHTML: {
                                __html: m(t.comment)
                            }
                        }), a.a.createElement("div", {
                            className: "answers"
                        }, "radio" === t.inputType && a.a.createElement(a.a.Fragment, null, t.options.map((function(t) {
                            return a.a.createElement("div", {
                                className: "answer--line",
                                key: "input_".concat(t)
                            }, a.a.createElement("div", {
                                className: "covid__radio"
                            }, a.a.createElement("input", {
                                type: "radio",
                                name: "answer",
                                value: t,
                                required: !0,
                                onChange: e.onFormChange,
                                checked: t === e.state.answer
                            }), a.a.createElement("span", null)), a.a.createElement("div", {
                                className: "covid__title"
                            }, m(t)))
                        }))), "date" === t.inputType && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                            className: "answer__line__date"
                        }, a.a.createElement("div", {
                            className: "input--wrapper".concat(this.state.dateError ? " covid_in_error" : "")
                        }, a.a.createElement("label", {
                            onClick: function() {
                                e.input.current.focus()
                            }
                        }, m("input_date_label")), a.a.createElement("input", {
                            ref: this.input,
                            type: "date",
                            pattern: "[0-9]{2}.[0-9]{2}.[0-9]{4}",
                            placeholder: "DD.MM.YYYY",
                            onChange: this.onInputChange
                        }), this.state.dateError && a.a.createElement("div", {
                            className: "input-date__error"
                        }, m("input_date_error"))), a.a.createElement("div", {
                            className: "help"
                        }, m("input_date_help"))))), a.a.createElement("button", {
                            type: "submit",
                            className: "covid__btn next",
                            disabled: this.state.btnDisabled
                        }, m("questionnaire_button_next")))))
                    }
                }]), n
            }(a.a.Component);
            y.defaultProps = {
                question: {},
                onBack: function() {},
                onAddAnswer: function() {}
            };
            var f = [{
                    id: "q01",
                    xmlCode: "A",
                    category: "personalInfo",
                    comment: null,
                    text: "q01_text",
                    inputType: "radio",
                    options: ["q01_option0", "q01_option1", "q01_option2", "q01_option3", "q01_option4", "q01_option5"],
                    nextQuestionMap: null,
                    scoreMap: null
                }, {
                    id: "q02",
                    xmlCode: "B",
                    category: "personalInfo",
                    comment: null,
                    text: "q02_text",
                    inputType: "radio",
                    options: ["q02_option0", "q02_option1"],
                    nextQuestionMap: null,
                    scoreMap: null
                }, {
                    id: "q03",
                    xmlCode: "C",
                    category: "personalInfo",
                    comment: null,
                    text: "q03_text",
                    inputType: "radio",
                    options: ["q03_option0", "q03_option1", "q03_option2"],
                    nextQuestionMap: null,
                    scoreMap: null
                }, {
                    id: "q04",
                    xmlCode: "D",
                    category: "personalInfo",
                    comment: null,
                    text: "q04_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: null,
                    scoreMap: null
                }, {
                    id: "q05",
                    xmlCode: "E",
                    category: "travelling",
                    comment: null,
                    text: "q05_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: ["q06", "q18"],
                    scoreMap: null
                }, {
                    id: "q07",
                    xmlCode: "G",
                    category: "travelling",
                    comment: null,
                    text: "q07_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: ["q08", "q18"],
                    scoreMap: null
                }, {
                    id: "q08",
                    xmlCode: "H",
                    category: "travelling",
                    comment: null,
                    text: "q08_text",
                    inputType: "radio",
                    options: ["q08_option0", "q08_option1", "q08_option2", "q08_option3", "q08_option4", "q08_option5", "q08_option6", "q08_option7", "q08_option8"],
                    nextQuestionMap: ["q09", "q10", "q11", "q12", "q13", "q14", "q15", "q16", "q18"],
                    scoreMap: [1, 1, 0, 0, 0, 0, 0, 0, 0]
                }, {
                    id: "q09",
                    xmlCode: "I",
                    category: "travelling",
                    comment: null,
                    text: "q09_text",
                    inputType: "radio",
                    options: ["q09_option0", "q09_option1", "q09_option2", "q09_option3", "answer_region_no"],
                    nextQuestionMap: "q17",
                    scoreMap: [1, 1, 1, 1, 0]
                }, {
                    id: "q10",
                    xmlCode: "J",
                    category: "travelling",
                    comment: null,
                    text: "q10_text",
                    inputType: "radio",
                    options: ["q10_option0", "q10_option1", "answer_region_no"],
                    nextQuestionMap: "q17",
                    scoreMap: [1, 1, 0]
                }, {
                    id: "q11",
                    xmlCode: "K",
                    category: "travelling",
                    comment: null,
                    text: "q11_text",
                    inputType: "radio",
                    options: ["q11_option0", "answer_region_no"],
                    nextQuestionMap: "q17",
                    scoreMap: [1, 0]
                }, {
                    id: "q12",
                    xmlCode: "L",
                    category: "travelling",
                    comment: null,
                    text: "q12_text",
                    inputType: "radio",
                    options: ["q12_option0", "answer_region_no"],
                    nextQuestionMap: "q17",
                    scoreMap: [1, 0]
                }, {
                    id: "q13",
                    xmlCode: "M",
                    category: "travelling",
                    comment: null,
                    text: "q13_text",
                    inputType: "radio",
                    options: ["q13_option0", "answer_region_no"],
                    nextQuestionMap: "q17",
                    scoreMap: [1, 0]
                }, {
                    id: "q14",
                    xmlCode: "N",
                    category: "travelling",
                    comment: null,
                    text: "q14_text",
                    inputType: "radio",
                    options: ["q14_option0", "answer_region_no"],
                    nextQuestionMap: "q17",
                    scoreMap: [1, 0]
                }, {
                    id: "q15",
                    xmlCode: "O",
                    category: "travelling",
                    comment: null,
                    text: "q15_text",
                    inputType: "radio",
                    options: ["q15_option0", "answer_region_no"],
                    nextQuestionMap: "q17",
                    scoreMap: [1, 0]
                }, {
                    id: "q16",
                    xmlCode: "TB",
                    category: "travelling",
                    comment: null,
                    text: "q16_text",
                    inputType: "radio",
                    options: ["q16_option0", "q16_option1", "q16_option2", "answer_region_no"],
                    nextQuestionMap: "q17",
                    scoreMap: [1, 1, 1, 0]
                }, {
                    id: "q17",
                    xmlCode: "R3",
                    category: "returning",
                    comment: null,
                    text: "q17_text",
                    inputType: "date",
                    options: null,
                    nextQuestionMap: null,
                    scoreMap: null
                }, {
                    id: "q18",
                    xmlCode: "Q",
                    category: "contact",
                    comment: "q18_comment",
                    text: "q18_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: ["q20", "q19"],
                    scoreMap: [1, 0]
                }, {
                    id: "q19",
                    xmlCode: "R",
                    category: "contact",
                    comment: "q19_comment",
                    text: "q19_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: ["q20", "q21"],
                    scoreMap: [1, 0]
                }, {
                    id: "q20",
                    xmlCode: "B8",
                    category: "contact",
                    comment: null,
                    text: "q20_text",
                    inputType: "date",
                    options: null,
                    nextQuestionMap: null,
                    scoreMap: null
                }, {
                    id: "q21",
                    xmlCode: "T",
                    category: "symptomsMediumRisk",
                    comment: null,
                    text: "q21_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: ["q23", "q22"],
                    scoreMap: [1, 0]
                }, {
                    id: "q22",
                    xmlCode: "U",
                    category: "symptomsMediumRisk",
                    comment: null,
                    text: "q22_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: ["q23", "q24"],
                    scoreMap: [1, 0]
                }, {
                    id: "q23",
                    xmlCode: "V",
                    category: "symptomsMediumRisk",
                    comment: null,
                    text: "q23_text",
                    inputType: "radio",
                    options: ["q23_option0", "q23_option1", "q23_option2", "q23_option3", "q23_option4", "q23_option5", "q23_option6", "q23_option7"],
                    nextQuestionMap: null,
                    scoreMap: null
                }, {
                    id: "q24",
                    xmlCode: "W",
                    category: "symptoms",
                    comment: null,
                    text: "q24_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: null,
                    scoreMap: [1, 0]
                }, {
                    id: "q25",
                    xmlCode: "X",
                    category: "symptoms",
                    comment: null,
                    text: "q25_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: null,
                    scoreMap: [1, 0]
                }, {
                    id: "q26",
                    xmlCode: "Y",
                    category: "symptoms",
                    comment: null,
                    text: "q26_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: null,
                    scoreMap: [1, 0]
                }, {
                    id: "q27",
                    xmlCode: "Z",
                    category: "symptomsMediumRisk",
                    comment: null,
                    text: "q27_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: null,
                    scoreMap: [1, 0]
                }, {
                    id: "q28",
                    xmlCode: "A0",
                    category: "symptoms",
                    comment: null,
                    text: "q28_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    scoreMap: [1, 0]
                }, {
                    id: "q29",
                    xmlCode: "A1",
                    category: "symptoms",
                    comment: null,
                    text: "q29_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: null,
                    scoreMap: [1, 0]
                }, {
                    id: "q30",
                    xmlCode: "A2",
                    category: "symptoms",
                    comment: null,
                    text: "q30_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: null,
                    scoreMap: [1, 0]
                }, {
                    id: "q31",
                    xmlCode: "A3",
                    category: "symptoms",
                    comment: null,
                    text: "q31_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: null,
                    scoreMap: [1, 0]
                }, {
                    id: "q32",
                    xmlCode: "B7",
                    category: "symptomsHighRisk",
                    comment: null,
                    text: "q32_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: null,
                    scoreMap: [1, 0]
                }, {
                    id: "q34",
                    xmlCode: "A5",
                    category: "illnesses",
                    comment: null,
                    text: "q34_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no", "answer_unknown"],
                    nextQuestionMap: null,
                    scoreMap: null
                }, {
                    id: "q35",
                    xmlCode: "A6",
                    category: "illnesses",
                    comment: null,
                    text: "q35_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no", "answer_unknown"],
                    nextQuestionMap: null,
                    scoreMap: null
                }, {
                    id: "q36",
                    xmlCode: "A7",
                    category: "illnesses",
                    comment: null,
                    text: "q36_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no", "answer_unknown"],
                    nextQuestionMap: null,
                    scoreMap: null
                }, {
                    id: "q37",
                    xmlCode: "A8",
                    category: "illnesses",
                    comment: null,
                    text: "q37_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no", "answer_unknown"],
                    nextQuestionMap: null,
                    scoreMap: null
                }, {
                    id: "q38",
                    xmlCode: "A9",
                    category: "pregnancy",
                    comment: null,
                    text: "q38_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no", "answer_unknown"],
                    nextQuestionMap: null,
                    scoreMap: null
                }, {
                    id: "q39",
                    xmlCode: "B0",
                    category: "medication",
                    comment: null,
                    text: "q39_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no", "answer_unknown"],
                    nextQuestionMap: null,
                    scoreMap: null
                }, {
                    id: "q40",
                    xmlCode: "B1",
                    category: "medication",
                    comment: "q40_comment",
                    text: "q40_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no", "answer_unknown"],
                    nextQuestionMap: null,
                    scoreMap: null
                }, {
                    id: "q41",
                    xmlCode: "B2",
                    category: "medication",
                    comment: null,
                    text: "q41_text",
                    inputType: "radio",
                    options: ["answer_yes", "answer_no"],
                    nextQuestionMap: null,
                    scoreMap: null
                }],
                q = new Date(new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate()).getTime() - 60 * (new Date).getTimezoneOffset() * 1e3).getTime(),
                w = function(e) {
                    Object(p.a)(n, e);
                    var t = Object(c.a)(n);

                    function n(e) {
                        var o;
                        Object(s.a)(this, n), (o = t.call(this, e)).calculateUserScore = function(e, t) {
                            var n = 0;
                            return Object.keys(t).map((function(a) {
                                var i = o.getQuestion(e, a);
                                if (i)
                                    if (i.scoreMap && "date" !== i.inputType) {
                                        var r = i.options.indexOf(t[a]);
                                        console.log(r, i.scoreMap), void 0 !== i.scoreMap[r] && i.scoreMap[r] > -1 && (n += i.scoreMap[r])
                                    } else "date" === i.inputType && o.returnedWithinTwoWeeks(t[a]) && (console.log("find date: ", t[a]), n += 1)
                            })), 0 === n ? "slight" : 1 === n ? "low" : n < 3 ? "medium" : "high"
                        }, o.getQuestion = function(e, t) {
                            var n = e.filter((function(e) {
                                return e.id === t
                            }));
                            return !!(n && n.length > 0) && n[0]
                        }, o.returnedWithinTwoWeeks = function(e) {
                            return !!(q - new Date(e.split(".").join("-")).getTime() < 12096e5) || !!(q - new Date(e.split(".").join("-")).getTime() < 12096e5)
                        };
                        var a = o.calculateUserScore(o.props.questions, o.props.answers);
                        return o.state = {
                            score: a
                        }, o
                    }
                    return Object(l.a)(n, [{
                        key: "render",
                        value: function() {
                            return a.a.createElement("div", {
                                className: "covid_result",
                                "data-score": this.state.score
                            }, a.a.createElement("h3", null, m("recommendation_risk_".concat(this.state.score, "_headline"))), a.a.createElement("div", {
                                className: "recommendations"
                            }, a.a.createElement("p", {
                                dangerouslySetInnerHTML: {
                                    __html: m("recommendation_risk_".concat(this.state.score, "_text"))
                                }
                            })), a.a.createElement("button", {
                                type: "button",
                                onClick: this.props.clearStore,
                                className: "covid__btn next"
                            }, m("qr_code_button_reset")))
                        }
                    }]), n
                }(a.a.Component);
            w.defaultProps = {
                answers: {},
                questions: [],
                clearStore: function() {}
            };
            var v = 0;
            f.forEach((function(e) {
                var t = parseInt(e.id.replace("q", ""), 10);
                t > v && (v = t)
            }));
            var x = v,
                b = function(e) {
                    Object(p.a)(n, e);
                    var t = Object(c.a)(n);

                    function n(e) {
                        var o;
                        Object(s.a)(this, n), (o = t.call(this, e)).onStart = function(e) {
                            e.preventDefault(), o.setState({
                                screen: "questions",
                                qHistory: [0]
                            })
                        }, o.onBack = function() {
                            if (1 === o.state.qHistory.length) o.setState({
                                screen: "welcome",
                                answers: {},
                                isFinish: !1,
                                currentQuestion: 0,
                                progress: 0,
                                qHistory: []
                            });
                            else {
                                var e = o.state.qHistory,
                                    t = e.pop(),
                                    n = o.state.progress;
                                "q42" === f[t].id ? n += 2 : n = Math.floor(parseInt(f[t].id.replace("q", ""), 10) / x * 100), o.setState({
                                    currentQuestion: t,
                                    qHistory: e,
                                    progress: n
                                })
                            }
                        }, o.onAddAnswer = function(e, t) {
                            var n = o.state.currentQuestion,
                                a = o.state.qHistory;
                            a.push(n);
                            var i = o.state.answers;
                            i[e.id] = t;
                            var r = o.state.currentQuestion + 1;
                            if (e.nextQuestionMap)
                                if (Array.isArray(e.nextQuestionMap)) {
                                    var s = 0;
                                    e.options.forEach((function(e, n) {
                                        e === t && (s = n)
                                    })), f.forEach((function(t, n) {
                                        t.id === e.nextQuestionMap[s] && (r = n)
                                    }))
                                } else f.forEach((function(t, n) {
                                    t.id === e.nextQuestionMap && (r = n)
                                }));
                            var l = o.state.progress;
                            void 0 === f[r] ? l = 100 : "q42" === f[r].id ? l += 2 : l = Math.floor(parseInt(f[r].id.replace("q", ""), 10) / x * 100);
                            var c = void 0 === f[r];
                            d.setItem("cv19_answers", JSON.stringify({
                                answers: i,
                                currentQuestion: o.state.currentQuestion,
                                progress: l,
                                qHistory: a
                            })), o.setState({
                                answers: i,
                                qHistory: a,
                                currentQuestion: r,
                                previewQuestionIndex: n,
                                progress: l,
                                isFinish: c,
                                screen: !1 === c ? "questions" : "result"
                            })
                        }, o.clearStore = function() {
                            d.deleteItem("cv19_answers"), o.setState({
                                screen: "welcome",
                                answers: {},
                                isFinish: !1,
                                currentQuestion: 0,
                                progress: 0,
                                qHistory: []
                            })
                        };
                        var a = d.getItem("cv19_answers"),
                            i = {},
                            r = "welcome",
                            l = 0,
                            c = 0,
                            p = [];
                        if (a) try {
                            var u = JSON.parse(a);
                            u.answers && (i = u.answers, r = "questions"), u.currentQuestion && (l = u.currentQuestion), u.qHistory && ((p = u.qHistory.filter((function(e, t, n) {
                                return n.indexOf(e) === t
                            }))).length > 1 && p.pop(), console.log("currentHistory: ", p)), u.progress && (c = u.progress)
                        } catch (h) {
                            console.error("error preare store")
                        }
                        return o.state = {
                            screen: r,
                            answers: i,
                            currentQuestion: l,
                            qHistory: p,
                            progress: c,
                            isFinish: !1
                        }, o
                    }
                    return Object(l.a)(n, [{
                        key: "render",
                        value: function() {
                            return a.a.createElement("div", {
                                className: "covid__poll"
                            }, "welcome" === this.state.screen && a.a.createElement(g, {
                                onStart: this.onStart
                            }), "questions" === this.state.screen && a.a.createElement(y, {
                                question: f[this.state.currentQuestion],
                                onBack: this.onBack,
                                onAddAnswer: this.onAddAnswer,
                                progress: this.state.progress
                            }), "result" === this.state.screen && a.a.createElement(w, {
                                clearStore: this.clearStore,
                                questions: f,
                                answers: this.state.answers
                            }))
                        }
                    }]), n
                }(a.a.Component);
            n(12);
            document.getElementById(window.covid19_contaiener) && r.a.render(a.a.createElement(a.a.StrictMode, null, a.a.createElement(b, null)), document.getElementById(window.covid19_contaiener))
        },
        7: function(e, t, n) {
            e.exports = n(13)
        }
    },
    [
        [7, 1, 2]
    ]
]);
