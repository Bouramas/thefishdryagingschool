// All site copy, per locale. Edit copy here, not in views.
const en = {
  lang: 'en',
  siteName: 'The Fish Dry Aging School',
  titles: {
    home: 'The Fish Dry Aging School | Tinos, Greece',
    privacy: 'Privacy Policy | The Fish Dry Aging School',
    notFound: 'Page not found | The Fish Dry Aging School',
  },
  description:
    'A 7-day professional program on fish dry aging by Marathia restaurant and the University of West Attica, on Tinos island, Greece. 4 participants per cohort. Opening soon.',
  descriptions: {
    home:
      'A 7-day professional program on fish dry aging by Marathia restaurant and the University of West Attica, on Tinos island, Greece. 4 participants per cohort. Opening soon.',
    privacy: 'How The Fish Dry Aging School collects, uses and protects your personal data when you ask to be notified about the program.',
    notFound: 'The page you are looking for does not exist.',
  },
  nav: { label: 'Main navigation', skip: 'Skip to content', getNotified: 'Get notified', privacy: 'Privacy Policy', language: 'Language', switchTo: 'Switch to Greek' },
  hero: { eyebrow: 'Agios Fokas, Tinos, Greece. Opening soon.', chefAlt: 'Chef and lead instructor Marinos holding a tuna' },
  clothesline: {
    title: 'From the drying room',
    alts: [
      'Whole fish hanging to age inside a glass-door cabinet',
      'Dry-aged tuna cut open, showing its crust and deep red flesh',
      'Spice-crusted fish hanging in the aging chamber',
    ],
  },
  intro:
    '[[Marathia restaurant]], in collaboration with the {{University of West Attica}}, has created a specialized educational program on fish dry aging, based in the region of Agios Fokas, on Tinos island, Greece. The program combines scientific knowledge with extensive practical experience, bridging food science and contemporary gastronomy.',
  program: {
    days: 7,
    hours: 49,
    participants: 4,
    headline: (d, h, p) => `${d} days, ${h} hours of training, ${p} participants per cohort.`,
    summary:
      'Includes theoretical instruction and intensive hands-on practice in the laboratory and the kitchen of [[Marathia]].',
  },
  modulesTitle: 'Modules',
  modules: [
    'Mediterranean fish and seasonality',
    'Ethical fishing, sustainability, and proper handling',
    'Cleaning, butchery cuts, and utilization in gastronomy',
    'Practical, hands-on training',
    'Post-mortem biochemical changes',
    'Dry aging and wet aging',
    'Biochemistry and microbiology of the aging process',
    'Environmental (microclimatic) control and aging equipment, with a presentation of dry-aging and wet-aging chambers',
    'Food safety and HACCP',
    'Food cost, storage, and professional utilization',
    'Curing, fish charcuterie (seacuterie), and preservation techniques',
    'Parasites and risk management',
  ],
  audienceTitle: 'Who it is for',
  audience: [
    'Chefs, cooks and food service professionals',
    'Professionals in the fishing and fish-trading sectors',
    'Food quality and safety officers',
    'Professionals and graduates from related fields',
  ],
  certificationTitle: 'Certification',
  certification:
    'Upon successful completion, an officially recognized training certificate will be provided by the {{University of West Attica}}, in accordance with the program’s terms. It corresponds to 3 ECVET credits.',
  certificationCredits: 'credits, issued by the {{University of West Attica}}',
  book: {
    label: 'The book',
    kicker: 'Nefeli Publications',
    title: 'Fish and Aging. A Manual for the Correct Aging and Handling of Fish',
    body: [
      'Through its 176 elegant pages, rich in content and substance, the book aims to break the age-old stereotype that fish must be eaten fresh. The excellent result reflects the author’s love and dedication to tradition, innovation, localism, and, of course, good food.',
      'The book is the first and only one in the literature to deal with this subject and has been produced in collaboration with food technologists. It includes a wealth of photographs, sketches, and recipes.',
    ],
    cover: '/images/book_cover_en.webp',
    buy: 'Buy the book',
    buyUrl: 'https://s22.gr/products/marathia1-en',
  },
  auspices: {
    title: 'Under the auspices',
    logos: { uwa: 'University of West Attica', kedivim: 'KEDIVIM, University of West Attica', marathia: 'Marathia restaurant' },
  },
  science: {
    title: 'From kitchen experience to food science',
    body: [
      'The dry-aging of fish is no simple matter. It is a complex, controlled process that demands knowledge, experience, specialized equipment, and systematic monitoring.',
      'The Fish Dry Aging School transforms everyday practice into structured knowledge, unlocking new possibilities in terms of flavor, texture, and the use of raw ingredients from the sea, while providing a worldwide recognized certification.',
    ],
  },
  notify: {
    title: 'Be the first to know when the school opens.',
    body: (p) =>
      `Cohorts are limited to ${p} participants. Leave your email and we will write to you once registration opens.`,
  },
  form: {
    label: 'Email address',
    placeholder: 'name@example.com',
    submit: 'Notify me',
    saving: 'Saving…',
    consentBefore: 'I agree to receive an email when the school opens. See the',
    privacyLink: 'privacy notice',
    successTitle: 'You are on the list.',
    successBody: 'We will email you when the school opens for registration.',
    errInvalid: 'Enter a valid email address, for example name@example.com.',
    errConsent: 'Tick the box to agree that we may email you about the school.',
    errNotConnected: 'Sign-up is not connected yet. Set VITE_LOOPS_FORM_URL to enable it.',
    errFailed: 'We could not save your email. Check your connection and try again.',
  },
  footer: {
    social: { caption: 'Follow the Craft', facebook: 'Facebook', instagram: 'Instagram', substack: 'Substack blog' },
    text: '[[Marathia restaurant]], Agios Fokas, Tinos, Greece. In collaboration with the {{University of West Attica}}.',
  },
  privacy: {
    title: 'Privacy notice',
    paragraphs: [
      'This site collects one piece of personal data: the email address you enter in the notification form.',
      'We use it only to tell you when The Fish Dry Aging School opens for registration. We do not use it for other purposes and do not sell it.',
      'Your email address and the language of the page you signed up from are stored and sent by our email service provider, Loops (Loops.so), which acts as our data processor under a data processing agreement. We do not share your data with anyone else.',
      'The legal basis is your consent, which you give by ticking the box in the form. You can withdraw it at any time by replying to any email we send, and we will delete your address. You also have the rights of access, rectification and erasure under the GDPR.',
      'We keep your address until the first cohort has been announced, or until you ask us to delete it.',
    ],
    back: 'Back to the school',
  },
  notFound: {
    title: 'This page does not exist.',
    body: 'The address may be wrong or the page may have moved.',
    home: 'Go to the home page',
  },
}

