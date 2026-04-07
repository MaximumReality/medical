const CH4_DATA = {
    num: 4,
    title: "Cellular Metabolism",
    accentColor: "#f1c40f", // Energy Yellow
    sections: [
        {
            label: "ENZYMES & METABOLISM",
            content: "Metabolism is the sum of all chemical reactions. Enzymes make these reactions possible at body temperature.",
            image: "img/ch4_enzyme_lock_key.JPG",
            details: [
                "**Anabolism**: Small molecules built into larger ones (Requires energy).",
                "**Catabolism**: Larger molecules broken down (Releases energy).",
                "**Enzymes**: Protein catalysts that lower 'Activation Energy' to speed up reactions.",
                "**Substrate**: The specific molecule an enzyme acts upon at its **Active Site**."
            ]
        },
        {
            label: "ATP & ENERGY RECOVERY",
            content: "Cells 'burn' glucose to create ATP (Adenosine Triphosphate), the universal energy currency.",
            image: "img/ch4_krebs.JPG",
            details: [
                "**Glycolysis**: First step of breaking down glucose; occurs in the cytosol (Anaerobic).",
                "**Aerobic Respiration**: Requires Oxygen; occurs in the **Mitochondria**. Produces the most ATP.",
                "**Lactic Acid**: Produced during anaerobic respiration when oxygen is low (Muscle fatigue)."
            ]
        },
        {
            label: "DNA & PROTEIN SYNTHESIS",
            content: "DNA holds the instructions for building proteins, which determine cell function.",
            image: "img/ch4_synthesis.JPG",
            details: [
                "**Transcription**: Copying DNA into mRNA (occurs in the Nucleus).",
                "**Translation**: mRNA is read by Ribosomes to build a protein (occurs in Cytoplasm).",
                "**Replication**: Doubling the DNA before a cell divides (Mitosis)."
            ]
        }
    ],
    vocab: [
        {t: "Active Site", d: "The part of an enzyme that binds to the substrate."},
        {t: "Denaturation", d: "When heat or pH change destroys an enzyme's shape and function."},
        {t: "Genome", d: "The complete set of genetic instructions in a cell."},
        {t: "Codon", d: "A three-base sequence on mRNA that represents an amino acid."}
    ],
    questions: [
        {
            q: "An enzyme speeds up a chemical reaction by:",
            opts: ["Increasing heat", "Lowering activation energy", "Changing the substrate", "Creating more ATP"],
            ans: 1,
            exp: "Enzymes make reactions happen faster by reducing the energy needed to start them."
        },
        {
            q: "Which process occurs in the mitochondria and requires oxygen to produce the most ATP?",
            opts: ["Glycolysis", "Anaerobic Respiration", "Aerobic Respiration", "Fermentation"],
            ans: 2,
            exp: "Aerobic respiration is the highly efficient energy-making process in mitochondria."
        },
        {
            q: "The process of copying DNA into a strand of mRNA is called:",
            opts: ["Translation", "Transcription", "Replication", "Mutation"],
            ans: 1,
            exp: "Transcription 'scripts' the code from DNA to mRNA in the nucleus."
        },
        {
            q: "What happens to an enzyme if the body's pH or temperature moves too far outside of normal range?",
            opts: ["It works faster", "It becomes a substrate", "It denatures", "It turns into ATP"],
            ans: 2,
            exp: "Denaturation is the loss of an enzyme's 3D shape, making it useless."
        }
    ]
};
