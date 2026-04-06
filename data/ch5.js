const CH5_DATA = {
    num: 5,
    title: "The Integumentary System",
    accentColor: "#ff4d4d", // Skin/Blood Red
    sections: [
        {
            label: "LAYERS OF THE EPIDERMIS",
            content: "The epidermis is keratinized stratified squamous epithelium. It has 4-5 distinct layers.",
            details: [
                "**Stratum Corneum**: Top layer; dead, flat keratinocytes.",
                "**Stratum Lucidum**: Found ONLY in thick skin (palms/soles).",
                "**Stratum Granulosum**: Cells start to die and fill with keratin.",
                "**Stratum Spinosum**: Provides strength and flexibility.",
                "**Stratum Basale**: Deepest layer; where mitosis (cell division) occurs.",
                "**Mnemonic**: **C**ome **L**et's **G**et **S**un **B**urned (Corneum, Lucidum, Granulosum, Spinosum, Basale)."
            ]
        },
        {
            label: "DERMIS & HYPODERMIS",
            content: "The 'true' skin and the underlying fat layer.",
            details: [
                "**Papillary Region**: Top 20% of dermis; contains dermal papillae (fingerprints).",
                "**Reticular Region**: Bottom 80%; contains collagen, elastic fibers, hair follicles, and nerves.",
                "**Hypodermis (Subcutaneous)**: Not technically part of the skin; stores fat and anchors skin to muscle.",
                "**Clinical Note**: 3rd-degree burns destroy both the epidermis and dermis, reaching the hypodermis."
            ]
        },
        {
            label: "SKIN GLANDS",
            content: "Exocrine glands that help with thermoregulation and protection.",
            details: [
                "**Sebaceous (Oil)**: Connected to hair follicles; secretes sebum to prevent drying.",
                "**Eccrine (Sweat)**: Found all over; cools the body via evaporation.",
                "**Apocrine (Sweat)**: Found in armpits/groin; stimulated during emotional stress (body odor).",
                "**Ceruminous**: Modified sweat glands in the ear that produce wax (cerumen)."
            ]
        }
    ],
    vocab: [
        {t: "Keratin", d: "Tough, fibrous protein that protects skin and hair."},
        {t: "Melanin", d: "Pigment produced by melanocytes to protect against UV radiation."},
        {t: "Albinism", d: "Inability to produce melanin."},
        {t: "Cyanosis", d: "Bluish skin tint due to lack of oxygen."},
        {t: "Arrector Pili", d: "Small muscle that causes goosebumps."},
        {t: "Hemoglobin", d: "Red pigment in blood that gives skin a pinkish hue."}
    ],
    questions: [
        {
            q: "Which layer of the epidermis is found only in the thick skin of the palms and soles?",
            opts: ["Stratum Corneum", "Stratum Lucidum", "Stratum Basale", "Stratum Spinosum"],
            ans: 1,
            exp: "The Stratum Lucidum is the 'clear' layer unique to thick skin."
        },
        {
            q: "Which gland is responsible for cooling the body during exercise?",
            opts: ["Sebaceous", "Apocrine", "Eccrine", "Ceruminous"],
            ans: 2,
            exp: "Eccrine sweat glands are the primary thermoregulators of the body."
        }
    ]
};
