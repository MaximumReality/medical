const CH3_DATA = {
    num: 3,
    title: "The Cellular Level",
    accentColor: "#00ff88",
    sections: [
        {
            label: "THE PLASMA MEMBRANE: THE GATEKEEPER",
            content: "The boundary between the intracellular and extracellular fluid. It is a dynamic 'Fluid Mosaic' that controls what enters and exits.",
            image: "img/ch3_membranes.PNG", 
            details: [
                "**Phospholipid Bilayer**: Hydrophilic (water-loving) heads face out; Hydrophobic (water-fearing) tails hide inside.",
                "**Integral Proteins**: Span the entire membrane to act as **Channels** (for ions) or **Carriers** (for glucose).",
                "**Peripheral Proteins**: Sit on the surface; often act as enzymes or structural anchors.",
                "**Cholesterol**: Tucked between tails to keep the membrane fluid—preventing it from becoming too brittle or too liquid."
            ]
        },
        {
            label: "TRANSPORT: PASSIVE VS. ACTIVE",
            content: "Cells must move nutrients in and waste out. This is either 'free' (Passive) or 'paid for' (Active).",
            details: [
                "**Simple Diffusion**: Small, nonpolar molecules (like O2 and CO2) passing directly through the lipids.",
                "**Facilitated Diffusion**: Requires a protein 'doorway' but no energy (e.g., Glucose moving into a cell).",
                "**Osmosis**: The movement of water. **Clinical Note**: If a patient is dehydrated, we give Isotonic IV fluids to keep their RBCs from shrinking or bursting.",
                "**Active Transport**: Uses **ATP** to pump ions (like the Na+/K+ pump) against their concentration gradient."
            ]
        },
        {
            label: "ORGANELLES: THE CELLULAR MACHINERY",
            content: "The 'organs' of the cell, each with a specific metabolic job.",
            details: [
                "**Nucleus**: The vault containing DNA; the blueprint for all proteins.",
                "**Mitochondria**: The 'Powerhouse.' Site of **Aerobic Respiration** where oxygen is used to make ATP.",
                "**Rough ER**: Studded with **Ribosomes**; the factory floor for protein production.",
                "**Golgi Apparatus**: The 'Post Office'—refines, packages, and ships proteins to their destination.",
                "**Lysosomes**: Contain digestive enzymes to break down old organelles and bacteria."
            ]
        }
    ],
    vocab: [
        {t: "Cytosol", d: "The jelly-like fluid where organelles are suspended."},
        {t: "Selectively Permeable", d: "Allowing only certain substances to pass through while blocking others."},
        {t: "Phagocytosis", d: "The process of a cell (like a WBC) 'eating' a bacterium."},
        {t: "Mitosis", d: "Somatic cell division for growth and repair."},
        {t: "Apoptosis", d: "Programmed cell death; essential for removing damaged cells."}
    ],
    questions: [
        {
            q: "Which specific component of the plasma membrane is responsible for forming the primary barrier to water-soluble substances?",
            opts: ["Proteins", "Cholesterol", "Phospholipid Bilayer", "Carbohydrate Chains"],
            ans: 2,
            exp: "The hydrophobic tails of the phospholipids create a fatty barrier that water-soluble items cannot easily cross."
        },
                {
            q: "In a Hypertonic solution, a red blood cell will lose water and shrink. This process is called:",
            opts: ["Hemolysis", "Crenation", "Filtration", "Pinocytosis"],
            ans: 1,
            exp: "Crenation is the shrinking of a cell in a high-solute (hypertonic) environment."
        },
        {
            q: "Which organelle is the site of 'Translation' where amino acids are assembled into proteins?",
            opts: ["Nucleus", "Ribosome", "Golgi Apparatus", "Peroxisome"],
            ans: 1,
            exp: "Ribosomes (often found on the Rough ER) are the protein 'factories' of the cell."
        },

        {
            q: "A cell that requires a massive amount of energy (like a heart muscle cell) would have a high concentration of which organelle?",
            opts: ["Lysosomes", "Mitochondria", "Smooth ER", "Nuclei"],
            ans: 1,
            exp: "Mitochondria produce ATP, so high-energy cells are packed with them."
        }
    ]
};
