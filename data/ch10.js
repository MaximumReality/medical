const CH10_DATA = {
    num: 10,
    title: "The Senses",
    accentColor: "#16a085", // Sensory Teal
    sections: [
        {
            label: "THE SPECIAL SENSES: VISION",
            content: "The eye is a complex sensory organ that converts light into electrical impulses.",
            image: "img/ch10_eye.JPG", 
            details: [
                "**Outer Tunic**: **Sclera** (white of the eye) and **Cornea** (transparent front window).",
                "**Middle Tunic**: **Choroid** (vascular layer), **Ciliary Body** (holds the lens), and **Iris** (colored part).",
                "**Inner Tunic**: **Retina**, containing Photoreceptors (**Rods** for light/dark and **Cones** for color).",
                "**Optic Disc**: The 'Blind Spot' where the optic nerve exits the eye.",
                "**Fovea Centralis**: The region of the retina with the sharpest vision."
            ]
        },
        {
            label: "HEARING & EQUILIBRIUM",
            content: "The ear is responsible for both the transduction of sound waves and the sense of balance.",
            image: "img/ch10_ear.JPG", 
            details: [
                "**External Ear**: Auricle and External Acoustic Meatus (leads to the eardrum).",
                "**Middle Ear**: Contains the **Ossicles** (Malleus, Incus, Stapes) which amplify sound.",
                "**Inner Ear**: The **Cochlea** (Hearing) and the **Semicircular Canals** (Dynamic Equilibrium).",
                "**Auditory Tube**: Connects the middle ear to the throat; equalizes pressure.",
                "**Organ of Corti**: Located inside the cochlea; contains 'hair cells' that act as hearing receptors."
            ]
        },
        {
            label: "SMELL & TASTE (Chemical Senses)",
            content: "Olfaction and Gustation rely on chemoreceptors to detect dissolved molecules.",
            details: [
                "**Olfaction (Smell)**: Controlled by **CN I**. These are the only sensory neurons in direct contact with the outside environment.",
                "**Gustation (Taste)**: Controlled by **CN VII** and **CN IX**. Receptors are located on **Taste Buds**.",
                "**Primary Tastes**: Sweet, Sour, Salty, Bitter, and Umami (savory)."
            ]
        }
    ],
    vocab: [
        {t: "Accommodation", d: "The ability of the lens to change shape to focus on near objects."},
        {t: "Rhodopsin", d: "The light-sensitive pigment found in Rod cells."},
        {t: "Static Equilibrium", d: "Sensing the position of the head when the body is not moving (Vestibule)."},
        {t: "Dynamic Equilibrium", d: "Sensing rotation and movement of the head (Semicircular Canals)."},
        {t: "Tympanic Membrane", d: "The eardrum; vibrates in response to sound waves."}
    ],
    questions: [
        {
            q: "Which cranial nerve is responsible for transmitting sound and equilibrium information to the brain?",
            opts: ["CN II (Optic)", "CN V (Trigeminal)", "CN VIII (Vestibulocochlear)", "CN X (Vagus)"],
            ans: 2,
            exp: "CN VIII carries impulses for both hearing (cochlea) and balance (vestibule)."
        },
        {
            q: "The sharpest point of vision on the retina is the:",
            opts: ["Optic Disc", "Fovea Centralis", "Ciliary Body", "Choroid"],
            ans: 1,
            exp: "The Fovea Centralis has the highest concentration of cone cells for high-acuity vision."
        }
    ]
};
