const CH2_DATA = {
    num: 2,
    title: "Chemical Level of Organization",
    accentColor: "#f0f",
    sections: [
        {
            label: "LEVELS OF BIOLOGICAL ORGANIZATION",
            content: "From atoms to organisms—understanding how small parts build the complex human machine.",
            image: "img/Ch2_levels_of_organization.JPG", 
            details: [
                "**Chemical Level**: Atoms (C, H, O, N) combine to form molecules (DNA, Glucose).",
                "**Cellular Level**: Molecules associate to form organelles and functional cells.",
                "**Tissue Level**: Groups of similar cells working together (Muscle, Nerve).",
                "**Organ/System Level**: Different tissues forming structures like the Heart or Stomach.",
                "**Organism**: All systems working in unison to maintain life."
            ]
        },
        {
            label: "THE PERIODIC TABLE & ELEMENTS OF LIFE",
            content: "The body is composed of specific elements that drive every electrical and chemical signal.",
            image: "img/ch2_periodic_table.JPG", 
            details: [
                "**Major Elements (96%)**: Carbon, Hydrogen, Oxygen, and Nitrogen.",
                "**Lesser Elements**: Calcium (bones/clotting), Phosphorus (ATP), Potassium (nerve impulses).",
                "**Trace Elements**: Iron (hemoglobin), Iodine (thyroid function).",
                "**Atomic Structure**: Protons (+) and Neutrons (0) in the nucleus; Electrons (-) in the shells."
            ]
        },
        {
            label: "CHEMICAL BONDS & REACTIONS",
            content: "How atoms stick together. Understanding bonds explains how drugs and nutrients interact with the body.",
            details: [
                "**Ionic Bonds**: One atom 'steals' an electron (e.g., NaCl). They dissociate into **Electrolytes** in water.",
                "**Covalent Bonds**: Atoms 'share' electrons. The strongest bond; builds proteins and DNA.",
                "**Hydrogen Bonds**: Weak attractions between polar molecules. Essential for water properties and DNA folding.",
                "**Synthesis vs. Decomposition**: Anabolism (building up) vs. Catabolism (breaking down)."
            ]
        },
        {
            label: "pH, BUFFERS & HOMEOSTASIS",
            content: "Blood pH must stay between 7.35 and 7.45 for survival.",
            details: [
                "**Acids**: Release [H+]; pH < 7. **Bases**: Accept [H+]; pH > 7.",
                "**Buffers**: Chemical 'sponges' like Bicarbonate that prevent sudden pH shifts.",
                "**Clinical Note**: Even a small shift in blood pH can denature proteins and stop the heart."
            ]
        }
    ],
    vocab: [
        {t: "Electrolyte", d: "An ion in solution (like Na+ or K+) that can conduct electricity."},
        {t: "Enzyme", d: "A protein catalyst that speeds up chemical reactions without being consumed."},
        {t: "ATP", d: "Adenosine Triphosphate; the universal energy currency of the cell."},
        {t: "Hydrophilic", d: "Water-loving; substances that dissolve easily (like sugar)."},
        {t: "Hydrophobic", d: "Water-fearing; substances that do not mix (like lipids)."}
    ],
    questions: [
        {
            q: "Which element is a 'trace element' but is vital for the thyroid gland to produce hormones?",
            opts: ["Calcium", "Iron", "Iodine", "Sodium"],
            ans: 2,
            exp: "Iodine is required by the thyroid; a deficiency can lead to a goiter."
        },
        {
            q: "What is the strongest type of chemical bond found in organic molecules like DNA?",
            opts: ["Ionic", "Hydrogen", "Covalent", "Electrostatic"],
            ans: 2,
            exp: "Covalent bonds share electrons and provide the stable backbone for complex molecules."
        }
    ]
};
