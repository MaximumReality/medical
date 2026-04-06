const CH2_DATA = {
    num: 2,
    title: "Chemical Level of Organization",
    accentColor: "#f0f",
    sections: [
        {
            label: "CHEMICAL BONDS",
            content: "How atoms stick together to form the molecules of life. Understanding these helps explain how drugs interact with the body.",
            details: [
                "**Ionic Bonds**: Formed when one atom 'steals' an electron (e.g., NaCl). They dissociate in water into electrolytes.",
                "**Covalent Bonds**: Atoms 'share' electrons. The strongest bond. Essential for building proteins and DNA.",
                "**Hydrogen Bonds**: Weak attractions between polar molecules. These give water its unique properties and hold DNA strands together."
            ]
        },
        {
            label: "pH & HOMEOSTASIS",
            content: "The pH scale measures Hydrogen ion [H+] concentration. Blood must stay between 7.35 and 7.45.",
            details: [
                "**Acids**: Proton donors. They release [H+]. pH < 7.",
                "**Bases**: Proton acceptors. They take up [H+]. pH > 7.",
                "**Buffers**: Chemical 'sponges' that prevent sudden pH changes. The Bicarbonate Buffer System is key in human blood.",
                "**Clinical Note**: Acidosis (pH < 7.35) can lead to coma or death."
            ]
        },
        {
            label: "ORGANIC COMPOUNDS",
            content: "The four macromolecules that build the human body.",
            details: [
                "**Carbohydrates**: Primary energy source (Glucose).",
                "**Lipids**: Energy storage, hormones, and cell membranes.",
                "**Proteins**: The 'workhorses' (enzymes, muscle fibers). Made of Amino Acids.",
                "**Nucleic Acids**: Genetic blueprint (DNA & RNA)."
            ]
        }
    ],
    vocab: [
        {t: "Atom", d: "Smallest unit of matter."},
        {t: "Electrolyte", d: "An ion in solution that can conduct electricity."},
        {t: "Enzyme", d: "A protein catalyst that speeds up chemical reactions."},
        {t: "ATP", d: "Adenosine Triphosphate; the energy currency of the cell."},
        {t: "Hydrophilic", d: "Water-loving; dissolves easily in water."},
        {t: "Hydrophobic", d: "Water-fearing; does not dissolve in water."}
    ],
    questions: [
        {
            q: "A solution with a pH of 3.0 is considered:",
            opts: ["Strongly Basic", "Strongly Acidic", "Neutral", "Weakly Alkaline"],
            ans: 1,
            exp: "Anything below 7 is acidic. 3.0 is significantly below 7."
        },
        {
            q: "Which macromolecule is primarily used for long-term energy storage?",
            opts: ["Proteins", "Carbohydrates", "Lipids", "Nucleic Acids"],
            ans: 2,
            exp: "Lipids (fats) provide high-density, long-term energy storage."
        }
    ]
};