const el = {
  lang: 'el',
  siteName: 'The Fish Dry Aging School',
  titles: {
    home: 'The Fish Dry Aging School | Τήνος, Ελλάδα',
    privacy: 'Πολιτική απορρήτου | The Fish Dry Aging School',
    notFound: 'Η σελίδα δεν βρέθηκε | The Fish Dry Aging School',
  },
  description:
    'Επαγγελματικό πρόγραμμα 7 ημερών για την ωρίμανση των ψαριών από το εστιατόριο Μαραθιά και το Πανεπιστήμιο Δυτικής Αττικής, στην Τήνο. 4 εκπαιδευόμενοι ανά τμήμα. Σύντομα κοντά σας.',
  descriptions: {
    home:
      'Επαγγελματικό πρόγραμμα 7 ημερών για την ωρίμανση των ψαριών από το εστιατόριο Μαραθιά και το Πανεπιστήμιο Δυτικής Αττικής, στην Τήνο. 4 εκπαιδευόμενοι ανά τμήμα. Σύντομα κοντά σας.',
    privacy: 'Πώς το The Fish Dry Aging School συλλέγει, χρησιμοποιεί και προστατεύει τα προσωπικά σας δεδομένα όταν ζητάτε ενημέρωση για το πρόγραμμα.',
    notFound: 'Η σελίδα που αναζητάτε δεν υπάρχει.',
  },
  nav: { label: 'Κύρια πλοήγηση', skip: 'Μετάβαση στο περιεχόμενο', getNotified: 'Ειδοποιήστε με', privacy: 'Πολιτική απορρήτου', language: 'Γλώσσα', switchTo: 'Αλλαγή σε Αγγλικά' },
  hero: { eyebrow: 'Άγιος Φωκάς, Τήνος, Ελλάδα. Σύντομα κοντά σας.', chefAlt: 'Ο σεφ και κύριος εκπαιδευτής Μαρίνος κρατά έναν τόνο' },
  clothesline: {
    title: 'Από τον θάλαμο ωρίμανσης',
    alts: [
      'Ολόκληρα ψάρια που ωριμάζουν κρεμασμένα σε ψυγείο με γυάλινη πόρτα',
      'Ώριμος τόνος κομμένος στη μέση, με την κρούστα και τη βαθυκόκκινη σάρκα του',
      'Ψάρια με κρούστα μπαχαρικών κρεμασμένα στον θάλαμο ωρίμανσης',
    ],
  },
  intro:
    '[[Η Μαραθιά]], σε συνεργασία με το {{Πανεπιστήμιο Δυτικής Αττικής}}, δημιούργησαν ένα εξειδικευμένο εκπαιδευτικό πρόγραμμα για την ωρίμανση των ψαριών, στον Άγιο Φωκά της Τήνου. Ένα πρόγραμμα που συνδυάζει την επιστημονική γνώση με την πολυετή πρακτική εμπειρία, συνδέοντας την επιστήμη των τροφίμων με τη σύγχρονη γαστρονομία.',
  program: {
    days: 7,
    hours: 49,
    participants: 4,
    headline: (d, h, p) => `${d} ημέρες, ${h} ώρες εκπαίδευσης, ${p} εκπαιδευόμενοι ανά τμήμα.`,
    summary: 'Θεωρητική εκπαίδευση και εντατική πρακτική στο εργαστήριο και στην κουζίνα της [[Μαραθιάς]].',
  },
  modulesTitle: 'Θεματικές ενότητες',
  modules: [
    'Ψάρια της Μεσογείου και εποχικότητα',
    'Ηθική αλιεία, βιωσιμότητα και ορθός χειρισμός',
    'Καθαρισμός, κοπές και αξιοποίηση στη γαστρονομία',
    'Πρακτική εξάσκηση',
    'Μεταθανάτιες βιοχημικές μεταβολές',
    'Ξηρά και νωπή ωρίμανση (dry aging και wet aging)',
    'Βιοχημεία και μικροβιολογία της ωρίμανσης',
    'Έλεγχος συνθηκών (μικροκλίμα) και εξοπλισμός ωρίμανσης, με παρουσίαση θαλάμων ξηράς και νωπής ωρίμανσης',
    'Ασφάλεια τροφίμων και HACCP',
    'Food cost, αποθήκευση και επαγγελματική αξιοποίηση',
    'Curing, ιχθυοαλλαντικά (seacuterie) και τεχνικές συντήρησης',
    'Παράσιτα και διαχείριση κινδύνων',
  ],
  audienceTitle: 'Σε ποιους απευθύνεται',
  audience: [
    'Σεφ, μάγειρες και επαγγελματίες εστίασης',
    'Επαγγελματίες αλιείας και εμπορίας ψαριών',
    'Υπεύθυνοι ποιότητας και ασφάλειας τροφίμων',
    'Επαγγελματίες και απόφοιτοι συναφών κλάδων',
  ],
  certificationTitle: 'Πιστοποίηση',
  certification:
    'Με την επιτυχή ολοκλήρωση, χορηγείται πιστοποιητικό επιμόρφωσης από το ΚΕΔΙΒΙΜ του {{Πανεπιστημίου Δυτικής Αττικής}}, σύμφωνα με τους όρους του προγράμματος. Αντιστοιχεί σε 3 μονάδες ECVET.',
  certificationCredits: 'μονάδες, από το {{Πανεπιστήμιο Δυτικής Αττικής}}',
  book: {
    label: 'Το βιβλίο',
    kicker: 'Εκδόσεις Νεφέλη · Ιούνιος 2025',
    title: 'Ψάρια και Ωρίμανση. Εγχειρίδιο ορθής ωρίμανσης και χειρισμού ψαριών',
    body: [
      'Μέσα από τις 176 καλαίσθητες και πλούσιες σε περιεχόμενο και ουσία σελίδες του, το βιβλίο φιλοδοξεί να καταρρίψει το προαιώνιο στερεότυπο που θέλει το ψάρι να πρέπει να τρώγεται φρέσκο. Το εξαιρετικό αποτέλεσμα, αντανακλά την αγάπη και την αφοσίωση του συγγραφέα στην παράδοση, στην καινοτομία, την εντοπιότητα και φυσικά, στο καλό φαγητό.',
      'Το βιβλίο είναι το πρώτο και το μόνο στη βιβλιογραφία που ασχολείται με το θέμα και έχει γίνει σε συνεργασία με τεχνολόγους τροφίμων. Περιλαμβάνει πλούσιο φωτογραφικό υλικό, σκίτσα και συνταγές.',
    ],
    cover: '/images/book_cover_gr.webp',
    buy: 'Αγορά του βιβλίου',
    buyUrl: 'https://s22.gr/products/marathia1-en',
  },
  auspices: {
    title: 'Υπό την αιγίδα',
    logos: { uwa: 'Πανεπιστήμιο Δυτικής Αττικής', kedivim: 'ΚΕΔΙΒΙΜ, Πανεπιστήμιο Δυτικής Αττικής', marathia: 'Εστιατόριο Μαραθιά' },
  },
  science: {
    title: 'Από την εμπειρία της κουζίνας στην επιστήμη των τροφίμων',
    body: [
      'Η ωρίμανση των ψαριών δεν είναι απλή υπόθεση. Είναι μια σύνθετη, ελεγχόμενη διαδικασία που απαιτεί γνώση, εμπειρία, εξειδικευμένο εξοπλισμό και συστηματικό έλεγχο.',
      'Το Fish Dry Aging School μετατρέπει την καθημερινή πρακτική σε οργανωμένη γνώση, ανοίγοντας νέες δυνατότητες στη γεύση, στην υφή και στην αξιοποίηση της πρώτης ύλης.',
    ],
  },
  notify: {
    title: 'Μάθετε πρώτοι πότε ανοίγει η σχολή.',
    body: (p) =>
      `Τα τμήματα περιορίζονται σε ${p} εκπαιδευόμενους. Αφήστε το email σας και θα σας γράψουμε μόλις ανοίξουν οι εγγραφές.`,
  },
  form: {
    label: 'Διεύθυνση email',
    placeholder: 'onoma@example.com',
    submit: 'Ειδοποιήστε με',
    saving: 'Αποθήκευση…',
    consentBefore: 'Συμφωνώ να λάβω email όταν ανοίξει η σχολή. Δείτε την',
    privacyLink: 'πολιτική απορρήτου',
    successTitle: 'Είστε στη λίστα.',
    successBody: 'Θα σας στείλουμε email όταν ανοίξουν οι εγγραφές της σχολής.',
    errInvalid: 'Εισαγάγετε έγκυρη διεύθυνση email, για παράδειγμα onoma@example.com.',
    errConsent: 'Επιλέξτε το πλαίσιο για να συμφωνήσετε να σας στείλουμε email σχετικά με τη σχολή.',
    errNotConnected: 'Η εγγραφή δεν έχει συνδεθεί ακόμη. Ορίστε το VITE_LOOPS_FORM_URL για να ενεργοποιηθεί.',
    errFailed: 'Δεν ήταν δυνατή η αποθήκευση του email σας. Ελέγξτε τη σύνδεσή σας και δοκιμάστε ξανά.',
  },
  footer: {
    social: { caption: 'Follow the Craft', facebook: 'Facebook', instagram: 'Instagram', substack: 'Blog στο Substack' },
    text: '[[Εστιατόριο Μαραθιά]], Άγιος Φωκάς, Τήνος, Ελλάδα. Σε συνεργασία με το {{Πανεπιστήμιο Δυτικής Αττικής}}.',
  },
  privacy: {
    title: 'Πολιτική απορρήτου',
    paragraphs: [
      'Αυτός ο ιστότοπος συλλέγει ένα μόνο προσωπικό δεδομένο: τη διεύθυνση email που εισάγετε στη φόρμα ενημέρωσης.',
      'Τη χρησιμοποιούμε μόνο για να σας ενημερώσουμε πότε ανοίγουν οι εγγραφές του The Fish Dry Aging School. Δεν τη χρησιμοποιούμε για άλλους σκοπούς και δεν την πουλάμε.',
      'Η διεύθυνση email σας και η γλώσσα της σελίδας από την οποία εγγραφήκατε αποθηκεύονται και αποστέλλονται μέσω του παρόχου υπηρεσιών email μας, Loops (Loops.so), ο οποίος ενεργεί ως εκτελών την επεξεργασία για λογαριασμό μας βάσει σύμβασης επεξεργασίας δεδομένων. Δεν κοινοποιούμε τα δεδομένα σας σε κανέναν άλλον.',
      'Η νομική βάση είναι η συγκατάθεσή σας, την οποία δίνετε επιλέγοντας το πλαίσιο στη φόρμα. Μπορείτε να την ανακαλέσετε οποιαδήποτε στιγμή απαντώντας σε οποιοδήποτε email σας στείλουμε και θα διαγράψουμε τη διεύθυνσή σας. Έχετε επίσης τα δικαιώματα πρόσβασης, διόρθωσης και διαγραφής σύμφωνα με τον GDPR.',
      'Διατηρούμε τη διεύθυνσή σας μέχρι να ανακοινωθεί το πρώτο τμήμα ή μέχρι να ζητήσετε τη διαγραφή της.',
    ],
    back: 'Επιστροφή στη σχολή',
  },
  notFound: {
    title: 'Αυτή η σελίδα δεν υπάρχει.',
    body: 'Η διεύθυνση μπορεί να είναι λανθασμένη ή η σελίδα να έχει μετακινηθεί.',
    home: 'Μετάβαση στην αρχική σελίδα',
  },
}

export const locales = { en, el }
export const defaultLocale = 'el'
