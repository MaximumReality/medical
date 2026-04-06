const CH3_DATA = {
    num: 3,
    title: "The Cellular Level",
    accentColor: "#00ff88",
    sections: [
        {
            label: "THE PLASMA MEMBRANE",
            content: "The 'gatekeeper' of the cell. It is a phospholipid bilayer that is selectively permeable.",
            details: [
                "**Phospholipids**: Have hydrophilic heads (water-loving) and hydrophobic tails (water-fearing).",
                "**Proteins**: Act as channels, carriers, and receptors for cell signaling.",
                "**Cholesterol**: Stabilizes the membrane, keeping it fluid but firm."
            ]
        },
        {
            label: "TRANSPORT MECHANISMS",
            content: "Movement of substances across the membrane is either Passive (no energy) or Active (requires ATP).",
            details: [
                "**Diffusion**: Movement from High to Low concentration.",
                "**Osmosis**: The diffusion of water. Vital for maintaining red blood cell shape.",
                "**Active Transport**: Moving 'uphill' from Low to High concentration using ATP.",
                "**Clinical Note**: Cystic Fibrosis is caused by a faulty chloride ion channel in the membrane."
            ]
        },
        {
            label: "ORGANELLES: THE CELL MACHINERY",
            content: "Specialized structures inside the cell that perform specific functions.",
            details: [
                "**Mitochondria**: The 'Powerhouse.' Site of ATP production (Aerobic Respiration).",
                "**Ribosomes**: Sites of protein synthesis.",
                "**Rough ER**: Processes proteins; **Smooth ER**: Synthesizes lipids and detoxifies.",
                "**Lysosomes**: The 'trash collectors' that digest waste."
            ]
        }
    ],
    vocab: [
        {t: "Cytosol", d: "The fluid portion of the cytoplasm."},
        {t: "Nucleus", d: "The control center containing the cell's DNA."},
        {t: "Organelle", d: "Specialized structure within a cell."},
        {t: "Phagocytosis", d: "Cell eating; a type of endocytosis."},
        {t: "Mitosis", d: "The process of cell division resulting in two identical daughter cells."},
        {t: "Apoptosis", d: "Programmed cell death."}
    ],
    questions: [
        {
            q: "Which organelle is responsible for generating most of the cell's ATP?",
            opts: ["Golgi Complex", "Mitochondria", "Lysosome", "Ribosome"],
            ans: 1,
            exp: "Mitochondria use oxygen to produce ATP through cellular respiration."
        },
        {
            q: "Water moves across a membrane from an area of low solute to high solute via:",
            opts: ["Active Transport", "Facilitated Diffusion", "Osmosis", "Filtration"],
            ans: 2,
            exp: "Osmosis is specifically the passive movement of water."
        }
    ]
};
