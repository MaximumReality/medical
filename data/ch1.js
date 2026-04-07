const CH1_DATA = {
    num: 1,
    title: "Introduction to A&P",
    accentColor: "#00cfff",
    // In-Depth Study Sections
    sections: [
        {
            label: "HOMEOSTATIC CONTROL",
            content: "The body's ability to maintain a stable internal environment despite external changes. This is regulated via feedback loops.",
            details: [
                "**Negative Feedback**: The most common. Reverses a change (e.g., Body temp, Blood glucose).",
                "**Positive Feedback**: Rare and 'explosive.' Reinforces a change (e.g., Blood clotting, Childbirth).",
                "**Clinical Note**: Type 1 Diabetes is a failure of the pancreatic effectors in this loop."
            ]
        },

{
    label: "BODY CAVITIES & ORGANS",
    content: "The body is divided into axial and appendicular portions with specific internal cavities.",
    image: "img/ch1_organs.JPG", 
    details: [
        "**Viscera**: The organs found within a body cavity.",
        "**Thoracic Cavity**: Contains the lungs and the mediastinum (heart, esophagus, trachea).",
        "**Abdominopelvic Cavity**: Contains upper abdominal organs and lower pelvic organs."
    ]
},

        {
            label: "ANATOMICAL POSITION & PLANES",
            content: "All directional terms are based on a standard position: standing erect, facing forward, arms at sides, palms facing forward.",
            details: [
                "**Sagittal Plane**: Divides body into Left and Right.",
                "**Frontal (Coronal) Plane**: Divides body into Anterior and Posterior.",
                "**Transverse Plane**: Divides body into Superior and Inferior.",
                "**Mnemonic**: 'Transverse' is like a 'Train' track cutting across the middle."
            ]
        }
    ],
    vocab: [
        {t: "Homeostasis", d: "State of relative constancy in the body's internal environment."},
        {t: "Anatomy", d: "The study of structure and the relationship among structures."},
        {t: "Physiology", d: "The study of how body parts function."},
        {t: "Metabolism", d: "The sum of all chemical processes occurring in the body."},
        {t: "Prone", d: "Body lying face down."},
        {t: "Supine", d: "Body lying face up."}
    ],
    questions: [
        {
            q: "A patient is lying face up on the examination table. This position is known as:",
            opts: ["Prone", "Supine", "Lateral", "Distal"],
            ans: 1,
            exp: "Supine means face up (think: 'on your Spine'). Prone is face down."
        },
                {
            q: "The wrist is ________ to the elbow.",
            opts: ["Proximal", "Distal", "Superior", "Medial"],
            ans: 1,
            exp: "Distal means further from the point of attachment (the shoulder/trunk)."
        },
        {
            q: "Which body cavity contains the brain?",
            opts: ["Thoracic", "Abdominal", "Cranial", "Pelvic"],
            ans: 2,
            exp: "The Cranial cavity protects the brain within the skull."
        },

        {
            q: "Which plane divides the heart into right and left sides?",
            opts: ["Frontal", "Transverse", "Sagittal", "Coronal"],
            ans: 2,
            exp: "The Sagittal plane creates a left/right division."
        }
    ]
};
