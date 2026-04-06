const CH4_DATA = {
    num: 4,
    title: "The Tissue Level",
    accentColor: "#ff9500", // "Histology Orange"
    sections: [
        {
            label: "EPITHELIAL TISSUE",
            content: "Covers body surfaces and lines hollow organs. It is characterized by closely packed cells with very little extracellular matrix.",
            details: [
                "**Simple Squamous**: Single layer of flat cells. Ideal for filtration (lungs, kidneys).",
                "**Stratified Squamous**: Multiple layers. Protection against abrasion (skin, esophagus).",
                "**Simple Columnar**: Tall cells. Often have microvilli for absorption (intestines).",
                "**Avascularity**: Epithelium has no blood vessels; it relies on diffusion from connective tissue below."
            ]
        },
        {
            label: "CONNECTIVE TISSUE (CT)",
            content: "The most abundant and widely distributed tissue. It supports, strengthens, and insulates.",
            details: [
                "**Components**: Cells + Extracellular Matrix (Fibers and Ground Substance).",
                "**Loose CT (Areolar)**: The 'packing material' of the body.",
                "**Dense CT**: Found in tendons and ligaments; high in collagen fibers.",
                "**Specialized CT**: Includes Cartilage, Bone, and Blood.",
                "**Clinical Note**: Scurvy is a Vitamin C deficiency that prevents collagen formation, weakening CT."
            ]
        },
        {
            label: "MUSCLE & NERVOUS TISSUE",
            content: "Excitable tissues that respond to stimuli.",
            details: [
                "**Skeletal Muscle**: Striated, voluntary, multinucleated.",
                "**Cardiac Muscle**: Striated, involuntary, contains Intercalated Discs.",
                "**Smooth Muscle**: Non-striated, involuntary (walls of hollow organs).",
                "**Neurons**: Cells that convert stimuli into electrical signals."
            ]
        }
    ],
    vocab: [
        {t: "Histology", d: "The microscopic study of tissues."},
        {t: "Avascular", d: "Lacking a blood supply."},
        {t: "Goblet Cell", d: "A columnar cell that secretes mucus."},
        {t: "Matrix", d: "The extracellular material in connective tissue."},
        {t: "Striations", d: "Alternating light and dark bands seen in muscle tissue."},
        {t: "Lumen", d: "The interior space of a hollow structure or organ."}
    ],
    questions: [
        {
            q: "Which type of tissue is found in the air sacs of the lungs to allow for rapid gas exchange?",
            opts: ["Simple Squamous", "Stratified Cuboidal", "Simple Columnar", "Transitional"],
            ans: 0,
            exp: "Simple squamous epithelium is thin, making it perfect for diffusion."
        },
        {
            q: "Which muscle tissue contains intercalated discs?",
            opts: ["Skeletal", "Smooth", "Cardiac", "Voluntary"],
            ans: 2,
            exp: "Intercalated discs are unique to cardiac muscle and help synchronize contractions."
        }
    ]
};
