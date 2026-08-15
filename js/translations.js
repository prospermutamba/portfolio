/* ══════════════════════════════════════════════
   GHOST DESIGN LAB — TRANSLATIONS (EN / FR)
   ══════════════════════════════════════════════
   HOW TO EDIT:
   - Find the key you want to change (e.g. "hero_sub")
   - Edit the "en" or "fr" value
   - Save the file — changes appear instantly

   HOW TO ADD A NEW LANGUAGE:
   - Duplicate the "fr" block, rename it "de" (or any code)
   - Translate all values
   - Add a button in index.html:
     <button class="lang-btn" data-lang="de">DE</button>
   ══════════════════════════════════════════════ */

const TRANSLATIONS = {
  en: {
    /* Navigation */
    nav_about:    "About",
    nav_services: "Services",
    nav_portfolio:"Portfolio",
    nav_skills:   "Skills",
    nav_contact:  "Contact",
    nav_hire:     "Hire Me",

    /* Hero */
    hero_eyebrow:       "Creative Design Studio",
    hero_sub:           "Crafting identities that command attention.\nDesigning futures that leave a mark.",
    hero_cta_projects:  "View Projects",
    hero_cta_contact:   "Get in Touch",
    stat_projects:      "Projects",
    stat_clients:       "Clients",
    stat_years:         "Years Exp.",
    scroll_hint:        "Scroll",

    /* About */
    about_label:  "About Me",
    about_title:  "Turning ideas into\nvisual stories",
    about_role:   "Founder & Creative Director",
    about_lead:   "I'm Prosper Mutamba Joseph, founder of Ghost Design Lab — a creative studio built on the belief that great design is never an accident.",
    about_body:   "With a deep passion for visual communication, I specialize in building brands that resonate, interfaces that convert, and content that captivates. Every project I take on starts with a single question: what story does this brand need to tell?",
    about_body2:  "Based in the DRC and working globally, I bring together strategic thinking and aesthetic precision to deliver design solutions that don't just look good — they work.",
    value1_title: "Precision",
    value1_body:  "Every pixel placed with intention.",
    value2_title: "Strategy",
    value2_body:  "Design that serves business goals.",
    value3_title: "Impact",
    value3_body:  "Results you can measure.",
    about_cv:     "Download CV",

    /* Services */
    services_label: "What I Do",
    services_title: "Services built for\nambitious brands",
    svc1_title: "Logo Design",
    svc1_body:  "Distinctive marks that become the face of your brand. From wordmarks to emblems — built to last.",
    svc2_title: "Brand Identity",
    svc2_body:  "Complete brand systems — color, typography, voice and visual language that unify every touchpoint.",
    svc3_title: "Social Media Design",
    svc3_body:  "Scroll-stopping visuals for every platform. Consistent, on-brand and designed to grow your audience.",
    svc4_title: "Print Design",
    svc4_body:  "Brochures, flyers, business cards, posters — print materials designed with purpose and print-ready precision.",
    svc5_title: "UI/UX Design",
    svc5_body:  "Interfaces that are beautiful and frictionless. From wireframe to polished prototype — user first, always.",
    svc6_title: "Video Editing",
    svc6_body:  "Brand films, reels, motion graphics — video content that communicates your story with cinematic impact.",

    /* Portfolio */
    portfolio_label: "Selected Work",
    portfolio_title: "Projects that\nspeak louder",
    portfolio_view:  "View Project",
    filter_all:    "All",
    filter_logo:   "Logo",
    filter_brand:  "Brand",
    filter_ui:     "UI/UX",
    filter_social: "Social",
    filter_print:  "Print",
    filter_video:  "Video",
    cat_logo_brand: "Logo · Brand Identity",
    cat_brand_ui:   "Brand · UI/UX",
    cat_social:     "Social Media",
    cat_logo:       "Logo Design",
    cat_print:      "Print Design",
    cat_video:      "Video Editing",

    /* Case Study */
    case_label: "Case Study",
    case_title: "Behind the\nwork",
    case_step1_title: "The Challenge",
    case_step1_body:  "A growing energy startup needed a visual identity that would position them as a premium, trustworthy player in a crowded market. Their existing brand was inconsistent and failed to communicate innovation.",
    case_step2_title: "The Solution",
    case_step2_body:  "I developed a complete brand system from scratch — starting with a strategic brief, moving through logo explorations, and culminating in a full visual identity with guidelines for digital and print.",
    case_step3_title: "The Result",
    case_step3_body:  "The new brand increased investor confidence, landed a Series A round, and drove a 40% increase in social media engagement within the first quarter of launch.",
    result1: "Engagement",
    result2: "Funding Secured",
    result3: "Delivery",

    /* Skills */
    skills_label:    "Toolkit",
    skills_title:    "Tools &\nexpertise",
    skills_software: "Software",
    skills_expertise:"Expertise Level",
    skill_logo:   "Logo Design",
    skill_brand:  "Brand Identity",
    skill_uiux:   "UI/UX Design",
    skill_social: "Social Media",
    skill_video:  "Video Editing",

    /* Testimonials */
    testi_label: "Testimonials",
    testi_title: "What clients\nsay",
    testi1_text: "Prosper completely transformed our brand. The new identity is clean, memorable, and has already attracted partnerships we couldn't have imagined before. His attention to detail is unmatched.",
    testi1_name: "Alexandra Dumas",
    testi1_role: "CEO, Volta Energy",
    testi2_text: "Working with Ghost Design Lab was an exceptional experience. Prosper understood our vision immediately and delivered a social media design system that boosted our engagement by 40%.",
    testi2_name: "Marcus Webb",
    testi2_role: "Marketing Director, Noir Collective",
    testi3_text: "The UI/UX redesign Prosper delivered for our app exceeded all our expectations. User retention improved significantly and the app now converts at a much higher rate.",
    testi3_name: "Sophia Laurent",
    testi3_role: "Product Manager, Bloom Studio",

    /* Contact */
    contact_label:          "Let's Talk",
    contact_title:          "Ready to build\nsomething great?",
    contact_lead:           "Whether you need a logo, a full brand system, or a UI overhaul — I'm available for freelance projects worldwide. Let's create something remarkable together.",
    contact_email_label:    "Email",
    contact_linkedin_label: "LinkedIn",
    contact_location_label: "Location",
    contact_location_value: "DRC — Available Worldwide",
    form_name:              "Full Name",
    form_email:             "Email Address",
    form_service:           "Service Needed",
    form_service_placeholder: "Select a service…",
    form_message:           "Message",
    form_submit:            "Send Message",
    form_success:           "Message sent! I'll reply within 24 hours.",
    form_error_name:        "Please enter your full name.",
    form_error_email:       "Please enter a valid email address.",
    form_error_message:     "Please tell me about your project.",

    /* Footer */
    footer_tagline: "Design that commands attention.",
    footer_nav:     "Navigation",
    footer_services:"Services",
    footer_connect: "Connect",
    footer_rights:  "All rights reserved.",
    footer_made:    "Made with precision by Prosper Mutamba Joseph.",
  },

  fr: {
    /* Navigation */
    nav_about:    "À propos",
    nav_services: "Services",
    nav_portfolio:"Portfolio",
    nav_skills:   "Compétences",
    nav_contact:  "Contact",
    nav_hire:     "Me Recruter",

    /* Hero */
    hero_eyebrow:       "Studio de Design Créatif",
    hero_sub:           "Créer des identités qui s'imposent.\nDesigner des futurs qui laissent une trace.",
    hero_cta_projects:  "Voir les Projets",
    hero_cta_contact:   "Me Contacter",
    stat_projects:      "Projets",
    stat_clients:       "Clients",
    stat_years:         "Ans d'exp.",
    scroll_hint:        "Défiler",

    /* About */
    about_label:  "À Propos",
    about_title:  "Transformer les idées\nen récits visuels",
    about_role:   "Fondateur & Directeur Créatif",
    about_lead:   "Je suis Prosper Mutamba Joseph, fondateur de Ghost Design Lab — un studio créatif fondé sur la conviction que le grand design n'est jamais un accident.",
    about_body:   "Passionné de communication visuelle, je me spécialise dans la création de marques percutantes, d'interfaces qui convertissent et de contenus qui captivent. Chaque projet commence par une question : quelle histoire cette marque doit-elle raconter ?",
    about_body2:  "Basé en RDC et travaillant à l'échelle mondiale, j'associe réflexion stratégique et précision esthétique pour livrer des solutions de design qui ne font pas que paraître belles — elles fonctionnent.",
    value1_title: "Précision",
    value1_body:  "Chaque pixel placé avec intention.",
    value2_title: "Stratégie",
    value2_body:  "Du design au service des objectifs.",
    value3_title: "Impact",
    value3_body:  "Des résultats mesurables.",
    about_cv:     "Télécharger le CV",

    /* Services */
    services_label: "Ce Que Je Fais",
    services_title: "Services conçus pour\nles marques ambitieuses",
    svc1_title: "Création de Logo",
    svc1_body:  "Des marques distinctives qui deviennent le visage de votre entreprise. Des logotypes aux emblèmes — conçus pour durer.",
    svc2_title: "Identité de Marque",
    svc2_body:  "Des systèmes de marque complets — couleurs, typographie, voix et langage visuel qui unifient chaque point de contact.",
    svc3_title: "Design Réseaux Sociaux",
    svc3_body:  "Des visuels accrocheurs pour chaque plateforme. Cohérents, en phase avec la marque et conçus pour développer votre audience.",
    svc4_title: "Design Print",
    svc4_body:  "Brochures, flyers, cartes de visite, affiches — des supports imprimés conçus avec précision et prêts pour l'impression.",
    svc5_title: "Design UI/UX",
    svc5_body:  "Des interfaces belles et sans friction. Du wireframe au prototype finalisé — l'utilisateur d'abord, toujours.",
    svc6_title: "Montage Vidéo",
    svc6_body:  "Films de marque, reels, motion graphics — du contenu vidéo qui raconte votre histoire avec un impact cinématographique.",

    /* Portfolio */
    portfolio_label: "Travaux Sélectionnés",
    portfolio_title: "Des projets qui\nparlent plus fort",
    portfolio_view:  "Voir le Projet",
    filter_all:    "Tous",
    filter_logo:   "Logo",
    filter_brand:  "Marque",
    filter_ui:     "UI/UX",
    filter_social: "Réseaux",
    filter_print:  "Print",
    filter_video:  "Vidéo",
    cat_logo_brand: "Logo · Identité de Marque",
    cat_brand_ui:   "Marque · UI/UX",
    cat_social:     "Réseaux Sociaux",
    cat_logo:       "Création de Logo",
    cat_print:      "Design Print",
    cat_video:      "Montage Vidéo",

    /* Case Study */
    case_label: "Étude de Cas",
    case_title: "Dans les coulisses\ndu travail",
    case_step1_title: "Le Défi",
    case_step1_body:  "Une startup en pleine croissance dans l'énergie avait besoin d'une identité visuelle pour se positionner comme acteur premium et fiable dans un marché saturé. Leur image existante manquait de cohérence.",
    case_step2_title: "La Solution",
    case_step2_body:  "J'ai développé un système de marque complet de zéro — en commençant par un brief stratégique, en passant par les explorations logo, et en aboutissant à une identité visuelle complète avec charte graphique.",
    case_step3_title: "Le Résultat",
    case_step3_body:  "La nouvelle marque a renforcé la confiance des investisseurs, décroché un tour de Série A et généré une augmentation de 40% de l'engagement sur les réseaux sociaux dès le premier trimestre.",
    result1: "Engagement",
    result2: "Financement Obtenu",
    result3: "Livraison",

    /* Skills */
    skills_label:    "Outils",
    skills_title:    "Outils &\nexpertise",
    skills_software: "Logiciels",
    skills_expertise:"Niveau d'Expertise",
    skill_logo:   "Création de Logo",
    skill_brand:  "Identité de Marque",
    skill_uiux:   "Design UI/UX",
    skill_social: "Réseaux Sociaux",
    skill_video:  "Montage Vidéo",

    /* Testimonials */
    testi_label: "Témoignages",
    testi_title: "Ce que disent\nles clients",
    testi1_text: "Prosper a complètement transformé notre marque. La nouvelle identité est propre, mémorable et a déjà attiré des partenariats que nous n'aurions pas imaginés. Son souci du détail est incomparable.",
    testi1_name: "Alexandra Dumas",
    testi1_role: "PDG, Volta Energy",
    testi2_text: "Travailler avec Ghost Design Lab a été une expérience exceptionnelle. Prosper a immédiatement compris notre vision et livré un système de design réseaux sociaux qui a boosté notre engagement de 40%.",
    testi2_name: "Marcus Webb",
    testi2_role: "Directeur Marketing, Noir Collective",
    testi3_text: "La refonte UI/UX que Prosper a réalisée pour notre appli a dépassé toutes nos attentes. La rétention utilisateurs a nettement progressé et le taux de conversion a considérablement augmenté.",
    testi3_name: "Sophia Laurent",
    testi3_role: "Product Manager, Bloom Studio",

    /* Contact */
    contact_label:          "Parlons-en",
    contact_title:          "Prêt à créer\nquelque chose de grand ?",
    contact_lead:           "Que vous ayez besoin d'un logo, d'un système de marque complet ou d'une refonte UI — je suis disponible pour des projets freelance dans le monde entier. Créons quelque chose de remarquable.",
    contact_email_label:    "Email",
    contact_linkedin_label: "LinkedIn",
    contact_location_label: "Localisation",
    contact_location_value: "RDC — Disponible Partout",
    form_name:              "Nom Complet",
    form_email:             "Adresse Email",
    form_service:           "Service Souhaité",
    form_service_placeholder: "Sélectionner un service…",
    form_message:           "Message",
    form_submit:            "Envoyer le Message",
    form_success:           "Message envoyé ! Je répondrai dans les 24 heures.",
    form_error_name:        "Veuillez entrer votre nom complet.",
    form_error_email:       "Veuillez entrer une adresse email valide.",
    form_error_message:     "Veuillez décrire votre projet.",

    /* Footer */
    footer_tagline: "Un design qui s'impose.",
    footer_nav:     "Navigation",
    footer_services:"Services",
    footer_connect: "Contact",
    footer_rights:  "Tous droits réservés.",
    footer_made:    "Créé avec précision par Prosper Mutamba Joseph.",
  }
};
