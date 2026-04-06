const CH7_DATA = {
    num: 7,
    title: "The Axial Skeleton",
    accentColor: "#f1c40f", // Gold for the "Axis"
    sections: [
        {
            label: "THE SKULL: CRANIAL & FACIAL",
            content: "The skull consists of 22 bones. The Cranial bones protect the brain, while Facial bones form the structure of the face.",
            details: [
                "**Sutures**: Immovable joints (Coronal, Sagittal, Lambdoid, Squamous) that connect cranial bones.",
                "**Foramen Magnum**: The large hole in the Occipital bone where the spinal cord enters.",
                "**Sella Turcica**: A depression in the Sphenoid bone that holds the Pituitary gland.",
                "**Clinical Note**: The Fontanels ('soft spots') in infants allow the skull to compress during birth."
            ]
        },
        {
            label: "THE VERTEBRAL COLUMN",
            content: "The spine consists of 26 bones in an adult, organized by region.",
            details: [
                "**Cervical (C1-C7)**: Neck region. C1 is the 'Atlas' (holds the head); C2 is the 'Axis' (allows rotation).",
                "**Thoracic (T1-T12)**: Mid-back; these all articulate with ribs.",
                "**Lumbar (L1-L5)**: Lower back; largest and strongest to support body weight.",
                "**Sacrum & Coccyx**: Fused vertebrae at the base of the spine.",
                "**Mnemonic**: Breakfast at 7 (Cervical), Lunch at 12 (Thoracic), Dinner at 5 (Lumbar)."
            ]
        },
        {
            label: "THE THORACIC CAGE",
            content: "Protects vital organs and provides attachment points for muscles.",
            details: [
                "**Sternum**: The breastbone (Manubrium, Body, Xiphoid Process).",
                "**True Ribs (1-7)**: Attach directly to the sternum via costal cartilage.",
                "**False Ribs (8-12)**: Indirect attachment or no attachment.",
                "**Floating Ribs (11-12)**: A subtype of false ribs with no anterior attachment."
            ]
        }
    ],
    vocab: [
        {t: "Hyoid", d: "U-shaped bone in the neck that supports the tongue; does not articulate with any other bone."},
        {t: "Orbit", d: "The eye socket, formed by seven different bones."},
        {t: "Scoliosis", d: "Abnormal lateral (sideways) curvature of the spine."},
        {t: "Kyphosis", d: "Exaggerated thoracic curvature ('hunchback')."},
        {t: "Lordosis", d: "Exaggerated lumbar curvature ('swayback')."},
        {t: "Paranasal Sinuses", d: "Air-filled cavities in skull bones that lighten the head and resonance voice."}
    ],
    questions: [
        {
            q: "Which bone contains the 'Sella Turcica' which houses the pituitary gland?",
            opts: ["Ethmoid", "Sphenoid", "Temporal", "Occipital"],
            ans: 1,
            exp: "The Sphenoid bone is the 'keystone' of the cranial floor and contains this landmark."
        },
        {
            q: "How many thoracic vertebrae are in a typical human spine?",
            opts: ["7", "5", "12", "1"],
            ans: 2,
            exp: "There are 12 thoracic vertebrae, corresponding to the 12 pairs of ribs."
        }
    ]
};
