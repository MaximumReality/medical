const CH9_DATA = {
    num: 9,
    title: "Nervous System",
    accentColor: "#34495e", // Deep Neural Blue
    sections: [
        {
            label: "NEURON PHYSIOLOGY & ACTION POTENTIALS",
            content: "Neurons communicate via rapid electrochemical changes called action potentials.",
            image: "img/ch12_action_potential.JPG", 
            details: [
                "**Resting Membrane Potential**: -70mV, maintained by the Na+/K+ Pump (3 Na+ out / 2 K+ in).",
                "**Threshold (-55mV)**: The 'All-or-None' trigger point for sodium channel activation.",
                "**Depolarization**: Rapid **Na+ Influx** causes a positive spike to approximately +30mV.",
                "**Repolarization**: **K+ Efflux** restores the negative charge.",
                "**Saltatory Conduction**: Impulse 'jumping' between **Nodes of Ranvier** in myelinated axons for high-speed transmission."
            ]
        },
        {
            label: "SPINAL CORD & REFLEX ARCS",
            content: "The spinal cord serves as a conduction pathway and a center for rapid, involuntary reflexes.",
            image: "img/ch9_reflex_arc.JPG",
            details: [
                "**Gray Matter**: The butterfly-shaped center; **Posterior Horns** receive sensory input, **Anterior Horns** send motor output.",
                "**Dorsal Root Ganglion**: Contains cell bodies of sensory neurons entering the cord.",
                "**The Reflex Arc**: Receptor → Sensory Neuron → CNS Integration → Motor Neuron → Effector.",
                "**Phrenic Nerve**: Arises from the cervical plexus (C3-C5) to stimulate the diaphragm for respiration."
            ]
        },
        {
            label: "AUTONOMIC NERVOUS SYSTEM (ANS)",
            content: "The ANS regulates involuntary visceral activities to maintain internal homeostasis.",
            image: "img/ch12_autonomic.png", 
            details: [
                "**Sympathetic**: 'Fight or Flight' response; increases heart rate and bronchodilation.",
                "**Parasympathetic**: 'Rest and Digest' response; stimulates digestion and slows heart rate.",
                "**Dual Innervation**: Most organs receive antagonistic input from both branches to stay balanced."
            ]
        },
        {
            label: "PROTECTION & NERVE PLEXUSES",
            content: "The CNS is shielded by bone and membranes, while the PNS organizes into complex networks.",
            image: "img/ch9_central_nervous.JPG",
            details: [
                "**Meninges**: Three layers—Dura Mater (outer), Arachnoid Mater (middle), and Pia Mater (inner).",
                "**Epidural Space**: The clinical site for anesthetic injection located outside the dura mater.",
                "**Dermatomes**: Map of skin areas supplied by specific spinal nerves, used for sensory testing.",
                "**Sciatic Nerve**: The body's longest nerve; damage can cause radiating pain down the lower limb."
            ]
        }
    ],
    vocab: [
        {t: "Afferent", d: "Sensory neurons carrying impulses TOWARD the CNS."},
        {t: "Efferent", d: "Motor neurons carrying impulses AWAY from the CNS to effectors."},
        {t: "Synaptic Cleft", d: "The narrow gap between two neurons where neurotransmitters are released."},
        {t: "Neuroglia", d: "Support cells including Astrocytes (BBB), Oligodendrocytes (CNS Myelin), and Schwann Cells (PNS Myelin)."},
        {t: "Cauda Equina", d: "The 'horse's tail' collection of nerve roots extending below the end of the spinal cord."}
    ],
    questions: [
        {
            q: "Which specific structure carries strictly sensory (afferent) information into the spinal cord?",
            opts: ["Anterior Root", "Posterior (Dorsal) Root", "Ventral Horn", "Gray Commissure"],
            ans: 1,
            exp: "The Dorsal Root is the sensory entry point. Remember: Sensory/Afferent/Dorsal (SAD)."
        },
        {
            q: "A drug that inhibits Acetylcholinesterase at the synapse would result in:",
            opts: ["Immediate relaxation", "Prolonged stimulation", "No effect", "Instant repolarization"],
            ans: 1,
            exp: "Inhibiting the enzyme that breaks down the neurotransmitter leaves it in the cleft longer, causing over-stimulation."
        }
    ]
};
