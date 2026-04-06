const CH10_DATA = {
    num: 10,
    title: "The Senses",
    accentColor: "#16a085", 
    sections: [
        {
            label: "VISION: THE THREE TUNICS",
            content: "The eye is organized into three distinct layers or 'tunics' that facilitate light transduction.",
            image: "img/ch10_eye.PNG", 
            details: [
                "**Fibrous Tunic**: The outermost protective layer, consisting of the white **Sclera** and the transparent **Cornea**.",
                "**Vascular Tunic (Uvea)**: The highly vascular middle layer including the **Choroid**, **Ciliary Body**, and **Iris**.",
                "**Neural Tunic (Retina)**: The innermost layer containing photoreceptors; features the **Fovea** for maximum visual acuity.",
                "**Vitreous Body**: A jelly-like substance in the posterior cavity that maintains the eye's spherical shape."
            ]
        },
        {
            label: "HEARING & EQUILIBRIUM",
            content: "The ear is divided into three regions specialized for sound transduction and balance.",
            image: "img/ch10_ear.JPG", 
            details: [
                "**External Ear**: Includes the **Auricle** and **External Acoustic Meatus**, leading to the **Tympanic Membrane**.",
                "**Middle Ear**: Contains the **Auditory Ossicles** (Malleus, Incus, Stapes) which amplify sound within the tympanic cavity.",
                "**Internal Ear**: Houses the **Cochlea** (hearing) and **Semicircular Canals** (dynamic equilibrium).",
                "**Auditory Tube**: Connects the middle ear to the nasopharynx to equalize pressure.",
                "**Innervation**: **CN VIII (Vestibulocochlear)** transmits sound and balance data; **CN VII (Facial)** also passes through this region."
            ]
        },
        {
            label: "CHEMICAL SENSES: GUSTATION & OLFACTION",
            content: "Taste and smell rely on chemoreceptors to detect dissolved molecules in the environment.",
            details: [
                "**Olfaction**: Odorant molecules bind to receptors on the olfactory bulb; unique as it bypasses the thalamus.",
                "**Gustation**: Taste buds on the tongue detect five primary sensations: sweet, sour, salty, bitter, and umami.",
                "**Cranial Nerve Involvement**: Smell is linked to **CN I**; taste is primarily linked to **CN VII** and **CN IX**."
            ]
        }
    ],
    vocab: [
        {t: "Accommodation", d: "Adjustment of the lens shape by the ciliary body for near-distance focus."},
        {t: "Static Equilibrium", d: "Sensing the position of the head relative to gravity when not moving."},
        {t: "Dynamic Equilibrium", d: "Sensing rotation and movement of the head via the semicircular canals."},
        {t: "Rhodopsin", d: "The light-sensitive biochemical found in the rod cells of the retina."}
    ],
    questions: [
        {
            q: "Which cranial nerve is responsible for transmitting sound and balance information to the brain?",
            opts: ["CN II", "CN V", "CN VII", "CN VIII"],
            ans: 3,
            exp: "CN VIII (Vestibulocochlear) carries impulses from both the cochlea and the vestibular apparatus."
        },
        {
            q: "The 'blind spot' of the eye where the optic nerve exits is technically called the:",
            opts: ["Fovea Centralis", "Optic Disc", "Macula", "Ora Serrata"],
            ans: 1,
            exp: "The Optic Disc lacks photoreceptors, creating a natural blind spot in the visual field."
        }
    ]
};
