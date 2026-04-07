const CH4_DATA = {
    num: 4,
    title: "Cellular Metabolism",
    accentColor: "#f1c40f", // Gold/Energy color
    sections: [
        {
            label: "ENZYMES: THE CATALYSTS",
            content: "Metabolism relies on enzymes to speed up chemical reactions without being consumed.",
            details: [
                "**Activation Energy**: The 'push' needed to start a reaction; enzymes lower this.",
                "**Substrate**: The specific molecule an enzyme works on.",
                "**Active Site**: The 'lock' where the substrate (key) fits perfectly.",
                "**Denaturation**: When heat or pH changes destroy an enzyme's shape (and function)."
            ]
        },
        {
            label: "ATP & CELLULAR RESPIRATION",
            content: "How cells break down glucose to create the 'energy currency' of life.",
            details: [
                "**Glycolysis**: Occurs in the cytosol; breaks glucose into pyruvic acid.",
                "**Aerobic Respiration**: Occurs in the **Mitochondria**; requires Oxygen to make 30+ ATP.",
                "**Anaerobic Respiration**: Occurs without Oxygen; produces Lactic Acid and very little ATP."
            ]
        }
    ],
    vocab: [
        {t: "Anabolism", d: "Building large molecules from small ones (requires energy)."},
        {t: "Catabolism", d: "Breaking down large molecules (releases energy)."},
        {t: "Metabolism", d: "The sum of all chemical reactions in the body."}
    ],
    questions: [
        {
            q: "Which organelle is the primary site for aerobic respiration and ATP production?",
            opts: ["Nucleus", "Ribosome", "Mitochondrion", "Lysosome"],
            ans: 2,
            exp: "The mitochondria are the powerhouses where oxygen is used to make energy."
        },
        {
            q: "An enzyme speeds up a reaction by:",
            opts: ["Increasing temperature", "Lowering activation energy", "Changing pH", "Adding more substrate"],
            ans: 1,
            exp: "Enzymes make it 'cheaper' (energy-wise) for a reaction to happen."
        }
    ]
};
