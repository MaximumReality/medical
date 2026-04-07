const CH6_DATA = {
    num: 6,
    title: "Integumentary System",
    accentColor: "#e67e22", 
    sections: [
        {
            label: "MACROSCOPIC SKIN STRUCTURE",
            content: "The skin is the largest organ, divided into three main regions with distinct physiological roles.",
            image: "img/ch5_human-skin-layers.JPG", 
            details: [
                "**Epidermis**: The thin, outermost protective layer (stratified squamous).",
                "**Dermis**: The 'True Skin' containing **Blood Vessels**, **Nerves**, and **Hair Follicles**.",
                "**Hypodermis (Subcutaneous)**: Composed of **Adipocytes** (fat) for insulation and energy storage.",
                "**Accessory Organs**: Includes **Sebaceous Glands** (oil) and **Sweat Glands** for thermoregulation."
            ]
        },
        {
            label: "LAYERS OF THE EPIDERMIS",
            content: "The epidermis itself is composed of five specialized sub-layers (in thick skin).",
            image: "img/ch5_skin_layers.PNG", 
            details: [
                "**Stratum Corneum**: The outermost layer of dead, keratinized cells (Desquamation occurs here).",
                "**Stratum Lucidum**: Found only in thick skin (palms/soles).",
                "**Stratum Granulosum**: Where cells begin to lose nuclei and flatten.",
                "**Stratum Spinosum**: Providing strength and flexibility to the skin.",
                "**Stratum Basale**: The deepest 'mitotic' layer where new cells are born and melanocytes reside."
            ]
        },
        {
            label: "THERMOREGULATION & PROTECTION",
            content: "How the skin maintains homeostasis and protects the body from external threats.",
            details: [
                "**Vasodilation**: Blood vessels in the dermis expand to release heat.",
                "**Melanin**: Produced by melanocytes in the Basale layer to protect DNA from UV radiation.",
                "**Keratinization**: The process of cells hardening as they move toward the surface to create a waterproof barrier."
            ]
        }
    ],
    vocab: [
        {t: "Desquamation", d: "The natural process of shedding the outermost layer of the epidermis."},
        {t: "Adipocytes", d: "Fat cells located in the hypodermis that provide cushioning and insulation."},
        {t: "Sebaceous Gland", d: "Gland that secretes sebum (oil) to keep hair and skin soft."},
        {t: "Arrector Pili", d: "Smooth muscle that causes 'goosebumps' by pulling hair follicles upright."}
    ],
    questions: [
    { q: "Which cells in the Stratum Basale produce the pigment that protects DNA from UV radiation?", opts: ["Keratinocytes", "Melanocytes", "Adipocytes", "Fibroblasts"], ans: 1, exp: "Melanocytes produce melanin, which absorbs harmful UV rays." },
    { q: "Which type of sweat gland is primarily responsible for body temperature regulation?", opts: ["Apocrine", "Sebaceous", "Eccrine", "Ceruminous"], ans: 2, exp: "Eccrine glands (merocrine) secrete watery sweat to cool the body via evaporation." },
    { q: "Which layer of the skin contains the blood vessels and sensory receptors?",
            opts: ["Epidermis", "Dermis", "Stratum Corneum", "Stratum Basale"],
            ans: 1,
            exp: "The Dermis is highly vascularized and contains the majority of the skin's accessory structures." },
    { q: "New skin cells are produced in which specific layer of the epidermis?",
            opts: ["Stratum Corneum", "Stratum Granulosum", "Stratum Spinosum", "Stratum Basale"],
            ans: 3,
            exp: "The Stratum Basale is the deepest layer where continuous cell division (mitosis) occurs."
        }
    ]
};

